import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './src/themes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/Navigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <><StatusBar style="light" backgroundColor={colors.primary} /><SafeAreaProvider>
      <View style={styles.container}>
        <Navigation />
      </View>
    </SafeAreaProvider></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
