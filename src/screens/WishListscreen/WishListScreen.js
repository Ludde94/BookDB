import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import colors from '../../themes'; // Confirm the path is correct
import { fetchBooksFromWantToRead } from '../../db/Storage'; // Adjust the import path to where your storage file is located
import ReadBooksCard from '../ReadBooksScreen/components/ReadBooksCard'; // Adjust the import path to where your ReadBooksCard file is located

export default function WishlistScreen() {
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
          <ReadBooksCard key={index} book={book} />
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
});
