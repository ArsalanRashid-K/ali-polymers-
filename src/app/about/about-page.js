import Header from '../components/Header';
import Footer from '../components/Footer';
import companyData from '../../data/company.json';

export const metadata = {
  title: `About Us | ${companyData.name}`,
  description: companyData.about.slice(0, 155),
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <section className="page-hero weave">
        <div className="wrap">
          <div className="breadcrumb">
            Home <span className="red">/</span> About
          </div>
          <h1 className="display">Manufacturing Trust Since Day One</h1>
          <p>{companyData.yearsExperience}+ years of manufacturing and wholesale distribution, headquartered in Kerala.</p>
        </div>
        <div className="thread"></div>
      </section>

      <div className="stat-strip">
        <div><div className="n display">{companyData.yearsExperience}+</div><div className="l">YEARS EXPERIENCE</div></div>
        <div><div className="n display">15</div><div className="l">PRODUCT CATEGORIES</div></div>
        <div><div className="n display">6+</div><div className="l">OWN BRANDS</div></div>
        <div><div className="n display">3</div><div className="l">EXPORT REGIONS</div></div>
      </div>

      <section className="content-section">
        <div className="about-eyebrow">WHO WE ARE</div>
        <h2 className="display">{companyData.name}</h2>
        <p>{companyData.about}</p>
        <p>{companyData.structure}</p>
      </section>

      <div className="value-grid">
        <div className="value-card">
          <div className="tag">OUR VISION</div>
          <h3>Vision</h3>
          <p>{companyData.vision}</p>
        </div>
        <div className="value-card">
          <div className="tag">OUR MISSION</div>
          <h3>Mission</h3>
          <p>{companyData.mission}</p>
        </div>
      </div>

      <section className="why">
        <div className="about-eyebrow">WHY CHOOSE US</div>
        <h2 className="display">What Sets Us Apart</h2>
        <div className="why-grid-flex">
          {companyData.whyChooseUs.map((point, i) => (
            <div className="why-box" key={i}>
              <div className="why-num display">{String(i + 1).padStart(2, '0')}</div>
              <p className="d">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="export">
        <div className="export-overlay weave-dark"></div>
        <div className="wrap export-inner">
          <div>
            <div className="export-eyebrow">SEE THE FULL RANGE</div>
            <h2 className="display">Explore Our Product Categories</h2>
            <p>15 categories across agriculture, construction, packaging and household use.</p>
          </div>
          <div className="export-cta-wrap">
            <a href="/products" className="btn-white">Browse Products →</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
