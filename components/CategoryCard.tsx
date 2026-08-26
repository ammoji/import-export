import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/content/types";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link className="prod-card" href={`/products/${category.slug}`}>
      <div className="pc-img">
        {category.image && (
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 620px) 100vw, (max-width: 960px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <div className="pc-body">
        <h3>{category.name}</h3>
        <p>{category.shortDescription}</p>
        <span className="pc-link">
          View products <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
