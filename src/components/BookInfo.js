import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/BookDetailInfoStyles';

const BookDetailInfo = ({ book }) => {
    // Helper function to clean ISBN information
    const cleanISBN = (isbn) => {
        return isbn.replace('ISBN_10:', '').replace('ISBN_13:', '').trim();
    };

    return (
        <View style={styles.container}>
            {book.authors && (
                <View style={styles.detail}>
                    <Text style={styles.label}>Author: </Text>
                    <Text style={styles.value}>{book.authors}</Text>
                </View>
            )}
            {book.publishedYear && (
                <View style={styles.detail}>
                    <Text style={styles.label}>Year: </Text>
                    <Text style={styles.value}>{book.publishedYear}</Text>
                </View>
            )}
            {book.publisher && (
                <View style={styles.detail}>
                    <Text style={styles.label}>Publisher: </Text>
                    <Text style={styles.value}>{book.publisher}</Text>
                </View>
            )}
            {book.genre && book.genre !== "Unknown Genre" && (
                <View style={styles.detail}>
                    <Text style={styles.label}>Genre: </Text>
                    <Text style={styles.value}>{book.genre}</Text>
                </View>
            )}
            {book.isbn && (
                <View style={styles.detail}>
                    <Text style={styles.label}>ISBN: </Text>
                    <Text style={styles.value}>{cleanISBN(book.isbn)}</Text>
                </View>
            )}
            {book.description && (
                <View style={styles.detail}>
                    <Text style={styles.label}>Description:</Text>
                    <Text style={styles.description}>{book.description}</Text>
                </View>
            )}
        </View>
    );
};

export default BookDetailInfo;
