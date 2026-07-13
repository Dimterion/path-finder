export type PlatformLink = {
  label: string;
  url: string;
};

export type PlatformImageKey = "linkedin" | "welcometothejungle" | "glassdoor";

export type JobPlatform = {
  id: string;
  title: string;
  websiteUrl: string;
  description: string;
  imageKey?: PlatformImageKey;
  tags?: string[];
  extraLinks?: PlatformLink[];
};

export const platforms: JobPlatform[] = [
  {
    id: "01_linkedIn",
    title: "LinkedIn",
    websiteUrl: "https://www.linkedin.com/",
    description:
      "Main starting point. The biggest platform. Create the basis of your profile here and use it further as a template for other platforms, personal profiles, job applications.",
    imageKey: "linkedin",
    tags: ["General", "Social", "Profile"],
    extraLinks: [
      {
        label: "Help Center",
        url: "https://www.linkedin.com/help/linkedin",
      },
    ],
  },
  {
    id: "02_welcome_to_the_jungle",
    title: "Welcome to the Jungle",
    websiteUrl: "https://www.welcometothejungle.com/",
    description:
      "A potentially good second option to visit. Narrowed down search (region + sphere). Additional information about the companies. Merged with Otta, hence it might be worth checking their dedicated app page for personal job recommendations.",
    imageKey: "welcometothejungle",
    tags: ["Tailored search", "Companies details"],
    extraLinks: [
      {
        label: "Personal search results (account required)",
        url: "https://app.welcometothejungle.com/",
      },
    ],
  },
  {
    id: "03_glassdoor",
    title: "Glassdoor",
    websiteUrl: "https://www.glassdoor.com/",
    description:
      "Many job offers. Additional information about companies, including employee reviews. It may send a high volume of offers once subscribed, so tailoring is useful.",
    imageKey: "glassdoor",
    tags: ["Various offers daily", "Companies details"],
    extraLinks: [{ label: "Indeed", url: "https://indeed.com/" }],
  },
  {
    id: "04_google",
    title: "Google Jobs",
    websiteUrl: "https://www.google.com/",
    description:
      "Not always straightforward to find. Search phrases like jobs near me, remote roles, or role plus city to surface the jobs interface in Google search results.",
    tags: ["Job tracking", "Sharing & following options"],
  },
];
