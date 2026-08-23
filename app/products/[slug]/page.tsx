import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import QuoteSection from "@/components/QuoteSection";
import { products, getProduct } from "@/content/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found" };
  return { title: product.name, description: product.shortDescription };
}

export default async function ProductDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/products">Products</Link>
            <span className="sep">/</span>
            {product.name}
          </p>
          <h1>{product.name}</h1>
          {product.localName && <p>{product.localName}</p>}
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="detail-grid">
            <div className="detail-img">
              {product.image && (
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 960px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              )}
            </div>
            <div className="detail-body">
              <p className="lead">{product.longDescription}</p>
              {product.specs && (
                <ul className="spec-table">
                  {product.specs.map((s) => (
                    <li key={s.label}>
                      <b>{s.label}</b>
                      <span>{s.value}</span>
                    </li>
                  ))}
                </ul>
              )}
              <Link href={`/contact?product=${product.slug}`} className="btn btn-green">
                Enquire about {product.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <QuoteSection defaultProductSlug={product.slug} />
    </>
  );
}
