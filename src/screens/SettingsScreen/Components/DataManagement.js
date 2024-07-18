import React from "react";
import { Button, Alert } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import {
  exportDataToXML,
  importDataFromXML,
  fetchBooksFromLibrary,
  fetchBooksFromWantToRead,
} from "../../../db/Storage";

const DataManagement = () => {
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
    console.log("Attempting to import data...");
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*", // Consider specifying this more strictly if possible
        copyToCacheDirectory: true,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const fileUri = result.assets[0].uri;
        const fileContent = await FileSystem.readAsStringAsync(fileUri);
        const booksData = await importDataFromXML(fileContent);

        await Promise.all([
          ...booksData.libraryBooks.map((book) => saveBookToLibrary(book)),
          ...booksData.wantToReadBooks.map((book) =>
            saveBookToWantToRead(book)
          ),
        ]);
        Alert.alert("Success", "Data imported successfully");
      } else {
        console.log("No file selected.");
      }
    } catch (error) {
      console.error("Import failed", error);
      Alert.alert("Error", "Failed to import data: " + error.message);
    }
  };

  return (
    <>
      <Button title="Export Data" onPress={handleExport} />
      <Button title="Import Data" onPress={handleImport} />
    </>
  );
};

export default DataManagement;
