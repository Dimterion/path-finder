export type ActivityStatus = "Active" | "Completed" | "Canceled" | "Paused";

export type Activity = {
  id: string;
  number: number;
  activity: string;
  date: string;
  status: ActivityStatus;
  notes: string;
};
