import React from "react";
import { SafeAreaView, ScrollView, Text, Button, Alert } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import * as Sharing from "expo-sharing";
import {
  exportDataToXML,
  importDataFromXML,
  fetchBooksFromLibrary,
  fetchBooksFromWantToRead,
} from "../../db/Storage";
import styles from "./SettingsStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";

function SettingsScreen({ route }) {
  const handleExport = async () => {
    try {
      const libraryBooks = await fetchBooksFromLibrary();
      const wantToReadBooks = await fetchBooksFromWantToRead();
      const allBooksData = { libraryBooks, wantToReadBooks };
      const xmlData = await exportDataToXML(allBooksData); // Assuming you have a function to convert JSON to XML
      const filePath = FileSystem.cacheDirectory + "booksData.xml";
      await FileSystem.writeAsStringAsync(filePath, xmlData, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      await Sharing.shareAsync(filePath);
    } catch (error) {
      Alert.alert("Error", "Failed to export data: " + error.message);
    }
  };

  const handleImport = async () => {
    console.log("first log");
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*", // Consider specifying this more strictly if possible
        copyToCacheDirectory: true,
      });
      console.log("Document picker result:", result);

      // Check if the picker was not canceled and assets are present
      if (!result.canceled && result.assets && result.assets.length > 0) {
        console.log("second log");
        const fileUri = result.assets[0].uri; // Adjust this line to correctly pick the URI from assets
        const fileContent = await FileSystem.readAsStringAsync(fileUri);
        console.log("File content retrieved:", fileContent.slice(0, 100)); // Log first 100 chars of the file content

        const booksData = await importDataFromXML(fileContent);
        console.log("Data parsed, starting to save...");
        await Promise.all([
          ...booksData.libraryBooks.map((book) => saveBookToLibrary(book)),
          ...booksData.wantToReadBooks.map((book) =>
            saveBookToWantToRead(book)
          ),
        ]);
        Alert.alert("Success", "Data imported successfully");
      } else {
        console.log("Document picker exited without picking a file");
      }
    } catch (error) {
      console.error("Import failed", error);
      Alert.alert("Error", "Failed to import data: " + error.message);
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
