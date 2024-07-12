import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import styles from './BookCardStyles';

function BookCard({ book }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: book.image }} style={styles.image} resizeMode="contain" />
            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{book.title}</Text>
                <Text style={styles.details} numberOfLines={1} ellipsizeMode='tail'>Author: {book.authors}</Text>
                <Text style={styles.details} numberOfLines={1} ellipsizeMode='tail'>Year: {book.publishedYear}</Text>
                <Text style={styles.details} numberOfLines={1} ellipsizeMode='tail'>Publisher: {book.publisher}</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => console.log('Added to My Books!')}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>More Info</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={styles.modalView}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{book.title}</Text>
                        <Text style={{ fontSize: 16 }}>Author: {book.authors}</Text>
                        <Text style={{ fontSize: 16 }}>Year: {book.publishedYear}</Text>
                        <Text style={{ fontSize: 16 }}>Publisher: {book.publisher}</Text>
                        <Text style={{ fontSize: 16 }}>ISBN: {book.isbn}</Text>
                        <Text style={{ fontSize: 16, marginBottom: 15 }}>Description: {book.description}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                            <Text style={styles.buttonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default BookCard;
