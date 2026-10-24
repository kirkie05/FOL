import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { mediaPaths } from "@/lib/media";

const heroMedia: Record<string, string> = {
  "Who we are": mediaPaths.congregation[1],
  "Statement of faith": mediaPaths.prayerPortrait,
  "Church leadership": mediaPaths.pastor,
  "Find your place": mediaPaths.choir,
  "Worship with us": mediaPaths.serviceLectern,
  "The Word": mediaPaths.worshipSinger,
  "What's ahead": mediaPaths.celebration,
  "We believe in prayer": mediaPaths.prayerWoman,
  "Stories of grace": mediaPaths.worshipDance,
  "Get in touch": mediaPaths.congregation[3],
  Generosity: mediaPaths.worshipYellow,
};

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  const src = heroMedia[eyebrow] ?? mediaPaths.congregation[0];
  return <section className="page-hero"><Image className="page-hero-image" src={src} alt="" fill sizes="100vw" priority={eyebrow === "Who we are"} /><Reveal><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-intro">{intro}</p></Reveal></section>;
}
