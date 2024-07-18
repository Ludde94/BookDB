import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl, TouchableOpacity, SafeAreaView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { fetchBooksFromWantToRead } from '../../db/Storage'; 
import BooksCardEdit from '../../components/BookCardEdit'; 
import styles from './WishlistStyles';

export default function WishlistScreen({navigation, route }) {
  const [books, setBooks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState('Wishlist');

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

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    if (tab === 'My Library') {
      navigation.navigate('ReadBooksMain');
    } else {
      navigation.navigate('WishlistMain');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tab} onPress={() => handleTabPress('My Library')}>
            <Text style={activeTab === 'My Library' ? styles.activeTabText : styles.tabText}>My Library</Text>
            {activeTab === 'My Library' && <View style={styles.activeTabIndicator} />}
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab} onPress={() => handleTabPress('Wishlist')}>
            <Text style={activeTab === 'Wishlist' ? styles.activeTabText : styles.tabText}>Wishlist</Text>
            {activeTab === 'Wishlist' && <View style={styles.activeTabIndicator} />}
          </TouchableOpacity>
        </View>
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
    </SafeAreaView>
  );
}
