import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../themes';


export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: colors.background
      },
      input: {
        flex: 1,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
      },
});
