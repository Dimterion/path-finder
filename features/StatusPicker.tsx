import { Pressable, StyleSheet, Text, View } from "react-native";

type StatusPickerProps<T extends string> = {
  label: string;
  value: T;
  onChange: (status: T) => void;
  statuses: T[];
  colors: Record<T, string>;
};

export default function StatusPicker<T extends string>({
  label,
  value,
  onChange,
  statuses,
  colors,
}: StatusPickerProps<T>) {
  return (
    <View
      style={styles.row}
      accessibilityRole="radiogroup"
      accessibilityLabel={label}
    >
      {statuses.map((status) => {
        const selected = status === value;

        return (
          <Pressable
            key={status}
            onPress={() => onChange(status)}
            accessibilityRole="radio"
            accessibilityLabel={status}
            accessibilityState={{ checked: selected }}
            style={({ pressed }) => [
              styles.option,
              {
                backgroundColor: selected ? colors[status] : "#f3f4f6",
                borderColor: selected ? colors[status] : "#d1d5db",
              },
              pressed && styles.optionPressed,
            ]}
          >
            <Text
              style={[
                styles.optionText,
                { color: selected ? "#ffffff" : "#374151" },
              ]}
            >
              {status}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 4,
  },
  option: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    marginRight: 8,
    marginBottom: 8,
  },
  optionPressed: {
    opacity: 0.8,
  },
  optionText: {
    fontSize: 13,
    fontWeight: "600",
  },
});
