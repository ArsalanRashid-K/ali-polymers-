import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import ProductGallery from "./ProductGallery";

import companyData from "../../../../data/company.json";
import productsData from "../../../../data/products/products.json";

export async function generateStaticParams() {
  return productsData.products.map((product) => ({
    slug: product.id,
  }));
}

function getProduct(slug) {
  return productsData.products.find((p) => p.id === slug) || null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = getProduct(slug);
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | ${companyData.name}`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const images = product.images?.length
    ? product.images
    : product.image
      ? [product.image]
      : [];

  const specifications = Array.isArray(product.specifications)
    ? product.specifications
    : [];

  const normalFeatures = Array.isArray(product.features)
    ? product.features
    : [];

  const normalApplications = Array.isArray(product.applications)
    ? product.applications
    : [];

  /*
   * Some products, such as Nylon Products, store
   * Features and Applications inside specifications.
   *
   * Example:
   * "Stay Wire — Features"
   * "Stay Wire — Applications"
   * "Trimmer Line — Features"
   * "Trimmer Line — Applications"
   *
   * We extract those here without changing the JSON.
   */

  const groupedFeatureSpecifications = specifications.filter((spec) =>
    /—\s*Features$/i.test(String(spec.label || "")),
  );

  const groupedApplicationSpecifications = specifications.filter((spec) =>
    /—\s*Applications$/i.test(String(spec.label || "")),
  );

  /*
   * Anything that is NOT a "... — Features" or
   * "... — Applications" row remains a real specification.
   */
  const actualSpecifications = specifications.filter(
    (spec) =>
      !/—\s*Features$/i.test(String(spec.label || "")) &&
      !/—\s*Applications$/i.test(String(spec.label || "")),
  );

  /*
   * Group the special Features/Application rows
   * by their product name:
   *
   * Stay Wire
   * Trimmer Line
   */
  const groupedDetails = {};

  groupedFeatureSpecifications.forEach((spec) => {
    const groupName = String(spec.label)
      .replace(/—\s*Features$/i, "")
      .trim();

    if (!groupedDetails[groupName]) {
      groupedDetails[groupName] = {
        features: [],
        applications: [],
      };
    }

    groupedDetails[groupName].features.push(
      ...(Array.isArray(spec.values) ? spec.values : []),
    );
  });

  groupedApplicationSpecifications.forEach((spec) => {
    const groupName = String(spec.label)
      .replace(/—\s*Applications$/i, "")
      .trim();

    if (!groupedDetails[groupName]) {
      groupedDetails[groupName] = {
        features: [],
        applications: [],
      };
    }

    groupedDetails[groupName].applications.push(
      ...(Array.isArray(spec.values) ? spec.values : []),
    );
  });

  const groupedDetailGroups = Object.entries(groupedDetails);

  const hasGroupedDetails = groupedDetailGroups.length > 0;

  /*
   * A product has Features/Applications if it has either:
   * 1. normal features/applications in JSON, OR
   * 2. grouped feature/application specifications.
   */
  const hasFeatures =
    normalFeatures.length > 0 ||
    normalApplications.length > 0 ||
    hasGroupedDetails;

  const hasVariants =
    product.ungroupedVariants?.length > 0 || product.variantGroups?.length > 0;

  return (
    <>
      <Header />

      <section
        className="page-hero weave product-hero"
        style={{
          backgroundColor: "#3b3d3d",
          backgroundImage: "none",
        }}
      >
        <div className="wrap">
          <h1 className="display own-brands-hero-title">{product.name}</h1>
          <p>{product.cardApplication}</p>
        </div>
        <div className="thread"></div>
      </section>

      {/* PRODUCT CONTENT */}
      <div className="spec-block">
        <div className="spec-layout product-detail-grid">
          <ProductGallery images={images} />

          <div className="product-summary">
            <p className="spec-desc">{product.description}</p>

            {/* VARIANTS */}
            {hasVariants && (
              <div className="variant-section">
                <h2>Variants</h2>

                {/* Ungrouped variants */}
                {product.ungroupedVariants?.length > 0 && (
                  <div className="variant-group-card">
                    <div className="variant-card-list">
                      {product.ungroupedVariants.map((variant) => (
                        <article className="variant-card" key={variant.slug}>
                          <div className="variant-card-head">
                            <h4>{variant.name}</h4>

                            {variant.isOwnBrand && variant.brandSlug ? (
                              <Link
                                href={`/own-brands/${variant.brandSlug}`}
                                className="brand-pill brand-link own-brand-pill"
                              >
                                {variant.name} • Explore Brand →
                              </Link>
                            ) : variant.isOwnBrand ? (
                              <span className="brand-pill own-brand-pill">
                                {variant.name} • Explore Brand →
                              </span>
                            ) : null}
                          </div>

                          {variant.description && <p>{variant.description}</p>}
                        </article>
                      ))}
                    </div>
                  </div>
                )}

                {/* Grouped variants */}
                {product.variantGroups?.length > 0 && (
                  <div className="variant-cards">
                    {product.variantGroups.map((group) => (
                      <div key={group.name} className="variant-group-card">
                        <div className="variant-group-title">
                          <h3>{group.name}</h3>
                        </div>

                        <div className="variant-card-list">
                          {group.variants?.map((variant) => (
                            <article
                              className="variant-card"
                              key={variant.slug}
                            >
                              <div className="variant-card-head">
                                <h4>{variant.name}</h4>

                                {variant.isOwnBrand && variant.brandSlug ? (
                                  <Link
                                    href={`/own-brands/${variant.brandSlug}`}
                                    className="brand-pill brand-link own-brand-pill"
                                  >
                                    {variant.name} • Explore Brand →
                                  </Link>
                                ) : variant.isOwnBrand ? (
                                  <span className="brand-pill own-brand-pill">
                                    {variant.name} • Explore Brand →
                                  </span>
                                ) : null}
                              </div>

                              {variant.description && (
                                <p>{variant.description}</p>
                              )}
                            </article>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* FEATURES + APPLICATIONS
          Render here ONLY when there are NO variants */}
            {!hasVariants && hasFeatures && (
              <div className="detail-box product-summary-details">
                <div className="detail-content">
                  {/* Normal product Features */}
                  {normalFeatures.length > 0 && (
                    <div className="detail-list-block">
                      <h2>Features</h2>

                      {normalFeatures.map((feature) => (
                        <div className="detail-item" key={feature}>
                          <span className="dash">-</span>
                          <span className="label">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Normal product Applications */}
                  {normalApplications.length > 0 && (
                    <div className="detail-list-block">
                      <h2>Applications</h2>

                      {normalApplications.map((application) => (
                        <div className="detail-item" key={application}>
                          <span className="dash">-</span>
                          <span className="label">{application}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Products such as Nylon where
          Features/Applications are stored in specifications */}
                  {groupedDetailGroups.map(([groupName, details]) => (
                    <div className="brand-style-detail-group" key={groupName}>
                      <h2>{groupName}</h2>

                      {details.features.length > 0 && (
                        <div className="detail-list-block">
                          <h3>Features</h3>

                          {details.features.map((feature) => (
                            <div className="detail-item" key={feature}>
                              <span className="dash">-</span>
                              <span className="label">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {details.applications.length > 0 && (
                        <div className="detail-list-block">
                          <h3>Applications</h3>

                          {details.applications.map((application) => (
                            <div className="detail-item" key={application}>
                              <span className="dash">-</span>
                              <span className="label">{application}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="spec-block product-bottom-grids">
        {/* FEATURES + APPLICATIONS
      Render here ONLY when variants exist */}
        {hasVariants && hasFeatures && (
          <div className="detail-box">
            <div className="detail-content">
              {normalFeatures.length > 0 && (
                <div className="detail-list-block">
                  <h2>Features</h2>

                  {normalFeatures.map((feature) => (
                    <div className="detail-item" key={feature}>
                      <span className="dash">-</span>
                      <span className="label">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {normalApplications.length > 0 && (
                <div className="detail-list-block">
                  <h2>Applications</h2>

                  {normalApplications.map((application) => (
                    <div className="detail-item" key={application}>
                      <span className="dash">-</span>
                      <span className="label">{application}</span>
                    </div>
                  ))}
                </div>
              )}

              {groupedDetailGroups.map(([groupName, details]) => (
                <div className="brand-style-detail-group" key={groupName}>
                  <h2>{groupName}</h2>

                  {details.features.length > 0 && (
                    <div className="detail-list-block">
                      <h3>Features</h3>

                      {details.features.map((feature) => (
                        <div className="detail-item" key={feature}>
                          <span className="dash">-</span>
                          <span className="label">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {details.applications.length > 0 && (
                    <div className="detail-list-block">
                      <h3>Applications</h3>

                      {details.applications.map((application) => (
                        <div className="detail-item" key={application}>
                          <span className="dash">-</span>
                          <span className="label">{application}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SPECIFICATION */}
        {actualSpecifications.length > 0 && (
          <div className="specification-box">
            <h2>Specification</h2>

            <table className="spec-table specification-table">
              <tbody>
                {actualSpecifications.map((spec) => (
                  <tr key={spec.label}>
                    <td>{spec.label}</td>

                    <td>
                      <div className="spec-values-grid">
                        {Array.isArray(spec.values) &&
                          spec.values.map((value) => (
                            <div key={value} className="spec-value-box">
                              {value}
                            </div>
                          ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* EXPORT SECTION */}
      <section className="export">
        <div className="wrap export-inner">
          <div>
            <div className="export-eyebrow">INTERESTED IN THIS BRAND?</div>

            <h2 className="display">Get a Custom Quote </h2>

            <p>
              Tell us your required specification, size, and quantity — our team
              will get back to you with the best solution.
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
