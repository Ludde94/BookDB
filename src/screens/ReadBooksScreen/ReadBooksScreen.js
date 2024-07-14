import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from './ReadBooksStyles';
import { fetchBooksFromLibrary } from '../../db/Storage';
import BooksCardEdit from '../../components/BookCardEdit';

export default function ReadBooksScreen({ navigation }) {
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
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {books.length > 0 ? (
          books.map((book, index) => (
            <BooksCardEdit key={index} book={book} navigation={navigation} />
          ))
        ) : (
          

          
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Get started by adding some books!</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Search')}>
              <Text style={styles.addButtonText}>Add a Book</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
