import { StyleSheet } from 'react-native';

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
        backgroundColor: '#ff6347', // example color
    },
    collectionButton: {
        backgroundColor: '#4682b4', // example color
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
});

export default styles;
