import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import DataManagement from "./Components/DataManagement";
import styles from "./SettingsStyles";

function SettingsScreen({ route }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <DataManagement />
      </ScrollView>
    </SafeAreaView>
  );
}

export default SettingsScreen;
