export type ListingLink = {
  label: string;
  url: string;
};

export type ListingImageKey = "placeholder";

export type JobListing = {
  id: string;
  title: string;
  websiteUrl: string;
  description: string;
  imageKey?: ListingImageKey;
  tags?: string[];
  extraLinks?: ListingLink[];
};

export const listings: JobListing[] = [
  {
    id: "360_learning",
    title: "360Learning",
    websiteUrl: "https://360learning.com",
    description:
      "Online learning platform that helps companies create and share internal courses. Employees can publish short lessons, track progress, and build skills without heavy LMS setup.",
    // imageKey: "placeholder",
    tags: [
      "EdTech",
      "SaaS",
      "B2B",
      "Learning & Development",
      "Remote-friendly",
      "Europe",
    ],
    extraLinks: [
      {
        label: "Careers page (Lever)",
        url: "https://jobs.lever.co/360learning",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/360learning",
      },
    ],
  },
  {
    id: "aareon",
    title: "Aareon",
    websiteUrl: "https://www.aareon.com",
    description:
      "European software company that provides cloud-based property management systems for real estate companies. Their platform helps housing associations and commercial property managers handle rent, contracts, maintenance, and reporting in one system.",
    // imageKey: "placeholder",
    tags: ["PropTech", "SaaS", "B2B", "Real Estate", "ERP", "Europe"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.aareon.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/aareon",
      },
    ],
  },
  {
    id: "ab_tasty",
    title: "AB Tasty",
    websiteUrl: "https://www.abtasty.com",
    description:
      "French SaaS company that provides an all-in-one platform for A/B testing, personalization, and feature management. Marketing and product teams use it to run experiments, optimize websites, and roll out new features safely.",
    // imageKey: "placeholder",
    tags: [
      "MarTech",
      "SaaS",
      "B2B",
      "A/B Testing",
      "Personalization",
      "Europe",
    ],
    extraLinks: [
      {
        label: "Careers page (Teamtailor)",
        url: "https://careers.abtasty.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/ab-tasty",
      },
    ],
  },
  {
    id: "accuracy",
    title: "Accuracy",
    websiteUrl: "https://www.accuracy.com",
    description:
      "Independent global consulting firm that advises companies and investors on high-stakes decisions. Teams work on M&A and valuations, disputes and arbitration, crises and restructurings, and corporate strategy.",
    // imageKey: "placeholder",
    tags: ["Consulting", "Financial Advisory", "Strategy", "M&A", "Europe"],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.accuracy.com/careers",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/accuracy",
      },
    ],
  },
  {
    id: "actimage",
    title: "Actimage",
    websiteUrl: "https://www.actimage.com",
    description:
      "French-German digital agency that builds custom software and cloud solutions for companies and public organizations. Teams work on web and mobile apps, UX/UI design, data projects, IoT, and mixed-reality (AR/VR) solutions.",
    // imageKey: "placeholder",
    tags: [
      "Software Development",
      "Digital Agency",
      "Cloud",
      "IoT",
      "AR/VR",
      "Europe",
    ],
    extraLinks: [
      {
        label: "Careers page (Teamtailor)",
        url: "https://jobs.actimage.com",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/actimage",
      },
    ],
  },
];
