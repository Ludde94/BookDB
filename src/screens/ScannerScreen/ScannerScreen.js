import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import styles from './ScannerStyles'

export default function Scanner({ navigation }) {
  const [facing, setFacing] = useState('back'); // Controls which camera (front or back) is active
  const [permission, requestPermission] = useCameraPermissions(); // Manages camera permissions
  const [isScanning, setIsScanning] = useState(true); // Controls if the scanner is active

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
    setIsScanning(false); // Disable further scanning once a barcode is scanned
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate('SearchMain', { scannedData: data });  };

  function enableScanning() {
    setIsScanning(true); // Re-enable scanning when needed
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        onBarcodeScanned={isScanning ? handleBarCodeScanned : undefined} // Only scan when isScanning is true
        barcodeScannerSettings={{
          barcodeTypes: ['ean13'], // Specifically for books which generally use EAN-13
        }}>
        {!isScanning && (
          <Button title="Scan Again" onPress={enableScanning} /> // Button to re-enable scanning
        )}
      </CameraView>
    </View>
  );
}
