import { listings } from "../features/listings/data";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
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
            <TextInput
              style={styles.searchInput}
              placeholder="Search jobs..."
              placeholderTextColor="#9ca3af"
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoCapitalize="none"
              autoCorrect={false}
            />
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
  searchInput: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#111827",
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
