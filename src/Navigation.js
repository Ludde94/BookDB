import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReadBooksScreen from './screens/ReadBooksScreen/ReadBooksScreen';
import AddBookScreen from './screens/AddBookScreen/AddBookScreen';
import BookDetailScreen from './screens/BookDetailScreen/BookDetailScreen';
import colors from './themes';
import Scanner from './screens/Scanner/Scanner.js'; // Ensure the path is correct

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
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.text,
          tabBarStyle: { backgroundColor: colors.background },
        }}>
        <Tab.Screen name="My Library" component={ReadBooksScreen} />
        <Tab.Screen name="Search" component={AddBookStackScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
