import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import { gallery } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look at our products, packing, and operations. Placeholder imagery to be replaced with real photography.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">{"/// A look inside"}</p>
          <h1>Gallery</h1>
          <p>
            Product, packing, and operations imagery. These are placeholders for
            now — real photography will be added as the business grows.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Gallery images={gallery} />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
