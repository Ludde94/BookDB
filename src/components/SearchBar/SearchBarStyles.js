import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../themes';

const { width } = Dimensions.get('window'); // Using full width to calculate input size dynamically

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8, // Reduced padding for a sleeker look
    backgroundColor: colors.background, // Assuming colors.background is defined
    alignItems: 'center', // Vertically align the elements in the container
    borderRadius: 12, // Rounded corners for the container
    margin: 10, // Margin around the container to separate from other UI elements
    shadowColor: "#000", // Shadow for 3D effect
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Elevation for android
  },
  input: {
    flex: 1,
    height: 40, // Fixed height for consistency
    backgroundColor: colors.background, // Conditional background color
    borderRadius: 10, // Rounded corners for the input field
    borderWidth: 0, // No border for a clean look
    paddingHorizontal: 15, // Horizontal padding within the input
    color: colors.text, // Text color inside the input
    fontSize: 16, // Slightly larger font size for readability
  },
});
