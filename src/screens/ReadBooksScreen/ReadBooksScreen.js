import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, ScrollView, RefreshControl, TouchableOpacity, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import styles from './ReadBooksStyles';
import BooksCardEdit from '../../components/BookCardEdit';
import BookFilter from '../../components/BookFilter';
import { fetchBooksFromLibrary, fetchBooksFromWantToRead } from '../../db/Storage';

const TabHeader = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('My Library')}>
        <Text style={activeTab === 'My Library' ? styles.activeTabText : styles.tabText}>My Library</Text>
        {activeTab === 'My Library' && <View style={styles.activeTabIndicator} />}
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('Wishlist')}>
        <Text style={activeTab === 'Wishlist' ? styles.activeTabText : styles.tabText}>Wishlist</Text>
        {activeTab === 'Wishlist' && <View style={styles.activeTabIndicator} />}
      </TouchableOpacity>
    </View>
  );
};

export default function ReadBooksScreen({ navigation }) {
  const [books, setBooks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState('My Library');

  const loadBooks = async () => {
    if (activeTab === 'My Library') {
      const fetchedBooks = await fetchBooksFromLibrary();
      setBooks(fetchedBooks);
    } else {
      const fetchedBooks = await fetchBooksFromWantToRead();
      setBooks(fetchedBooks);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadBooks();
    }, [activeTab])
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await loadBooks();
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <ScrollView
        style={styles.bookList}
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {books.length > 0 ? (
          books.map((book, index) => (
            <BooksCardEdit key={index} book={book} navigation={navigation} />
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No books found.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}