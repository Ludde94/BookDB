import AsyncStorage from '@react-native-async-storage/async-storage';

// Save a book to the library collection
export const saveBookToLibrary = async (book) => {
  try {
    const key = `library_${book.id}`;
    const value = JSON.stringify(book);
    await AsyncStorage.setItem(key, value);
    console.log('Book saved to library.');
  } catch (error) {
    console.error('Failed to save the book to library:', error);
  }
};

// Save a book to the "want to read" list
export const saveBookToWantToRead = async (book) => {
  try {
    const key = `wantToRead_${book.id}`;
    const value = JSON.stringify(book);
    await AsyncStorage.setItem(key, value);
    console.log('Book saved to "want to read" list.');
  } catch (error) {
    console.error('Failed to save the book to "want to read" list:', error);
  }
};

// Fetch all books from the library
export const fetchBooksFromLibrary = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const libraryKeys = keys.filter(key => key.startsWith('library_'));
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
