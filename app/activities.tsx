import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { randomUUID } from "expo-crypto";
import { exportActivitiesCsv } from "../utils/exportCsv";
import {
  loadActivities,
  saveActivities,
  ACTIVITY_STATUS_COLORS,
} from "../features/activities/data";
import { type Activity } from "../features/activities/types";
import AddActivityModal from "../features/activities/AddActivityModal";

const COLUMNS = [
  { key: "number", label: "#", width: 64 },
  { key: "activity", label: "Activity", width: 180 },
  { key: "date", label: "Date", width: 140 },
  { key: "status", label: "Status", width: 140 },
  { key: "notes", label: "Notes", width: 440 },
];

function renumber(list: Activity[]): Activity[] {
  return list.map((act, index) => ({ ...act, number: index + 1 }));
}

export default function ActivitiesScreen() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAct, setSelectedAct] = useState<Activity | undefined>();

  useEffect(() => {
    loadActivities().then((data) => {
      setActivities(data);
      setLoading(false);
    });
  }, []);

  async function handleAdd(entry: Omit<Activity, "id" | "number">) {
    const newAct: Activity = {
      ...entry,
      id: randomUUID(),
      number: activities.length + 1,
    };
    const updated = renumber([...activities, newAct]);
    setActivities(updated);
    await saveActivities(updated);
  }

  async function handleEdit(entry: Omit<Activity, "id" | "number">) {
    if (!selectedAct) return;
    const updated = renumber(
      activities.map((act) =>
        act.id === selectedAct.id ? { ...act, ...entry } : act,
      ),
    );
    setActivities(updated);
    await saveActivities(updated);
  }

  async function handleDelete(id: string) {
    const updated = renumber(activities.filter((act) => act.id !== id));
    setActivities(updated);
    await saveActivities(updated);
  }

  function openAdd() {
    setSelectedAct(undefined);
    setModalVisible(true);
  }

  function openEdit(act: Activity) {
    setSelectedAct(act);
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
    setSelectedAct(undefined);
  }

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Activities Tracker</Text>
        <Text style={styles.headerSubtitle}>
          Track and manage your job search activities.
        </Text>
      </View>
      <View style={styles.toolbar}>
        <Pressable style={styles.addButton} onPress={openAdd}>
          <Text style={styles.addButtonText}>+ Add entry</Text>
        </Pressable>

        {activities.length > 0 && (
          <Pressable
            style={styles.exportButton}
            onPress={() => exportActivitiesCsv(activities)}
          >
            <Text style={styles.exportButtonText}>Export CSV</Text>
          </Pressable>
        )}
      </View>
      <Text style={styles.hintText}>
        Tap on your activities to edit or delete them.
      </Text>

      {activities.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>No activities yet</Text>
          <Text style={styles.emptyText}>
            Tap "Add activity" to start tracking your activities.
          </Text>
        </View>
      ) : (
        <View style={styles.tableContainer}>
          <ScrollView style={styles.tableWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator>
              <View>
                <View style={[styles.row, styles.headerRow]}>
                  {COLUMNS.map((col) => (
                    <View
                      key={col.key}
                      style={[
                        styles.cell,
                        styles.headerCell,
                        { width: col.width },
                      ]}
                    >
                      <Text style={styles.headerText}>{col.label}</Text>
                    </View>
                  ))}
                </View>

                {activities.map((act, index) => (
                  <Pressable
                    key={act.id}
                    onPress={() => openEdit(act)}
                    style={[
                      styles.row,
                      index % 2 === 0 ? styles.rowEven : styles.rowOdd,
                    ]}
                  >
                    <View style={[styles.cell, { width: COLUMNS[0].width }]}>
                      <Text style={styles.cellText}>{act.number}</Text>
                    </View>
                    <View style={[styles.cell, { width: COLUMNS[1].width }]}>
                      <Text style={styles.cellText} numberOfLines={2}>
                        {act.activity}
                      </Text>
                    </View>
                    <View style={[styles.cell, { width: COLUMNS[2].width }]}>
                      <Text style={styles.cellText}>{act.date}</Text>
                    </View>
                    <View style={[styles.cell, { width: COLUMNS[3].width }]}>
                      <View
                        style={[
                          styles.statusBadge,
                          {
                            backgroundColor:
                              ACTIVITY_STATUS_COLORS[act.status] ?? "#6b7280",
                          },
                        ]}
                      >
                        <Text style={styles.statusText}>{act.status}</Text>
                      </View>
                    </View>
                    <View style={[styles.cell, { width: COLUMNS[4].width }]}>
                      <Text style={styles.cellText} numberOfLines={3}>
                        {act.notes || "—"}
                      </Text>
                    </View>
                  </Pressable>
                ))}
              </View>
            </ScrollView>
          </ScrollView>
        </View>
      )}

      <AddActivityModal
        visible={modalVisible}
        onClose={closeModal}
        onSave={selectedAct ? handleEdit : handleAdd}
        onDelete={selectedAct ? () => handleDelete(selectedAct.id) : undefined}
        initialData={selectedAct}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f7fb", padding: 4 },
  header: {
    padding: 16,
    paddingBottom: 12,
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 8,
  },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  toolbar: {
    flexDirection: "column",
    gap: 10,
    padding: 16,
    paddingBottom: 12,
  },
  addButton: {
    backgroundColor: "#1f6feb",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignSelf: "flex-start",
    width: "100%",
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
  exportButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#1f6feb",
    width: "100%",
  },
  exportButtonText: {
    color: "#1f6feb",
    fontSize: 14,
    fontWeight: "600",
  },
  hintText: {
    fontSize: 12,
    lineHeight: 22,
    color: "#6b7280",
    marginBottom: 2,
    marginLeft: 2,
  },
  emptyState: {
    minHeight: 320,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#d1d5db",
    backgroundColor: "#f9fafb",
    margin: 16,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#6b7280",
    textAlign: "center",
    maxWidth: 360,
  },
  tableContainer: {
    flex: 1,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },
  tableWrapper: { flex: 1 },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  headerRow: { backgroundColor: "#111827" },
  rowEven: { backgroundColor: "#ffffff" },
  rowOdd: { backgroundColor: "#f9fafb" },
  cell: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: "#e5e7eb",
  },
  headerCell: { paddingVertical: 12 },
  cellText: { fontSize: 14, color: "#111827", lineHeight: 20 },
  headerText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#ffffff",
    textTransform: "uppercase",
  },
  statusBadge: {
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignSelf: "center",
    minWidth: 100,
  },
  statusText: {
    fontSize: 12,
    color: "#ffffff",
    fontWeight: "600",
    textAlign: "center",
  },
});
