import React from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import styles from '../../../components/styles/BookDetailButtonsStyles';
import { saveBookToLibrary, saveBookToWantToRead } from '../../../db/Storage';

const BookDetailButtons = ({ book }) => {
    const addToCollection = async () => {
        try {
            await saveBookToLibrary(book);
            Alert.alert("Success", "Book added to library.");
        } catch (error) {
            Alert.alert("Error", "Failed to add book to library.");
        }
    };
    const addToWantToRead = async () => {
        try {
            await saveBookToWantToRead(book);
            Alert.alert("Success", "Book saved for later.");
        } catch (error) {
            Alert.alert("Error", "Failed to save book for later.");
        }
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
