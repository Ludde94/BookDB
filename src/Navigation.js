import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ReadBooksScreen from './screens/ReadBooksScreen/ReadBooksScreen';
import WishlistScreen from './screens/WishlistScreen/WishlistScreen';
import AddBookScreen from './screens/AddBookScreen/AddBookScreen';
import BookDetailScreen from './screens/BookDetailScreen/BookDetailScreen';
import Scanner from './screens/ScannerScreen/ScannerScreen';
import EditBookScreen from './screens/EditBookScreen/EditBookScreen';
import StatisticsScreen from './screens/StatisticsScreen/StatisticsScreen';
import colors from './themes';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ReadBooksStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ReadBooksMain" component={ReadBooksScreen} options={{ title: 'My Library' }} />
      <Stack.Screen name="WishlistMain" component={WishlistScreen} options={{ title: 'Wishlist' }} />
      <Stack.Screen name="EditBook" component={EditBookScreen} options={{ title: 'Edit Book' }} />
      <Stack.Screen name="BookDetails" component={BookDetailScreen} options={{ title: 'Book Details' }} />
      <Stack.Screen name="Scanner" component={Scanner} options={{ title: 'Scan Book Barcode' }} />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              switch (route.name) {
                case 'Home': iconName = 'library-books'; break;
                case 'Search': iconName = 'search'; break;
                case 'Statistics': iconName = 'bar-chart'; break;
                default: iconName = 'layers'; break;
              }
              return (
                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                  {focused && <View style={styles.activeTabIndicator} />}
                  <MaterialIcons name={iconName} size={size} color={color} />
                </View>
              );
            },
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.text,
            tabBarStyle: styles.tabBar,
          })}
        >
          <Tab.Screen name="Home" component={ReadBooksStackScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Statistics" component={StatisticsScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Search" component={AddBookScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tabBar: {
    backgroundColor: colors.background,
    borderTopColor: 'transparent',
    height: 60,
    paddingBottom: 5,
  },
  activeTabIndicator: {
    position: 'absolute',
    top: -8,
    height: 4,
    width: '100%',
    backgroundColor: colors.primary,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
});

export default Navigation;
