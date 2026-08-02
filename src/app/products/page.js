import Header from "../components/Header";
import Footer from "../components/Footer";
import companyData from "../../../data/company.json";
import categoriesData from "../../../data/categories-index.json";

export const metadata = {
  title: `Products | ${companyData.name}`,
  description:
    "Browse all 15 product categories manufactured by Ali Traders & Ali Polymers — tarpaulins, shadenets, ropes, rainwear and more.",
};

export default function ProductsIndex() {
  const categories = [...categoriesData.categories].sort(
    (a, b) => a.order - b.order,
  );

  return (
    <>
      <Header />

      <section className="page-hero weave">
        <div className="wrap">
          <div className="breadcrumb"></div>
          <h1 className="display">Full Product Catalogue</h1>
          <p>
            {categories.length} categories, engineered for agriculture,
            construction, packaging and export.
          </p>
        </div>
        <div className="thread"></div>
      </section>

      <div className="full-cat-grid" style={{ paddingTop: "60px" }}>
        {categories.map((cat, i) => (
          <a href={`/products/${cat.id}`} key={cat.id} className="cat-card">
            <div className="cat-img weave">
              <span className="cat-num display">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="cat-body">
              <h3>{cat.name}</h3>
              <p>{cat.shortDescription}</p>
              <span className="cat-tag">View Specs →</span>
            </div>
          </a>
        ))}
      </div>

      <section className="export">
        <div className="export-overlay weave-dark"></div>
        <div className="wrap export-inner">
          <div>
            <div className="export-eyebrow">CAN'T FIND WHAT YOU NEED?</div>
            <h2 className="display">
              We manufacture to custom specifications too.
            </h2>
            <p>
              Tell us your required grade, size, and quantity — we'll get back
              with options.
            </p>
          </div>
          <div className="export-cta-wrap">
            <a href="/contact" className="btn-white">
              Contact Us →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
