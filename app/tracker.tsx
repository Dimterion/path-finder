import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { type JobApplication, loadApplications } from "../data/applications";

const COLUMNS = [
  { key: "number", label: "#", width: 48 },
  { key: "company", label: "Company", width: 140 },
  { key: "role", label: "Role", width: 140 },
  { key: "date", label: "Date", width: 100 },
  { key: "status", label: "Status", width: 110 },
  { key: "notes", label: "Notes", width: 200 },
];

const STATUS_COLORS: Record<string, string> = {
  Applied: "#1d4ed8",
  Interview: "#b45309",
  Offer: "#166534",
  Rejected: "#991b1b",
  Withdrawn: "#6b7280",
};

export default function TrackerScreen() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadApplications().then((data) => {
      setApplications(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Add button */}
      <View style={styles.toolbar}>
        <Pressable style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add application</Text>
        </Pressable>
      </View>

      {applications.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>No applications yet</Text>
          <Text style={styles.emptyText}>
            Tap "Add application" to start tracking your job search.
          </Text>
        </View>
      ) : (
        /* Outer vertical scroll for rows */
        <ScrollView style={styles.tableWrapper}>
          {/* Inner horizontal scroll for columns */}
          <ScrollView horizontal showsHorizontalScrollIndicator>
            <View>
              {/* Header row */}
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

              {/* Data rows */}
              {applications.map((app, index) => (
                <View
                  key={app.id}
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
                      {app.company}
                    </Text>
                  </View>
                  <View style={[styles.cell, { width: COLUMNS[2].width }]}>
                    <Text style={styles.cellText} numberOfLines={2}>
                      {app.role}
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
                </View>
              ))}
            </View>
          </ScrollView>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  toolbar: {
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
  addButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
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
  tableWrapper: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  headerRow: {
    backgroundColor: "#1f2937",
  },
  rowEven: {
    backgroundColor: "#ffffff",
  },
  rowOdd: {
    backgroundColor: "#f9fafb",
  },
  cell: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: "#e5e7eb",
  },
  headerCell: {
    paddingVertical: 12,
  },
  cellText: {
    fontSize: 14,
    color: "#111827",
    lineHeight: 20,
  },
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
    alignSelf: "flex-start",
  },
  statusText: {
    fontSize: 12,
    color: "#ffffff",
    fontWeight: "600",
  },
});
