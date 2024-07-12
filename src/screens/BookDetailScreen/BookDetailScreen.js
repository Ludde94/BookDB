// src/screens/BookDetailScreen/BookDetailScreen.js
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './BookDetailStyles'; // Ensure this file exists

function BookDetailScreen({ route }) {
    const { book } = route.params;
    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: book.image }} style={styles.image} />
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.detail}>Author: {book.authors}</Text>
            <Text style={styles.detail}>Year: {book.publishedYear}</Text>
            <Text style={styles.detail}>Publisher: {book.publisher}</Text>
            <Text style={styles.detail}>ISBN: {book.isbn}</Text>
            <Text style={styles.description}>{book.description}</Text>
        </ScrollView>
    );
}

export default BookDetailScreen;
