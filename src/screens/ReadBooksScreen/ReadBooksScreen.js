import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../themes';

export default function ReadBooksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>List of Read Books</Text>
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