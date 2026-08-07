"use client";

import { useEffect, useMemo, useState } from "react";

export default function HeroCarousel({ images = [], children }) {
  const normalizedImages = useMemo(() => {
    if (!images) return [];
    if (typeof images === "string") return [images];
    if (Array.isArray(images)) return images.filter(Boolean);
    return [];
  }, [images]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (normalizedImages.length <= 1) return undefined;

    const interval = setInterval(() => {
      setActiveIndex((currentIndex) =>
        (currentIndex + 1) % normalizedImages.length,
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [normalizedImages.length]);

  return (
    <section className="hero">
      <div className="hero-slides">
        {normalizedImages.map((image, index) => (
          <div
            key={image + index}
            className={index === activeIndex ? "hero-slide active" : "hero-slide"}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      {children}
    </section>
  );
}
