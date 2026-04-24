import { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { type ActivityStatus, type Activity } from "../data/activities";
import StatusPicker from "./StatusPicker";

type Props = {
  visible: boolean;
  onClose: () => void;
  onSave: (activity: Omit<Activity, "id" | "number">) => void;
  onDelete?: () => void;
  initialData?: Activity;
};

const ACTIVITY_STATUSES: ActivityStatus[] = [
  "Active",
  "Completed",
  "Canceled",
  "Paused",
];

const ACTIVITY_STATUS_COLORS: Record<ActivityStatus, string> = {
  Active: "#1d4ed8",
  Completed: "#166534",
  Canceled: "#991b1b",
  Paused: "#6b7280",
};

const EMPTY_FORM = {
  activity: "",
  date: "",
  status: "Active" as ActivityStatus,
  notes: "",
};

export default function AddActivityModal({
  visible,
  onClose,
  onSave,
  onDelete,
  initialData,
}: Props) {
  const [form, setForm] = useState(EMPTY_FORM);
  const isEditing = !!initialData;

  useEffect(() => {
    if (visible) {
      setForm(
        initialData
          ? {
              activity: initialData.activity,
              date: initialData.date,
              status: initialData.status,
              notes: initialData.notes,
            }
          : EMPTY_FORM,
      );
    }
  }, [visible, initialData]);

  function handleSave() {
    if (!form.activity.trim() || !form.date.trim()) return;

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(form.date)) {
      Alert.alert(
        "Invalid date",
        "Please use the format YYYY-MM-DD, e.g. 2026-04-12.",
      );
      return;
    }

    onSave(form);
    onClose();
  }

  function handleDelete() {
    Alert.alert("Delete activity", `Remove ${form.activity}?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          onDelete?.();
          onClose();
        },
      },
    ]);
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.sheetWrapper}
        >
          <Pressable style={styles.sheet} onPress={(e) => e.stopPropagation()}>
            <View style={styles.handle} />

            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              <View style={styles.titleRow}>
                <Text style={styles.title}>
                  {isEditing ? "Edit Activity" : "New Activity"}
                </Text>
                {isEditing && (
                  <Pressable onPress={handleDelete} style={styles.deleteButton}>
                    <Text style={styles.deleteText}>Delete</Text>
                  </Pressable>
                )}
              </View>

              <Text style={styles.label}>Activity *</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. Frontend Developer"
                placeholderTextColor="#9ca3af"
                value={form.activity}
                onChangeText={(v) => setForm({ ...form, activity: v })}
              />

              <Text style={styles.label}>Date *</Text>
              <TextInput
                style={styles.input}
                placeholder="YYYY-MM-DD"
                placeholderTextColor="#9ca3af"
                value={form.date}
                onChangeText={(v) => setForm({ ...form, date: v })}
              />

              <Text style={styles.label}>Status</Text>
              <StatusPicker
                value={form.status}
                onChange={(v) => setForm({ ...form, status: v })}
                statuses={ACTIVITY_STATUSES}
                colors={ACTIVITY_STATUS_COLORS}
              />

              <Text style={[styles.label, { marginTop: 14 }]}>Notes</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Any extra details..."
                placeholderTextColor="#9ca3af"
                value={form.notes}
                onChangeText={(v) => setForm({ ...form, notes: v })}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />

              <View style={styles.actions}>
                <Pressable style={styles.cancelButton} onPress={onClose}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.saveButton,
                    (!form.activity.trim() || !form.date.trim()) &&
                      styles.saveButtonDisabled,
                  ]}
                  onPress={handleSave}
                >
                  <Text style={styles.saveText}>
                    {isEditing ? "Update" : "Save"}
                  </Text>
                </Pressable>
              </View>
            </ScrollView>
          </Pressable>
        </KeyboardAvoidingView>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "flex-end",
  },
  sheetWrapper: { justifyContent: "flex-end" },
  sheet: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 36,
    maxHeight: "90%",
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: "#d1d5db",
    borderRadius: 999,
    alignSelf: "center",
    marginBottom: 18,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },
  deleteButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: "#fee2e2",
  },
  deleteText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#991b1b",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 15,
    color: "#111827",
    backgroundColor: "#f9fafb",
    marginBottom: 14,
  },
  textArea: {
    height: 100,
    marginBottom: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  cancelButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: "#f3f4f6",
  },
  cancelText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
  },
  saveButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    backgroundColor: "#1f6feb",
  },
  saveButtonDisabled: { backgroundColor: "#93c5fd" },
  saveText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#ffffff",
  },
});
