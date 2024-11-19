import SearchForm from "@/components/SearchFrom";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

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
    </>
  );
}
