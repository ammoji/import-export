import ProductCard from "./ProductCard";
import type { Category } from "@/content/types";

export default function ProductGrid({ items }: { items: Category[] }) {
  return (
    <div className="prod-grid">
      {items.map((c) => (
        <ProductCard key={c.slug} category={c} />
      ))}
    </div>
  );
}
