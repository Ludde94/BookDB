import { StyleSheet } from 'react-native';
import colors from '../../themes';

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    wantToReadButton: {
        backgroundColor: colors.primary
    },
    collectionButton: {
        backgroundColor: colors.accent
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
});

export default styles;
