import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../themes';

export default StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.background,
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowColor: colors.shadow,
    shadowOffset: { height: 3, width: 3 },
    elevation: 3,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  bookImage: {
    width: 70, // Reduced width
    height: 100, // Reduced height to maintain aspect ratio
    resizeMode: 'contain', // Changed to 'contain' to ensure the entire image fits without stretching
    margin: 10, // Added margin for visual spacing
  },
  textContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center' // Added to vertically align text in the center
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  authors: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 5,
  },
  details: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 5
  }
});
