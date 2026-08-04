import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import companyData from "../../../data/company.json";
import pageImages from "../../../data/images/page-images.json";
import { exportIcons } from "../components/ExportIcons";
export const metadata = {
  title: `Export | ${companyData.name}`,
  description: companyData.export.intro.slice(0, 155),
};

export default function ExportPage() {
  const { export: exportInfo } = companyData;

  return (
    <>
      <Header />
      <section
        className="page-hero weave export-hero"
        style={{
          backgroundColor: "#590000",
          backgroundImage: "none",

          // backgroundImage: `url(${pageImages.export})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center center",
          // backgroundRepeat: "no-repeat",
        }}
      >
        <div className="wrap">
          <h1 className="display own-brands-hero-title">
            Container Shipping & Export Solutions from India
          </h1>
          <p>{exportInfo.markets}</p>
        </div>
        <div className="thread"></div>
      </section>
      <section className="content-section export-tight-section">
        <div className="about-eyebrow ">OUR EXPORT PROMISE</div>{" "}
        <h2 className="display">Built for International Buyers</h2>
        <p>{exportInfo.intro}</p>
      </section>
      <section className="export-support">
        <div className="about-eyebrow">EXPORT SUPPORT</div>
        <h2 className="display">End-to-End Export Support in 5 Steps</h2>
        <div className="export-support-row">
          {exportInfo.support.map((item, i) => (
            <div className="export-support-item" key={i}>
              <div className="export-support-icon">
                {exportIcons[item.icon]}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEW SECTION STARTS HERE */}

      <div className="value-grid export-tight-grid">
        {[
          exportInfo.moq,
          exportInfo.leadTime,
          exportInfo.packagingLogistics,
        ].map((item, index) => (
          <div className="value-card" key={index}>
            <div className="export-card-tag">{item.heading}</div>

            <h3 className="export-card-title">{item.subHeading}</h3>

            <p>{item.description}</p>

            {item.points.map((point, i) => (
              <p key={i}>{point}</p>
            ))}
          </div>
        ))}
      </div>

      <section className="export-tight-process">
        <div className="about-eyebrow">ORDER PROCESS</div>

        <h2 className="display">How We Get Your Order To You</h2>
        <div className="process-grid">
          <div className="process-step">
            <div className="step-num">STEP 01</div>
            <h3>Enquiry &amp; Spec</h3>
            <p>Share your required product, GSM, size, color and quantity.</p>
          </div>
          <div className="process-step">
            <div className="step-num">STEP 02</div>
            <h3>Quote &amp; Sample</h3>
            <p>We confirm pricing, MOQ, and can provide samples on request.</p>
          </div>
          <div className="process-step">
            <div className="step-num">STEP 03</div>
            <h3>Production</h3>
            <p>Manufacturing and packing per your specification.</p>
          </div>
          <div className="process-step">
            <div className="step-num">STEP 04</div>
            <h3>Shipping</h3>
            <p>Container loading (20ft/40ft) with full export documentation.</p>
          </div>
        </div>
      </section>
      <section className="export">
        <div className="export-overlay weave-dark"></div>
        <div className="wrap export-inner">
          <div>
            <div className="export-eyebrow">READY TO START?</div>
            <h2 className="display">Get an Export Quote Today</h2>
            <p>
              Tell us what you need — we&#39;ll respond with pricing and lead
              time.
            </p>
          </div>
          <div className="export-cta-wrap">
            <Link href="/contact" className="btn-white">
              Request Quote →
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
