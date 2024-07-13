import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import colors from '../../themes'; // Confirm the path is correct
import { fetchBooksFromLibrary } from '../../db/Storage'; // Adjust the import path to where your storage file is located

export default function ReadBooksScreen() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const fetchedBooks = await fetchBooksFromLibrary();
      setBooks(fetchedBooks);
    };

    loadBooks();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>List of Read Books</Text>
      <ScrollView style={styles.bookList}>
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
