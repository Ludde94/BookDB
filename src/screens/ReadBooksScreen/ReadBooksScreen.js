import React, { useState, useCallback, useMemo } from "react";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import styles from "./ReadBooksStyles";
import BookCard from "../../components/BookCard";
import BookFilter from "../../components/BookFilter"; // Assuming you have this component
import {
  fetchBooksFromLibrary,
  fetchBooksFromWantToRead,
} from "../../db/Storage";

const TabHeader = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => setActiveTab("My Library")}
      >
        <Text
          style={
            activeTab === "My Library" ? styles.activeTabText : styles.tabText
          }
        >
          My Library
        </Text>
        {activeTab === "My Library" && (
          <View style={styles.activeTabIndicator} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => setActiveTab("Wishlist")}
      >
        <Text
          style={
            activeTab === "Wishlist" ? styles.activeTabText : styles.tabText
          }
        >
          Wishlist
        </Text>
        {activeTab === "Wishlist" && <View style={styles.activeTabIndicator} />}
      </TouchableOpacity>
    </View>
  );
};

const FilterComponent = ({ filter, setFilter }) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterLabel}>Sort By:</Text>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => setFilter("Recently Added")}
      >
        <Text style={filter === "Recently Added" ? styles.activeFilterText : styles.filterText}>
          Recently Added
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => setFilter("Alphabetical")}
      >
        <Text style={filter === "Alphabetical" ? styles.activeFilterText : styles.filterText}>
          Alphabetical
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default function ReadBooksScreen({ navigation }) {
  const [books, setBooks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState("My Library");
  const [filter, setFilter] = useState("Recently Added");

  const loadBooks = async () => {
    let fetchedBooks;
    if (activeTab === "My Library") {
      fetchedBooks = await fetchBooksFromLibrary();
    } else {
      fetchedBooks = await fetchBooksFromWantToRead();
    }

    // Apply the selected filter
    if (filter === "Alphabetical") {
      fetchedBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filter === "Recently Added") {
      fetchedBooks.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
    }

    setBooks(fetchedBooks);
  };

  useFocusEffect(
    useCallback(() => {
      loadBooks();
    }, [activeTab, filter])
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await loadBooks();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <FilterComponent filter={filter} setFilter={setFilter} />
        <ScrollView
          style={styles.bookList}
          contentContainerStyle={{ flexGrow: 1 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {books.length > 0 ? (
            books.map((book, index) => (
              <BookCard
                key={index}
                book={book}
                onPress={() => navigation.navigate("EditBook", { book })}
              />
            ))
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No books found.</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
