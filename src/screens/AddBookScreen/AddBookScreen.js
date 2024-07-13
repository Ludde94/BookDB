import React, { useState, useEffect } from 'react';
import { View, FlatList, Button, SafeAreaView, StyleSheet } from 'react-native';
import globalStyles from '../../styles/globalStyles';
import colors from '../../themes';
import BookCardMoreInfo from '../../components/BookCardMoreInfo';
import SearchBar from '../../components/SearchBar';
import searchBooks from '../../api/ApiCalls';

export default function AddBookScreen({ navigation, route }) {
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasMoreBooks, setHasMoreBooks] = useState(true);  // State to track if there are more books to load

  useEffect(() => {
    if (route.params?.scannedData) {
      const data = route.params.scannedData;
      handleScanResult(data);
      navigation.setParams({ scannedData: null });
    }
  }, [route.params?.scannedData]);

  useEffect(() => {
    if (searchQuery) {
      fetchData(searchQuery, 0);
    }
  }, [searchQuery]);

  const fetchData = async (query, startIndex) => {
    const result = await searchBooks(query, startIndex);
    if (result.length < 10) {  // Assuming the API returns up to 10 books per call
      setHasMoreBooks(false);  // No more books to load
    }
    if (startIndex > 0) {
      setBooks(prev => [...prev, ...result]);
    } else {
      setBooks(result);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setStartIndex(0);
    setHasMoreBooks(true);  // Reset the pagination and availability of more books
  };

  const handleLoadMore = () => {
    if (hasMoreBooks) {
      const newIndex = startIndex + 10;
      fetchData(searchQuery, newIndex);
      setStartIndex(newIndex);
    }
  };

  const handleScanResult = (data) => {
    setSearchQuery(data);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <SearchBar onSearch={handleSearch} onScan={() => navigation.navigate('Scanner')} />
        <FlatList
          data={books}
          renderItem={({ item }) => <BookCardMoreInfo book={item} navigation={navigation} />}
          keyExtractor={(item, index) => 'key' + index}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 25,
  },
});
