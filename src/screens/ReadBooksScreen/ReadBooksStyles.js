import { StyleSheet } from 'react-native';
import colors from '../../themes'; // Ensure this is the correct path

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: colors.background,
  },
  tab: {
    padding: 10,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  activeTabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  activeTabIndicator: {
    marginTop: 5,
    height: 2,
    width: '100%',
    backgroundColor: colors.primary,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.background,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: colors.secondaryBackground,
  },
  filterText: {
    fontSize: 14,
    color: colors.text,
  },
  activeFilterText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: 'bold',
  },
  bookList: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#555',
  },
});
