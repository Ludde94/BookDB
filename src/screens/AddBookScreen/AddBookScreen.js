import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import globalStyles from "../../styles/globalStyles";
import colors from "../../themes";
import BookCard from "../../components/BookCard";
import SearchBar from "../../components/SearchBar";
import searchBooks from "../../api/ApiCalls";

export default function AddBookScreen({ navigation, route }) {
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("Harry Potter");
  const [hasMoreBooks, setHasMoreBooks] = useState(true);

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
    if (result.length < 10) {
      setHasMoreBooks(false);
    }
    if (startIndex > 0) {
      setBooks((prev) => [...prev, ...result]);
    } else {
      setBooks(result);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setStartIndex(0);
    setHasMoreBooks(true);
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

  const renderItem = ({ item, index }) => (
    <BookCard
      key={index}
      book={item}
      onPress={() => navigation.navigate("EditBook", { book: item })}
    />
  );

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No books found.</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <SearchBar
          onSearch={handleSearch}
          onScan={() => navigation.navigate("Scanner")}
        />
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item, index) => "key" + index}
          ListEmptyComponent={renderEmptyComponent}
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
  emptyContainer: {
    // Style your empty container here
  },
  emptyText: {
    // Style your empty text here
  },
});
