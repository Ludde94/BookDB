import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../themes'; 

const screenHeight = Dimensions.get('window').height;


export default StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.subtleText, // Use subtleText for less prominent borders
    backgroundColor: colors.background,
    alignItems: 'center',
    height: 150,
  },
  image: {
    width: 80,
    height: 120,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text, // Main text color
    marginBottom: 4,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  detailsLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.subtleText, // Use secondary for labels
    marginRight: 5,
  },
  detailsValue: {
    fontSize: 14,
    color: colors.text, // Main text color for values
  },
  publisherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  publisherLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.subtleText, // Consistent label coloring
    marginRight: 5,
  },
  publisherValue: {
    fontSize: 14,
    color: colors.text, // Consistency in value coloring
  },
  button: {
    borderRadius: 5,
    backgroundColor: colors.accent, // Vibrant accent color for actions
    paddingVertical: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: colors.background, // Contrast against the button background
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    maxHeight: screenHeight * 0.8,
    width: '80%',
  },
  modalContent: {
    maxHeight: screenHeight * 0.6,
  },
});
