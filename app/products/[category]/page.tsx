import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import QuoteSection from "@/components/QuoteSection";
import { categories, getCategory } from "@/content/categories";
import { productsByCategory } from "@/content/products";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ category: string }> }
): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return { title: "Not found" };
  return { title: cat.name, description: cat.shortDescription };
}

export default async function CategoryPage(
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();
  const items = productsByCategory(cat.slug);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/products">Products</Link>
            <span className="sep">/</span>
            {cat.name}
          </p>
          <h1>{cat.name}</h1>
          <p>{cat.longDescription}</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="prod-grid">
            {items.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <QuoteSection defaultCategorySlug={cat.slug} />
    </>
  );
}
