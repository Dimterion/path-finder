import { useState, useMemo } from "react";
import { listings } from "../features/listings/data";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ListingCard from "../features/listings/ListingCard";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function ListingsScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showTags, setShowTags] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { flatListRef, handleScroll, ScrollToTopComponent } = useScrollToTop();

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    listings.forEach((listing) => {
      listing.tags?.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, []);

  const filteredListings = listings.filter((item) => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.tags?.some((tag) => tag.toLowerCase().includes(query));

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => item.tags?.includes(tag));

    return matchesSearch && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSearchQuery("");
  };

  const hasActiveFilters = selectedTags.length > 0 || searchQuery;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={filteredListings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListingCard item={item} />}
        contentContainerStyle={styles.listContent}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.screenTitle}>
              Job Listings ({filteredListings.length})
            </Text>
            <Text style={styles.screenText}>
              Explore different companies and their potential career options.
            </Text>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search companies..."
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

            {/* Tag Filters */}
            {allTags.length > 0 && (
              <View style={styles.tagsSection}>
                <View style={styles.tagsHeader}>
                  <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => setShowTags(!showTags)}
                    accessibilityRole="button"
                    accessibilityLabel={`Filter by tags, ${showTags ? "expanded" : "collapsed"}`}
                  >
                    <Text style={styles.filterButtonText}>
                      Filter by tags
                      {selectedTags.length > 0 && (
                        <Text style={styles.filterBadge}>
                          {" "}
                          {selectedTags.length}
                        </Text>
                      )}
                    </Text>
                    <Text
                      style={[
                        styles.chevron,
                        showTags && styles.chevronRotated,
                      ]}
                    >
                      ▼
                    </Text>
                  </TouchableOpacity>
                  {hasActiveFilters && (
                    <TouchableOpacity onPress={clearFilters}>
                      <Text style={styles.clearAllText}>Clear all filters</Text>
                    </TouchableOpacity>
                  )}
                </View>

                {showTags && (
                  <View style={styles.tagsRow}>
                    {allTags.map((tag) => {
                      const isSelected = selectedTags.includes(tag);
                      return (
                        <TouchableOpacity
                          key={tag}
                          style={[
                            styles.tagChip,
                            isSelected && styles.tagChipSelected,
                          ]}
                          onPress={() => toggleTag(tag)}
                          accessibilityRole="checkbox"
                          accessibilityState={{ checked: isSelected }}
                        >
                          <Text
                            style={[
                              styles.tagChipText,
                              isSelected && styles.tagChipTextSelected,
                            ]}
                          >
                            {tag}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                )}
              </View>
            )}
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No listings found.</Text>
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
    marginBottom: 16,
  },
  searchContainer: {
    position: "relative",
    marginBottom: 20,
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
  tagsSection: {
    marginTop: 8,
  },
  tagsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    flexWrap: "wrap",
    gap: 8,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#1d4ed8",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#1d4ed8",
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#ffffff",
  },
  filterBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: "600",
  },
  chevron: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ffffff",
    lineHeight: 14,
  },
  chevronRotated: {
    transform: [{ rotate: "180deg" }],
  },
  clearAllText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1d4ed8",
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tagChip: {
    backgroundColor: "#f3f4f6",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  tagChipSelected: {
    backgroundColor: "#1d4ed8",
    borderColor: "#1d4ed8",
  },
  tagChipText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#374151",
  },
  tagChipTextSelected: {
    color: "#ffffff",
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
