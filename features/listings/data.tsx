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
    id: "01_listing",
    title: "Listing Title",
    websiteUrl: "https://www.example.com/",
    description: "Listing Description",
    imageKey: "placeholder",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    extraLinks: [
      {
        label: "Extra link 1",
        url: "https://www.example.com/",
      },
    ],
  },
];
