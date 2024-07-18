import React from 'react';
import { SafeAreaView, ScrollView, Text, Button, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as Sharing from 'expo-sharing';
import { exportDataToXML, importDataFromXML  } from '../../db/Storage'; // Adjust the path if necessary
import styles from './SettingsStyles';

function SettingsScreen({ route }) {
  const handleExport = async () => {
    try {
      const fileUri = await exportDataToXML();
      if (fileUri) {
        await Sharing.shareAsync(fileUri);
        Alert.alert('Success', 'Data exported successfully.');
      } else {
        Alert.alert('Error', 'Failed to export data.');
      }
    } catch (error) {
      console.error('Error exporting data:', error);
      Alert.alert('Error', 'An error occurred while exporting data.');
    }
  };

  const handleImport = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: '*/*' }); // Allow all types for debugging
      console.log('DocumentPicker result:', result);
      if (!result.canceled && result.assets && result.assets.length > 0) {
        const fileUri = result.assets[0].uri;
        console.log('Selected file URI:', fileUri);
        if (fileUri) {
          await importDataFromXML(fileUri);
          Alert.alert('Success', 'Data imported successfully.');
        } else {
          Alert.alert('Error', 'Failed to get file URI.');
        }
      } else {
        console.log('DocumentPicker canceled or no assets found.');
      }
    } catch (error) {
      console.error('Error importing data:', error);
      Alert.alert('Error', 'An error occurred while importing data.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <Button title="Export Data" onPress={handleExport} />
        <Button title="Import Data" onPress={handleImport} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default SettingsScreen;
