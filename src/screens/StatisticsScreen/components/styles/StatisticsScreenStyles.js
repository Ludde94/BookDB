import { StyleSheet } from 'react-native';
import colors from '../../../../themes.js';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 18,  // Increased font size for info texts
    color: colors.text,
    marginVertical: 4,  // Added vertical margin for better spacing
  },
  AuthorText: {
    fontSize: 16,  // Increased font size for info texts
    color: colors.text,
    marginVertical: 4,  // Added vertical margin for better spacing
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default styles;