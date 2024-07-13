import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReadBooksScreen from './screens/ReadBooksScreen/ReadBooksScreen.js';
import AddBookScreen from './screens/AddBookScreen/AddBookScreen.js';
import BookDetailScreen from './screens/BookDetailScreen/BookDetailScreen.js';
import WishlistScreen from './screens/Wishlistscreen/WishlistScreen.js';
import colors from './themes';
import Scanner from './screens/ScannerScreen/ScannerScreen.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();
const AddBookStack = createStackNavigator();

function AddBookStackScreen() {
  return (
    <AddBookStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: colors.background
      }
    }}>
      <AddBookStack.Screen name="AddBook" component={AddBookScreen} options={{ title: 'Search' }} />
      <AddBookStack.Screen name="BookDetails" component={BookDetailScreen} options={{ title: 'Book Details' }} />
      <AddBookStack.Screen name="Scanner" component={Scanner} options={{ title: 'Scan Book Barcode' }} />
    </AddBookStack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'My Library') {
              iconName = 'library-books'; // choose the icon based on the tab
            } else if (route.name === 'Wishlist') {
              iconName = 'favorite-border';
              color = focused ? 'red' : 'black'; // Change to red when focused, gray when not
            } else if (route.name === 'Search') {
              iconName = 'search';
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.text,
          tabBarStyle: { backgroundColor: colors.background },
        })}
      >
        <Tab.Screen name="My Library" component={ReadBooksScreen} />
        <Tab.Screen name="Wishlist" component={WishlistScreen} />
        <Tab.Screen name="Search" component={AddBookStackScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}