import { company, whatsappLink } from "@/config/site";
import InquiryForm from "./InquiryForm";

interface Props {
  /** Pre-select the product interest dropdown. */
  defaultCategorySlug?: string;
}

export default function ContactSection({ defaultCategorySlug }: Props) {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact">
          <div>
            <p className="eyebrow" style={{ color: "var(--cyan)" }}>
              {"/// Let's talk trade"}
            </p>
            <h2>Tell us what you&apos;re looking to source</h2>
            <p>
              Reach out however&apos;s easiest — we&apos;ll get back within one
              business day.
            </p>
            <div className="contact-channels">
              <a className="channel" href={`mailto:${company.email}`}>
                <div className="icon" aria-hidden="true">@</div>
                <div>
                  <p>Email</p>
                  <p>{company.email}</p>
                </div>
              </a>
              <a
                className="channel"
                href={whatsappLink("Hi SaraStackLabs, I'd like to enquire about your products.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon" aria-hidden="true">W</div>
                <div>
                  <p>WhatsApp</p>
                  <p>{company.whatsappDisplay}</p>
                </div>
              </a>
            </div>
          </div>
          <InquiryForm defaultCategorySlug={defaultCategorySlug} />
        </div>
      </div>
    </section>
  );
}
