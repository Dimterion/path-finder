import { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

type ScrollToTopProps = {
  scrollY: number;
  onScrollToTop: () => void;
};

export default function ScrollToTop({
  scrollY,
  onScrollToTop,
}: ScrollToTopProps) {
  const [visible, setVisible] = useState(false);
  const threshold = 300;

  useEffect(() => {
    setVisible(scrollY > threshold);
  }, [scrollY]);

  if (!visible) return null;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onScrollToTop}
      activeOpacity={0.7}
      accessibilityLabel="Scroll to top"
    >
      <View style={styles.iconContainer}>
        <View style={styles.arrowUp} />
        <View style={styles.arrowLeft} />
        <View style={styles.arrowRight} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 24,
    left: 24,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  iconContainer: {
    width: 20,
    height: 20,
    position: "relative",
  },
  arrowUp: {
    position: "absolute",
    width: 3,
    height: 14,
    backgroundColor: "#6b7280",
    left: 8.5,
    bottom: 3,
    borderRadius: 1.5,
  },
  arrowLeft: {
    position: "absolute",
    width: 10,
    height: 3,
    backgroundColor: "#6b7280",
    left: 3,
    top: 5,
    transform: [{ rotate: "45deg" }],
    borderRadius: 1.5,
  },
  arrowRight: {
    position: "absolute",
    width: 10,
    height: 3,
    backgroundColor: "#6b7280",
    right: 3,
    top: 5,
    transform: [{ rotate: "-45deg" }],
    borderRadius: 1.5,
  },
});
