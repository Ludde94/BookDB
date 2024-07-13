import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { fetchBooksFromWantToRead } from '../../db/Storage'; 
import BooksCardEdit from '../../components/BookCardEdit'; 
import styles from './WishlistStyles';

export default function WishlistScreen({navigation, route }) {
  const [books, setBooks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadBooks = async () => {
    const fetchedBooks = await fetchBooksFromWantToRead();
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

