// EditBookButtons.js
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles/EditBookButtonsStyles'
import { saveBookToLibrary, saveBookToWantToRead } from '../../../db/Storage';

const EditBookButtons = ({ book }) => {
    const removeFromWishlist = () => {
        // Implement remove from wishlist logic here
    };

    const moveToLibrary = () => {
        saveBookToLibrary(book);
    };

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.removeFromWishlistButton]} onPress={removeFromWishlist}>
                <Text style={styles.buttonText}>Remove from Wishlist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.moveBookToLibraryButton]} onPress={moveToLibrary}>
                <Text style={styles.buttonText}>Move to My Library</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditBookButtons;
