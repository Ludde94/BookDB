import { StyleSheet } from 'react-native';
import colors from '../../themes'; // Update the path if necessary to match your structure

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.background,  // Use the general background color
    },
    image: {
        width: '100%',  // Full width of the container
        height: 300,  // Fixed height for the image
        resizeMode: 'cover',  // Cover the frame of the image view
        borderRadius: 10,  // Optional: Rounded corners for the image
        marginBottom: 20,  // Space between the image and the text content
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 10,  // Space below the title
    },
    detail: {
        fontSize: 18,
        color: colors.text,
        marginBottom: 5,  // Space between details
    },
    description: {
        fontSize: 16,
        color: colors.text,
        marginTop: 10,  // Space above the description
        textAlign: 'justify',  // Justify the text of the description
    }
});
