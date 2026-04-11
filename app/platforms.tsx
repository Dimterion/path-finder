import { platforms } from "../data/platforms";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PlatformCard from "../components/PlatformCard";

export default function PlatformsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={platforms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlatformCard item={item} />}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.screenTitle}>Job Platforms</Text>
            <Text style={styles.screenText}>
              Explore different job search platforms and learn what each one can
              offer.
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 20,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
    color: "#111827",
  },
  screenText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#4b5563",
  },
});
