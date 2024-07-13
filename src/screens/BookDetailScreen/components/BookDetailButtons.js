import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../../../components/styles/BookDetailButtonsStyles';
import { saveBookToLibrary, saveBookToWantToRead } from '../../../db/Storage'; // Adjust the import path as necessary

const BookDetailButtons = ({ book }) => {
    const addToCollection = () => {
        saveBookToLibrary(book);
    };

    const addToWantToRead = () => {
        saveBookToWantToRead(book);
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
