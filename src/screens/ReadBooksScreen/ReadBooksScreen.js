import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import colors from '../../themes'; // Confirm the path is correct
import { fetchBooksFromLibrary } from '../../db/Storage'; // Adjust the import path to where your storage file is located

export default function ReadBooksScreen() {
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
      <Text style={styles.text}>List of Read Books</Text>
      <ScrollView
        style={styles.bookList}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {books.map((book, index) => (
          <Text key={index} style={styles.bookText}>
            {book.title} by {book.author}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
  text: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookList: {
    marginTop: 20,
  },
  bookText: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 10,
  },
});
