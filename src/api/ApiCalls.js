const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

const searchBooks = async (searchQuery) => {
  // Check if the search query is likely an ISBN (10 or 13 digits only)
  const isISBN = searchQuery.match(/^(97(8|9))?\d{9}(\d|X)?$/);

  const queryParams = new URLSearchParams({
    q: isISBN ? `isbn:${searchQuery}` : searchQuery, // Prefix with 'isbn:' if it's an ISBN
    maxResults: 10,
    fields: 'items(volumeInfo/title,volumeInfo/publishedDate,volumeInfo/authors,volumeInfo/publisher,volumeInfo/description,volumeInfo/industryIdentifiers,volumeInfo/categories,volumeInfo/imageLinks)'
  });

  try {
    const response = await fetch(`${BASE_URL}?${queryParams}`);
    const data = await response.json();
    if (data.items) {
      return data.items.map(book => {
        const volumeInfo = book.volumeInfo;
        return {
          title: volumeInfo.title,
          publishedYear: volumeInfo.publishedDate,
          authors: volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown Author',
          publisher: volumeInfo.publisher,
          description: volumeInfo.description,
          image: volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : null,
          genre: volumeInfo.categories ? volumeInfo.categories.join(', ') : 'Unknown Genre',
          isbn: volumeInfo.industryIdentifiers ? volumeInfo.industryIdentifiers.map(identifier => `${identifier.type}: ${identifier.identifier}`).join(', ') : 'No ISBN'
        };
      });
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return [];
  }
};

export default searchBooks;
