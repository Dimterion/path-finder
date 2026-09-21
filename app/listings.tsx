import { listings } from "../features/listings/data";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import ListingCard from "../features/listings/ListingCard";

export default function ListingsScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredListings = listings.filter((item) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;

    const titleMatch = item.title.toLowerCase().includes(query);
    const descriptionMatch = item.description.toLowerCase().includes(query);
    const tagsMatch = item.tags?.some((tag) =>
      tag.toLowerCase().includes(query),
    );

    return titleMatch || descriptionMatch || tagsMatch;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredListings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListingCard item={item} />}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.screenTitle}>Job Listings</Text>
            <Text style={styles.screenText}>
              Explore different job search listings and learn what each one can
              offer.
            </Text>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search jobs..."
                placeholderTextColor="#9ca3af"
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TouchableOpacity
                style={[
                  styles.clearButton,
                  !searchQuery && styles.clearButtonDisabled,
                ]}
                onPress={() => setSearchQuery("")}
                disabled={!searchQuery}
                accessibilityLabel="Clear search"
                hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
              >
                <Text
                  style={[
                    styles.clearButtonText,
                    !searchQuery && styles.clearButtonTextDisabled,
                  ]}
                >
                  ✕
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No listings found</Text>
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
    marginBottom: 16,
  },
  searchContainer: {
    position: "relative",
  },
  searchInput: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    paddingRight: 40,
    fontSize: 15,
    color: "#111827",
  },
  clearButton: {
    position: "absolute",
    right: 12,
    bottom: 12,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  clearButtonDisabled: {
    opacity: 0.3,
  },
  clearButtonText: {
    fontSize: 18,
    color: "#6b7280",
    fontWeight: "500",
  },
  clearButtonTextDisabled: {
    color: "#d1d5db",
  },
  emptyState: {
    padding: 32,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#6b7280",
  },
});
