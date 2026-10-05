import { Link } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { colors } from "../styles/constants";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pathfinder</Text>
      <Text style={styles.subtitle}>
        A simple app to organize your job search activities.
      </Text>

      <Link href="/about" asChild>
        <Pressable>
          <Text style={styles.readMoreLink}>Read more about the app.</Text>
        </Pressable>
      </Link>

      <View style={styles.buttonsContainer}>
        <Link href="/platforms" asChild>
          <Pressable style={styles.buttonPrimary}>
            <Text style={styles.buttonText}>Job Search Platforms</Text>
          </Pressable>
        </Link>

        <Link href="/listings" asChild>
          <Pressable style={styles.buttonPrimaryLight}>
            <Text style={styles.buttonText}>Job Listings</Text>
          </Pressable>
        </Link>

        <Link href="/cv-builder" asChild>
          <Pressable style={styles.buttonSecondary}>
            <Text style={styles.buttonText}>CV Builder</Text>
          </Pressable>
        </Link>

        <Link href="/application-tracker" asChild>
          <Pressable style={styles.buttonTertiary}>
            <Text style={styles.buttonText}>Application Tracker</Text>
          </Pressable>
        </Link>

        <Link href="/activities" asChild>
          <Pressable style={styles.buttonQuaternary}>
            <Text style={styles.buttonText}>Activities</Text>
          </Pressable>
        </Link>
      </View>
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
    color: colors.textMuted,
  },
  readMoreLink: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: "center",
    color: colors.textMuted,
    textDecorationLine: "underline",
    marginTop: 8,
    marginBottom: 24,
  },
  buttonsContainer: {
    marginTop: 8,
  },
  buttonPrimary: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: colors.primary,
  },
  buttonPrimaryLight: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: colors.primaryLight,
  },
  buttonSecondary: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: colors.secondary,
  },
  buttonTertiary: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: colors.tertiary,
  },
  buttonQuaternary: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: colors.quaternary,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
