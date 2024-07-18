import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/BookCardStyles';

// Import the placeholder image
import placeholderImage from '../../assets/ImageNotFound.jpg'; // Adjust the path as necessary

function BookCardMoreInfo({ book, navigation }) {

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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BookDetails', { book })}>
          <Text style={styles.buttonText}>More Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BookCardMoreInfo;
