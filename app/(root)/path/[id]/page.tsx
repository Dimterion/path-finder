export default async function Path({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <>
      <h1 className="text-3xl">Path number: {id}</h1>
    </>
  );
}
