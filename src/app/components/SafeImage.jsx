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
  const resolvedSrc =
    typeof src === "string" && src.trim() !== "" ? src : fallbackSrc;

  const [currentSrc, setCurrentSrc] = useState(resolvedSrc);
  const [prevResolvedSrc, setPrevResolvedSrc] = useState(resolvedSrc);

  // Reset currentSrc when the src prop changes — done during render
  // (React's recommended pattern), not in a useEffect.
  if (resolvedSrc !== prevResolvedSrc) {
    setPrevResolvedSrc(resolvedSrc);
    setCurrentSrc(resolvedSrc);
  }

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