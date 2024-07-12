// src/Navigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReadBooksScreen from './screens/ReadBooksScreen/ReadBooksScreen.js';
import AddBookScreen from './screens/AddBookScreen/AddBookScreen.js';
import BookDetailScreen from './screens/BookDetailScreen/BookDetailScreen.js';
import colors from './themes';

const Tab = createBottomTabNavigator();
const AddBookStack = createStackNavigator();

function AddBookStackScreen() {
  return (
    <AddBookStack.Navigator>
      <AddBookStack.Screen name="AddBook" component={AddBookScreen} options={{ title: 'Add Book' }} />
      <AddBookStack.Screen name="BookDetails" component={BookDetailScreen} options={{ title: 'Book Details' }} />
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
        <Tab.Screen name="Read Books" component={ReadBooksScreen} />
        <Tab.Screen name="Add Book" component={AddBookStackScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
