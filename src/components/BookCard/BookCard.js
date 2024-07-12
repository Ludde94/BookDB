import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput } from 'react-native';
import globalStyles from '../../styles/globalStyles.js';
import styles from './BookCardStyles';

function BookCard({ book }) {
    return (
        <View style={[globalStyles.container, styles.cardContainer]}>
          <Image source={{ uri: book.image }} style={styles.image} resizeMode="contain" />
          <View style={styles.infoContainer}>
            <Text style={[globalStyles.text, styles.title]}>{book.title}</Text>
            <Text style={[globalStyles.text, styles.details]}>Author: {book.authors}</Text>
            <Text style={[globalStyles.text, styles.details]}>Year: {book.publishedYear}</Text>
            <Text style={[globalStyles.text, styles.details]}>Publisher: {book.publisher}</Text>
          </View>
        </View>
      );
  }
  

export default BookCard;

  