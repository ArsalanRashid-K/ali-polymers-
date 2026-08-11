import Header from "../components/Header";
import Footer from "../components/Footer";
import companyData from "../../../data/company.json";
import pageImages from "../../../data/images/page-images.json";

export const metadata = {
  title: `Contact | ${companyData.name}`,
  description: `Contact Ali Traders & Ali Polymers for polymer products, tarpaulins, shade nets, weedmats, LDPE sheets and export enquiries.`,
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <section
        className="page-hero"
        style={{ backgroundColor: "#a30909", backgroundImage: "none" }}
      >
        <div className="wrap">
          <div className="breadcrumb"></div>
          <h1 className="display">Let&apos;s Talk</h1>
          <p>
            Contact Ali Traders & Ali Polymers for Wholesale, Distribution and
            Export Enquiries. Our Team Responds Within 1 Business Day.
          </p>
          <p>
            Reach out for polymer products like tarpaulins, shade nets, weedmat,
            LDPE construction sheets, PP mats, ropes and custom export-ready
            plastic solutions.
          </p>
        </div>
        <div className="thread"></div>
      </section>

      <div className="contact-layout">
        <div className="contact-card">
          <div className="contact-row">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.5L12 15 4 8.5V6l8 5 8-5v2.5Z"
                />
              </svg>
            </div>
            <div>
              <div className="l">EMAIL</div>
              <div className="v">{companyData.contact.email}</div>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"
                />
              </svg>
            </div>
            <div>
              <div className="l">PHONE</div>
              <div className="v">{companyData.contact.phone}</div>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-icon whatsapp">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M12 2a10 10 0 0 0-8.66 15L2 22l5.14-1.32A10 10 0 1 0 12 2Zm0 18.18a8.15 8.15 0 0 1-4.15-1.14l-.3-.18-3.05.78.82-2.97-.2-.31a8.17 8.17 0 1 1 6.88 3.82Zm4.48-6.11c-.25-.13-1.46-.72-1.69-.8s-.4-.13-.56.13c-.17.25-.65.8-.8.97-.14.17-.3.2-.55.07-.25-.13-1.07-.39-2.04-1.24-.76-.68-1.27-1.51-1.42-1.76-.14-.25-.02-.38.11-.5.11-.11.25-.3.38-.45.12-.14.16-.25.24-.42.08-.17.04-.31-.02-.44-.07-.13-.56-1.35-.77-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07s.9 2.41 1.03 2.57c.13.17 1.75 2.67 4.24 3.75.59.25 1.05.4 1.41.52.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.3Z"
                />
              </svg>
            </div>
            <div>
              <div className="l">WHATSAPP</div>
              <div className="v">{companyData.contact.whatsapp}</div>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 16.14S8.5 13.26 8.5 9a3.5 3.5 0 0 1 7 0c0 4.26-3.5 9.14-3.5 9.14Zm0-11.64a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
                />
              </svg>
            </div>
            <div>
              <div className="l">ADDRESS</div>
              <div className="v">
                {companyData.headquarters.addressLine1}
                <br />
                {companyData.headquarters.addressLine2}
              </div>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-row">
            <div className="contact-icon facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M22 12.07C22 6.54 17.52 2 12 2S2 6.54 2 12.07c0 4.99 3.66 9.12 8.44 9.91v-7.02H8.12v-2.9h2.32V9.83c0-2.3 1.37-3.57 3.47-3.57.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.9h-2.1V22C18.34 21.19 22 17.06 22 12.07Z"
                />
              </svg>
            </div>
            <div>
              <div className="l">FACEBOOK</div>
              <div className="v">
                <a
                  href={companyData.contact.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  facebook.com/share/1Lft3ZXsWQ/
                </a>
              </div>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-icon instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4Zm10.25 1.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm0 2a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"
                />
              </svg>
            </div>
            <div>
              <div className="l">INSTAGRAM</div>
              <div className="v">
                <a
                  href={companyData.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  instagram.com/alipolymersandtraders
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
