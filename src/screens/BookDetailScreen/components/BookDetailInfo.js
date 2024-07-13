import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../components/styles/BookDetailInfoStyles';

const BookDetailInfo = ({ book }) => (
    <>
        <Text style={styles.detail}>Author: {book.authors}</Text>
        <Text style={styles.detail}>Year: {book.publishedYear}</Text>
        <Text style={styles.detail}>Publisher: {book.publisher}</Text>
        <Text style={styles.detail}>ISBN: {book.isbn}</Text>
        <Text style={styles.description}>{book.description}</Text>
    </>
);

export default BookDetailInfo;