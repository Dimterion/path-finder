export type PlatformLink = {
  label: string;
  url: string;
};

export type JobPlatform = {
  id: string;
  title: string;
  websiteUrl: string;
  description: string;
  image?: ReturnType<typeof require>;
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
    image: require("../assets/platforms/linkedin.jpg"),
    tags: ["General", "Social", "Profile"],
    extraLinks: [
      { label: "Help Center", url: "https://www.linkedin.com/help/linkedin" },
    ],
  },
  {
    id: "02_welcome_to_the_jungle",
    title: "Welcome to the Jungle",
    websiteUrl: "https://www.welcometothejungle.com/",
    description:
      "A potentially good second option to visit. Narrowed down search (region + sphere). Additional information about the companies. Merged with Otta, hence it might be worth it checking their dedicated app page (see links below) for personal job recommendations.",
    image: require("../assets/platforms/welcometothejungle.jpg"),
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
      "Many job offers. Additional information about companies (including employees reviews). Will send all kinds of offers once subscribed (might need tailoring to not get overwhelmed). In the process of merging with Indeed (both still have their separate pages currently, but better check both sites/profiles for details).",
    image: require("../assets/platforms/glassdoor.jpg"),
    tags: ["Various offers daily", "Companies details"],
    extraLinks: [
      {
        label: "Indeed",
        url: "https://indeed.com/",
      },
    ],
  },
  {
    id: "04_google",
    title: "Google Jobs",
    websiteUrl: "https://www.google.com/",
    description:
      "May not be straightforward to find (not to confuse with open jobs at Google). To access this section, search on Google for phrases like: jobs near me, [job sphere] jobs in [City], remote [job sphere] jobs, or similar. The search results page should then have a separate section with a table of job postings, saved jobs, and following. You can use that interface to search for various roles, save them, share, follow the ones you are interested in, etc.",
    tags: ["Job tracking", "Sharing & following options"],
  },
];
