import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles/SearchBarStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../themes';

const ScanButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.scanButton}>
    <MaterialCommunityIcons name="barcode-scan" size={25} color={colors.text} />
  </TouchableOpacity>
);

const SearchButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.scanButton}>
    <Ionicons name="search" size={25} color={colors.primary} />
  </TouchableOpacity>
);

export default function SearchBar({ onSearch, onScan }) {
  const [searchQuery, setSearchQuery] = useState('');

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
      
      <SearchButton onPress={handleSearch} />
      
      <ScanButton onPress={onScan} />
    </View>
  );
}
