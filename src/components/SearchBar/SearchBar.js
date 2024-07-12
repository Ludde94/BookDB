import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

export default function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = () => {
    onSearch(searchQuery.trim());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search books by title or ISBN..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        onSubmitEditing={handleSearch}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10,
    },
    input: {
      flex: 1,
      marginRight: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
    },
  });