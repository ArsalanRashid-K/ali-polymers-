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
        <div>
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
          {whatsappDisplay && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.8)",
                marginTop: "10px",
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
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 {companyData.name}. All rights reserved.
      </div>
    </footer>
  );
}
