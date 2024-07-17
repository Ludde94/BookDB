import AsyncStorage from '@react-native-async-storage/async-storage';


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