import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/BookCardStyles';

function BookCard({ book, navigation }) {  // Confirm navigation is received here
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
            <Image source={{ uri: book.image }} style={styles.image} resizeMode="contain" />
            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{book.title}</Text>
                <Text style={styles.details} numberOfLines={1} ellipsizeMode='tail'>Author: {book.authors}</Text>
                <Text style={styles.details} numberOfLines={1} ellipsizeMode='tail'>Year: {formatYear(book.publishedYear)}</Text>
                <Text style={styles.details} numberOfLines={1} ellipsizeMode='tail'>Publisher: {book.publisher}</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BookDetails', { book })}>
                    <Text style={styles.buttonText}>More Info</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default BookCard;
