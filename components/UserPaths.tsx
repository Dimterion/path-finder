import { client } from "@/sanity/lib/client";
import { PATHS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import PathCard, { PathTypeCard } from "@/components/PathCard";

export default async function UserPaths({ id }: { id: string }) {
  const paths = await client.fetch(PATHS_BY_AUTHOR_QUERY, { id });

  return (
    <>
      {paths.length > 0 ? (
        paths.map((path: PathTypeCard) => (
          <PathCard key={path._id} path={path} />
        ))
      ) : (
        <p className="no-result">No paths yet.</p>
      )}
    </>
  );
}
