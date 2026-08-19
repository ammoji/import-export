import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/content/types";

export default function ProductCard({ category }: { category: Category }) {
  return (
    <Link className="prod-card" href={`/products/${category.slug}`}>
      <div className="prod-img">
        {category.heroImage ? (
          <Image
            src={category.heroImage}
            alt={category.name}
            fill
            sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        ) : null}
        <span className="prod-badge">{category.thumbLabel}</span>
      </div>
      <div className="prod-body">
        <h3>{category.name}</h3>
        <p>{category.shortDescription}</p>
        <span className="prod-link">
          Enquire <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
