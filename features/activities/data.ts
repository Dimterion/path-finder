import AsyncStorage from "@react-native-async-storage/async-storage";
import type { Activity, ActivityStatus } from "./types";

const STORAGE_KEY = "pathfinder_activities";

export const ACTIVITY_STATUS_COLORS: Record<ActivityStatus, string> = {
  Active: "#1d4ed8",
  Completed: "#166534",
  Canceled: "#991b1b",
  Paused: "#6b7280",
};

function isValidActivity(value: unknown): value is Activity {
  if (!value || typeof value !== "object") return false;

  const activity = value as Partial<Activity>;

  return (
    typeof activity.id === "string" &&
    typeof activity.number === "number" &&
    typeof activity.activity === "string" &&
    typeof activity.date === "string" &&
    typeof activity.status === "string" &&
    typeof activity.notes === "string"
  );
}

export async function loadActivities(): Promise<Activity[]> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);

    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);

    if (!Array.isArray(parsed)) return [];

    return parsed.filter(isValidActivity);
  } catch (error) {
    console.error("Failed to load activities:", error);
    return [];
  }
}

export async function saveActivities(activities: Activity[]): Promise<boolean> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(activities));
    return true;
  } catch (error) {
    console.error("Failed to save activities:", error);
    return false;
  }
}
