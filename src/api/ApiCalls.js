const GOOGLE_BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const LIBRIS_BASE_URL = 'https://api.libris.kb.se/xsearch';

const searchBooks = async (searchQuery, startIndex = 0) => {
  const isISBN = searchQuery.match(/^(97(8|9))?\d{9}(\d|X)?$/);
  const googleParams = new URLSearchParams({
    q: isISBN ? `isbn:${searchQuery}` : searchQuery,
    startIndex,  // Add this line to control pagination
    maxResults: 10,
    fields: 'items(volumeInfo/title,volumeInfo/publishedDate,volumeInfo/authors,volumeInfo/publisher,volumeInfo/description,volumeInfo/industryIdentifiers,volumeInfo/categories,volumeInfo/imageLinks)'
  });

  try {
    let response = await fetch(`${GOOGLE_BASE_URL}?${googleParams}`);
    let data = await response.json();
    if (data.items && data.items.length > 0) {
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
    } else {
      // Fallback to Libris API if no results found
      const librisParams = new URLSearchParams({
        q: isISBN ? `isbn:${searchQuery}` : searchQuery,
        format: 'json',
        n: 10
      });
      response = await fetch(`${LIBRIS_BASE_URL}?${librisParams}`);
      data = await response.json();
      return data.xsearch.list.map(book => ({
        title: book.title,
        publishedYear: book.date,
        authors: book.creator // Assuming 'creator' holds the author's data
      }));
    }
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return [];
  }
};

export default searchBooks;
