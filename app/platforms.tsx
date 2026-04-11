import { platforms, type JobPlatform } from "../data/platforms";
import {
  Alert,
  FlatList,
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

async function openExternalLink(url: string) {
  const supported = await Linking.canOpenURL(url);

  if (!supported) {
    Alert.alert("Cannot open link", "This link could not be opened.");
    return;
  }

  await Linking.openURL(url);
}

function renderPlatformCard({ item }: { item: JobPlatform }) {
  return (
    <View style={styles.card}>
      {item.imageUrl ? (
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
      ) : null}

      <Text style={styles.title}>{item.title}</Text>

      <Text style={styles.description}>{item.description}</Text>

      {item.tags && item.tags.length > 0 ? (
        <View style={styles.tagsRow}>
          {item.tags.map((tag) => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      ) : null}

      <Pressable
        style={styles.linkButton}
        onPress={() => openExternalLink(item.websiteUrl)}
      >
        <Text style={styles.linkButtonText}>Visit platform</Text>
      </Pressable>

      {item.extraLinks && item.extraLinks.length > 0 ? (
        <View style={styles.extraLinksBlock}>
          {item.extraLinks.map((link) => (
            <Pressable
              key={link.url}
              onPress={() => openExternalLink(link.url)}
            >
              <Text style={styles.extraLinkText}>{link.label}</Text>
            </Pressable>
          ))}
        </View>
      ) : null}
    </View>
  );
}

export default function PlatformsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={platforms}
        keyExtractor={(item) => item.id}
        renderItem={renderPlatformCard}
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
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
    color: "#111827",
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: "#374151",
    marginBottom: 12,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 14,
  },
  tag: {
    backgroundColor: "#e8f0fe",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  tagText: {
    fontSize: 13,
    color: "#1d4ed8",
    fontWeight: "600",
  },
  linkButton: {
    backgroundColor: "#1f6feb",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  linkButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
  },
  extraLinksBlock: {
    gap: 8,
  },
  extraLinkText: {
    fontSize: 14,
    color: "#1f6feb",
    fontWeight: "500",
  },
});
