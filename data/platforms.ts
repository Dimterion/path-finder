export type PlatformLink = {
  label: string;
  url: string;
};

export type JobPlatform = {
  id: string;
  title: string;
  websiteUrl: string;
  description: string;
  imageUrl?: string;
  tags?: string[];
  extraLinks?: PlatformLink[];
};

export const platforms: JobPlatform[] = [
  {
    id: "platform-1",
    title: "Lorem Jobs",
    websiteUrl: "https://example.com/lorem-jobs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    imageUrl: "https://picsum.photos/seed/platform1/300/180",
    tags: ["General", "Remote", "Entry Level"],
    extraLinks: [
      { label: "Help Center", url: "https://example.com/lorem-jobs/help" },
      { label: "Career Tips", url: "https://example.com/lorem-jobs/tips" },
    ],
  },
  {
    id: "platform-2",
    title: "Ipsum Careers",
    websiteUrl: "https://example.com/ipsum-careers",
    description:
      "Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.",
    imageUrl: "https://picsum.photos/seed/platform2/300/180",
    tags: ["Tech", "Internships"],
    extraLinks: [
      { label: "Blog", url: "https://example.com/ipsum-careers/blog" },
    ],
  },
  {
    id: "platform-3",
    title: "Dolor Work",
    websiteUrl: "https://example.com/dolor-work",
    description:
      "Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
    tags: ["Freelance", "Creative"],
  },
  {
    id: "platform-4",
    title: "Sit Talent",
    websiteUrl: "https://example.com/sit-talent",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor.",
    imageUrl: "https://picsum.photos/seed/platform4/300/180",
    tags: ["Corporate", "Full Time"],
    extraLinks: [
      { label: "Guides", url: "https://example.com/sit-talent/guides" },
      { label: "Support", url: "https://example.com/sit-talent/support" },
    ],
  },
  {
    id: "platform-5",
    title: "Amet Finder",
    websiteUrl: "https://example.com/amet-finder",
    description:
      "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo.",
    tags: ["Students", "Part Time", "Local Jobs"],
  },
];
