import Link from "next/link";
import Image from "next/image";
import { EyeIcon } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Author, Path } from "@/sanity/types";

export type PathTypeCard = Omit<Path, "author"> & { author?: Author };

export default function PathCard({ path }: { path: PathTypeCard }) {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    _id,
    image,
    description,
  } = path;

  return (
    <li className="path-card group">
      <div className="flex-between">
        <p className="path_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`} aria-label="Author profile link">
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/path/${_id}`} aria-label="Path link">
            <h2 className="text-26-semibold line-clamp-1"></h2>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`} aria-label="Author profile link">
          <Image
            src={author?.image}
            alt={author?.name}
            width={48}
            height={48}
            className="h-auto w-auto rounded-full"
          />
        </Link>
      </div>
      <Link href={`/path/${_id}`} aria-label="Path link">
        <p className="path-card_desc">{description}</p>
        <Image
          src={image}
          alt="Placeholder"
          width={164}
          height={164}
          className="path-card_img"
        />
      </Link>
      <div className="flex-between mt-5 gap-3">
        <Link href={`/?query=${category?.toLowerCase()}`} aria-label="Category">
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="path-card_btn" asChild>
          <Link href={`/path/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
}

export function PathCardSkeleton() {
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="path-card_skeleton" />
      </li>
    ))}
  </>;
}
