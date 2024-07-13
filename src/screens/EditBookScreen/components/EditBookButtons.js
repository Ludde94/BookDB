import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../../../components/styles/BookDetailButtonsStyles';
import { saveBookToLibrary, saveBookToWantToRead } from '../../../db/Storage';

const EditBookButtons = ({ book }) => {
    const addToCollection = () => {
        saveBookToLibrary(book);
    };

    const addToWantToRead = () => {
        saveBookToWantToRead(book);
    };

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.wantToReadButton]} onPress={''}>
                <Text style={styles.buttonText}>Remove from Wishlist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.collectionButton]} onPress={''}>
                <Text style={styles.buttonText}>Move to My Library</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditBookButtons;
