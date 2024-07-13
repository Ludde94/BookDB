import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/BookDetailInfoStyles';

const BookDetailInfo = ({ book }) => (
    <>
        {book.authors && <Text style={styles.detail}>Author: {book.authors}</Text>}
        {book.publishedYear && <Text style={styles.detail}>Year: {book.publishedYear}</Text>}
        {book.publisher && <Text style={styles.detail}>Publisher: {book.publisher}</Text>}
        {book.genre && <Text style={styles.detail}>Genre: {book.genre}</Text>}
        {book.isbn && <Text style={styles.detail}>ISBN: {book.isbn}</Text>}
        {book.pageCount && <Text style={styles.description}>Pages: {book.pageCount}</Text>}
        {book.language && <Text style={styles.description}>language: {book.language}</Text>}
        {book.description && <Text style={styles.description}>Description: {book.description}</Text>}
    </>
);

export default BookDetailInfo;
