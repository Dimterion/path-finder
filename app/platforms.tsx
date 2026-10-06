import { platforms } from "../features/platforms/data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PlatformCard from "../features/platforms/PlatformCard";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function PlatformsScreen() {
  const { flatListRef, handleScroll, ScrollToTopComponent } = useScrollToTop();

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={platforms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlatformCard item={item} />}
        contentContainerStyle={styles.listContent}
        onScroll={handleScroll}
        scrollEventThrottle={16}
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
      <ScrollToTopComponent />
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
