import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SermonFeed } from "@/components/sermon-feed";
import { PageMediaStory } from "@/components/page-media-story";
import { publicPages, publicPageSections, services } from "@/lib/content";
import { getPublicMinistries } from "@/lib/ministry-service";
import { mediaPaths } from "@/lib/media";

export function generateStaticParams() {
  return Object.keys(publicPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = publicPages[slug];
  return page ? { title: page.title, description: page.intro } : {};
}

export default async function PublicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = publicPages[slug];
  if (!page) notFound();
  const sections = publicPageSections[slug];
  const publicMinistries = slug === "ministries" ? await getPublicMinistries() : [];

  return <>
    <PageHero {...page} />
    <section className="content-section">
      {slug === "about" && <div className="about-story">
        <section className="about-local"><p className="eyebrow">Our local expression</p><h2>A family church for faith, leadership, and community.</h2><p>Fountain of Life Sanctuary is a family church that helps people deepen their relationship with God, build strong homes, grow into purposeful leaders, and serve the surrounding community with practical love.</p></section>
        <div className="detail-grid"><article className="detail-card"><p className="eyebrow">Family</p><h2>A place to belong</h2><p>We nurture relationships across generations and create room for every member of the family to grow in faith.</p></article><article className="detail-card"><p className="eyebrow">Leadership</p><h2>People equipped to lead</h2><p>We raise leaders who bring godly character, excellence, and service into the church, home, workplace, and society.</p></article><article className="detail-card"><p className="eyebrow">Community</p><h2>Faith that serves</h2><p>We seek to be relevant to Ogba and Lagos through compassion, neighborly care, and practical community impact.</p></article></div>
        <PageMediaStory image={mediaPaths.congregation[2]} imageAlt="FOLS congregation worshipping together" eyebrow="A church for everyday life" title="Faith that reaches home, work, and community." text="We gather to worship, but our calling continues beyond the service. FOLS helps people live with conviction, care for their families, lead with integrity, and bring hope into the places where they already live and work." video={mediaPaths.secondaryVideos[2]} />
        <section className="rccg-vision"><div><p className="eyebrow">RCCG mission and vision</p><h2>A worldwide mission centred on heaven, holiness, and reaching every nation.</h2><p>The statements shown here are reproduced from the official RCCG mission and vision page.</p><a className="text-link" href="https://www.rccg.org/mission-and-vision/" target="_blank" rel="noreferrer">View the official RCCG source</a></div><ol><li>To make heaven.</li><li>To take as many people with us.</li><li>To have a member of RCCG in every family of all nations.</li><li>To accomplish No. 1 above, holiness will be our lifestyle.</li><li>To accomplish No. 2 and 3 above, we will plant churches within five minutes walking distance in every city and town of developing countries and within five minutes driving distance in every city and town of developed countries.</li><li>We will pursue these objectives until every Nation in the world is reached for the Lord Jesus Christ</li></ol></section>
        <section className="about-next"><div><p className="eyebrow">Your next step</p><h2>There is room for you in the FOLS family.</h2></div><div><p>Come to a service, explore a ministry, ask for prayer, or simply let us know you are planning to visit. You do not need to have everything figured out before you begin.</p><div className="section-actions"><Link className="button" href="/visit">Plan your visit</Link><Link className="button outline" href="/ministries">Explore ministries</Link></div></div></section>
      </div>}

      {slug === "beliefs" && <><div className="detail-grid beliefs-grid"><article className="detail-card"><p className="eyebrow">Scripture</p><h2>The Bible</h2><p>We believe the Old and New Testaments are inspired by the Holy Spirit and reveal God's will and truth.</p></article><article className="detail-card"><p className="eyebrow">One God</p><h2>Father, Son, and Holy Spirit</h2><p>We believe in one God, eternally revealed as Father, Son, and Holy Spirit.</p></article><article className="detail-card"><p className="eyebrow">The Saviour</p><h2>Jesus Christ</h2><p>We believe Jesus Christ is the Son of God, God revealed in the flesh, whose death and resurrection bring redemption.</p></article><article className="detail-card"><p className="eyebrow">Life in God</p><h2>The Holy Spirit</h2><p>We believe the Holy Spirit teaches, regenerates, sanctifies, empowers, and gives gifts for service.</p></article><article className="detail-card"><p className="eyebrow">New life</p><h2>Salvation and holiness</h2><p>We believe in repentance, new birth through God's grace, and a life progressively shaped by holiness.</p></article><article className="detail-card"><p className="eyebrow">Christian hope</p><h2>Prayer and eternity</h2><p>We believe in faithful prayer, the return of Jesus Christ, resurrection, judgment, and eternal life.</p></article></div><div className="source-note"><p>This is a concise overview. The complete statement contains additional teachings and Scripture references.</p><a className="button" href="https://www.rccg.org/our-beliefs/" target="_blank" rel="noreferrer">Read RCCG's official beliefs</a></div></>}

      {slug === "leadership" && <div className="leadership-profile"><div className="leadership-photo"><Image src={mediaPaths.pastor} alt="Pastor Noruwa Edokpolo" fill sizes="(max-width: 900px) 100vw, 45vw" /></div><div><p className="eyebrow">Lead Pastor</p><h2>Pastor Noruwa Edokpolo</h2><p>Lead Pastor of RCCG Fountain of Life Sanctuary and servant-leader of the FOLS family.</p></div></div>}
      {slug === "ministries" && <><PageMediaStory image={mediaPaths.congregation[4]} imageAlt="Members of the FOLS family worshipping together" eyebrow="Life together" title="Your gifts have a place here." text="Ministries turn a large church into smaller communities where people are known, supported, equipped, and given room to serve." video={mediaPaths.secondaryVideos[3]} /><div className="section-heading ministry-list-heading"><p className="eyebrow">Ministry directory</p><h2>Find a community for your season.</h2></div><div className="detail-grid">{publicMinistries.map(({ title, description, icon: Icon, href }) => <Link className="detail-card ministry-directory-card" href={href} key={title}><Icon /><h2>{title}</h2><p>{description}</p><span className="text-link">Explore ministry</span></Link>)}</div></>}
      {slug === "services" && <div className="detail-grid">{services.map((service) => <article className="detail-card" key={service.title}><p className="eyebrow">{service.group}</p><h2>{service.title}</h2><p>{service.schedule}</p></article>)}</div>}
      {slug === "events" && <div className="events-page">
        <section className="events-intro"><div className="events-intro-image"><Image src={mediaPaths.eventPortrait} alt="A member of the FOLS family at church" fill sizes="(max-width: 900px) 100vw, 48vw" /></div><div><p className="eyebrow">Gather with us</p><h2>Church life happens throughout the week.</h2><p>From Sunday worship to prayer, Bible study, youth gatherings, and special moments together, every gathering is an opportunity to grow in faith and relationships.</p><Link className="button" href="/visit">Plan your visit</Link></div></section>
        <section className="events-schedule"><div className="section-heading"><p className="eyebrow">Regular gatherings</p><h2>There is always a next step.</h2></div><div className="events-schedule-grid">{services.map((service, index) => <article key={service.title}><span>{String(index + 1).padStart(2, "0")}</span><div><p className="eyebrow">{service.group}</p><h3>{service.title}</h3><p>{service.schedule}</p></div></article>)}</div></section>
        <section className="events-video"><video autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src={mediaPaths.secondaryVideos[3]} type="video/mp4" /></video><div><p className="eyebrow">Special events</p><h2>New gatherings will appear here when confirmed.</h2><p>There are currently no additional published events. Confirmed dates, registration details, and attendance information will be shared here.</p></div></section>
      </div>}
      {slug === "sermons" && <SermonFeed />}

      {!["about", "ministries", "sermons", "events"].includes(slug) && <PageMediaStory image={mediaPaths.congregation[Math.abs(slug.length) % mediaPaths.congregation.length]} imageAlt="Life and worship at Fountain of Life Sanctuary" eyebrow="Life at FOLS" title="Faith grows when we live it together." text="Worship, Scripture, prayer, friendship, and service shape a church family where people can keep taking meaningful steps with God." video={mediaPaths.secondaryVideos[slug.length % mediaPaths.secondaryVideos.length]} />}

      {sections && <section className="editorial-sections"><div className="section-heading"><p className="eyebrow">Explore more</p><h2>What this means at FOLS</h2></div><div className="detail-grid">{sections.map((section) => <article className="detail-card" key={section.title}><h2>{section.title}</h2><p>{section.text}</p></article>)}</div></section>}
      {slug === "giving" && <div className="source-note"><p>Live payments and bank instructions remain unavailable until church-approved configuration and verification are supplied.</p></div>}
    </section>
  </>;
}
