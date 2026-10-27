import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function PageMediaStory({
  image,
  imageAlt,
  eyebrow,
  title,
  text,
  video = "/media/vid5.mp4",
}: {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  text: string;
  video?: string;
}) {
  return <section className="page-media-story">
    <Reveal className="page-media-copy"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{text}</p></Reveal>
    <Reveal className="page-media-image" direction="right"><Image src={image} alt={imageAlt} fill sizes="(max-width: 900px) 100vw, 55vw" /></Reveal>
    <video className="page-media-accent" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src={video} type="video/mp4" /></video>
  </section>;
}
