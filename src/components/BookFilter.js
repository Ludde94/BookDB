import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from '../themes';

const BookFilter = ({ onFilter }) => {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = text => {
    setFilterText(text);
    onFilter(text);
  };

  return (
    <View style={styles.filterContainer}>
      <TextInput
        style={styles.filterInput}
        onChangeText={handleFilterChange}
        value={filterText}
        placeholder="Filter books by title or author..."
        placeholderTextColor={colors.subtleText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    padding: 10,
    backgroundColor: colors.background,
  },
  filterInput: {
    height: 40,
    borderColor: colors.subtleText,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
  },
});

export default BookFilter;
