import { client } from "@/sanity/lib/client";
import { PATH_VIEWS_QUERY } from "@/sanity/lib/queries";
import Ping from "./Ping";

export default async function View({ id }: { id: string }) {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(PATH_VIEWS_QUERY, { id });

  return (
    <div className="view-container">
      <div className="absolute -top-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">Views: {totalViews}</span>
      </p>
    </div>
  );
}
