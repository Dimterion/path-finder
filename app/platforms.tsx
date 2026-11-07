import { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { platforms } from "../features/platforms/data";
import PlatformCard from "../features/platforms/PlatformCard";
import ScreenWrapper from "../components/ScreenWrapper";

export default function PlatformsScreen() {
  const [showTags, setShowTags] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();

    platforms.forEach((platform) => {
      platform.tags?.forEach((tag) => tagsSet.add(tag));
    });

    return Array.from(tagsSet).sort();
  }, []);

  const filteredPlatforms = useMemo(() => {
    return platforms.filter((platform) => {
      return (
        selectedTags.length === 0 ||
        selectedTags.every((tag) => platform.tags?.includes(tag))
      );
    });
  }, [selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((previousTags) =>
      previousTags.includes(tag)
        ? previousTags.filter((item) => item !== tag)
        : [...previousTags, tag],
    );
  };

  const handleTagClick = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      toggleTag(tag);
      setShowTags(true);
    }
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <ScreenWrapper
      data={filteredPlatforms}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlatformCard
          item={item}
          selectedTags={selectedTags}
          onTagClick={handleTagClick}
        />
      )}
      contentContainerStyle={styles.listContent}
      containerStyle={styles.container}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.screenTitle}>
            Job Platforms ({filteredPlatforms.length})
          </Text>

          <Text style={styles.screenText}>
            Explore different job search platforms and learn what each one can
            offer.
          </Text>

          {allTags.length > 0 && (
            <View style={styles.filtersBlock}>
              <View style={styles.filterHeader}>
                <Pressable
                  style={styles.filterButton}
                  onPress={() => setShowTags(!showTags)}
                  accessibilityRole="button"
                  accessibilityLabel="Filter platforms by tags"
                  accessibilityState={{ expanded: showTags }}
                >
                  <Text style={styles.filterButtonText}>
                    Filter by tags
                    {selectedTags.length > 0 ? ` (${selectedTags.length})` : ""}
                  </Text>

                  <Text style={styles.filterArrow}>{showTags ? "▲" : "▼"}</Text>
                </Pressable>

                {selectedTags.length > 0 && (
                  <Pressable
                    onPress={clearFilters}
                    accessibilityRole="button"
                    accessibilityLabel="Clear tag filters"
                  >
                    <Text style={styles.clearFiltersText}>Clear filters</Text>
                  </Pressable>
                )}
              </View>

              {showTags && (
                <View style={styles.tagsRow}>
                  {allTags.map((tag) => {
                    const isSelected = selectedTags.includes(tag);

                    return (
                      <Pressable
                        key={tag}
                        style={[
                          styles.filterTag,
                          isSelected && styles.filterTagSelected,
                        ]}
                        onPress={() => toggleTag(tag)}
                        accessibilityRole="button"
                        accessibilityLabel={`Filter by ${tag}`}
                        accessibilityState={{ selected: isSelected }}
                      >
                        <Text
                          style={[
                            styles.filterTagText,
                            isSelected && styles.filterTagTextSelected,
                          ]}
                        >
                          {tag}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
              )}
            </View>
          )}
        </View>
      }
    />
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
  filtersBlock: {
    marginTop: 16,
  },
  filterHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#1f6feb",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  filterButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
  filterArrow: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "700",
  },
  clearFiltersText: {
    color: "#1f6feb",
    fontSize: 14,
    fontWeight: "600",
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 12,
  },
  filterTag: {
    backgroundColor: "#e5e7eb",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
  },
  filterTagSelected: {
    backgroundColor: "#1f6feb",
  },
  filterTagText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#374151",
  },
  filterTagTextSelected: {
    color: "#ffffff",
  },
});
