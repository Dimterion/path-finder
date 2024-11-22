import Ping from "./Ping";

export default function View({ id }: { id: string }) {
  return (
    <div className="view-container">
      <div className="absolute -top-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">10 views</span>
      </p>
    </div>
  );
}
