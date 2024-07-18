import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import DataManagement from "./Components/DataManagement";

function SettingsScreen({ route }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text>Settings</Text>
        <DataManagement />
      </ScrollView>
    </SafeAreaView>
  );
}

export default SettingsScreen;
