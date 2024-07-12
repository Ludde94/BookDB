import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ReadBooksScreen from './screens/ReadBooksScreen/ReadBooksScreen.js';
import AddBookScreen from './screens/AddBookScreen/AddBookScreen.js';
import colors from './themes.js';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.text,
                tabBarStyle: { backgroundColor: colors.background },
                headerStyle: {
                backgroundColor: colors.primary, 
                },
                headerTintColor: colors.text, 
            }}>
            <Tab.Screen name="Read Books" component={ReadBooksScreen} />
            <Tab.Screen name="Add Book" component={AddBookScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
