import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import QuoteSection from "@/components/QuoteSection";
import { getCategory } from "@/content/categories";
import { products, getProduct } from "@/content/products";

export function generateStaticParams() {
  return products.map((p) => ({ category: p.categorySlug, product: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ category: string; product: string }> }
): Promise<Metadata> {
  const { product } = await params;
  const p = getProduct(product);
  if (!p) return { title: "Not found" };
  return { title: p.name, description: p.shortDescription };
}

export default async function ProductDetailPage(
  { params }: { params: Promise<{ category: string; product: string }> }
) {
  const { category, product } = await params;
  const p = getProduct(product);
  const cat = getCategory(category);
  if (!p || !cat || p.categorySlug !== category) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/products">Products</Link>
            <span className="sep">/</span>
            <Link href={`/products/${cat.slug}`}>{cat.name}</Link>
            <span className="sep">/</span>
            {p.name}
          </p>
          <h1>{p.name}</h1>
          {p.localName && <p>{p.localName}</p>}
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="detail-grid">
            <div className="detail-img">
              {p.image && (
                <Image src={p.image} alt={p.name} fill sizes="(max-width: 960px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              )}
            </div>
            <div className="detail-body">
              <p className="lead">{p.longDescription}</p>
              {p.specs && (
                <ul className="spec-table">
                  {p.specs.map((s) => (
                    <li key={s.label}>
                      <b>{s.label}</b>
                      <span>{s.value}</span>
                    </li>
                  ))}
                </ul>
              )}
              <Link href={`/contact?product=${p.slug}`} className="btn btn-green">
                Enquire about {p.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <QuoteSection defaultCategorySlug={cat.slug} defaultProductName={p.name} />
    </>
  );
}
