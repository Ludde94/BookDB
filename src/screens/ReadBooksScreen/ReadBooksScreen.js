import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from './ReadBooksStyles';
import { fetchBooksFromLibrary } from '../../db/Storage';
import BooksCardEdit from '../../components/BookCardEdit';
import BookFilter from '../../components/BookFilter'; // Import the new component

export default function ReadBooksScreen({ navigation }) {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadBooks = async () => {
    const fetchedBooks = await fetchBooksFromLibrary();
    setBooks(fetchedBooks);
    setFilteredBooks(fetchedBooks); // Initialize filteredBooks
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

  const handleFilter = (text) => {
    const lowercasedFilter = text.toLowerCase();
    const filteredData = books.filter(book => {
      const titleMatches = book.title ? book.title.toLowerCase().includes(lowercasedFilter) : false;
      const authorMatches = book.authors ? book.authors.some(author => author.toLowerCase().includes(lowercasedFilter)) : false;
      return titleMatches || authorMatches;
    });
    setFilteredBooks(filteredData);
  };
  
  

  return (
    <View style={styles.container}>
      <BookFilter onFilter={handleFilter} />
      <ScrollView
        style={styles.bookList}
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <BooksCardEdit key={index} book={book} navigation={navigation} />
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No books match your filter.</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Search')}>
              <Text style={styles.addButtonText}>Add a Book</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
