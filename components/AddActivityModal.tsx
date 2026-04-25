import { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { type ActivityStatus, type Activity } from "../data/activities";
import StatusPicker from "./StatusPicker";
import { modalStyles as styles } from "../styles/modal";

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
