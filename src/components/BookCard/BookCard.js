import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './BookCardStyles';

function BookCard({ book, navigation }) {  // Confirm navigation is received here
    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: book.image }} style={styles.image} resizeMode="contain" />
            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{book.title}</Text>
                <Text style={styles.details} numberOfLines={1} ellipsizeMode='tail'>Author: {book.authors}</Text>
                <Text style={styles.details} numberOfLines={1} ellipsizeMode='tail'>Year: {book.publishedYear}</Text>
                <Text style={styles.details} numberOfLines={1} ellipsizeMode='tail'>Publisher: {book.publisher}</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BookDetails', { book })}>
                    <Text style={styles.buttonText}>More Info</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default BookCard;
