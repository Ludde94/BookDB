import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../themes';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: colors.background,
    alignItems: 'center',
    borderRadius: 12,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: colors.background,
    borderRadius: 10,
    borderWidth: 0,
    paddingHorizontal: 15,
    color: colors.text,
    fontSize: 16,
  },
  scanButton: {
    padding: 10,
    marginLeft: 5,
    backgroundColor: colors.background,
    borderRadius: 10,
  },
  scanIcon: {
    width: 25,
    height: 25,
  }
});
