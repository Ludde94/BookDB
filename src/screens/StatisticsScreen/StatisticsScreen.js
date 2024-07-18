import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ScrollView, Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { fetchBooksFromLibrary } from '../../db/Storage.js';
import colors from '../../themes.js';
import { useFocusEffect } from '@react-navigation/native';
import styles from './components/styles/StatisticsScreenStyles.js';

const screenWidth = Dimensions.get('window').width;

const StatisticsScreen = () => {
  const [libraryBooks, setLibraryBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const library = await fetchBooksFromLibrary();
    setLibraryBooks(library);
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetchData();
    }, [])
  );

  if (loading) {
    return <Text style={styles.loadingText}>Loading your library...</Text>;
  }

  const genreCounts = {};
  const authorCounts = {};

  libraryBooks.forEach(book => {
    if (book.genre) {
      book.genre.forEach(genre => {
        genreCounts[genre] = (genreCounts[genre] || 0) + 1;
      });
    }
    if (book.authors) {
      book.authors.forEach(author => {
        authorCounts[author] = (authorCounts[author] || 0) + 1;
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
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Statistics</Text>

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
          hasLegend={false}
        />
        <View style={styles.genreContainer}>
          {genreData.map((genre, index) => (
            <View style={styles.genreItem} key={index}>
              <View style={[styles.colorIndicator, {backgroundColor: genre.color}]} />
              <Text style={styles.genreText}>{genre.name}: {genre.count} books</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.infoContainer}>
          <Text style={styles.subHeader}>Top Authors</Text>
          {sortedAuthors.map(([author, count], index) => (
            <Text style={styles.authorText} key={index}>{author}: {count} books</Text>
          ))}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Total Books: {libraryBooks.length}</Text>
          {/* Implement fetch for read books here */}
          <Text style={styles.infoText}>Books Read: 8</Text> 
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StatisticsScreen;