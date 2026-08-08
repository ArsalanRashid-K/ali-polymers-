import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import companyData from "../../../data/company.json";
import ownBrandsData from "../../../data/own-brands.json";

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
          backgroundColor: "#070707",
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

      {/* <section className="content-section" style={{ paddingTop: "50px" }}>
        <div className="categories-grid">
          {groups.map((group) => {
            const brands = Array.isArray(group.brands) ? group.brands : [];

            const categoryName = group.categoryName || "Other Products";
            const categorySlug = group.categorySlug || "products";

            return (
              <div key={categorySlug} className="category-block">
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
                    const brandImage =
                      brand.imageSource ||
                      (Array.isArray(brand.image)
                        ? brand.image[0]
                        : brand.image);
                    const slugify = (str) =>
                      String(str)
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)/g, "");

                    const brandSlug = brand.slug || slugify(brandName);

                    const isProductCategory = [
                      "ldpe-construction-sheet",
                      "weedmat",
                    ].includes(categorySlug);

                    const href = isProductCategory
                      ? `/products/${categorySlug}`
                      : `/own-brands/${brandSlug}`;

                    return (
                      <Link
                        href={href}
                        key={`${categorySlug}-${brandName}-${index}`}
                        className="cat-card"
                      >
                        <div className="cat-img">
                          {brandImage ? (
                            <img
                              src={brandImage}
                              alt={brandName}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                              }}
                            />
                          ) : (
                            <span className="cat-num display">
                              {brandInitials}
                            </span>
                          )}
                        </div>

                        <div className="cat-body">
                          <h3>{brandName}</h3>
                          <p>Part of our {categoryName} range</p>
                          <span className="cat-tag">
                            View Full Specification
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section> */}
      <section className="own-brands-section">
        <div className="wrap">
          <div className="brand-card-grid">
            {groups.flatMap((group) => {
              const brands = Array.isArray(group.brands) ? group.brands : [];
              const categoryName = group.categoryName || "Other Products";
              const categorySlug = group.categorySlug || "products";

              return brands.map((brand, index) => {
                const brandName = brand.name || "Brand";

                const brandImage = Array.isArray(brand.image)
                  ? brand.image[0]
                  : brand.image;

                const slugify = (str) =>
                  String(str)
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");

                const brandSlug = brand.slug || slugify(brandName);

                const isProductCategory = [
                  "ldpe-construction-sheet",
                  "weedmat",
                ].includes(categorySlug);

                const href = isProductCategory
                  ? `/products/${categorySlug}`
                  : `/own-brands/${brandSlug}`;

                return (
                  <Link
                    href={href}
                    key={`${categorySlug}-${brandName}-${index}`}
                    className="brand-card"
                  >
                    <div className="brand-card-category">{categoryName}</div>
                    <div className="brand-card-image">
                      {brandImage ? (
                        <img src={brandImage} alt={brandName} loading="lazy" />
                      ) : (
                        <div className="brand-card-placeholder">
                          {brandName.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div className="brand-card-content">
                      <h3>{brandName}</h3>
                      {/* <p className="brand-category">
                        Part of our <strong>{categoryName}</strong> range
                      </p> */}
                      <span className="brand-card-link">
                        View Full Specification
                        <span>→</span>
                      </span>
                    </div>
                  </Link>
                );
              });
            })}
          </div>
        </div>
      </section>
      <section
        className="export"
        style={{ backgroundColor: "#C41E1E", backgroundImage: "none" }}
      >
        <div className="wrap export-inner">
          <div>
            <div className="export-eyebrow">EXPLORE MORE</div>
            <h2 className="display">See Our Full Product Catalogue</h2>
            <p>
              18 categories across agriculture, construction, packaging and
              household use.
            </p>
          </div>
          <div className="export-cta-wrap">
            <Link href="/products" className="btn-white">
              Browse All Products →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
