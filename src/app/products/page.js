import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import companyData from "../../../data/company.json";
import categoriesData from "../../../data/categories-index.json";
import pageImages from "../../../data/images/page-images.json";

export const metadata = {
  title: `Products | ${companyData.name}`,
  description:
    "Browse all 18 product categories manufactured by Ali Traders & Ali Polymers — tarpaulins, shadenets, ropes, rainwear and more.",
};

export default function ProductsIndex() {
  const categories = [...categoriesData.categories].sort(
    (a, b) => a.order - b.order,
  );

  return (
    <>
      <Header />

      <section
        className="page-hero weave products-hero"
        style={{
          backgroundColor: "#a30909",
          backgroundImage: pageImages.products
            ? `url("${pageImages.products}")`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
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
        {categories.map((cat) => (
          <Link href={`/products/${cat.id}`} key={cat.id} className="cat-card">
            {cat.icon && (
              <div
                className="cat-img"
                style={{
                  backgroundImage: `url("${cat.icon}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            )}
            <div className="cat-body">
              <h3>{cat.name}</h3>
              <p>{cat.shortDescription}</p>
              <span className="cat-tag">View Specs</span>
            </div>
          </Link>
        ))}
      </div>

      <section className="export">
        <div className="wrap export-inner">
          <div>
            <div className="export-eyebrow">CAN&apos;T FIND WHAT YOU NEED?</div>
            <h1 className="display">
              We manufacture to custom specifications too.
            </h1>
            <p>
              Tell us your required grade, size, and quantity — we&apos;ll get
              back with options.
            </p>
          </div>
          <div className="export-cta-wrap">
            <Link href="/contact" className="btn-white">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
