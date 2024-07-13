import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles/BookDetailButtonsStyles';

const BookDetailButtons = () => {
    const addToCollection = () => {
        console.log('Added to Library');
        // Implement actual add to collection functionality
    };

    const addToWantToRead = () => {
        console.log('Saved for Later');
        // Implement actual add to want to read/buy list functionality
    };

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.wantToReadButton]} onPress={addToWantToRead}>
                <Text style={styles.buttonText}>Save for Later</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.collectionButton]} onPress={addToCollection}>
                <Text style={styles.buttonText}>Add to Library</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BookDetailButtons;
