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
// import { exportActivitiesCsv } from "../utils/exportCsv";
import {
  type Activity,
  loadActivities,
  saveActivities,
} from "../data/activities";
import AddApplicationModal from "../components/AddApplicationModal";

const COLUMNS = [
  { key: "number", label: "#", width: 48 },
  { key: "activity", label: "Activity", width: 140 },
  { key: "date", label: "Date", width: 120 },
  { key: "status", label: "Status", width: 120 },
  { key: "notes", label: "Notes", width: 200 },
];

const STATUS_COLORS: Record<string, string> = {
  InProgress: "#1d4ed8",
  Completed: "#166534",
  Canceled: "#991b1b",
  OnHold: "#6b7280",
};

function renumber(list: Activity[]): Activity[] {
  return list.map((app, index) => ({ ...app, number: index + 1 }));
}

export default function ActivitiesScreen() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedApp, setSelectedApp] = useState<Activity | undefined>();

  useEffect(() => {
    loadActivities().then((data) => {
      setActivities(data);
      setLoading(false);
    });
  }, []);

  async function handleAdd(entry: Omit<Activity, "id" | "number">) {
    const newApp: Activity = {
      ...entry,
      id: randomUUID(),
      number: activities.length + 1,
    };
    const updated = renumber([...activities, newApp]);
    setActivities(updated);
    await saveActivities(updated);
  }

  async function handleEdit(entry: Omit<Activity, "id" | "number">) {
    if (!selectedApp) return;
    const updated = renumber(
      activities.map((app) =>
        app.id === selectedApp.id ? { ...app, ...entry } : app,
      ),
    );
    setActivities(updated);
    await saveActivities(updated);
  }

  async function handleDelete(id: string) {
    const updated = renumber(activities.filter((app) => app.id !== id));
    setActivities(updated);
    await saveActivities(updated);
  }

  function openAdd() {
    setSelectedApp(undefined);
    setModalVisible(true);
  }

  function openEdit(app: Activity) {
    setSelectedApp(app);
    setModalVisible(true);
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
      <View style={styles.toolbar}>
        <Pressable style={styles.addButton} onPress={openAdd}>
          <Text style={styles.addButtonText}>+ Add entry</Text>
        </Pressable>

        {/* {activities.length > 0 && (
          <Pressable
            style={styles.exportButton}
            onPress={() => exportActivitiesCsv(activities)}
          >
            <Text style={styles.exportButtonText}>Export CSV</Text>
          </Pressable>
        )} */}
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

              {activities.map((app, index) => (
                <Pressable
                  key={app.id}
                  onPress={() => openEdit(app)}
                  style={[
                    styles.row,
                    index % 2 === 0 ? styles.rowEven : styles.rowOdd,
                  ]}
                >
                  <View style={[styles.cell, { width: COLUMNS[0].width }]}>
                    <Text style={styles.cellText}>{app.number}</Text>
                  </View>
                  <View style={[styles.cell, { width: COLUMNS[1].width }]}>
                    <Text style={styles.cellText} numberOfLines={2}>
                      {app.activity}
                    </Text>
                  </View>
                  <View style={[styles.cell, { width: COLUMNS[3].width }]}>
                    <Text style={styles.cellText}>{app.date}</Text>
                  </View>
                  <View style={[styles.cell, { width: COLUMNS[4].width }]}>
                    <View
                      style={[
                        styles.statusBadge,
                        {
                          backgroundColor:
                            STATUS_COLORS[app.status] ?? "#6b7280",
                        },
                      ]}
                    >
                      <Text style={styles.statusText}>{app.status}</Text>
                    </View>
                  </View>
                  <View style={[styles.cell, { width: COLUMNS[5].width }]}>
                    <Text style={styles.cellText} numberOfLines={3}>
                      {app.notes || "—"}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </View>
          </ScrollView>
        </ScrollView>
      )}

      {/* <AddApplicationModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setSelectedApp(undefined);
        }}
        onSave={selectedApp ? handleEdit : handleAdd}
        onDelete={selectedApp ? () => handleDelete(selectedApp.id) : undefined}
        initialData={selectedApp}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f7fb" },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  toolbar: {
    flexDirection: "row",
    padding: 16,
    paddingBottom: 12,
  },
  addButton: {
    backgroundColor: "#1f6feb",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  addButtonText: { color: "#ffffff", fontSize: 15, fontWeight: "600" },
  exportButton: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1f6feb",
    marginLeft: 10,
  },
  exportButtonText: {
    color: "#1f6feb",
    fontSize: 15,
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#6b7280",
    textAlign: "center",
  },
  tableWrapper: { flex: 1 },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  headerRow: { backgroundColor: "#1f2937" },
  rowEven: { backgroundColor: "#ffffff" },
  rowOdd: { backgroundColor: "#f9fafb" },
  cell: {
    paddingVertical: 10,
    paddingHorizontal: 10,
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
    paddingHorizontal: 8,
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
