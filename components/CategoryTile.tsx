import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/content/types";

export default function CategoryTile({ category }: { category: Category }) {
  return (
    <Link className="tile" href={`/products/${category.slug}`}>
      <div className="tile-img">
        {category.image && (
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 620px) 50vw, 240px"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <div className="tile-body">
        <b>{category.name}</b>
        <span>{category.shortDescription}</span>
      </div>
    </Link>
  );
}
