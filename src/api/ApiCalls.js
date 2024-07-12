const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

const searchBooks = async (searchQuery) => {
  const queryParams = new URLSearchParams({
    q: searchQuery,
    maxResults: 10,
    fields: 'items(volumeInfo/title,volumeInfo/publishedDate,volumeInfo/authors)'
  });

  try {
    const response = await fetch(`${BASE_URL}?${queryParams}`);
    const data = await response.json();
    if (data.items) {
      return data.items.map(book => ({
        title: book.volumeInfo.title,
        publishedYear: book.volumeInfo.publishedDate,
        authors: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'
      }));
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return [];
  }
};

export default searchBooks;
