import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('books.db');

const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS library (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        publishedYear TEXT,
        authors TEXT,
        publisher TEXT,
        description TEXT,
        image TEXT,
        genre TEXT,
        isbn TEXT
      );`
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS want_to_read (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        publishedYear TEXT,
        authors TEXT,
        publisher TEXT,
        description TEXT,
        image TEXT,
        genre TEXT,
        isbn TEXT
      );`
    );
  });
};

const insertBookToLibrary = (book) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO library (title, publishedYear, authors, publisher, description, image, genre, isbn) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
      [book.title, book.publishedYear, book.authors, book.publisher, book.description, book.image, book.genre, book.isbn]
    );
  });
};

const insertBookToWantToRead = (book) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO want_to_read (title, publishedYear, authors, publisher, description, image, genre, isbn) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
      [book.title, book.publishedYear, book.authors, book.publisher, book.description, book.image, book.genre, book.isbn]
    );
  });
};

const getBooksFromLibrary = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM library;`,
      [],
      (_, { rows: { _array } }) => {
        callback(_array);
      }
    );
  });
};

const getBooksFromWantToRead = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM want_to_read;`,
      [],
      (_, { rows: { _array } }) => {
        callback(_array);
      }
    );
  });
};

export { createTables, insertBookToLibrary, insertBookToWantToRead, getBooksFromLibrary, getBooksFromWantToRead };
