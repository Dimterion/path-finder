import { defineQuery } from "next-sanity";

export const PATHS_QUERY =
  defineQuery(`*[_type == "path" && defined(slug.current)] | order(_createdAt desc) {
  _id,
  title,
  slug,
  _createdAt,
  author -> {
    _id, name, image, bio
  },
  views,
  description,
  category,
  image
}`);
