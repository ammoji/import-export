import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import { categories, getCategory } from "@/content/categories";
import { company } from "@/config/site";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Not found" };
  return {
    title: category.name,
    description: category.shortDescription,
  };
}

// [Placeholder] generic sourcing highlights shown per category.
const highlights = [
  "Quality-checked and graded before dispatch",
  "Flexible pack sizes — bulk and retail-ready",
  "Export documentation handled end to end",
  "Domestic and international delivery",
];

export default async function CategoryDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/products">Products</Link>
            <span className="sep">/</span>
            <span style={{ color: "var(--cyan)" }}>{category.name}</span>
          </p>
          <h1>{category.name}</h1>
          <p>{category.shortDescription}</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cat-detail">
            <div className="cat-visual">
              {category.heroImage ? (
                <Image
                  src={category.heroImage}
                  alt={category.name}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              ) : (
                <span className="cat-fallback">{category.thumbLabel}</span>
              )}
              <span className="cat-badge">{category.thumbLabel}</span>
            </div>
            <div>
              <p className="lead">{category.longDescription}</p>
              <ul className="cat-points">
                {highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <Link href="#contact" className="btn-primary">
                Enquire about {category.name}
              </Link>
              <p style={{ marginTop: 16, fontSize: 13, color: "var(--slate)" }}>
                Prefer to talk? Email{" "}
                <a href={`mailto:${company.email}`} style={{ color: "var(--navy)", fontWeight: 600 }}>
                  {company.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section with the product-interest field pre-filled */}
      <ContactSection defaultCategorySlug={category.slug} />
    </>
  );
}
