import { StyleSheet, Text, View } from "react-native";

export default function PlatformsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Platforms</Text>
      <Text style={styles.text}>
        This page will later show platforms, what they do, and basic advice for
        using them well.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
  },
});
