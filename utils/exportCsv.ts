import { File, Paths } from "expo-file-system";
import * as Sharing from "expo-sharing";
import { type JobApplication } from "../data/applications";

function escapeCsvValue(value: string | number): string {
  const str = String(value);
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
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
  const fileName = `applications_${new Date().toISOString().slice(0, 10)}.csv`;

  const file = new File(Paths.cache, fileName);
  file.write(csv);

  const canShare = await Sharing.isAvailableAsync();
  if (!canShare) return;

  await Sharing.shareAsync(file.uri, {
    mimeType: "text/csv",
    dialogTitle: "Export applications",
    UTI: "public.comma-separated-values-text",
  });
}
