import { Link } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Colors } from "../styles/constants";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pathfinder</Text>
      <Text style={styles.subtitle}>
        A simple app to organize your job search activities.
      </Text>

      <Link href="/platforms" asChild>
        <Pressable style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Job search platforms</Text>
        </Pressable>
      </Link>

      <Link href="/cv-builder" asChild>
        <Pressable style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>CV builder</Text>
        </Pressable>
      </Link>

      <Link href="/tracker" asChild>
        <Pressable style={styles.buttonTertiary}>
          <Text style={styles.buttonText}>Application tracker</Text>
        </Pressable>
      </Link>

      <Link href="/activities" asChild>
        <Pressable style={styles.buttonTertiary}>
          <Text style={styles.buttonText}>Activities</Text>
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
    backgroundColor: Colors.background,
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
    color: Colors.textMuted,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginBottom: 14,
  },
  buttonPrimary: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginBottom: 14,
    backgroundColor: Colors.primary,
  },
  buttonSecondary: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginBottom: 14,
    backgroundColor: Colors.secondary,
  },
  buttonTertiary: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginBottom: 14,
    backgroundColor: Colors.tertiary,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
