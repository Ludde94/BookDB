import React, { useState, useEffect } from 'react';
import { View, FlatList, Button } from 'react-native';
import globalStyles from '../../styles/globalStyles';
import BookCard from '../../components/BookCard/BookCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import searchBooks from '../../api/ApiCalls';

export default function AddBookScreen({ navigation }) {
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('The great');

  useEffect(() => {
    fetchData(searchQuery, 0);
  }, []);

  const fetchData = async (query, startIndex) => {
    const result = await searchBooks(query, startIndex);
    if (startIndex > 0) {
      setBooks(prev => [...prev, ...result]);
    } else {
      setBooks(result);
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

  const handleScanResult = (data) => {
    // Use the scanned data to search for books or perform any other action
    setSearchQuery(data);
    fetchData(data, 0);
    setStartIndex(0);
  };

  return (
    <View style={globalStyles.container}>
      <SearchBar onSearch={handleSearch} />
      <Button title="Scan Book Barcode" onPress={() => navigation.navigate('Scanner', { onScanResult: handleScanResult })} />
      <FlatList
        data={books}
        renderItem={({ item }) => <BookCard book={item} navigation={navigation} />}
        keyExtractor={(item, index) => 'key' + index}
        ListFooterComponent={() => (
          <Button title="Load More" onPress={handleLoadMore} />
        )}
      />
    </View>
  );
}
