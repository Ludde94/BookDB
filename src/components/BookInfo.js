import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/BookDetailInfoStyles';

const BookDetailInfo = ({ book }) => (
    <View style={styles.container}>
        <View style={styles.detail}>
            <Text style={styles.label}>Author: </Text>
            <Text style={styles.value}>{book.authors}</Text>
        </View>
        <View style={styles.detail}>
            <Text style={styles.label}>Year: </Text>
            <Text style={styles.value}>{book.publishedYear}</Text>
        </View>
        <View style={styles.detail}>
            <Text style={styles.label}>Publisher: </Text>
            <Text style={styles.value}>{book.publisher}</Text>
        </View>
        <View style={styles.detail}>
            <Text style={styles.label}>Genre: </Text>
            <Text style={styles.value}>{book.genre}</Text>
        </View>
        <View style={styles.detail}>
            <Text style={styles.label}>ISBN: </Text>
            <Text style={styles.value}>{book.isbn}</Text>
        </View>
        <View style={styles.detail}>
            <Text style={styles.label}>Description:</Text>
            <Text style={styles.description}>{book.description}</Text>
        </View>
    </View>
);

export default BookDetailInfo;
