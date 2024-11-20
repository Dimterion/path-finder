import SearchForm from "@/components/SearchFrom";
import PathCard from "@/components/PathCard";
import { client } from "@/sanity/lib/client";
import { PATHS_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const paths = await client.fetch(PATHS_QUERY);

  // const paths = [
  //   {
  //     _createdAt: new Date(),
  //     views: 5,
  //     author: { _id: 1, name: "Lorem" },
  //     _id: 1,
  //     description: "Lorem ipsum dolor",
  //     image:
  //       "https://raw.githubusercontent.com/Dimterion/booking-site/refs/heads/master/public/images/placeholder_img.jpg",
  //     category: "Lorem",
  //     title: "Lorem Ipsum",
  //   },
  // ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Lorem ipsum, <br /> Lorem ipsum dolor
        </h1>
        <p className="sub-heading !max-w-3xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad in
          debitis ab, perspiciatis consequuntur eius.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All paths"}
        </p>
        <ul className="card_grid mt-7">
          {paths?.length > 0 ? (
            paths.map((path: PathCardType, index: number) => (
              <PathCard key={path?._id} path={path} />
            ))
          ) : (
            <p className="no-results">No paths found.</p>
          )}
        </ul>
      </section>
    </>
  );
}
