import { company, whatsappLink } from "@/config/site";
import InquiryForm from "./InquiryForm";
import Icon from "./Icon";

interface Props {
  defaultProductSlug?: string;
  defaultMarket?: string;
}

export default function QuoteSection({ defaultProductSlug, defaultMarket }: Props) {
  return (
    <section id="quote">
      <div className="wrap">
        <div className="quote-grid">
          <div className="quote-info">
            <p className="eyebrow">Get a quote</p>
            <h2>Tell us what you&apos;re looking to source</h2>
            <p>
              Share your product, quantity, and destination — we&apos;ll get back
              within one business day with a rate.
            </p>
            <div className="channels">
              <a className="channel" href={`mailto:${company.email}`}>
                <div className="ic"><Icon name="mail" /></div>
                <div>
                  <div className="lbl">Email</div>
                  <div className="val">{company.email}</div>
                </div>
              </a>
              <a
                className="channel"
                href={whatsappLink("Hi Farm to World, I'd like a quote for pulses.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="ic"><Icon name="whatsapp" /></div>
                <div>
                  <div className="lbl">WhatsApp</div>
                  <div className="val">{company.whatsappDisplay}</div>
                </div>
              </a>
              <div className="channel">
                <div className="ic"><Icon name="phone" /></div>
                <div>
                  <div className="lbl">Phone</div>
                  <div className="val">{company.phoneDisplay}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-form">
            <InquiryForm defaultProductSlug={defaultProductSlug} defaultMarket={defaultMarket} />
          </div>
        </div>
      </div>
    </section>
  );
}
