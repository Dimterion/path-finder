import AsyncStorage from "@react-native-async-storage/async-storage";

export type ActivityStatus =
  | "Active"
  | "Completed"
  | "Canceled"
  | "Paused";

export type Activity = {
  id: string;
  number: number;
  activity: string;
  date: string;
  status: ActivityStatus;
  notes: string;
};

const STORAGE_KEY = "pathfinder_activities";

export async function loadActivities(): Promise<Activity[]> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export async function saveActivities(activities: Activity[]): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(activities));
  } catch {}
}
