import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles/BookCardStyles";
import placeholderImage from "../../assets/ImageNotFound.jpg";

const BooksCard = ({ book, onPress }) => {
  const authorsText = Array.isArray(book.authors)
    ? book.authors.join(", ")
    : book.authors || "Unknown Author";

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Image
        source={
          book.image ? { uri: book.image, cache: "reload" } : placeholderImage
        }
        style={styles.bookImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.authors}>{authorsText}</Text>
        <Text style={styles.details}>
          {book.publishedYear ? `${book.publishedYear} | ` : ""}
          {book.publisher || "Unknown Publisher"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BooksCard;
