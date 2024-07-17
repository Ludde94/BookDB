import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../../../components/styles/BookDetailButtonsStyles';
import { saveBookToLibrary, removeBookFromLibrary, saveBookToWantToRead, removeBookFromWantToRead, fetchBooksFromLibrary, fetchBooksFromWantToRead } from '../../../db/Storage';

const BookDetailButtons = ({ book, onSuccess, onError }) => {
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

    const addToCollection = async () => {
        try {
            await saveBookToLibrary(book);
            onSuccess('Book added to library.');
            setIsInLibrary(true);
        } catch (error) {
            onError('Failed to add book to library.');
        }
    };

    const removeFromCollection = async () => {
        try {
            await removeBookFromLibrary(book);
            onSuccess('Book removed from library.');
            setIsInLibrary(false);
        } catch (error) {
            onError('Failed to remove book from library.');
        }
    };

    const addToWantToRead = async () => {
        try {
            await saveBookToWantToRead(book);
            onSuccess('Book saved for later.');
            setIsInWishlist(true);
        } catch (error) {
            onError('Failed to save book for later.');
        }
    };

    const removeFromWantToRead = async () => {
        try {
            await removeBookFromWantToRead(book);
            onSuccess('Book removed from wishlist.');
            setIsInWishlist(false);
        } catch (error) {
            onError('Failed to remove book from wishlist.');
        }
    };

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
                style={[styles.button, isInWishlist ? styles.dangerButton : styles.wantToReadButton]} 
                onPress={isInWishlist ? removeFromWantToRead : addToWantToRead}
            >
                <Text style={styles.buttonText}>{isInWishlist ? "Remove from Wishlist" : "Save for Later"}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, isInLibrary ? styles.dangerButton : styles.collectionButton]} 
                onPress={isInLibrary ? removeFromCollection : addToCollection}
            >
                <Text style={styles.buttonText}>{isInLibrary ? "Remove from Library" : "Add to Library"}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BookDetailButtons;
