import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import styles from './styles/EditBookButtonsStyles';
import { saveBookToLibrary, removeBookFromLibrary, fetchBooksFromLibrary, fetchBooksFromWantToRead, removeBookFromWantToRead } from '../../../db/Storage';

const EditBookButtons = ({ book, onSuccess, onError }) => {
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
            onSuccess("Book removed from wishlist");
            setIsInWishlist(false);
        } catch (error) {
            onError("Failed to remove book from wishlist");
        }
    };

    const handleLibraryPress = async () => {
        if (isInLibrary) {
            try {
                await removeBookFromLibrary(book);
                onSuccess("Book removed from library");
                setIsInLibrary(false);
            } catch (error) {
                onError("Failed to remove book from library");
            }
        } else {
            try {
                await saveBookToLibrary(book);
                onSuccess("Book added to library");
                setIsInLibrary(true);
            } catch (error) {
                onError("Failed to add to library");
            }
        }
    };

    return (
        <View style={styles.buttonContainer}>
            {isInWishlist && (
                <TouchableOpacity style={[styles.button, styles.dangerButton]} onPress={removeFromWishlist}>
                    <Text style={styles.buttonText}>Remove from Wishlist</Text>
                </TouchableOpacity>
            )}
            <TouchableOpacity 
                style={[styles.button, isInLibrary ? styles.dangerButton : styles.moveBookToLibraryButton]} 
                onPress={handleLibraryPress}
            >
                <Text style={styles.buttonText}>{isInLibrary ? "Remove from Library" : "Add to My Library"}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditBookButtons;