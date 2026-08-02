# How to Edit the Website Content

This folder holds all the text and product information shown on the website.
You don't need to know any coding to update it — just follow the patterns below.

**Important:** these files use a format called JSON. The strict rules are:
- Every piece of text goes in "double quotes"
- Every line (except the last one in a list) ends with a comma `,`
- Never delete a `{`, `}`, `[`, `]`, or `:` — only change the text between quotes
- After editing, ask your developer to check the file before it goes live (one missing comma can break the page)

---

## Folder Map

```
data/
  company.json            → About Us, Vision, Mission, Contact details
  categories-index.json   → The list of 15 product categories shown in the menu & homepage
  products/                → One file per product category (15 files)
    tarpaulin.json
    shadenet.json
    ...etc
```

---

## 1. Editing Company Info (`company.json`)

Open `company.json`. You'll see fields like:

```json
"tagline": "Manufacturer & Distributor of Polymer-Based Products",
```

To change the tagline, just edit the text between the quotes:

```json
"tagline": "Your New Tagline Here",
```

**To add your phone/email/WhatsApp** (currently empty), find this section:

```json
"contact": {
  "email": "",
  "phone": "",
  "whatsapp": ""
}
```

Fill them in like this:

```json
"contact": {
  "email": "info@alitraders.com",
  "phone": "+91 98765 43210",
  "whatsapp": "+91 98765 43210"
}
```

---

## 2. Adding a New Product Category

**Step 1:** Open `categories-index.json`. Copy one existing category block and add it to the list, e.g.:

```json
{
  "id": "new-product-slug",
  "name": "New Product Name",
  "order": 16,
  "shortDescription": "A one-line description shown on the homepage.",
  "icon": "/images/products/new-product-slug/icon.jpg"
}
```

- `id` — use lowercase words separated by hyphens (no spaces), this becomes the page's web address
- `order` — controls the position in menus (use the next available number)

**Step 2:** Create a new file inside the `products/` folder, named `new-product-slug.json` (must match the `id` you used above). Copy the structure from any existing product file (e.g. `weedmat.json` is a simple one) and fill in your details.

---

## 3. Adding a New Brand/Variant to an Existing Product

Open the relevant file in `products/`, e.g. `rope.json`. Find the `"brands"` list:

```json
"brands": [
  { "name": "TUFF", "grade": "Premium (100% Virgin Granules)" },
  { "name": "MARUTHI", "grade": "Premium (100% Virgin Granules)" }
]
```

Add a new brand by copying one line and changing the text (don't forget the comma after the previous line):

```json
"brands": [
  { "name": "TUFF", "grade": "Premium (100% Virgin Granules)" },
  { "name": "MARUTHI", "grade": "Premium (100% Virgin Granules)" },
  { "name": "YOUR NEW BRAND", "grade": "Your Grade Here" }
]
```

---

## 4. Adding a New Sub-Category (e.g. a new type of Tarpaulin)

Product files like `tarpaulin.json` have an `"items"` list — each item is one sub-type
(e.g. Multilayer, HDPE, Cross-Linked). To add a new one, copy an entire item block
(from one `{` to its matching `}`) and paste it before the closing `]`, then edit the values.

Every item uses the **same fields**, so you always know what to fill in:

| Field | What it means | Example |
|---|---|---|
| `id` | Web-safe short name | `"hdpe-tarpaulin"` |
| `name` | Display name | `"HDPE Tarpaulin"` |
| `brands` | List of brand names + grade | `[{"name":"NEXATARP","grade":"Premium"}]` |
| `material` | Raw material description | `"100% Virgin HDPE"` |
| `gsm` | GSM (weight) options | `[70, 120, 150]` |
| `shadePercentage` | Shade % (shadenet only) | `[35, 50, 90]` |
| `meshSize` | Mesh size options | `["1/2 inch", "1 inch"]` |
| `sizes` | Size options | `["6x6", "9x9"]` |
| `bundleSizes` | Bundle/roll sizes | `["5ft x 50m"]` |
| `colours` | Available colours | `["Blue", "Green"]` |
| `lengths` | Length options | `["110 m", "220 m"]` |
| `packing` | Packing options | `["1 kg rolls"]` |
| `features` | Key selling features | `["UV stabilized"]` |
| `applications` | What it's used for | `["Agriculture", "Construction"]` |
| `images` | Photo file paths | `["/images/products/tarpaulin/nexatarp-01.jpg"]` |

**You never need to fill in every field** — leave any that don't apply as an empty list `[]` or empty text `""`.

---

## 5. Adding Product Photos

1. Save your photos into the matching folder under `/public/images/products/<category-id>/`
2. Name them clearly, e.g. `nexatarp-01.jpg`, `nexatarp-02.jpg`
3. Add the file path to the `"images"` list in that product's JSON entry:

```json
"images": [
  "/images/products/tarpaulin/nexatarp-01.jpg",
  "/images/products/tarpaulin/nexatarp-02.jpg"
]
```

---

## Questions Still Open (ask your developer / confirm with the team)

- Contact email, phone, and WhatsApp number are currently blank in `company.json`
- Product photos are placeholders — real photos need to be added for all 15 categories
- Some products (Suthali, Nylon Products, Box Strap components) have no listed "applications" in the original source — worth double-checking if these should be filled in
