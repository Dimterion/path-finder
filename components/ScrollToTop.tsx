import { Pressable, StyleSheet, Text } from "react-native";

type ScrollToTopProps = {
  scrollY: number;
  onScrollToTop: () => void;
  threshold?: number;
};

export default function ScrollToTop({
  scrollY,
  onScrollToTop,
  threshold = 300,
}: ScrollToTopProps) {
  const visible = scrollY > threshold;

  if (!visible) return null;

  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      onPress={onScrollToTop}
      accessibilityRole="button"
      accessibilityLabel="Scroll to top"
      hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
    >
      <Text style={styles.arrowText}>↑</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 12,
    right: 12,
    width: 40,
    height: 40,
    borderRadius: 24,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    backgroundColor: "#f9fafb",
  },
  arrowText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    lineHeight: 24,
    marginTop: -2,
  },
});
