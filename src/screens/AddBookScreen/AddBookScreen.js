import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import globalStyles from '../../styles/globalStyles';
import BookCard from '../../components/BookCard/BookCard';
import SearchBar from '../../components/SearchBar/SearchBar.js';
import searchBooks from '../../api/ApiCalls';

export default function AddBookScreen() {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('');

  const fetchData = async (query) => {
    const result = await searchBooks(query);
    setBooks(result);
  };

  useEffect(() => {
    fetchData('The great'); // Default search term
  }, []);

  const handleSearch = (searchQuery) => {
    fetchData(searchQuery);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(filter.toLowerCase()) ||
    book.authors.toLowerCase().includes(filter.toLowerCase()) ||
    book.publishedYear.includes(filter)
  );

  return (
    <View style={globalStyles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={filteredBooks}
        renderItem={({ item }) => <BookCard book={item} />}
        keyExtractor={(item, index) => 'key' + index}
      />
    </View>
  );
}
