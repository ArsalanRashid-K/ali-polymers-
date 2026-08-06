"use client";

import { useState } from "react";

export default function ProductGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images?.length ?? 0;
  const currentImage = images?.[activeIndex] || null;

  const goPrev = () => {
    if (!total) return;
    setActiveIndex((index) => (index - 1 + total) % total);
  };

  const goNext = () => {
    if (!total) return;
    setActiveIndex((index) => (index + 1) % total);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-main">
        <button
          type="button"
          className="gallery-nav gallery-nav-left"
          onClick={goPrev}
          disabled={total <= 1}
        >
          ‹
        </button>

        {currentImage ? (
          <img
            className="gallery-main-img"
            src={currentImage}
            alt={`Product image ${activeIndex + 1}`}
            loading="lazy"
          />
        ) : (
          <div className="gallery-placeholder">No image available</div>
        )}

        <button
          type="button"
          className="gallery-nav gallery-nav-right"
          onClick={goNext}
          disabled={total <= 1}
        >
          ›
        </button>
      </div>

      {total > 1 && (
        <div className="gallery-thumbs">
          {images.map((src, index) => (
            <button
              type="button"
              key={`${src}-${index}`}
              className={`thumb-item ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={src} alt={`Thumbnail ${index + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
