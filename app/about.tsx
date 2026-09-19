import { Link } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { colors } from "../styles/constants";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Pathfinder</Text>
      <Text style={styles.subtitle}>
        A simple app to organize your job search activities.
      </Text>

      <Link href="/" asChild>
        <Pressable style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Start here</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 32,
    color: colors.textMuted,
  },
  buttonPrimary: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginBottom: 14,
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
