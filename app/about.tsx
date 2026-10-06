import { Link } from "expo-router";
import { StyleSheet, Text, View, Pressable, Linking } from "react-native";
import { colors } from "../styles/constants";

export default function HomeScreen() {
  const openMediumArticle = async () => {
    const url =
      "https://medium.com/@dimterion/documenting-the-process-of-making-a-mobile-app-working-on-individual-screens-cv-builder-3a2b0ceb5fb4?sharedUserId=dimterion";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
  };

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

      <Text style={styles.infoText}>
        No login or account creation. Information is saved locally on your
        current device. CV, applications and activities lists can be exported.
      </Text>

      <Link href="/" asChild>
        <Pressable style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Start here</Text>
        </Pressable>
      </Link>

      <Text style={styles.workInProgress}>
        Work in progress. Features and functionality might change in the future.
      </Text>

      <Pressable onPress={openMediumArticle} style={styles.moreInfoLink}>
        <Text style={styles.moreInfoText}>More info</Text>
      </Pressable>
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
    fontSize: 18,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 32,
    color: colors.textMuted,
    fontWeight: "600",
  },
  buttonPrimary: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
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
    marginBottom: 40,
  },
  list: {
    marginTop: 40,
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
  infoText: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.textMuted,
    textAlign: "center",
    marginBottom: 40,
    paddingHorizontal: 8,
  },
  workInProgress: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textMuted,
    textAlign: "center",
    marginTop: 40,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  moreInfoLink: {
    alignItems: "center",
  },
  moreInfoText: {
    fontSize: 14,
    color: colors.textMuted,
    textDecorationLine: "underline",
  },
});
