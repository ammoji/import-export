import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/content/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link className="prod-card" href={`/products/${product.categorySlug}/${product.slug}`}>
      <div className="pc-img">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 620px) 100vw, (max-width: 960px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <div className="pc-body">
        <h3>{product.name}</h3>
        {product.localName && <p className="pc-local">{product.localName}</p>}
        <p>{product.shortDescription}</p>
        <span className="pc-link">
          View details <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
