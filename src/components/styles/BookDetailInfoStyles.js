// BookInfoStyles.js
import { StyleSheet } from 'react-native';
import colors from '../../themes'; // Ensure this is the correct path

const styles = StyleSheet.create({
    detail: {
        paddingVertical: 0,
        marginVertical: 5,
    },
    description: {
        fontSize: 16,
        color: colors.text,
        marginVertical: 5,
    },
    label: {
        fontSize: 14,
        color: colors.secondary,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 14,
        color: colors.text,
    },
});

export default styles;
