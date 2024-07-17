import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styles from './EditBookStyles';
import BookDetailHeader from '../../components/BookHeader';
import BookDetailInfo from '../../components/BookInfo';
import EditBookButtons from './components/EditBookButtons';
import Toast from '../../components/Toast';

function EditBookScreen({ route }) {
    const { book } = route.params;
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const handleSuccess = (message) => {
        setToastMessage(message);
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 2500);  // Automatically hide toast after 2.5 seconds
    };

    const handleError = (message) => {
        setToastMessage(message);
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 2500);  // Automatically hide toast after 2.5 seconds
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <BookDetailHeader book={book} />
                <BookDetailInfo book={book} />
                <EditBookButtons book={book} onSuccess={handleSuccess} onError={handleError} />
            </ScrollView>
            <Toast visible={toastVisible} message={toastMessage} />
        </SafeAreaView>
    );
}

export default EditBookScreen;
