import { StyleSheet } from 'react-native';
import colors from '../../themes'; // Ensure this is the correct path

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // Ensure background complements your title color
  },
  bookList: {
    paddingHorizontal: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28, // Larger size for prominence
    fontWeight: 'bold', // Bold weight for emphasis
    color: colors.primary,
    marginBottom: 30, // More space below the title
  },
  emptyText: {
    fontSize: 18,
    color: colors.subtleText, // Subtle color for less important text
    textAlign: 'center',
    marginBottom: 20,
  },
  addButton: {
    marginTop: 10,
    paddingVertical: 8, // Increased padding for easier pressing
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: colors.primary, // Subtle background color
  },
  addButtonText: {
    color: colors.background,
        fontSize: 14, // Slightly larger text
        fontWeight: 'bold',
        textAlign: 'center',
  },
  
});


