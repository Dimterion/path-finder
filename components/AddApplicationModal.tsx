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
import {
  type ApplicationStatus,
  type JobApplication,
} from "../data/applications";
import StatusPicker from "./StatusPicker";
import { modalStyles as styles } from "../styles/modal";

type Props = {
  visible: boolean;
  onClose: () => void;
  onSave: (application: Omit<JobApplication, "id" | "number">) => void;
  onDelete?: () => void;
  initialData?: JobApplication;
};

const APPLICATION_STATUSES: ApplicationStatus[] = [
  "Applied",
  "Interview",
  "Offer",
  "Rejected",
  "Withdrawn",
];

const APPLICATION_STATUS_COLORS: Record<ApplicationStatus, string> = {
  Applied: "#1d4ed8",
  Interview: "#b45309",
  Offer: "#166534",
  Rejected: "#991b1b",
  Withdrawn: "#6b7280",
};

const EMPTY_FORM = {
  company: "",
  role: "",
  date: "",
  status: "Applied" as ApplicationStatus,
  notes: "",
};

export default function AddApplicationModal({
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
              company: initialData.company,
              role: initialData.role,
              date: initialData.date,
              status: initialData.status,
              notes: initialData.notes,
            }
          : EMPTY_FORM,
      );
    }
  }, [visible, initialData]);

  function handleSave() {
    if (!form.company.trim() || !form.role.trim() || !form.date.trim()) return;

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
    Alert.alert(
      "Delete application",
      `Remove ${form.company} — ${form.role}?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            onDelete?.();
            onClose();
          },
        },
      ],
    );
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
                  {isEditing ? "Edit Application" : "New Application"}
                </Text>
                {isEditing && (
                  <Pressable onPress={handleDelete} style={styles.deleteButton}>
                    <Text style={styles.deleteText}>Delete</Text>
                  </Pressable>
                )}
              </View>

              <Text style={styles.label}>Company *</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. Acme Corp"
                placeholderTextColor="#9ca3af"
                value={form.company}
                onChangeText={(v) => setForm({ ...form, company: v })}
              />

              <Text style={styles.label}>Role *</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. Frontend Developer"
                placeholderTextColor="#9ca3af"
                value={form.role}
                onChangeText={(v) => setForm({ ...form, role: v })}
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
                statuses={APPLICATION_STATUSES}
                colors={APPLICATION_STATUS_COLORS}
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
                    (!form.company.trim() ||
                      !form.role.trim() ||
                      !form.date.trim()) &&
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
