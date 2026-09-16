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

/** Tag rules:
- No country tags (France, Germany, etc.).
- Region tags:
  - "EU": company primarily hires in Europe.
  - "Remote-worldwide": company is fully remote and can hire anywhere.
- Domain tags (1–2): EdTech, PropTech, MarTech, FinTech, HealthTech, Consulting, Gaming, E-commerce, AI / Data, etc.
- Product/business model tags (0–1): SaaS, Marketplace, Platform, Agency, Enterprise.
- Tech/function tags (1–3): A/B Testing, Personalization, Learning & Development, Real Estate, Financial Advisory, Software Development, Cloud, IoT, AR/VR, Data & Analytics, etc.
- About 3–7 tags per listing, mixing domain + tech + region. */

export const listings: JobListing[] = [
  {
    id: "360_learning",
    title: "360Learning",
    websiteUrl: "https://360learning.com",
    description:
      "Online learning platform that helps companies create and share internal courses. Employees can publish short lessons, track progress, and build skills without heavy LMS setup.",
    // imageKey: "placeholder",
    tags: ["EdTech", "SaaS", "Learning & Development", "EU"],
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
    tags: ["PropTech", "SaaS", "Real Estate", "EU"],
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
    tags: ["MarTech", "SaaS", "A/B Testing", "Personalization", "EU"],
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
    tags: ["Consulting", "Financial Advisory", "M&A", "EU"],
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
      "EU",
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
  {
    id: "adelean",
    title: "Adelean",
    websiteUrl: "https://www.adelean.com",
    description:
      "Paris-based consulting and software company specialized in search engines and data platforms. Teams build and optimize enterprise search, data extraction/transformation, and analytics solutions using technologies like Elasticsearch, Solr, and OpenSearch.",
    // imageKey: "placeholder",
    tags: [
      "Data & Analytics",
      "Search",
      "Big Data",
      "Software Development",
      "EU",
    ],
    extraLinks: [
      {
        label: "Careers page",
        url: "https://www.adelean.com/jobs",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/adelean",
      },
    ],
  },
  {
    id: "advanced_schema",
    title: "Advanced Schema",
    websiteUrl: "https://www.advanced-schema.com",
    description:
      "International data consulting firm that helps companies build data warehouses, business intelligence, and CRM systems. Teams work on data engineering, analytics, cloud platforms, and digital transformation projects across Europe and North America.",
    // imageKey: "placeholder",
    tags: [
      "Data & Analytics",
      "Business Intelligence",
      "Big Data",
      "Cloud",
      "EU",
    ],
    extraLinks: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/advancedschema",
      },
    ],
  },
];
