import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function Scanner({ navigation }) {
  const [facing, setFacing] = useState('back'); // Controls which camera (front or back) is active
  const [permission, requestPermission] = useCameraPermissions(); // Manages camera permissions

  if (!permission) {
    // Camera permissions are still loading
    return <View style={styles.container}><Text>Loading permissions...</Text></View>;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const handleBarCodeScanned = ({ type, data }) => {
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate('AddBook', { scannedData: data });
  };

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView
  style={styles.camera}
  facing={facing}
  onBarcodeScanned={handleBarCodeScanned}
  barcodeScannerSettings={{
    barcodeTypes: ['ean13'], // Specifically for books which generally use EAN-13
  }}>
  <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
    <Text style={styles.text}>Flip Camera</Text>
  </TouchableOpacity>
</CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});
