"use client";

import { useState } from "react";
import Image from "next/image";
import categoriesData from "../../../data/categories-index.json";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const categories = [...categoriesData.categories].sort(
    (a, b) => a.order - b.order,
  );

  return (
    <>
      <div className="announce">
        25+ Years Manufacturing Excellence &nbsp;•&nbsp; Domestic Supply
        &nbsp;•&nbsp; Exports to the Middle East, Africa & Asia
      </div>
      <header>
        <div className="header-inner">
          <a href="/" className="logo">
            <Image
              src="/images/logo.jpeg"
              alt="Ali Traders & Ali Polymers"
              width={88}
              height={48}
              className="logo-img"
              priority
            />
          </a>

          <nav className="nav-desktop">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/products">Products</a>
            <a href="/own-brands">Our Brands</a>
            <a href="/export">Export</a>
            <a href="/contact">Contact</a>
          </nav>

          <a href="/contact" className="btn-quote nav-desktop-only">
            Get a Quote
          </a>

          <button
            className={`hamburger ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* MOBILE NAV DRAWER */}
        <div className={`mobile-nav ${menuOpen ? "is-open" : ""}`}>
          <a href="/" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="/about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <div className="mobile-nav-products">
            <span className="mobile-nav-label">Products</span>
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`/products/${cat.id}`}
                onClick={() => setMenuOpen(false)}
                className="mobile-nav-subitem"
              >
                {cat.name}
              </a>
            ))}
          </div>
          <a href="/export" onClick={() => setMenuOpen(false)}>
            Export
          </a>
          <a href="/own-brands" onClick={() => setMenuOpen(false)}>
            Our Brands
          </a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a
            href="/contact"
            className="btn-quote mobile-nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      </header>
    </>
  );
}
