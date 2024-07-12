import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../themes';

const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
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
        backgroundColor: colors.primary,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
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
        maxHeight: screenHeight * 0.6,  // Limit the height for scrolling within the modal
    }
});
