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
    backgroundColor: colors.primary, // A vibrant green for action buttons
    padding: 12,
    borderRadius: 8,
    elevation: 3, // Slight shadow for 3D effect
  },
  addButtonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '500', // Semi-bold for readability
    textAlign: 'center',
  },
  
});


