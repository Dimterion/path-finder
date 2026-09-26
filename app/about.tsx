import { Link } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { colors } from "../styles/constants";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Pathfinder</Text>
      <View style={styles.listContainer}>
        <Text style={styles.subtitle}>
          A simple app to organize your job search activities.
        </Text>

        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>
              Check major job search platforms
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>
              Explore job opportunities in various companies
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>Create a CV</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>Track your applications</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>
              Track your job search activities
            </Text>
          </View>
        </View>
      </View>

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
  listContainer: {
    marginBottom: 32,
  },
  list: {
    marginTop: 24,
    marginLeft: 8,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
    gap: 8,
  },
  bullet: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.textMuted,
    marginTop: 2,
  },
  listText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 24,
    color: colors.textMuted,
  },
});
