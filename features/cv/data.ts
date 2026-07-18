import AsyncStorage from "@react-native-async-storage/async-storage";
import { randomUUID } from "expo-crypto";

export type WorkEntry = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type EducationEntry = {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type CvData = {
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  summary: string;
  skills: string;
  experience: WorkEntry[];
  education: EducationEntry[];
  linkedin: string;
  github: string;
  website: string;
};

export const EMPTY_CV: CvData = {
  name: "",
  title: "",
  email: "",
  phone: "",
  address: "",
  summary: "",
  skills: "",
  experience: [],
  education: [],
  linkedin: "",
  github: "",
  website: "",
};

export function makeWorkEntry(partial: Omit<WorkEntry, "id">): WorkEntry {
  return { ...partial, id: randomUUID() };
}

export function makeEducationEntry(
  partial: Omit<EducationEntry, "id">,
): EducationEntry {
  return { ...partial, id: randomUUID() };
}

const STORAGE_KEY = "pathfinder_cv";

export async function loadCv(): Promise<CvData> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    return raw ? { ...EMPTY_CV, ...JSON.parse(raw) } : EMPTY_CV;
  } catch {
    return EMPTY_CV;
  }
}

export async function saveCv(cv: CvData): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cv));
  } catch {}
}
