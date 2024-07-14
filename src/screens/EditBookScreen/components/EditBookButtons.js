import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import styles from './styles/EditBookButtonsStyles';
import { saveBookToLibrary, removeBookFromLibrary, fetchBooksFromLibrary, fetchBooksFromWantToRead, removeBookFromWantToRead } from '../../../db/Storage';

const EditBookButtons = ({ book }) => {
    const [isInLibrary, setIsInLibrary] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(false);


    useEffect(() => {
        checkIfInLibrary();
        checkIfInWishlist();
    }, []);

    const checkIfInLibrary = async () => {
        const libraryBooks = await fetchBooksFromLibrary();
        const found = libraryBooks.some(libBook => libBook.id === book.id);
        setIsInLibrary(found);
    };

    const checkIfInWishlist = async () => {
        const wishlistBooks = await fetchBooksFromWantToRead();
        const foundInWishlist = wishlistBooks.some(wishlistBook => wishlistBook.id === book.id);
        setIsInWishlist(foundInWishlist);
    };

    const removeFromWishlist = async () => {
        try {
            await removeBookFromWantToRead(book);
            Alert.alert("Success", "Book removed from wishlist.");
            setIsInWishlist(false);  // Optionally update state to reflect change

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
                Alert.alert("Error", "Failed to add book from library.");
            }
        } else {
            try {
                await saveBookToLibrary(book);
                Alert.alert("Success", "Book added to library.");
                setIsInLibrary(true);  // Update the button status
            } catch (error) {
                Alert.alert("Error", "Failed add to library.");
            }
        }
    };

    return (
        <View style={styles.buttonContainer}>
            {isInWishlist && (
                <TouchableOpacity style={[styles.button, styles.removeFromWishlistButton]} onPress={removeFromWishlist}>
                    <Text style={styles.buttonText}>Remove from Wishlist</Text>
                </TouchableOpacity>
            )}
            <TouchableOpacity style={[styles.button, styles.moveBookToLibraryButton]} onPress={handleLibraryPress}>
                <Text style={styles.buttonText}>{isInLibrary ? "Remove from Library" : "Add to My Library"}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditBookButtons;
