import { type SchemaTypeDefinition } from "sanity";
import { author } from "@/sanity/schemaTypes/author";
import { path } from "@/sanity/schemaTypes/path";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, path],
};