import { Alert } from "react-native";
import { File, Paths } from "expo-file-system";
import * as Sharing from "expo-sharing";
import { type JobApplication } from "../data/applications";
import { type Activity } from "../data/activities";

function escapeCsvValue(value: string | number): string {
  const str = String(value);
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

async function shareAsCsv(
  csv: string,
  fileName: string,
  dialogTitle: string,
): Promise<void> {
  try {
    const file = new File(Paths.cache, fileName);
    file.write(csv);
    const canShare = await Sharing.isAvailableAsync();
    if (!canShare) return;
    await Sharing.shareAsync(file.uri, {
      mimeType: "text/csv",
      dialogTitle,
      UTI: "public.comma-separated-values-text",
    });
  } catch {
    Alert.alert("Export failed", "Something went wrong while exporting.");
  }
}

function applicationsToCsv(applications: JobApplication[]): string {
  const headers = ["#", "Company", "Role", "Date", "Status", "Notes"];
  const headerRow = headers.join(",");

  const dataRows = applications.map((app) =>
    [app.number, app.company, app.role, app.date, app.status, app.notes || ""]
      .map(escapeCsvValue)
      .join(","),
  );

  return [headerRow, ...dataRows].join("\n");
}

export async function exportApplicationsCsv(
  applications: JobApplication[],
): Promise<void> {
  if (applications.length === 0) return;
  const csv = applicationsToCsv(applications);
  await shareAsCsv(
    csv,
    `applications_${new Date().toISOString().slice(0, 10)}.csv`,
    "Export applications",
  );
}

function activitiesToCsv(activities: Activity[]): string {
  const headers = ["#", "Activity", "Date", "Status", "Notes"];
  const headerRow = headers.join(",");

  const dataRows = activities.map((activity) =>
    [
      activity.number,
      activity.activity,
      activity.date,
      activity.status,
      activity.notes || "",
    ]
      .map(escapeCsvValue)
      .join(","),
  );

  return [headerRow, ...dataRows].join("\n");
}

export async function exportActivitiesCsv(
  activities: Activity[],
): Promise<void> {
  if (activities.length === 0) return;
  const csv = activitiesToCsv(activities);
  await shareAsCsv(
    csv,
    `activities_${new Date().toISOString().slice(0, 10)}.csv`,
    "Export activities",
  );
}
