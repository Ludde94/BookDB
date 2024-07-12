import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './src/themes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/Navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
