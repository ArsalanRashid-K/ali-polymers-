import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "data/products");
  const files = fs.readdirSync(dir);
  return files.map((file) => ({ slug: file.replace(".json", "") }));
}

function getProduct(slug) {
  const filePath = path.join(process.cwd(), "data/products", `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.seo.title,
    description: product.seo.description,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const pageImagesPath = path.join(
    process.cwd(),
    "data/images/page-images.json",
  );
  const pageImages = JSON.parse(fs.readFileSync(pageImagesPath, "utf-8"));
  const itemImages =
    slug === "pp-mat"
      ? (pageImages.ppMatItemImages ?? {})
      : slug === "rain-coat"
        ? (pageImages.rainCoatItemImages ?? {})
        : slug === "garbage-bags"
          ? (pageImages.garbageBagsItemImages ?? {})
          : slug === "ldpe-construction-sheet"
            ? (pageImages.ldpeConstructionSheetItemImages ?? {})
            : slug === "tarpaulin"
              ? (pageImages.tarpaulinItemImages ?? {})
              : slug === "shadenet"
                ? (pageImages.shadenetItemImages ?? {})
                : slug === "well-pond-net"
                  ? (pageImages.wellPondNetItemImages ?? {})
                  : slug === "hexagonal-net"
                    ? (pageImages.hexagonalNetItemImages ?? {})
                    : slug === "weedmat"
                      ? (pageImages.weedmatItemImages ?? {})
                      : slug === "rope"
                        ? (pageImages.ropeItemImages ?? {})
                        : slug === "suthali"
                          ? (pageImages.suthaliItemImages ?? {})
                          : slug === "nylon-products"
                            ? (pageImages.nylonProductsItemImages ?? {})
                            : slug === "hoses"
                              ? (pageImages.hosesItemImages ?? {})
                              : slug === "box-strap"
                                ? (pageImages.boxStrapItemImages ?? {})
                                : slug === "rain-hat"
                                  ? (pageImages.rainHatItemImages ?? {})
                                  : {};
  const heroImage = pageImages.productDetailHeroImages?.[slug];

  return (
    <>
      <Header />

      <section
        className="page-hero weave"
        style={{
          minHeight: "360px",
          background: heroImage
            ? `url("${heroImage}") center center / cover no-repeat`
            : "#0c4c94",
        }}
      >
        <div className="wrap">
          <div className="breadcrumb">{product.name.toUpperCase()}</div>
          <h1 className="display">{product.name}</h1>
          <p>{product.shortDescription}</p>
        </div>
        <div className="thread"></div>
      </section>

      {product.items.map((item) => (
        <div className="spec-block" key={item.id}>
          <div className="spec-layout">
            <div className="spec-visual">
              <div
                className="spec-visual-img weave"
                style={
                  itemImages[item.name]
                    ? {
                        backgroundImage: `url("${itemImages[item.name]}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                      }
                    : undefined
                }
              ></div>
            </div>
            <div>
              <h2 className="display">{item.name}</h2>

              {item.brands.length > 0 && (
                <div className="brand-row">
                  {item.brands.map((b) => (
                    <span className="brand-pill" key={b.name}>
                      {b.name}
                      {b.grade ? ` — ${b.grade}` : ""}
                    </span>
                  ))}
                </div>
              )}

              <table className="spec-table">
                <tbody>
                  {item.material && (
                    <tr>
                      <td>Material</td>
                      <td>{item.material}</td>
                    </tr>
                  )}
                  {item.gsm.length > 0 && (
                    <tr>
                      <td>GSM Range</td>
                      <td>{item.gsm.join(", ")}</td>
                    </tr>
                  )}
                  {item.shadePercentage.length > 0 && (
                    <tr>
                      <td>Shade %</td>
                      <td>{item.shadePercentage.join("%, ")}%</td>
                    </tr>
                  )}
                  {item.meshSize.length > 0 && (
                    <tr>
                      <td>Mesh Size</td>
                      <td>{item.meshSize.join(", ")}</td>
                    </tr>
                  )}
                  {item.sizes.length > 0 && (
                    <tr>
                      <td>Sizes</td>
                      <td>{item.sizes.join(", ")}</td>
                    </tr>
                  )}
                  {item.bundleSizes.length > 0 && (
                    <tr>
                      <td>Bundle Sizes</td>
                      <td>{item.bundleSizes.join(", ")}</td>
                    </tr>
                  )}
                  {item.colours.length > 0 && (
                    <tr>
                      <td>Colours</td>
                      <td>{item.colours.join(", ")}</td>
                    </tr>
                  )}
                  {item.lengths.length > 0 && (
                    <tr>
                      <td>Lengths</td>
                      <td>{item.lengths.join(", ")}</td>
                    </tr>
                  )}
                  {item.packing.length > 0 && (
                    <tr>
                      <td>Packing</td>
                      <td>{item.packing.join(", ")}</td>
                    </tr>
                  )}
                  {item.features.length > 0 && (
                    <tr>
                      <td>Features</td>
                      <td>{item.features.join(", ")}</td>
                    </tr>
                  )}
                  {item.applications.length > 0 && (
                    <tr>
                      <td>Applications</td>
                      <td>{item.applications.join(", ")}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}

      <section className="export">
        <div className="export-overlay weave-dark"></div>
        <div className="wrap export-inner">
          <div>
            <div className="export-eyebrow">INTERESTED IN THIS PRODUCT?</div>
            <h2 className="display">Get a Custom Quote for {product.name}</h2>
            <p>
              Tell us your required spec, size, and quantity — we will get back
              with pricing.
            </p>
          </div>
          <div className="export-cta-wrap">
            <Link href="/contact" className="btn-white">
              Request Quote →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
