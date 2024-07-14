import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import colors from '../themes'; // Ensure the path is correct

const screenHeight = Dimensions.get('window').height;
import placeholderImage from '../../assets/ImageNotFound.jpg'; // Adjust the path as necessary


const BooksCardEdit = ({ book, navigation }) => {
  return (
    <View style={styles.cardContainer}>
<Image 
                source={book.image ? { uri: book.image } : placeholderImage} 
                style={styles.image} 
                resizeMode="contain" 
            />      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{book.title}</Text>
        <Text style={styles.details} numberOfLines={1} ellipsizeMode='tail'>Author: {book.authors}</Text>
        <Text style={styles.details} numberOfLines={1} ellipsizeMode='tail'>Year: {book.publishedYear}</Text>
        <Text style={styles.details} numberOfLines={1} ellipsizeMode='tail'>Publisher: {book.publisher}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditBook', { book })}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        backgroundColor: colors.background,
        alignItems: 'center',
        height: 150,
      },
      image: {
        width: 80,
        height: 120,
        borderRadius: 5,
      },
      infoContainer: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'center',
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.text,
      },
      details: {
        fontSize: 14,
        color: colors.text,
        marginTop: 4,
      },
      button: {
        backgroundColor: colors.primary,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginTop: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
      },
      modalView: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        maxHeight: screenHeight * 0.8,
        width: '80%',
      },
      modalContent: {
        maxHeight: screenHeight * 0.6, // Limit the height for scrolling within the modal
      },
});

export default BooksCardEdit;
