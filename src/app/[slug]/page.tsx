import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { EmptyState } from "@/components/empty-state";
import { SermonFeed } from "@/components/sermon-feed";
import { ministries, publicPages, services } from "@/lib/content";
import { mediaPaths } from "@/lib/media";

export function generateStaticParams() { return Object.keys(publicPages).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const page = publicPages[slug]; return page ? { title: page.title, description: page.intro } : {}; }

export default async function PublicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const page = publicPages[slug]; if (!page) notFound();
  return <><PageHero {...page} />{["about", "ministries", "services"].includes(slug) && <section className="page-video-band"><video autoPlay muted loop playsInline preload="metadata" poster={slug === "services" ? mediaPaths.serviceLectern : mediaPaths.choir} aria-label="FOLS church life"><source src={slug === "ministries" ? mediaPaths.secondaryVideo : mediaPaths.homeHeroVideo} type="video/mp4" /></video><div><p className="eyebrow">Life at FOLS</p><p>Authentic moments of worship, fellowship, and service from our church family.</p></div></section>}<section className="content-section">
    {slug === "about" && <div className="detail-grid">{["Our Family Culture", "Raising Leaders", "Serving Ogba", "Mountain Movers", "Our Church Leadership", "Our Ministries"].map((title) => <article className="detail-card" key={title}><h2>{title}</h2><p>Strong families, practical faith, and service shape life at FOLS.</p></article>)}</div>}
    {slug === "leadership" && <div className="leadership-profile"><div className="leadership-photo"><Image src={mediaPaths.pastor} alt="Pastor Noruwa Edokpolo" fill sizes="(max-width: 900px) 100vw, 45vw" /></div><div><p className="eyebrow">Lead Pastor</p><h2>Pastor Noruwa Edokpolo</h2><p>Lead Pastor of RCCG Fountain of Life Sanctuary and servant-leader of the FOLS family.</p></div></div>}
    {slug === "ministries" && <div className="detail-grid">{ministries.map(({ title, description, icon: Icon, href }) => <article className="detail-card" key={title}><Icon /><h2>{title}</h2><p>{description}</p>{href && <Link className="text-link" href={href}>Explore ministry</Link>}</article>)}</div>}
    {slug === "services" && <div className="detail-grid">{services.map((service) => <article className="detail-card" key={service.title}><p className="eyebrow">{service.group}</p><h2>{service.title}</h2><p>{service.schedule}</p></article>)}</div>}
    {slug === "events" && <EmptyState title="No published events" message="Approved events will be loaded securely from Firestore." />}
    {slug === "sermons" && <SermonFeed />}
    {!["about","leadership","ministries","services","events","sermons"].includes(slug) && <div className="detail-card"><h2>Accurate. Private. Secure.</h2><p>{page.intro}</p>{slug === "giving" && <p>Live payments and bank instructions are intentionally unavailable until church-approved configuration is supplied.</p>}</div>}
  </section></>;
}
