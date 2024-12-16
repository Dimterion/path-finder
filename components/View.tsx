import { unstable_after as after } from "next/server";
import { client } from "@/sanity/lib/client";
import { PATH_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import Ping from "@/components/Ping";

export default async function View({ id }: { id: string }) {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(PATH_VIEWS_QUERY, { id });

  after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit(),
  );

  return (
    <section className="view-container">
      <div className="absolute -top-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">Views: {totalViews}</span>
      </p>
    </section>
  );
}
