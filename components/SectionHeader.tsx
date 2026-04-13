import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  title: string;
  expanded: boolean;
  onToggle: () => void;
};

export default function SectionHeader({ title, expanded, onToggle }: Props) {
  return (
    <Pressable style={styles.container} onPress={onToggle}>
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
    borderRadius: 10,
    marginBottom: 2,
  },
  title: {
    fontSize: 15,
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
