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
      <section
        className="hero"
        style={{
          backgroundImage: `url(${pageImages.home})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="wrap hero-inner">
          <div>
            <div className="eyebrow">MANUFACTURER &amp; DISTRIBUTOR</div>
            <h1 className="hero-h display">
              BUILT TO
              <br />
              <span className="red">HOLD UP</span>
            </h1>
            <p className="hero-sub">
              {companyData.yearsExperience}+ years of manufacturing quality
              tarpaulins, shade nets, ropes, and polymer products— crafted in
              Kerala, trusted worldwide.
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
        </div>
        <div className="thread"></div>
      </section>

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
                Own brands: NEXATARP, NEXANET, NEXAWEED etc.
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
              <div className="cat-more">
                <Link href="/products" className="explore-more-btn">
                  Explore More →
                </Link>
              </div>
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
        <div className="why-layout">
          <div className="why-left">
            <div className="about-eyebrow">
              WHY {companyData.name.toUpperCase()}
            </div>

            <h2 className="display">Quality You Can Feel in the Weave.</h2>

            <div className="why-grid">
              {companyData.whyalitraders.map((point, i) => (
                <div className="why-box" key={i}>
                  <div className="why-num display">
                    {["30+", "1000+", "18+", "6+"][i]}
                  </div>

                  <p className="t">-{point.split(" ").slice(0, 4).join(" ")}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="why-right">
            <img
              src="https://res.cloudinary.com/nus7e4x2/image/upload/v1786032595/jpeg-optimizer_DSC_1284_qoalci.jpg"
              alt="Sustainability image 1"
              className="why-svg"
            />
            <img
              src="https://res.cloudinary.com/nus7e4x2/image/upload/v1786032594/jpeg-optimizer_DSC_1262_yqbopr.jpg"
              alt="Sustainability image 2"
              className="why-svg"
            />
          </div>
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
