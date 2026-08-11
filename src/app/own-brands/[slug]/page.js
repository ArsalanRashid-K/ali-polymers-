import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductGallery from "../../products/[slug]/ProductGallery";
import Link from "next/link";

import companyData from "../../../../data/company.json";
import ownBrandsData from "../../../../data/own-brands.json";
export async function generateStaticParams() {
  const params = [];

  ownBrandsData.groups.forEach((group) => {
    group.brands.forEach((brand) => {
      const slugify = (str) =>
        String(str)
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");

      params.push({
        slug: brand.slug || slugify(brand.name || ""),
      });
    });
  });

  return params;
}
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const brand = getBrand(slug);

  if (!brand) {
    return {
      title: "Brand Not Found",
    };
  }

  return {
    title: `${brand.name} | ${companyData.name}`,
    description: brand.detail,
  };
}
function getBrand(slug) {
  const slugify = (str) =>
    String(str)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  for (const group of ownBrandsData.groups) {
    for (const brand of group.brands) {
      const derived = brand.slug || slugify(brand.name || "");
      if (derived === slug) {
        return brand;
      }
    }
  }

  return null;
}
export default async function BrandPage({ params }) {
  const { slug } = await params;

  const brand = getBrand(slug);

  if (!brand) {
    notFound();
  }

  const imgSrc = brand.imageSource || brand.image || "";

  // Normalize specifications to product-like structure: array of { label, values }
  const specsSource = brand.specifications || brand.specification;
  let specifications = [];
  if (Array.isArray(specsSource) && specsSource.length) {
    if (
      typeof specsSource[0] === "object" &&
      specsSource[0] !== null &&
      "label" in specsSource[0] &&
      Array.isArray(specsSource[0].values)
    ) {
      specifications = specsSource;
    } else {
      specifications = [
        {
          label: "Specifications",
          values: specsSource.map((s) =>
            typeof s === "string" ? s : String(s),
          ),
        },
      ];
    }
  } else if (typeof specsSource === "string") {
    specifications = [
      {
        label: "Specifications",
        values: [specsSource],
      },
    ];
  } else if (specsSource && typeof specsSource === "object") {
    specifications = Object.keys(specsSource).map((k) => ({
      label: k,
      values: Array.isArray(specsSource[k])
        ? specsSource[k]
        : [String(specsSource[k])],
    }));
  }

  // Build images array for gallery: prefer brand.image when it's an array,
  // otherwise use imageSource or single image.
  const images = Array.isArray(brand.image)
    ? brand.image
    : imgSrc
      ? [imgSrc]
      : [];

  return (
    <>
      <Header />

      <section
        className="page-hero product-hero"
        style={{ backgroundColor: "#a30909", backgroundImage: "none" }}
      >
        <div className="wrap">
          <h1 className="display own-brands-hero-title">{brand.name}</h1>
        </div>
      </section>

      <div className="spec-block">
        <div className="spec-layout product-detail-grid">
          <ProductGallery images={images} />

          <div className="product-summary">
            <p className="spec-desc">{brand.detail}</p>
            <div className="brand-detail-info-card">
              {brand.features?.length > 0 && (
                <div className="brand-detail-list-block">
                  <h2>Features</h2>

                  {brand.features.map((feature) => (
                    <div className="brand-detail-item" key={feature}>
                      <span className="brand-detail-dash">-</span>
                      <span className="brand-detail-label">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {brand.applications?.length > 0 && (
                <div className="brand-detail-list-block brand-applications-block">
                  <h2>Applications</h2>

                  {brand.applications.map((application) => (
                    <div className="brand-detail-item" key={application}>
                      <span className="brand-detail-dash">-</span>
                      <span className="brand-detail-label">{application}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {Array.isArray(specifications) && specifications.length > 0 && (
              <div className="brand-specification-section">
                <div className="specification-box">
                  <h2>Specification</h2>

                  <table className="spec-table specification-table">
                    <tbody>
                      {specifications.map((spec) => (
                        <tr key={spec.label}>
                          {/* <td className="brand-spec-label"></td> */}
                          <td>
                            <div className="spec-values-grid">
                              {spec.values.map((v) => (
                                <div key={v} className="spec-value-box">
                                  {v}
                                </div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <section
        className="export"
        style={{ backgroundColor: "#C41E1E", backgroundImage: "none" }}
      >
        <div className="wrap export-inner">
          <div>
            <div className="export-eyebrow">INTERESTED IN THIS PRODUCT?</div>
            <h2 className="display">Get a Custom Quote for {brand.name}</h2>
            <p>
              Tell us your required spec, size, and quantity — we will get back
              with pricing.
            </p>
          </div>
          <div className="export-cta-wrap">
            <Link href="/contact" className="btn-white">
              Contact Us →
            </Link>
            {/* <a href="/contact" className="btn-white">
              Request Quote →
            </a> */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
