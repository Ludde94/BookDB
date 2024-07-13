import { StyleSheet } from 'react-native';
import colors from '../../themes'; // Ensure this is the correct path

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    button: {
      width: 150,
      backgroundColor: 'blue',
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
    },
    text: {
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
    },
  });