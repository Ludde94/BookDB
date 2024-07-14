// EditBookStyles.js
import { StyleSheet } from 'react-native';
import colors from '../../themes'; // Ensure this is the correct path

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    contentContainer: {
        padding: 20,
    },
});

export default styles;
