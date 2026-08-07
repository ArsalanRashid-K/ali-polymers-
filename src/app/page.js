import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroCarousel from "./components/HeroCarousel";
import Link from "next/link";
import companyData from "../../data/company.json";
import categoriesData from "../../data/categories-index.json";
import pageImages from "../../data/images/page-images.json";

export const metadata = {
  title: companyData.seo.homeTitle,
  description: companyData.seo.homeDescription,
};

export default function Home() {
  // Show first 7 categories on homepage, "+N more" card for the rest
  const categories = [...categoriesData.categories].sort(
    (a, b) => a.order - b.order,
  );
  const featured = categories.slice(0, 7);
  const remainingCount = categories.length - featured.length;

  return (
    <>
      <Header />

      {/* HERO */}
      <HeroCarousel images={pageImages.home}>
        <div className="wrap hero-inner">
          <div>
            <div className="eyebrow">MANUFACTURER &amp; DISTRIBUTOR</div>
            <h1 className="hero-h display">
              BUILT TO
              <br />
              <span className="red">HOLD UP.</span>
            </h1>
            <p className="hero-sub">
              {companyData.yearsExperience}+ years manufacturing tarpaulins,
              shadenets, ropes, and polymer products for agriculture,
              construction, and export from Kerala to the world.
            </p>
            <div className="hero-ctas">
              <Link href="/products" className="btn-dark">
                Browse Products
              </Link>
              <Link href="/export" className="btn-outline">
                Export Enquiries →
              </Link>
            </div>
          </div>
          {/* <div className="stat-grid">
            <div className="stat-box sb-dark">
              <span className="stat-num display">
                {companyData.yearsExperience}+
              </span>
              <span className="stat-label">
                YEARS IN
                <br />
                OPERATION
              </span>
            </div>
            <div className="stat-box sb-red">
              <span className="stat-num display">{categories.length}</span>
              <span className="stat-label">
                PRODUCT
                <br />
                CATEGORIES
              </span>
            </div>
            <div className="stat-box sb-paper">
              <span className="stat-num display">3</span>
              <span className="stat-label">
                CONTINENTS
                <br />
                SERVED
              </span>
            </div>
            <div className="stat-box sb-white">
              <span className="stat-num display">100%</span>
              <span className="stat-label">
                VIRGIN GRADE
                <br />
                AVAILABLE
              </span>
            </div>
          </div> */}
        </div>
      </HeroCarousel>

      {/* ABOUT STRIP */}
      <section className="wrap about">
        <div>
          <div className="about-eyebrow">WHO WE ARE</div>
          <h2 className="display">
            Manufacturing &amp; Wholesale, Under One Roof
          </h2>
          <p className="about-body">{companyData.about}</p>
          <div className="about-list">
            <div className="about-item">
              <span className="dash">•</span>
              <span className="label">
                100% virgin, semi-virgin &amp; reprocessed grades
              </span>
            </div>
            <div className="about-item">
              <span className="dash">•</span>
              <span className="label">
                Own brands: NEXATARP, NEXANET, NEXAWEED
              </span>
            </div>
            <div className="about-item">
              <span className="dash">•</span>
              <span className="label">
                Export-ready, customized specifications
              </span>
            </div>
            <div className="about-item">
              <span className="dash">•</span>
              <span className="label">
                Container loading, full documentation support
              </span>
            </div>
          </div>
        </div>
        <div className="about-video">
          <video
            src={pageImages.homePageVideo1}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="about-video-player"
          />
        </div>
      </section>

      {/* PRODUCT CATEGORIES — pulled from categories-index.json */}
      <section className="products">
        <div className="wrap">
          <div className="products-head">
            <div>
              <div className="about-eyebrow">WHAT WE MAKE</div>
              <h2 className="display">Product Categories</h2>
            </div>
            <Link href="/products" className="view-all">
              View All {categories.length} Categories →
            </Link>
          </div>

          <div className="cat-grid">
            {featured.map((cat, i) => (
              <Link
                href={`/products/${cat.id}`}
                key={cat.id}
                className="cat-card"
              >
                <div className="cat-img">
                  <img
                    src={cat.icon}
                    alt={cat.name}
                    className="cat-image-inner"
                  />
                </div>
                <div className="cat-body">
                  <h3>{cat.name}</h3>
                  <p>{cat.shortDescription}</p>
                  <span className="cat-tag">View Specs </span>
                </div>
              </Link>
            ))}

            {remainingCount > 0 && (
              <Link href="/products" className="cat-card cat-more">
                <h3 className="display">+{remainingCount} More</h3>
                <p>
                  {categories
                    .slice(7)
                    .map((c) => c.name)
                    .join(", ")}
                </p>
                <span>See Full Catalogue →</span>
              </Link>
            )}
          </div>
        </div>
      </section>
      {/* INDUSTRIES WE SERVE */}
      <section className="sectors">
        <div className="wrap">
          <div className="about-eyebrow">INDUSTRIES WE SERVE</div>
          <h2 className="display">Products Designed for Every Industry</h2>

          <div className="sector-grid">
            {companyData.sectors &&
              companyData.sectors.map((s) => (
                <div className="sector-card" key={s.id}>
                  <h3>
                    {s.icon} {s.title}
                  </h3>
                  <p>{s.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why">
        <div className="about-eyebrow">
          WHY {companyData.name.toUpperCase()}
        </div>
        <h2 className="display">Quality You Can Feel in the Weave.</h2>
        <div className="why-grid">
          {companyData.whyChooseUs.slice(0, 4).map((point, i) => (
            <div className="why-box" key={i}>
              <div className="why-num display">
                {["25+", "3", "6+", "100%"][i]}
              </div>
              <p className="t">{point.split(" ").slice(0, 4).join(" ")}</p>
              <p className="d">{point}</p>
            </div>
          ))}
        </div>
      </section>
      {/* EXPORT CTA */}
      <section
        className="export"
        style={{ backgroundColor: "#C41E1E", backgroundImage: "none" }}
      >
        <div className="wrap export-inner">
          <div>
            <div className="export-eyebrow">EXPORT READY</div>
            <h2 className="display">
              Shipping to the Middle East,
              <br />
              Africa &amp; Asia with Reliable Container Solution.
            </h2>
            <p>{companyData.export.markets}</p>
          </div>
          <div className="export-cta-wrap">
            <Link href="/export" className="btn-white">
              Request Export Quote →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
