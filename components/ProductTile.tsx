import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/content/types";

export default function ProductTile({ product }: { product: Product }) {
  return (
    <Link className="tile" href={`/products/${product.slug}`}>
      <div className="tile-img">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 620px) 50vw, 200px"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <div className="tile-body">
        <b>{product.name}</b>
        {product.localName && <span>{product.localName}</span>}
      </div>
    </Link>
  );
}
