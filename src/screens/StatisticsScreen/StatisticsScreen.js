import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { fetchBooksFromLibrary, fetchBooksFromWantToRead } from '..//../db/Storage.js'

const StatisticsScreen = () => {
    const [libraryBooks, setLibraryBooks] = useState([]);
    const [wantToReadBooks, setWantToReadBooks] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        const library = await fetchBooksFromLibrary();
        const wantToRead = await fetchBooksFromWantToRead();
        setLibraryBooks(library);
        setWantToReadBooks(wantToRead);
        setLoading(false);
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return <Text>Loading...</Text>;
    }
  
    const totalBooks = libraryBooks.length + wantToReadBooks.length;
    const data = [
      {
        name: 'Library',
        count: libraryBooks.length,
        color: 'blue',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Want to Read',
        count: wantToReadBooks.length,
        color: 'green',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
    ];
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Books Statistics</Text>
        <PieChart
          data={data.map(({ name, count, color }) => ({
            name,
            count,
            color,
          }))}
          width={220} ///JER
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
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
          <Text>Total Books: {totalBooks}</Text>
          <Text>Library Books: {libraryBooks.length}</Text>
          <Text>Want to Read Books: {wantToReadBooks.length}</Text>
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    infoContainer: {
      marginTop: 16,
      alignItems: 'center',
    },
  });
  
  export default StatisticsScreen;