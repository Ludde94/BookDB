// src/screens/BookDetailScreen/BookDetailScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './BookDetailStyles'; // Confirm the path is correct

function BookDetailScreen({ route }) {
    const { book } = route.params;

    const addToCollection = () => {
        console.log('Added to Library');
        // Implement actual add to collection functionality
    };

    const addToWantToRead = () => {
        console.log('Saved for Later');
        // Implement actual add to want to read/buy list functionality
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
            <Image source={{ uri: book.image }} style={styles.image} />
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.detail}>Author: {book.authors}</Text>
            <Text style={styles.detail}>Year: {book.publishedYear}</Text>
            <Text style={styles.detail}>Publisher: {book.publisher}</Text>
            <Text style={styles.detail}>ISBN: {book.isbn}</Text>
            <Text style={styles.description}>{book.description}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.wantToReadButton]} onPress={addToWantToRead}>
                    <Text style={styles.buttonText}>Save for Later</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.collectionButton]} onPress={addToCollection}>
                    <Text style={styles.buttonText}>Add to Library</Text>
                </TouchableOpacity>
                
            </View>
        </ScrollView>
        </SafeAreaView>
    );
}

export default BookDetailScreen;
