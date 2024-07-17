import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Toast = ({ visible, message }) => {
    const [showToast, setShowToast] = React.useState(visible);
    const opacity = React.useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (visible) {
            setShowToast(true);
            Animated.timing(opacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                setTimeout(() => {
                    Animated.timing(opacity, {
                        toValue: 0,
                        duration: 500,
                        useNativeDriver: true,
                    }).start(() => setShowToast(false));
                }, 2000);
            });
        }
    }, [visible]);

    if (!showToast) return null;

    return (
        <Animated.View style={[styles.toast, { opacity }]}>
            <Text style={styles.text}>{message}</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    toast: {
        position: 'absolute',
        top: 40, // Adjust this value to control the top margin
        left: '10%',
        right: '10%',
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 10,
        zIndex: 1000,
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
});

export default Toast;
