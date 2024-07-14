// BookInfoStyles.js
import { StyleSheet } from 'react-native';
import colors from '../../themes'; // Ensure this is the correct path

const styles = StyleSheet.create({
    detail: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.accent,
        marginVertical: 5,
    },
    description: {
        fontSize: 16,
        color: colors.text,
        lineHeight: 24,
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
