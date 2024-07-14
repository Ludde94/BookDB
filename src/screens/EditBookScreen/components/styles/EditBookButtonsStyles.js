// EditBookButtonsStyles.js
import { StyleSheet } from 'react-native';
import colors from '../../../../themes'; // Ensure this is the correct path

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    button: {
        flex: 1,
        padding: 15,
        marginHorizontal: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    moveBookToLibraryButton: {
        backgroundColor: colors.primary,
    },
    removeFromWishlistButton: {
        backgroundColor: colors.accent,
    },
    buttonText: {
        color: colors.background,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;
