import { StyleSheet } from 'react-native';
import colors from '../../themes'; // Ensure this is the correct path

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 10,
    },
    text: {
      color: colors.text,
      fontSize: 18,
      fontWeight: 'bold',
    },
    bookList: {
      marginTop: 20,
    },
  });