// EditBookButtonsStyles.js
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../../themes'; // Ensure this is the correct path


const screenHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
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
        color: colors.text,
    },
    details: {
        fontSize: 14,
        color: colors.text,
        marginTop: 4,
    },
    button: {
        marginTop: 10,
        paddingVertical: 8, // Increased padding for easier pressing
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: colors.accent, // Subtle background color
    },
    buttonText: {
        color: 'white',
        fontSize: 14, // Slightly larger text
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
    dangerButton: {
        backgroundColor: colors.danger, 
    },
});

export default styles;
