import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/BookCardStyles';

// Import the placeholder image
import placeholderImage from '../../assets/ImageNotFound.jpg'; // Adjust the path as necessary

function BookCardMoreInfo({ book, navigation }) {
    // Function to format date to only show the year
    const formatYear = (dateString) => {
        if (!dateString) return ''; // Handle empty or undefined date strings
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            // Handle invalid date formats
            return dateString.split('-')[0]; // Fallback: extract the year part if date parsing fails
        }
        return date.getFullYear();
    };

    return (
        <View style={styles.cardContainer}>
            <Image 
                source={book.image ? { uri: book.image } : placeholderImage} 
                style={styles.image} 
                resizeMode="contain" 
            />
            <View style={styles.infoContainer}>
                {book.title && <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{book.title}</Text>}
                {book.authors && <Text style={styles.details} numberOfLines={1} ellipsizeMode='tail'>Author: {book.authors}</Text>}
                {book.publishedYear && <Text style={styles.details} numberOfLines={1} ellipsizeMode='tail'>Year: {formatYear(book.publishedYear)}</Text>}
                {book.publisher && <Text style={styles.details} numberOfLines={1} ellipsizeMode='tail'>Publisher: {book.publisher}</Text>}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BookDetails', { book })}>
                    <Text style={styles.buttonText}>More Info</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default BookCardMoreInfo;
