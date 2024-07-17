import { StyleSheet } from 'react-native';
import colors from '../../../../themes.js';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.text,
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  genreContainer: {
    marginTop: 20,
    paddingBottom: 20,
  },
  genreItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  colorIndicator: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  genreText: {
    fontSize: 16,
    color: colors.text,
  },
  infoContainer: {
    marginTop: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: colors.subtleText,
  },
  infoText: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.text,
  },
  authorText: {
    fontSize: 16,
    color: colors.text,
  },
});
export default styles;