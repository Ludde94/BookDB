import { StyleSheet, Text, View } from 'react-native';
import colors from '../../themes';
import React, { useEffect } from 'react';
import searchBooks from '../../api/ApiCalls.js';

export default function AddBookScreen() {

  useEffect(() => {
    const fetchData = async () => {
      const books = await searchBooks('Harry Potter'); // Replace 'Harry Potter' with any search string
      console.log(books);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add a New Book</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // Correctly sets the background color
  },
  text: {
    color: colors.text, // Sets the text color
  },
});
