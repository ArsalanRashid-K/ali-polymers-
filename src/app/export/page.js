import Header from '../components/Header';
import Footer from '../components/Footer';
import companyData from '../../../data/company.json';

export const metadata = {
  title: `Export | ${companyData.name}`,
  description: companyData.export.intro.slice(0, 155),
};

export default function ExportPage() {
  const { export: exportInfo } = companyData;

  return (
    <>
      <Header />

      <section className="page-hero weave">
        <div className="wrap">
          <h1 className="display own-brands-hero-title">Export-Ready, Container to Doorstep</h1>
          <p>{exportInfo.markets}</p>
        </div>
        <div className="thread"></div>
      </section>

      <section className="content-section export-tight-section">
        <div className="about-eyebrow">OUR EXPORT PROMISE</div>
        <h2 className="display">Built for International Buyers</h2>
        <p>{exportInfo.intro}</p>
      </section>

      <section className="export-support">
        <div className="about-eyebrow">EXPORT SUPPORT</div>
        <h2 className="display">End-to-End Export Support in 5 Steps</h2>
        <div className="export-support-row">
          {exportInfo.support.map((point, i) => (
            <div className="export-support-item" key={i}>
              <div className="export-support-num display">{String(i + 1).padStart(2, '0')}</div>
              <p className="d">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="value-grid export-tight-grid">
        <div className="value-card">
          <div className="tag">MINIMUM ORDER QUANTITY</div>
          <h3>MOQ</h3>
          {exportInfo.moq.map((m, i) => <p key={i}>{m}</p>)}
        </div>
        <div className="value-card">
          <div className="tag">PACKAGING &amp; LOGISTICS</div>
          <h3>How We Ship</h3>
          {exportInfo.packagingLogistics.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>

      <section className="process-grid export-tight-process">
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
      </section>

      <section className="export">
        <div className="export-overlay weave-dark"></div>
        <div className="wrap export-inner">
          <div>
            <div className="export-eyebrow">READY TO START?</div>
            <h2 className="display">Get an Export Quote Today</h2>
            <p>Tell us what you need — we'll respond with pricing and lead time.</p>
          </div>
          <div className="export-cta-wrap">
            <a href="/contact" className="btn-white">Request Quote →</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
