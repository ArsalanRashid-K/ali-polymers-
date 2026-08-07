"use client";

import { useState } from "react";
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
  const initialSrc = typeof src === "string" ? src : fallbackSrc;
  const [currentSrc, setCurrentSrc] = useState(initialSrc);

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
