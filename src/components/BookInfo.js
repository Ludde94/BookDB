import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/BookDetailInfoStyles';

const BookDetailInfo = ({ book }) => (
    <>
        <Text style={styles.detail}>Author: {book.authors}</Text>
        <Text style={styles.detail}>Year: {book.publishedYear}</Text>
        <Text style={styles.detail}>Publisher: {book.publisher}</Text>
        <Text style={styles.detail}>Genre: {book.genre}</Text>
        <Text style={styles.detail}>ISBN: {book.isbn}</Text>
        <Text style={styles.description}>Description: {book.description}</Text>
    </>
);

export default BookDetailInfo;
