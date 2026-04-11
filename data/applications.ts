import AsyncStorage from "@react-native-async-storage/async-storage";

export type ApplicationStatus =
  | "Applied"
  | "Interview"
  | "Offer"
  | "Rejected"
  | "Withdrawn";

export type JobApplication = {
  id: string;
  number: number;
  company: string;
  role: string;
  date: string;
  status: ApplicationStatus;
  notes: string;
};

const STORAGE_KEY = "pathfinder_applications";

export async function loadApplications(): Promise<JobApplication[]> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export async function saveApplications(
  applications: JobApplication[],
): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
  } catch {}
}
