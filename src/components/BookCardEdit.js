import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import styles from './styles/BookCardStyles';
import placeholderImage from '../../assets/ImageNotFound.jpg';

const BooksCardEdit = ({ book, navigation }) => {
  return (
    <TouchableOpacity 
      style={styles.cardContainer}
      onPress={() => navigation.navigate('EditBook', { book })}
      activeOpacity={0.9}
    >
      <Image 
        source={book.image ? { uri: book.image } : placeholderImage} 
        style={styles.bookImage} 
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.authors}>{book.authors.join(', ')}</Text>
        <Text style={styles.details}>{book.publishedYear} | {book.publisher}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BooksCardEdit;
