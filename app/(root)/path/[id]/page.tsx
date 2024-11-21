import { client } from "@/sanity/lib/client";
import { PATH_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export const experimental_ppr = true;

export default async function Path({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const path = await client.fetch(PATH_BY_ID_QUERY, { id });

  if (!path) return notFound();

  return (
    <>
      <h1 className="text-3xl">{path.title}</h1>
    </>
  );
}
