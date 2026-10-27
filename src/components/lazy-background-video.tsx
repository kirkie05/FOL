"use client";

import { useEffect, useRef, useState } from "react";

type LazyBackgroundVideoProps = {
  className?: string;
  label?: string;
  poster: string;
  src: string;
};

export function LazyBackgroundVideo({ className, label, poster, src }: LazyBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(true);
        observer.disconnect();
      }
    }, { rootMargin: "240px" });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (active) void videoRef.current?.play().catch(() => undefined);
  }, [active]);

  return <video ref={videoRef} className={className} muted loop playsInline preload="none" poster={poster} aria-label={label} aria-hidden={label ? undefined : "true"}>{active && <source src={src} type="video/mp4" />}</video>;
}
