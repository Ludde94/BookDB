import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import styles from './styles/BookCardStyles';

const screenHeight = Dimensions.get('window').height;
import placeholderImage from '../../assets/ImageNotFound.jpg'; // Adjust the path as necessary

const BooksCardEdit = ({ book, navigation }) => {
  

  return (
    <View style={styles.cardContainer}>
    <Image 
      source={book.image ? { uri: book.image } : placeholderImage} 
      style={styles.image} 
      resizeMode="contain" 
    />
    <View style={styles.infoContainer}>
      {book.title && <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{book.title}</Text>}
      {book.authors && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsLabel}>Author:</Text>
          <Text style={styles.detailsValue}>{book.authors}</Text>
        </View>
      )}
      {book.publishedYear && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsLabel}>Year:</Text>
          <Text style={styles.detailsValue}>{book.publishedYear}</Text>
        </View>
      )}
      {book.publisher && (
        <View style={styles.publisherContainer}>
          <Text style={styles.publisherLabel}>Publisher: </Text>
          <Text style={styles.publisherValue}>{book.publisher}</Text>
        </View>
      )}
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditBook', { book })}>
                  <Text style={styles.buttonText}>Manage Book</Text>
              </TouchableOpacity>
          </View>
      </View>
  );
};

export default BooksCardEdit;
