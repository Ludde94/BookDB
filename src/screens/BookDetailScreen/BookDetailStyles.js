import { StyleSheet } from 'react-native';
import colors from '../../themes'; // Ensure this is the correct path

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.background,
    },
    image: {
        width: 150,
        height: 225,
        resizeMode: 'cover',
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text,
        textAlign: 'center',
        marginBottom: 20,
    },
    detail: {
        fontSize: 16,
        color: colors.secondary,
        marginBottom: 5,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: colors.text,
        marginTop: 20,
        textAlign: 'justify',
        paddingHorizontal: 10,
        paddingTop: 20,
        paddingBottom: 20,
        borderTopWidth: 2,
        borderColor: colors.primary,
    },
    button: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 5,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    collectionButton: {
        backgroundColor: colors.primary,
    },
    wantToReadButton: {
        backgroundColor: colors.accent,
    },
    buttonText: {
        color: colors.background,
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 20,  // Ensure there's also margin at the bottom
    }
});
