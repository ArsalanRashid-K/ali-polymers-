import "./globals.css";
import companyData from "../../data/company.json";
import ScrollToTop from "./components/ScrollToTop";

export const metadata = {
  metadataBase: new URL("https://alitraderspolymers.com"),
  title: {
    default: companyData.seo.homeTitle,
    template: `%s | ${companyData.name}`,
  },
  description: companyData.seo.homeDescription,
  applicationName: companyData.name,
  keywords: [
    "Ali Traders",
    "Ali Polymers",
    "tarpaulin manufacturer",
    "shadenet supplier",
    "polymer products",
    "plastic products exporter",
    "Kerala",
    "India",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: companyData.name,
    title: companyData.seo.homeTitle,
    description: companyData.seo.homeDescription,
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1452,
        height: 793,
        alt: companyData.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: companyData.seo.homeTitle,
    description: companyData.seo.homeDescription,
    images: ["/images/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo.jpeg",
    shortcut: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  const whatsappNumber = (
    companyData.contact.whatsapp ||
    companyData.contact.phone ||
    ""
  ).replace(/\D/g, "");
  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I want to know more about your products.")}`
    : null;

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        {whatsappLink && (
          <a
            href={whatsappLink}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <svg
              className="whatsapp-icon"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M12 2a10 10 0 0 0-8.66 15L2 22l5.14-1.32A10 10 0 1 0 12 2Zm0 18.18a8.15 8.15 0 0 1-4.15-1.14l-.3-.18-3.05.78.82-2.97-.2-.31a8.17 8.17 0 1 1 6.88 3.82Zm4.48-6.11c-.25-.13-1.46-.72-1.69-.8s-.4-.13-.56.13c-.17.25-.65.8-.8.97-.14.17-.3.2-.55.07-.25-.13-1.07-.39-2.04-1.24-.76-.68-1.27-1.51-1.42-1.76-.14-.25-.02-.38.11-.5.11-.11.25-.3.38-.45.12-.14.16-.25.24-.42.08-.17.04-.31-.02-.44-.07-.13-.56-1.35-.77-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07s.9 2.41 1.03 2.57c.13.17 1.75 2.67 4.24 3.75.59.25 1.05.4 1.41.52.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.3Z"
              />
            </svg>
          </a>
        )}
        <ScrollToTop />
      </body>
    </html>
  );
}
