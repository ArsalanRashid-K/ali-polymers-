import Header from "../components/Header";
import Footer from "../components/Footer";
import companyData from "../../../data/company.json";
import ownBrandsData from "../../../data/own-brands.json";
import pageImages from "../../../data/images/page-images.json";

export const metadata = {
  title: `Our Own Brands | ${companyData.name}`,
  description: ownBrandsData.pageIntro,
};

export default function OwnBrandsPage() {
  const groups = Array.isArray(ownBrandsData.groups)
    ? ownBrandsData.groups
    : [];

  return (
    <>
      <Header />

      <section
        className="page-hero weave own-brands-hero"
        style={{
          backgroundColor: "#0b6f3f",
          backgroundImage: "none",
        }}
      >
        <div className="wrap">
          <h1 className="display own-brands-hero-title">
            {ownBrandsData.pageTitle}
          </h1>
          <p>{ownBrandsData.pageIntro}</p>
        </div>
        <div className="thread"></div>
      </section>

      <section className="content-section" style={{ paddingTop: "50px" }}>
        {groups.map((group) => {
          const brands = Array.isArray(group.brands) ? group.brands : [];
          const categoryName = group.categoryName || "Other Products";
          const categorySlug = group.categorySlug || "products";

          return (
            <div key={categorySlug} style={{ marginBottom: "48px" }}>
              <h2 className="display own-brands-category-title">
                {categoryName.toUpperCase()}
              </h2>
              <div
                className="cat-grid own-brands-grid"
                style={{ marginTop: "16px" }}
              >
                {brands.map((brand, index) => {
                  const brandName = brand.name || "Brand";
                  const brandInitials = brandName.slice(0, 2).toUpperCase();

                  return (
                    <a
                      href={`/products/${categorySlug}`}
                      key={`${categorySlug}-${brandName}-${index}`}
                      className="cat-card"
                    >
                      <div className="cat-img weave">
                        <span
                          className="cat-num display"
                          style={{ fontSize: "22px" }}
                        >
                          {brandInitials}
                        </span>
                      </div>
                      <div className="cat-body">
                        <h3>{brandName}</h3>
                        <p>Part of our {categoryName} range</p>
                        <span className="cat-tag">
                          View Full Specification →
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      <section className="export">
        <div className="export-overlay weave-dark"></div>
        <div className="wrap export-inner">
          <div>
            <div className="export-eyebrow">EXPLORE MORE</div>
            <h2 className="display">See Our Full Product Catalogue</h2>
            <p>
              15 categories across agriculture, construction, packaging and
              household use.
            </p>
          </div>
          <div className="export-cta-wrap">
            <a href="/products" className="btn-white">
              Browse All Products →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
