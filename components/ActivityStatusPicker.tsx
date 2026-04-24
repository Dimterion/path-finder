import { Pressable, StyleSheet, Text, View } from "react-native";
import { type ActivityStatus } from "../data/activities";

const STATUSES: ActivityStatus[] = [
  "Active",
  "Completed",
  "Canceled",
  "Paused",
];

const STATUS_COLORS: Record<ActivityStatus, string> = {
  Active: "#1d4ed8",
  Completed: "#166534",
  Canceled: "#991b1b",
  Paused: "#6b7280",
};

type StatusPickerProps = {
  value: ActivityStatus;
  onChange: (status: ActivityStatus) => void;
};

export default function StatusPicker({ value, onChange }: StatusPickerProps) {
  return (
    <View style={styles.row}>
      {STATUSES.map((status) => {
        const selected = status === value;
        return (
          <Pressable
            key={status}
            onPress={() => onChange(status)}
            style={[
              styles.option,
              {
                backgroundColor: selected ? STATUS_COLORS[status] : "#f3f4f6",
                borderColor: selected ? STATUS_COLORS[status] : "#d1d5db",
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
  optionText: {
    fontSize: 13,
    fontWeight: "600",
  },
});
