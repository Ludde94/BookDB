import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';
import { js2xml } from 'xml-js';


//export db
export const exportDataToXML = async () => {
  try {
    const libraryBooks = await fetchBooksFromLibrary();
    const wantToReadBooks = await fetchBooksFromWantToRead();

    const exportData = {
      library: { book: libraryBooks },
      wantToRead: { book: wantToReadBooks }
    };

    const xmlOptions = { compact: true, ignoreComment: true, spaces: 4 };
    const xmlString = js2xml(exportData, xmlOptions);

    const fileUri = FileSystem.documentDirectory + 'booksData.xml';
    await FileSystem.writeAsStringAsync(fileUri, xmlString);
    console.log('Data exported to:', fileUri);
    return fileUri; // Return the file URI to handle file sharing or uploading if needed
  } catch (error) {
    console.error('Failed to export data:', error);
  }
};

//import db
export const importDataFromXML = async (fileUri) => {
  try {
    const xmlString = await FileSystem.readAsStringAsync(fileUri);
    const data = xml2js(xmlString, { compact: true });

    if (data.library && Array.isArray(data.library.book)) {
      for (const book of data.library.book) {
        await saveBookToLibrary(book._text ? JSON.parse(book._text) : book);
      }
    }

    if (data.wantToRead && Array.isArray(data.wantToRead.book)) {
      for (const book of data.wantToRead.book) {
        await saveBookToWantToRead(book._text ? JSON.parse(book._text) : book);
      }
    }

    console.log('Data imported successfully.');
  } catch (error) {
    console.error('Failed to import data:', error);
  }
};

// Save a book to the library collection
export const saveBookToLibrary = async (book) => {
  try {
    const key = `library_${book.id}`;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const value = JSON.stringify({ ...book, savedDate: formattedDate });
    await AsyncStorage.setItem(key, value);
    console.log(`Book saved to library under key: ${key}`);
  } catch (error) {
    console.error('Failed to save the book to library:', error);
  }
};

// Save a book to the "want to read" list
export const saveBookToWantToRead = async (book) => {
  try {
    const key = `wantToRead_${book.id}`;
    const value = JSON.stringify({ ...book});
    await AsyncStorage.setItem(key, value);
    console.log(`Book saved to wishlist under key: ${key}`);
  } catch (error) {
    console.error('Failed to save the book to library:', error);
  }
};

// Fetch all books from the library
export const fetchBooksFromLibrary = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const libraryKeys = keys.filter(key => key.startsWith('library_')); // Assumes keys for books start with 'library_'
    const libraryBooks = await AsyncStorage.multiGet(libraryKeys);
    return libraryBooks.map(([key, value]) => JSON.parse(value));
  } catch (error) {
    console.error('Failed to fetch books from library:', error);
    return [];
  }
};


// Fetch all books from the "want to read" list
export const fetchBooksFromWantToRead = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const wantToReadKeys = keys.filter(key => key.startsWith('wantToRead_'));
    const wantToReadBooks = await AsyncStorage.multiGet(wantToReadKeys);
    return wantToReadBooks.map(([key, value]) => JSON.parse(value));
  } catch (error) {
    console.error('Failed to fetch books from "want to read" list:', error);
    return [];
  }
};

// Remove a book from the library
export const removeBookFromLibrary = async (book) => {
  try {
    const key = `library_${book.id}`;
    await AsyncStorage.removeItem(key);
    console.log(`Book with ID ${book.id} removed from library.`);
  } catch (error) {
    console.error('Failed to remove the book from library:', error);
  }
};

// Remove a book from the "want to read" list
export const removeBookFromWantToRead = async (book) => {
  try {
    const key = `wantToRead_${book.id}`;
    await AsyncStorage.removeItem(key);
    console.log(`Book with ID ${book.id} removed from "want to read" list.`);
  } catch (error) {
    console.error('Failed to remove the book from "want to read" list:', error);
  }
};

// Move a book from "want to read" list to library
export const moveBookToLibrary = async (bookId) => {
  try {
    const key = `wantToRead_${bookId}`;
    const book = await AsyncStorage.getItem(key);
    if (book) {
      await saveBookToLibrary(JSON.parse(book));
      await removeBookFromWantToRead(bookId);
      console.log(`Book with ID ${bookId} moved from "want to read" list to library.`);
    } else {
      console.log(`Book with ID ${bookId} not found in "want to read" list.`);
    }
  } catch (error) {
    console.error('Failed to move the book to library:', error);
  }
};

// Move a book from library to "want to read" list
export const moveBookToWantToRead = async (bookId) => {
  try {
    const key = `library_${bookId}`;
    const book = await AsyncStorage.getItem(key);
    if (book) {
      await saveBookToWantToRead(JSON.parse(book));
      await removeBookFromLibrary(bookId);
      console.log(`Book with ID ${bookId} moved from library to "want to read" list.`);
    } else {
      console.log(`Book with ID ${bookId} not found in library.`);
    }
  } catch (error) {
    console.error('Failed to move the book to "want to read" list:', error);
  }
};