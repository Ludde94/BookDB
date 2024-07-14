import React from 'react';
import WishlistScreen from './screens/WishlistScreen/WishlistScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
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
import StatisticsScreen from './screens/StatisticsScreen/StatisticsScreen';

const Tab = createBottomTabNavigator();

const AddBookStack = createStackNavigator();
const WishlistStack = createStackNavigator();
const ReadBooksStack = createStackNavigator();
const StatisticsStack = createStackNavigator();

function AddBookStackScreen() {
  return (
    <AddBookStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: colors.background,
      },
    }}>
      <AddBookStack.Screen 
        name="AddBook" 
        component={AddBookScreen} 
        options={{ 
          title: 'Search',
          headerShown: false,
        }} 
      />
      <AddBookStack.Screen name="BookDetails" component={BookDetailScreen} options={{ title: 'Book Details' }} />
      <AddBookStack.Screen name="Scanner" component={Scanner} options={{ title: 'Scan Book Barcode' }} />
    </AddBookStack.Navigator>
  );
}

function WishlistStackScreen() {
  return (
    <WishlistStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: colors.background,
      },
    }}>
      <WishlistStack.Screen name="WishlistMain" component={WishlistScreen} options={{ title: 'Wishlist' }} />
      <WishlistStack.Screen name="EditBook" component={EditBookScreen} options={{ title: 'Edit Book' }} />
    </WishlistStack.Navigator>
  );
}

function ReadBooksStackScreen() {
  return (
    <ReadBooksStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: colors.background,
      },
    }}>
      <ReadBooksStack.Screen name="ReadBooksMain" component={ReadBooksScreen} options={{ title: 'My Library' }} />
      <ReadBooksStack.Screen name="EditBook" component={EditBookScreen} options={{ title: 'Edit Book' }} />
    </ReadBooksStack.Navigator>
  );
}

function StatisticsStackScreen() {
  return (
    <StatisticsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: colors.background,
      },
    }}>
      <StatisticsStack.Screen name="StatisticsMain" component={StatisticsScreen} options={{ title: 'Statistics' }} />
    </StatisticsStack.Navigator>
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
              if (route.name === 'My Library') {
                iconName = 'library-books';
              } else if (route.name === 'Wishlist') {
                iconName = 'favorite-border';
              } else if (route.name === 'Search') {
                iconName = 'search';
              } else if (route.name === 'Statistics') {
                iconName = 'bar-chart';
              }
              return (
                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', paddingTop: 0 }}> 
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
          <Tab.Screen name="My Library" component={ReadBooksStackScreen} options={{headerShown: false}} />
          <Tab.Screen name="Wishlist" component={WishlistStackScreen} options={{headerShown: false}} />
          <Tab.Screen name="Statistics" component={StatisticsStackScreen} options={{headerShown: false}} />
          <Tab.Screen name="Search" component={AddBookStackScreen} options={{headerShown: false}} />
        
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
});

export default Navigation;
