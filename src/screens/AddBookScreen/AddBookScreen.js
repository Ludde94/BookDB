import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput } from 'react-native';
import colors from '../../themes';
import searchBooks from '../../api/ApiCalls';
import BookCard from '../../components/BookCard/BookCard';



export default function AddBookScreen() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await searchBooks('The great'); // ISBN for example
      setBooks(result);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      
      <FlatList
        data={books}
        renderItem={({ item }) => <BookCard book={item} />}
        keyExtractor={(item, index) => 'key' + index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    backgroundColor: colors.secondaryBackground,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  details: {
    fontSize: 16,
    color: colors.text,
  },
});
