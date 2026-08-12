"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SafeImage({
  src,
  alt,
  className,
  fallbackSrc = "/images/logo.jpeg",
  fill,
  width,
  height,
  sizes,
  style,
}) {
  const [currentSrc, setCurrentSrc] = useState(
    typeof src === "string" && src.trim() !== "" ? src : fallbackSrc
  );

  // Resync when src prop changes (e.g. gallery/list re-render without remount)
  useEffect(() => {
    setCurrentSrc(
      typeof src === "string" && src.trim() !== "" ? src : fallbackSrc
    );
  }, [src, fallbackSrc]);

  const handleError = () => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  };

  return fill ? (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      className={className}
      onError={handleError}
      sizes={sizes}
      style={style}
    />
  ) : (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      sizes={sizes}
      style={style}
    />
  );
}