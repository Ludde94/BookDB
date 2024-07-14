// EditBookScreen.js
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styles from './EditBookStyles';
import BookDetailHeader from '../../components/BookHeader';
import BookDetailInfo from '../../components/BookInfo';
import EditBookButtons from './components/EditBookButtons';

function EditBookScreen({ route }) {
    const { book } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <BookDetailHeader book={book} />
                <BookDetailInfo book={book} />
                <EditBookButtons book={book} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default EditBookScreen;
    