import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import companyData from "../../../data/company.json";
import pageImages from "../../../data/images/page-images.json";

export const metadata = {
  title: `About Us | ${companyData.name}`,
  description: companyData.about.slice(0, 155),
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <section
        className="page-hero"
        style={{
          backgroundImage: `url(${pageImages.about})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="wrap">
          <div className="breadcrumb"></div>
          <h1 className="display">Manufacturing Trust Since Day One</h1>
          <p>
            {companyData.yearsExperience}+ years of manufacturing and wholesale
            distribution, headquartered in Kerala, India.
          </p>

          {/* hero uses PRODUCTS_11_ as background; gallery moved below */}
        </div>
        <div className="thread"></div>
      </section>

      <div className="stat-strip">
        <div>
          <div className="n display">{companyData.yearsExperience}+</div>
          <div className="l">YEARS EXPERIENCE</div>
        </div>
        <div>
          <div className="n display">15</div>
          <div className="l">PRODUCT CATEGORIES</div>
        </div>
        <div>
          <div className="n display">6+</div>
          <div className="l">OWN BRANDS</div>
        </div>
        <div>
          <div className="n display">3</div>
          <div className="l">EXPORT REGIONS</div>
        </div>
      </div>

      {/* images are distributed across the content below */}

      <section className="content-section">
        <div className="content-grid">
          <div className="content-text">
            <div className="about-eyebrow">WHO WE ARE</div>
            <h2 className="display">{companyData.name}</h2>
            <p>{companyData.about}</p>
            <p>{companyData.structure}</p>
          </div>

          <aside className="content-side">
            <div className="side-img">
              <Image src={pageImages.aboutImages.whoWeAre} alt="who-we-are" fill className="about-side-img" />
            </div>
          </aside>
        </div>
      </section>

      <div className="value-wrap">
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
        <aside className="value-side">
          <div className="side-img">
            <Image src={pageImages.aboutImages.ourMission} alt="our-mission" fill className="about-side-img" />
          </div>
        </aside>
      </div>

      <section className="why">
        <div className="why-wrap">
          <div className="why-main">
            <div className="about-eyebrow">WHY CHOOSE US</div>
            <h2 className="display">What Sets Us Apart</h2>
            <div className="why-grid">
              {companyData.whyChooseUs.map((point, i) => (
                <div className="why-box" key={i}>
                  <div className="why-num display">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="d">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="why-side">
            <div className="side-img">
              <Image src={pageImages.aboutImages.why} alt="why-side" fill className="about-side-img" />
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom uneven cards (remaining images) placed above export CTA */}
      <div className="wrap">
        <div className="bottom-cards">
          {pageImages.aboutImages.bottomCards.map((src, i) => (
            <div className={`card card-${i}`} key={i}>
              <Image src={src} alt={`bottom-${i}`} fill className="card-img" />
            </div>
          ))}
        </div>
      </div>

      <section className="export">
        <div className="export-overlay weave-dark"></div>
        <div className="wrap export-inner">
          <div>
            <div className="export-eyebrow">SEE THE FULL RANGE</div>
            <h2 className="display">Explore Our Product Categories</h2>
            <p>
              15 categories across agriculture, construction, packaging and
              household use.
            </p>
          </div>
          <div className="export-cta-wrap">
            <a href="/products" className="btn-white">
              Browse Products →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
