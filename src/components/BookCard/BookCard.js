import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput } from 'react-native';
import colors from '../../themes';

function BookCard({ book }) {
    return (
      <View style={styles.cardContainer}>
        <Image source={{ uri: book.image }} style={styles.image} resizeMode="contain" />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.details}>Author: {book.authors}</Text>
          <Text style={styles.details}>Year: {book.publishedYear}</Text>
          <Text style={styles.details}>Publisher: {book.publisher}</Text>
        </View>
      </View>
    );
  }
  
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 20,
},
cardContainer: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    backgroundColor: colors.secondaryBackground,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
},
image: {
    width: 100,
    height: 150,
    marginRight: 10,
},
infoContainer: {
    flex: 1,
    justifyContent: 'center',
},
title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
},
details: {
    fontSize: 16,
    color: colors.text,
},
});

  export default BookCard;

  