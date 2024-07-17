import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../../../components/styles/BookDetailButtonsStyles';
import { saveBookToLibrary, removeBookFromLibrary, saveBookToWantToRead, removeBookFromWantToRead, fetchBooksFromLibrary, fetchBooksFromWantToRead } from '../../../db/Storage';

const BookDetailButtons = ({ book }) => {
    const [isInLibrary, setIsInLibrary] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState('');

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
            setConfirmationMessage('Book added to library.');
            setIsInLibrary(true);  // Update the state
        } catch (error) {
            setConfirmationMessage('Failed to add book to library.');
        } finally {
            clearConfirmationMessage();
        }
    };

    const removeFromCollection = async () => {
        try {
            await removeBookFromLibrary(book);
            setConfirmationMessage('Book removed from library.');
            setIsInLibrary(false);  // Update the state
        } catch (error) {
            setConfirmationMessage('Failed to remove book from library.');
        } finally {
            clearConfirmationMessage();
        }
    };

    const addToWantToRead = async () => {
        try {
            await saveBookToWantToRead(book);
            setConfirmationMessage('Book saved for later.');
            setIsInWishlist(true);  // Update the state
        } catch (error) {
            setConfirmationMessage('Failed to save book for later.');
        } finally {
            clearConfirmationMessage();
        }
    };

    const removeFromWantToRead = async () => {
        try {
            await removeBookFromWantToRead(book);
            setConfirmationMessage('Book removed from wishlist.');
            setIsInWishlist(false);  // Update the state
        } catch (error) {
            setConfirmationMessage('Failed to remove book from wishlist.');
        } finally {
            clearConfirmationMessage();
        }
    };

    const clearConfirmationMessage = () => {
        setTimeout(() => {
            setConfirmationMessage('');
        }, 2000); // Clear the message after 2 seconds
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
            {confirmationMessage ? (
                <View style={styles.confirmationContainer}>
                    <Text style={styles.confirmationText}>{confirmationMessage}</Text>
                </View>
            ) : null}
        </View>
    );
};

export default BookDetailButtons;
