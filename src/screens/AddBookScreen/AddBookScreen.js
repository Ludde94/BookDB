import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../themes';

export default function AddBookScreen() {
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
