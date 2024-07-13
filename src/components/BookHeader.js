import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles/BookDetailHeaderStyles';

const BookDetailHeader = ({ book }) => (
    <>
        <Image source={{ uri: book.image }} style={styles.image} />
        <Text style={styles.title}>{book.title}</Text>
    </>
);

export default BookDetailHeader;
