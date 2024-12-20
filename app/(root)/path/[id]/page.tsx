import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import markdownit from "markdown-it";
import { client } from "@/sanity/lib/client";
import { PATH_BY_ID_QUERY, PLAYLIST_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { formatDate } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";
import PathCard, { PathTypeCard } from "@/components/PathCard";

const md = markdownit();

export const experimental_ppr = true;

export default async function Path({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const [path, { select: editorPaths }] = await Promise.all([
    client.fetch(PATH_BY_ID_QUERY, { id }),
    client.fetch(PLAYLIST_BY_SLUG_QUERY, {
      slug: "editor-picks",
    }),
  ]);

  if (!path) return notFound();

  const parsedContent = md.render(path?.pitch || "");

  return (
    <>
      <section className="gray_container !min-h-[230px]">
        <p className="tag">{formatDate(path?._createdAt)}</p>
        <h1 className="heading">{path.title}</h1>
        <p className="sub-heading !max-w-5xl">{path.description}</p>
      </section>
      <section className="section_container">
        <Image
          src={path.image}
          alt="Thumbnail"
          width={164}
          height={164}
          className="m-auto h-auto max-h-[250px] w-full rounded-xl object-cover sm:max-h-[350px]"
        />
        <div className="mx-auto mt-10 max-w-4xl space-y-5">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${path.author?._id}`}
              className="mb-3 flex gap-2"
              aria-label="Author profile link"
            >
              <Image
                src={path.author.image}
                alt="Avatar"
                width={64}
                height={64}
                className="h-auto w-auto rounded-full drop-shadow-lg"
              />
              <div>
                <p className="text-20-medium">{path.author.name}</p>
                <p className="text-16-medium !text-black-100">
                  @{path.author.username}
                </p>
              </div>
            </Link>
            <p className="category-tag">{path.category}</p>
          </div>
          <h2 className="text-30-bold">Pitch Details</h2>
          {parsedContent ? (
            <article
              className="prose max-w-4xl break-all font-work-sans"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="no-result">No details provided.</p>
          )}
        </div>
        <hr className="divider" />
        {editorPaths?.length > 0 && (
          <div className="mx-auto max-w-4xl">
            <p className="text-30-semibold">Editor Picks</p>
            <ul className="card_grid-sm mt-7">
              {editorPaths.map((path: PathTypeCard, index: number) => (
                <PathCard key={index} path={path} />
              ))}
            </ul>
          </div>
        )}
      </section>
      <Suspense fallback={<Skeleton className="view_skeleton" />}>
        <View id={id} />
      </Suspense>
    </>
  );
}
