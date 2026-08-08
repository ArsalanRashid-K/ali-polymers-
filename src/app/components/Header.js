"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import categoriesData from "../../../data/categories-index.json";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const categories = [...categoriesData.categories].sort(
    (a, b) => a.order - b.order,
  );

  return (
    <>
      <div className="announce">
        30+ Years Manufacturing Excellence &nbsp;•&nbsp; Domestic Supply
        &nbsp;•&nbsp; Exports to the Middle East, Africa & Asia
      </div>
      <header>
        <div className="header-inner">
          <Link href="/" className="logo">
            <Image
              src="/images/logo.jpeg"
              alt="Ali Traders & Ali Polymers"
              width={88}
              height={58}
              className="logo-img"
              priority
            />
          </Link>

          <nav className="nav-desktop">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/own-brands">Our Brands</Link>
            <Link href="/export">Export</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <Link href="/contact" className="btn-quote nav-desktop-only">
            Get a Quote
          </Link>

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
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <div className="mobile-nav-products">
            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className="mobile-nav-label"
            >
              Products
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products/${cat.id}`}
                onClick={() => setMenuOpen(false)}
                className="mobile-nav-subitem"
              >
                {cat.name}
              </Link>
            ))}
          </div>
          <Link href="/export" onClick={() => setMenuOpen(false)}>
            Export
          </Link>
          <Link href="/own-brands" onClick={() => setMenuOpen(false)}>
            Our Brands
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link
            href="/contact"
            className="btn-quote mobile-nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </header>
    </>
  );
}
