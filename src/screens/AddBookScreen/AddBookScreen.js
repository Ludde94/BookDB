import React, { useState, useEffect } from 'react';
import { View, FlatList, Button } from 'react-native';
import globalStyles from '../../styles/globalStyles';
import BookCard from '../../components/BookCard/BookCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import searchBooks from '../../api/ApiCalls';

export default function AddBookScreen() {
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('The great'); // Maintain the current search query

  useEffect(() => {
    fetchData(searchQuery, 0);
  }, []);

  const fetchData = async (query, startIndex) => {
    const result = await searchBooks(query, startIndex);
    if (startIndex > 0) {
      setBooks(prev => [...prev, ...result]);  // Append new books
    } else {
      setBooks(result);  // Initial fetch or new search
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    fetchData(query, 0);
    setStartIndex(0);
  };

  const handleLoadMore = () => {
    const newIndex = startIndex + 10;
    fetchData(searchQuery, newIndex);
    setStartIndex(newIndex);
  };

  return (
    <View style={globalStyles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={books}
        renderItem={({ item }) => <BookCard book={item} />}
        keyExtractor={(item, index) => 'key' + index}
        ListFooterComponent={() => (
          <Button title="Load More" onPress={handleLoadMore} />
        )}
      />
    </View>
  );
}
