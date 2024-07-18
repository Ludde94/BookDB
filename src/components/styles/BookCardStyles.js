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
    width: 100,
    height: 150,
    resizeMode: 'cover'
  },
  textContainer: {
    flex: 1,
    padding: 10,
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
