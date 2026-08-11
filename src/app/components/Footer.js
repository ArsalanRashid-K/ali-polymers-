import companyData from "../../../data/company.json";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const whatsappDigits = (companyData.contact.whatsapp || "").replace(
    /\D/g,
    "",
  );
  const whatsappDisplay = whatsappDigits
    ? `+${whatsappDigits.startsWith("91") ? whatsappDigits : `91${whatsappDigits}`}`
    : "";

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-company">
          <div className="footer-logo">
            <Image
              src="/images/logo.jpeg"
              alt={companyData.name}
              width={73}
              height={40}
              className="footer-logo-img"
            />

            <span className="footer-brand">
              {companyData.name.toUpperCase()}
            </span>
          </div>

          <p className="footer-addr">
            {companyData.headquarters.addressLine1}
            <br />
            {companyData.headquarters.addressLine2}
          </p>

          <div className="footer-icons">
            <img
              src="/images/recycle-svgrepo-com.svg"
              alt="Recycle"
              className="footer-icon"
            />

            <img
              src="/images/leaf-svgrepo-com.svg"
              alt="Eco Friendly"
              className="footer-icon"
            />

            <img
              src="/images/eco_green_factory_icon.svg"
              alt="Export Ready"
              className="footer-icon"
            />
          </div>
        </div>
        <div className="footer-col">
          <p className="head">Company</p>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/own-brands">Our Own Brands</Link>
            </li>
            <li>
              <Link href="/export">Export</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <p className="head">Products</p>
          <ul>
            <li>
              <Link href="/products/tarpaulin">Tarpaulin</Link>
            </li>
            <li>
              <Link href="/products/shadenet">Shadenet</Link>
            </li>
            <li>
              <Link href="/products/rope">Rope</Link>
            </li>
            <li>
              <Link href="/products">View All →</Link>
            </li>
          </ul>
        </div>

        {/* <div className="footer-sustainability-text">
          <strong>Reduce • Reuse • Recycle</strong>
          <span>Sustainable Polymer Manufacturing</span>
        </div> */}
        <div className="footer-col">
          <p className="head">Get in Touch</p>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "4px",
            }}
          >
            Wholesale · Distribution
          </p>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
            Export Enquiries
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.8)",
              marginTop: "10px",
            }}
          >
            Email:{" "}
            <a
              href={`mailto:${companyData.contact.email}`}
              style={{ color: "#fff", fontWeight: 800 }}
            >
              {companyData.contact.email}
            </a>
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.8)",
              marginTop: "6px",
            }}
          >
            Phone:{" "}
            <a
              href={`tel:${companyData.contact.phone}`}
              style={{ color: "#fff", fontWeight: 800 }}
            >
              {companyData.contact.phone}
            </a>
          </p>
          {whatsappDisplay && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.8)",
                marginTop: "6px",
              }}
            >
              WhatsApp:{" "}
              <a
                href={`https://wa.me/${whatsappDigits}`}
                style={{ color: "#25D366", fontWeight: 800 }}
              >
                {whatsappDisplay}
              </a>
            </p>
          )}
          <div style={{ marginTop: "14px", display: "flex", gap: "12px" }}>
            {companyData.contact.facebook && (
              <a
                href={companyData.contact.facebook}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="currentColor"
                    d="M22 12.07C22 6.54 17.52 2 12 2S2 6.54 2 12.07c0 4.99 3.66 9.12 8.44 9.91v-7.02H8.12v-2.9h2.32V9.83c0-2.3 1.37-3.57 3.47-3.57.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.9h-2.1V22C18.34 21.19 22 17.06 22 12.07Z"
                  />
                </svg>
                Facebook
              </a>
            )}
            {companyData.contact.instagram && (
              <a
                href={companyData.contact.instagram}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="currentColor"
                    d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4Zm10.25 1.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm0 2a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"
                  />
                </svg>
                Instagram
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 {companyData.name}. All rights reserved.
      </div>
    </footer>
  );
}
