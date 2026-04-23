import { StyleSheet, Text, View } from "react-native";

export default function ActivitiesScreen() {
  return (
    <View style={styles.container}>
      <Text>Track your activities.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f7fb" },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  toolbar: {
    flexDirection: "row",
    padding: 16,
    paddingBottom: 12,
  },
});
