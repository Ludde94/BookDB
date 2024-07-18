import { StyleSheet } from 'react-native';
import colors from '../../themes'; // Ensure this is the correct path

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
  },
  tab: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  activeTabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  activeTabIndicator: {
    marginTop: 5,
    height: 2,
    width: '100%',
    backgroundColor: '#000',
  },
  bookList: {
    flex: 1,
  },
  });
  