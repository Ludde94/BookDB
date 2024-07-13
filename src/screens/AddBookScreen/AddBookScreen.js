import React, { useState, useEffect } from 'react';
import { View, FlatList, Button } from 'react-native';
import globalStyles from '../../styles/globalStyles';
import BookCard from '../../components/BookCard/BookCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import searchBooks from '../../api/ApiCalls';

export default function AddBookScreen({ navigation, route }) {
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Listening to changes in route.params.scannedData
  useEffect(() => {
    if (route.params?.scannedData) {
      const data = route.params.scannedData;
      handleScanResult(data);
      navigation.setParams({ scannedData: null });  // Resetting scannedData to null to avoid re-triggering on back navigation
    }
  }, [route.params?.scannedData]);

  useEffect(() => {
    if (searchQuery) {
      fetchData(searchQuery, 0);
    }
  }, [searchQuery]);

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
    setStartIndex(0);
  };

  const handleLoadMore = () => {
    const newIndex = startIndex + 10;
    fetchData(searchQuery, newIndex);
    setStartIndex(newIndex);
  };

  const handleScanResult = (data) => {
    setSearchQuery(data);
  };

  return (
    <View style={globalStyles.container}>
      <SearchBar onSearch={handleSearch} />
      <Button title="Scan Book Barcode" onPress={() => navigation.navigate('Scanner')} />
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
