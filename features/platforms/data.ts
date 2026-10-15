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

// Images are optional and can be added as:
// imageKey: "linkedin",

export const platforms: JobPlatform[] = [
  {
    id: "linkedin",
    title: "LinkedIn",
    websiteUrl: "https://www.linkedin.com",
    description:
      "Use LinkedIn primarily for professional networking, finding roles through your existing contacts, and researching companies and recruiters. It is especially useful for keeping your profile visible to employers and for reaching out directly about opportunities. Treat job applications as one part of a broader strategy: engage with relevant companies, follow recruiters, and use referrals where possible.",
    tags: ["Networking", "Jobs", "Company Research"],
    extraLinks: [
      {
        label: "Help Center",
        url: "https://www.linkedin.com/help/linkedin",
      },
    ],
  },
  {
    id: "welcome_to_the_jungle",
    title: "Welcome to the Jungle",
    websiteUrl: "https://www.welcometothejungle.com",
    description:
      "Use Welcome to the Jungle mainly to discover companies through their culture, values, teams, and working environment before applying. It is particularly helpful when you want more context than a standard job listing provides, especially for roles at startups and scale-ups. Browse company profiles first, then use the job search to find openings that match your interests.",
    tags: ["Jobs", "Company Research", "Startup"],
    extraLinks: [
      {
        label: "Help Center",
        url: "https://help.welcometothejungle.com",
      },
    ],
  },
  {
    id: "glassdoor",
    title: "Glassdoor",
    websiteUrl: "https://www.glassdoor.com",
    description:
      "Use Glassdoor primarily for company research before applying or interviewing. Check employee reviews, salary ranges, interview experiences, and company ratings to understand what a workplace may be like. It is most valuable as a due-diligence tool rather than as your main source of job listings.",
    tags: ["Company Research", "Salaries", "Interviews"],
    extraLinks: [
      {
        label: "Help Center",
        url: "https://help.glassdoor.com",
      },
    ],
  },
  {
    id: "google_jobs",
    title: "Google Jobs",
    websiteUrl: "https://www.google.com/search?q=jobs",
    description:
      "Use Google Jobs to quickly aggregate job listings from many sources in one search. It is best for getting a broad overview of available roles, comparing titles and locations, and finding listings that may not appear on a single platform. Use it for discovery, then apply through the original employer or job board whenever possible.",
    tags: ["Jobs", "Search", "Aggregator"],
  },
  {
    id: "indeed",
    title: "Indeed",
    websiteUrl: "https://indeed.com",
    description:
      "Use Indeed as a high-volume general job search engine for finding roles across many industries and experience levels. It is especially useful for setting up targeted alerts, filtering by location and contract type, and quickly comparing a large number of listings. Start here for broad discovery, but apply through the employer’s own site when that option is available.",
    tags: ["Jobs", "Search", "Aggregator"],
    extraLinks: [
      {
        label: "Help Center",
        url: "https://www.indeed.com/help",
      },
    ],
  },
  {
    id: "monster",
    title: "Monster",
    websiteUrl: "https://www.monster.com",
    description:
      "Use Monster for broad job discovery across sectors and seniority levels, particularly when you want to cast a wide net beyond specialized platforms. Create alerts for relevant titles and locations, then focus your applications on listings that closely match your skills. It can be a useful supplementary source, but it is rarely the only platform you need.",
    tags: ["Jobs", "Search", "Aggregator"],
  },
  {
    id: "urban_linker",
    title: "Urban Linker",
    websiteUrl: "https://urbanlinker.com",
    description:
      "Use Urban Linker mainly for tech, digital, product, and design opportunities in France and wider Europe. It is particularly relevant if you want recruiter support for software engineering, data, cloud, cybersecurity, or product roles at startups, scale-ups, and technology companies. Browse current openings, but also consider a spontaneous application if your target role is not currently listed.",
    tags: ["Jobs", "Tech", "Recruiter"],
    extraLinks: [
      {
        label: "Job Offers",
        url: "https://urbanlinker.com/jobs",
      },
    ],
  },
  {
    id: "upwork",
    title: "Upwork",
    websiteUrl: "https://www.upwork.com",
    description:
      "Use Upwork primarily for freelance, contract, and remote project work rather than traditional full-time employment. Build a focused profile and portfolio, search for short- or long-term projects, and submit tailored proposals with a clear rate. It is most useful once you have a defined service or skill set and are comfortable managing client communication and payments.",
    tags: ["Freelance", "Remote", "Contracts"],
    extraLinks: [
      {
        label: "Help Center",
        url: "https://support.upwork.com",
      },
    ],
  },
  {
    id: "hellowork",
    title: "HelloWork",
    websiteUrl: "https://www.hellowork.com",
    description:
      "Use HelloWork primarily for job searching in France, with listings across permanent contracts, temporary work, internships, and apprenticeships. Create a profile and alerts for relevant roles, then filter by location, sector, function, and contract type. It is a good general-purpose French platform for both broad discovery and more targeted local searches.",
    tags: ["Jobs", "Search", "France"],
  },
  {
    id: "malt",
    title: "Malt",
    websiteUrl: "https://www.malt.com",
    description:
      "Use Malt mainly to find freelance and independent contract work, particularly for tech, design, data, marketing, and communication projects in France and other European markets. Create a clear profile with your skills, rate, and portfolio, then respond to relevant project proposals or client searches. It is best suited to freelancers who want a European client base and integrated contracting and payment tools.",
    tags: ["Freelance", "Remote", "Contracts"],
  },
  {
    id: "jobteaser",
    title: "JobTeaser",
    websiteUrl: "https://www.jobteaser.com",
    description:
      "Use JobTeaser primarily for internships, apprenticeships, first jobs, and early-career opportunities offered through schools and universities. Check whether your institution provides access to its Career Center, where you can find employer profiles, vacancies, career events, and guidance. It is especially useful for students and recent graduates looking for roles targeted at their field of study.",
    tags: ["Jobs", "Internships", "Early Career"],
    extraLinks: [
      {
        label: "Career Advice",
        url: "https://www.jobteaser.com/advices",
      },
    ],
  },
];
