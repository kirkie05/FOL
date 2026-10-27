import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { ministries } from "@/lib/content";
import { getPublicMinistry } from "@/lib/ministry-service";
import { mediaPaths } from "@/lib/media";

export function generateStaticParams() {
  return ministries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ministry = await getPublicMinistry(slug);
  return ministry ? { title: ministry.title, description: ministry.description } : {};
}

export default async function MinistryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ministry = await getPublicMinistry(slug);
  if (!ministry) notFound();

  const Icon = ministry.icon;
  return <>
    <PageHero eyebrow="FOLS Ministry" title={ministry.title} intro={ministry.description} />
    <section className="content-section">
      <div className="ministry-overview">
        <div className="ministry-detail-intro"><Icon /><p className="eyebrow">About this ministry</p><h2>{ministry.about}</h2></div>
        <div className="ministry-detail-image"><Image src={ministry.image ?? mediaPaths.congregation[0]} alt={`${ministry.title} at Fountain of Life Sanctuary`} fill sizes="(max-width: 900px) 100vw, 45vw" /></div>
      </div>
      <div className="detail-grid">
        <article className="detail-card"><p className="eyebrow">Belong</p><h2>Build real relationships.</h2><p>Meet people in a similar season of life and grow through friendship, encouragement, and shared faith.</p></article>
        <article className="detail-card"><p className="eyebrow">Grow</p><h2>Take your next step.</h2><p>Develop through biblical teaching, honest conversations, prayer, and practical opportunities to learn.</p></article>
        <article className="detail-card"><p className="eyebrow">Serve</p><h2>Put your gifts to work.</h2><p>Contribute your time, abilities, and ideas to strengthen people and make a meaningful difference.</p></article>
      </div>
      <section className="ministry-practical"><div><p className="eyebrow">Ministry leader</p><h2>{ministry.leader ?? "Details coming soon"}</h2><p>{ministry.leader ? "Connect with the ministry through FOLS Connect." : "The approved ministry leader will be published here when confirmed."}</p></div><div><p className="eyebrow">When we meet</p><h2>{ministry.meeting ?? "Details coming soon"}</h2><p>{ministry.meeting ? "All times are shown in West Africa Time." : "Confirmed meeting information will be published here when available."}</p></div></section>
      <section className="ministry-video"><video autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src={mediaPaths.secondaryVideos[4]} type="video/mp4" /></video><div><p className="eyebrow">Take your next step</p><h2>Grow and serve with us.</h2><Link className="button light" href={`/login?next=/app/ministries&ministry=${ministry.slug}`}>Join this ministry</Link></div></section>
    </section>
  </>;
}
