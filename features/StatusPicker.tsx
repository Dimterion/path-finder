import { Pressable, StyleSheet, Text, View } from "react-native";

type StatusPickerProps<T extends string> = {
  value: T;
  onChange: (status: T) => void;
  statuses: T[];
  colors: Record<T, string>;
};

export default function StatusPicker<T extends string>({
  value,
  onChange,
  statuses,
  colors,
}: StatusPickerProps<T>) {
  return (
    <View style={styles.row}>
      {statuses.map((status) => {
        const selected = status === value;
        return (
          <Pressable
            key={status}
            onPress={() => onChange(status)}
            style={[
              styles.option,
              {
                backgroundColor: selected ? colors[status] : "#f3f4f6",
                borderColor: selected ? colors[status] : "#d1d5db",
              },
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
  row: { flexDirection: "row", flexWrap: "wrap", marginBottom: 4 },
  option: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    marginRight: 8,
    marginBottom: 8,
  },
  optionText: { fontSize: 13, fontWeight: "600" },
});
