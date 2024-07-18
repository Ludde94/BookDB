import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../../themes"; // Verify the correct path

const { width } = Dimensions.get("window");

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 10,
    marginTop: 40,
    borderRadius: 10,
    margin: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 10,
    textAlign: "left",
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
    backgroundColor: colors.background, // Subtle background for discrete buttons
    borderWidth: 1,
    borderColor: colors.background, // Light border to make it look clickable
  },
  optionText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: "500",
  },
});
