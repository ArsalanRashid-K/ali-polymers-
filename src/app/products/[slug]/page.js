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

  const specificationRows = product.specifications.map((spec) => ({
    label: spec.label,
    values: spec.values,
  }));

  const hasVariants =
    product.ungroupedVariants?.length > 0 || product.variantGroups?.length > 0;

  const hasFeatures =
    product.features?.length > 0 || product.applications?.length > 0;

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
            {!hasVariants && (
              <div className="detail-box product-summary-details">
                <div className="detail-content">
                  {product.features?.length > 0 && (
                    <div className="detail-list-block">
                      <h2>Features</h2>

                      {product.features.map((feature) => (
                        <div className="detail-item" key={feature}>
                          <span className="dash">-</span>
                          <span className="label">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {product.applications?.length > 0 && (
                    <div className="detail-list-block">
                      <h2>Applications</h2>

                      {product.applications.map((application) => (
                        <div className="detail-item" key={application}>
                          <span className="dash">-</span>
                          <span className="label">{application}</span>
                        </div>
                      ))}
                    </div>
                  )}
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
        {hasVariants && (
          <div className="detail-box">
            <div className="detail-content">
              {product.features?.length > 0 && (
                <div className="detail-list-block">
                  <h2>Features</h2>

                  {product.features.map((feature) => (
                    <div className="detail-item" key={feature}>
                      <span className="dash">-</span>
                      <span className="label">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {product.applications?.length > 0 && (
                <div className="detail-list-block">
                  <h2>Applications</h2>

                  {product.applications.map((application) => (
                    <div className="detail-item" key={application}>
                      <span className="dash">-</span>
                      <span className="label">{application}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* SPECIFICATION */}
        {specificationRows.length > 0 && (
          <div className="specification-box">
            <h2>Specification</h2>

            <table className="spec-table specification-table">
              <tbody>
                {product.specifications.map((spec) => (
                  <tr key={spec.label}>
                    <td>{spec.label}</td>

                    <td>
                      <div className="spec-values-grid">
                        {spec.values?.map((value) => (
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
