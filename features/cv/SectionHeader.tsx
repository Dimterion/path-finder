import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  title: string;
  expanded: boolean;
  onToggle: () => void;
};

export default function SectionHeader({ title, expanded, onToggle }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.containerPressed,
      ]}
      onPress={onToggle}
      accessibilityRole="button"
      accessibilityState={{ expanded }}
      accessibilityLabel={`${title} section`}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.chevron}>{expanded ? "▲" : "▼"}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1f2937",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 2,
  },
  containerPressed: {
    backgroundColor: "#374151",
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  chevron: {
    fontSize: 12,
    color: "#9ca3af",
  },
});
