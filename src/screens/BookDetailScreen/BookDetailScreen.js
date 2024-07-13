import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styles from './BookDetailStyles'; // Confirm the path is correct
import BookDetailHeader from './components/BookDetailHeader';
import BookDetailInfo from './components/BookDetailInfo';
import BookDetailButtons from './components/BookDetailButtons';

function BookDetailScreen({ route }) {
    const { book } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <BookDetailHeader book={book} />
                <BookDetailInfo book={book} />
                <BookDetailButtons book={book} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default BookDetailScreen;
