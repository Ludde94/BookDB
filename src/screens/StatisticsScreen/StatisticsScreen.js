import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { fetchBooksFromLibrary, fetchBooksFromWantToRead } from '../../db/Storage.js';
import colors from '../../themes.js';
import { useFocusEffect } from '@react-navigation/native';
import styles from './components/styles/StatisticsScreenStyles.js';

const StatisticsScreen = () => {
  const [libraryBooks, setLibraryBooks] = useState([]);
  const [wantToReadBooks, setWantToReadBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const screenWidth = Dimensions.get('window').width;

  const fetchData = async () => {
    const library = await fetchBooksFromLibrary();
    const wantToRead = await fetchBooksFromWantToRead();
    setLibraryBooks(library);
    setWantToReadBooks(wantToRead);
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetchData();
    }, [])
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  // Aggregate genre and author data
  const genreCounts = {};
  const authorCounts = {};

  const allBooks = [...libraryBooks, ...wantToReadBooks];

  allBooks.forEach(book => {
    // Count genres
    if (book.genre) {
      book.genre.forEach(genre => {
        if (genreCounts[genre]) {
          genreCounts[genre]++;
        } else {
          genreCounts[genre] = 1;
        }
      });
    }

    // Count authors
    if (book.authors) {
      book.authors.forEach(author => {
        if (authorCounts[author]) {
          authorCounts[author]++;
        } else {
          authorCounts[author] = 1;
        }
      });
    }
  });

  const genreColors = [
    colors.primary,
    colors.secondary,
    colors.accent,
    colors.subtleText,
  ];

  const genreData = Object.keys(genreCounts).map((genre, index) => ({
    name: genre,
    count: genreCounts[genre],
    color: genreColors[index % genreColors.length], 
    legendFontColor: colors.text,
    legendFontSize: 15,
  }));


  const sortedAuthors = Object.entries(authorCounts).sort((a, b) => b[1] - a[1]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Books Statistics</Text>
      <PieChart
        data={genreData}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: colors.accent,
          backgroundGradientFrom: colors.background,
          backgroundGradientTo: colors.background,
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        accessor="count"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Total Books: {allBooks.length}</Text>
        <Text style={styles.infoText}>Library Books: {libraryBooks.length}</Text>
        <Text style={styles.infoText}>Want to Read Books: {wantToReadBooks.length}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.subHeader}>Top Authors</Text>
        {sortedAuthors.map(([author, count], index) => (
          <Text style ={styles.AuthorText} key={index}>{author}: {count} books</Text>
        ))}
      </View>
    </ScrollView>
  );
};


export default StatisticsScreen;
