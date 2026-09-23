import { TouchableOpacity, StyleSheet, Text } from "react-native";

type ScrollToTopProps = {
  scrollY: number;
  onScrollToTop: () => void;
};

export default function ScrollToTop({
  scrollY,
  onScrollToTop,
}: ScrollToTopProps) {
  const threshold = 300;
  const visible = scrollY > threshold;

  if (!visible) return null;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onScrollToTop}
      activeOpacity={0.7}
      accessibilityLabel="Scroll to top"
      hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
    >
      <Text style={styles.arrowText}>↑</Text>
    </TouchableOpacity>
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
  arrowText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#6b7280",
    lineHeight: 22,
  },
});
