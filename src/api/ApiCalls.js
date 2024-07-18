const GOOGLE_BASE_URL = "https://www.googleapis.com/books/v1/volumes";
const LIBRIS_BASE_URL = "https://api.libris.kb.se/xsearch";

// Utility function to extract year from various formats
const formatYear = (date) => {
  if (typeof date === "string") {
    return date.substring(0, 4);
  }
  if (Array.isArray(date)) {
    let year = date[0];
    if (year.startsWith("[") && year.endsWith("]")) {
      year = year.slice(1, -1); // Remove brackets
    }
    return year;
  }
  return "Unknown Year";
};

const searchBooks = async (searchQuery, startIndex = 0) => {
  const isISBN = searchQuery.match(/^(97(8|9))?\d{9}(\d|X)?$/);
  const googleParams = new URLSearchParams({
    q: isISBN ? `isbn:${searchQuery}` : searchQuery,
    startIndex,
    maxResults: 10,
    fields:
      "items(volumeInfo/title,volumeInfo/publishedDate,volumeInfo/authors,volumeInfo/publisher,volumeInfo/description,volumeInfo/industryIdentifiers,volumeInfo/categories,volumeInfo/imageLinks,volumeInfo/pageCount,volumeInfo/averageRating,volumeInfo/language)",
  });

  try {
    let response = await fetch(`${GOOGLE_BASE_URL}?${googleParams}`);
    let data = await response.json();
    if (data.items && data.items.length > 0) {
      return data.items.map((book) => {
        const volumeInfo = book.volumeInfo;
        const industryIdentifiers = volumeInfo.industryIdentifiers;
        let id = industryIdentifiers
          ? industryIdentifiers.find(
              (id) => id.type === "ISBN_13" || id.type === "ISBN_10"
            )
          : null;
        id = id ? id.identifier : `${volumeInfo.title}_${new Date().getTime()}`;

        return {
          id,
          title: volumeInfo.title,
          publishedYear: formatYear(volumeInfo.publishedDate),
          authors: volumeInfo.authors,
          publisher: volumeInfo.publisher,
          description: volumeInfo.description,
          image: volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : null,
          genre: volumeInfo.categories,
          isbn: volumeInfo.industryIdentifiers
            ? volumeInfo.industryIdentifiers
                .map(
                  (identifier) => `${identifier.type}: ${identifier.identifier}`
                )
                .join(", ")
            : "No ISBN",
          pageCount: volumeInfo.pageCount || "N/A",
          averageRating: volumeInfo.averageRating || "N/A",
          language: volumeInfo.language || "N/A",
        };
      });
    } else {
      // Fallback to Libris API if no results found
      const librisParams = new URLSearchParams({
        q: isISBN ? `isbn:${searchQuery}` : searchQuery,
        format: "json",
        n: 10,
      });
      response = await fetch(`${LIBRIS_BASE_URL}?${librisParams}`);
      data = await response.json();
      return data.xsearch.list.map((book) => ({
        id: `${book.title}_${new Date().getTime()}`,
        title: book.title,
        publishedYear: formatYear(book.date),
        authors: book.creator,
        // Assuming Libris API response might not include pageCount, averageRating, or language.
        pageCount: "N/A",
        averageRating: "N/A",
        language: "N/A",
      }));
    }
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return [];
  }
};

export default searchBooks;
