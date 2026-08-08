import companyData from "../../data/company.json";
import categoriesData from "../../data/categories-index.json";
import productsData from "../../data/products/products.json";
import ownBrandsData from "../../data/own-brands.json";

const baseUrl = "https://alitraderspolymers.com";

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function sitemap() {
  const staticRoutes = [
    { url: "/", changeFrequency: "weekly", priority: 1.0 },
    { url: "/about", changeFrequency: "monthly", priority: 0.9 },
    { url: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { url: "/export", changeFrequency: "monthly", priority: 0.8 },
    { url: "/products", changeFrequency: "weekly", priority: 0.95 },
    { url: "/own-brands", changeFrequency: "weekly", priority: 0.9 },
  ];

  const categoryRoutes = (categoriesData.categories || []).map((category) => ({
    url: `/products/${category.id}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const productRoutes = (productsData.products || []).map((product) => ({
    url: `/products/${product.id}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const brandRoutes = (ownBrandsData.groups || []).flatMap((group) =>
    (group.brands || []).map((brand) => ({
      url: `/own-brands/${brand.slug || slugify(brand.name || "")}`,
      changeFrequency: "monthly",
      priority: 0.75,
    })),
  );

  const routes = [
    ...staticRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...brandRoutes,
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
