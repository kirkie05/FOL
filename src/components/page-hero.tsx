import { Reveal } from "@/components/reveal";
import { mediaPaths } from "@/lib/media";

function selectHeroVideo(key: string) {
  const index = Array.from(key).reduce((total, character) => total + character.charCodeAt(0), 0)
    % mediaPaths.secondaryVideos.length;

  return mediaPaths.secondaryVideos[index];
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  const video = selectHeroVideo(`${eyebrow}:${title}`);

  return <section className="page-hero"><video className="page-hero-video" autoPlay muted loop playsInline preload="metadata" poster={mediaPaths.choir} aria-hidden="true"><source src={video} type="video/mp4" /></video><Reveal><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-intro">{intro}</p></Reveal></section>;
}
