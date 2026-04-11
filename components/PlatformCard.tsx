import { type JobPlatform } from "../data/platforms";
import {
  Alert,
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type PlatformCardProps = {
  item: JobPlatform;
};

async function openExternalLink(url: string) {
  const supported = await Linking.canOpenURL(url);

  if (!supported) {
    Alert.alert("Cannot open link", "This link could not be opened.");
    return;
  }

  await Linking.openURL(url);
}

export default function PlatformCard({ item }: PlatformCardProps) {
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

const styles = StyleSheet.create({
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
    marginBottom: 14,
  },
  tag: {
    backgroundColor: "#e8f0fe",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    marginRight: 8,
    marginBottom: 8,
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
    marginTop: 2,
  },
  extraLinkText: {
    fontSize: 14,
    color: "#1f6feb",
    fontWeight: "500",
    marginBottom: 8,
  },
});
