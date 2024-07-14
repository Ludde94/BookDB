import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import styles from './styles/EditBookButtonsStyles';
import { saveBookToLibrary, removeBookFromLibrary, fetchBooksFromLibrary, removeBookFromWantToRead } from '../../../db/Storage';

const EditBookButtons = ({ book }) => {
    const [isInLibrary, setIsInLibrary] = useState(false);

    useEffect(() => {
        checkIfInLibrary();
    }, []);

    const checkIfInLibrary = async () => {
        const libraryBooks = await fetchBooksFromLibrary();
        const found = libraryBooks.some(libBook => libBook.id === book.id);
        setIsInLibrary(found);
    };

    const removeFromWishlist = async () => {
        try {
            await removeBookFromWantToRead(book);
            Alert.alert("Success", "Book removed from wishlist.");
        } catch (error) {
            Alert.alert("Error", "Failed to remove book from wishlist.");
        }
    };

    const handleLibraryPress = async () => {
        if (isInLibrary) {
            try {
                await removeBookFromLibrary(book);
                Alert.alert("Success", "Book removed from library.");
                setIsInLibrary(false);  // Update the button status
            } catch (error) {
                Alert.alert("Error", "Failed to remove book from library.");
            }
        } else {
            try {
                await saveBookToLibrary(book);
                Alert.alert("Success", "Book moved to library.");
                setIsInLibrary(true);  // Update the button status
            } catch (error) {
                Alert.alert("Error", "Failed to move book to library.");
            }
        }
    };

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.removeFromWishlistButton]} onPress={removeFromWishlist}>
                <Text style={styles.buttonText}>Remove from Wishlist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.moveBookToLibraryButton]} onPress={handleLibraryPress}>
                <Text style={styles.buttonText}>{isInLibrary ? "Remove from Library" : "Move to My Library"}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditBookButtons;
