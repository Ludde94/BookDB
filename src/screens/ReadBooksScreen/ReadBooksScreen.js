import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from './ReadBooksStyles'
import { fetchBooksFromLibrary } from '../../db/Storage'; // Adjust the import path to where your storage file is located
import BooksCardEdit from '../../components/BookCardEdit'; 

export default function ReadBooksScreen({navigation, route}) {
  const [books, setBooks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadBooks = async () => {
    const fetchedBooks = await fetchBooksFromLibrary();
    setBooks(fetchedBooks);
  };

  useFocusEffect(
    useCallback(() => {
      loadBooks();
    }, [])
  );

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadBooks();
    setRefreshing(false);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.bookList}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {books.map((book, index) => (
  <BooksCardEdit key={index} book={book} navigation={navigation} />
))}
      </ScrollView>
    </View>
  );
}


