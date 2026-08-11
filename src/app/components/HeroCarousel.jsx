"use client";

import { useEffect, useMemo, useState } from "react";

const FALLBACK_IMAGE = "/images/home-page-hero.jpg";

export default function HeroCarousel({ images = [], children }) {
  const normalizedImages = useMemo(() => {
    if (!images) return [];

    if (typeof images === "string") {
      return [images];
    }

    if (Array.isArray(images)) {
      return images.filter(Boolean);
    }

    return [];
  }, [images]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImages, setFailedImages] = useState(new Set());

  useEffect(() => {
    if (normalizedImages.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % normalizedImages.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [normalizedImages.length]);

  return (
    <section className="hero">
      <div className="hero-slides">
        {normalizedImages.length === 0 ? (
          <div
            className="hero-slide active"
            style={{ backgroundImage: `url("${FALLBACK_IMAGE}")` }}
          />
        ) : (
          normalizedImages.map((image, index) => {
            const imageToShow = failedImages.has(image)
              ? FALLBACK_IMAGE
              : image;

            return (
              <div
                key={image + index}
                className={`hero-slide${index === activeIndex ? " active" : ""}`}
                style={{
                  backgroundImage: `url("${imageToShow}")`,
                }}
              />
            );
          })
        )}

        {/* Hidden images used to detect loading failures */}
        {normalizedImages.map((image, index) => (
          <img
            key={`check-${image}-${index}`}
            src={image}
            alt=""
            style={{ display: "none" }}
            onError={() => {
              setFailedImages((previous) => {
                const updated = new Set(previous);
                updated.add(image);
                return updated;
              });
            }}
          />
        ))}
      </div>

      {children}
    </section>
  );
}