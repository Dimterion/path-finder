import { Link } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pathfinder</Text>
      <Text style={styles.subtitle}>
        A simple app to organize your job search activities.
      </Text>

      <Link href="/platforms" asChild>
        <Pressable style={styles.button}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#f5f7fb",
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
    color: "#444",
  },
  button: {
    backgroundColor: "#1f6feb",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginBottom: 14,
  },
  buttonSecondary: {
    backgroundColor: "#2da44e",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  buttonTertiary: {
    backgroundColor: "#2d6a4f",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginTop: 14,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
