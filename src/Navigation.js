import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WishlistScreen from './screens/Wishlistscreen/WishlistScreen';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ReadBooksScreen from './screens/ReadBooksScreen/ReadBooksScreen';
import AddBookScreen from './screens/AddBookScreen/AddBookScreen';
import BookDetailScreen from './screens/BookDetailScreen/BookDetailScreen';
import colors from './themes';
import Scanner from './screens/ScannerScreen/ScannerScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EditBookScreen from './screens/EditBookScreen/EditBookScreen';

const Tab = createBottomTabNavigator();

const AddBookStack = createStackNavigator();
const WishlistStack = createStackNavigator();

function AddBookStackScreen() {
  return (
    <AddBookStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: colors.background
      }
    }}>
      <AddBookStack.Screen 
        name="AddBook" 
        component={AddBookScreen} 
        options={{ 
          title: 'Search',
          headerShown: false // Hide the header for the Search page
        }} 
      />
      <AddBookStack.Screen name="BookDetails" component={BookDetailScreen} options={{ title: 'Book Details' }} />
      <AddBookStack.Screen name="Scanner" component={Scanner} options={{ title: 'Scan Book Barcode' }} />
    </AddBookStack.Navigator>
  );
}

function WishlistStackScreen() {
  return (
    <WishlistStack.Navigator>
      <WishlistStack.Screen name="WishlistMain" component={WishlistScreen} options={{ title: 'Wishlist' }} />
      <WishlistStack.Screen name="EditBook" component={EditBookScreen} options={{ title: 'Edit Book' }} />
    </WishlistStack.Navigator>
  );
}

export default function Navigation() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'My Library') {
                iconName = 'library-books';
                color = focused ? 'blue' : 'black';
              } else if (route.name === 'Wishlist') {
                iconName = 'favorite-border';
                color = focused ? 'red' : 'black';
              } else if (route.name === 'Search') {
                iconName = 'search';
                color = focused ? 'orange' : 'black';
              }
              return <MaterialIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.text,
            tabBarStyle: { backgroundColor: colors.background },
          })}
        >
          <Tab.Screen name="My Library" component={ReadBooksScreen} />
          <Tab.Screen name="Wishlist" component={WishlistStackScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Search" component={AddBookStackScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 0,
  },
});
