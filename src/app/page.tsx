import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, MapPin, PlayCircle } from "lucide-react";
import { HeroMotion, HoverLift, ParallaxFrame, Reveal, ScrollProgress } from "@/components/reveal";
import { EmptyState } from "@/components/empty-state";
import { church, ministries, pillars, services } from "@/lib/content";
import { mediaPaths } from "@/lib/media";

const pillarMedia = [mediaPaths.congregation[0], mediaPaths.choir, mediaPaths.worshipDance, mediaPaths.prayerPortrait];

export default function Home() {
  return <>
    <ScrollProgress />
    <Link className="side-rail" href="/login">FOLS Connect <ArrowRight /></Link>
    <section className="hero">
      <div className="hero-wash" aria-hidden="true" />
      <video className="hero-background-video" autoPlay muted loop playsInline preload="metadata" poster={mediaPaths.homeHeroPoster} aria-hidden="true"><source src={mediaPaths.homeHeroVideo} type="video/mp4" /></video>
      <HeroMotion eyebrow={<p className="eyebrow light-text">Welcome home · Ogba, Lagos</p>} title={<h1>Faith for life.<br /><em>Family</em> for the journey.</h1>}><p>A dynamic community dedicated to raising transformative leaders, building strong families, and living out practical faith.</p><div className="hero-actions"><Link className="button light" href="/visit">Plan Your Visit</Link><a className="text-link light-text" href={church.youtube}>Worship Online <PlayCircle /></a><Link className="text-link light-text" href="/ministries">Join a Ministry <ArrowRight /></Link></div></HeroMotion>
      <div className="scroll-cue"><ArrowDown /> Scroll to explore</div>
    </section>

    <section className="split-section section"><Reveal className="split-copy"><p className="eyebrow">RCCG · Lagos Province 27</p><h2>A Church for Your Family, A Voice for Our Community</h2></Reveal><Reveal className="body-copy"><p>Fountain of Life Sanctuary is more than a place of worship—we are a neighborhood-focused family church committed to spiritual growth, community impact, and personal excellence.</p><p>Pastored by {church.pastor}, FOLS is a vibrant, multi-generational church where the undiluted Word of God is taught with clarity and power.</p><Link className="text-link" href="/about">Discover our story <ArrowRight /></Link></Reveal></section>

    <section className="blue-section section benefits-showcase"><Reveal className="benefits-heading"><p className="eyebrow">The FOLS difference</p><h2>Why You Belong Here</h2><p className="section-lead">An intentional community built on faith, family, leadership, and practical impact.</p></Reveal><div className="pillar-grid">{pillars.map((p, index) => <Reveal className="pillar" delay={index * .08} key={p.number}><div className="pillar-visual"><Image src={pillarMedia[index]} alt="" fill sizes="(max-width: 900px) 100vw, 32vw" /></div><span>{p.number}</span><h3>{p.title}</h3><p>{p.text}</p></Reveal>)}</div></section>

    <section className="section"><Reveal><p className="eyebrow">Worship with us</p><h2>There's a Place for You Here</h2></Reveal><div className="schedule-strip">{services.slice(0, 3).map((s) => <div key={s.title}><span>{s.title}</span><strong>{s.schedule}</strong></div>)}</div><Link className="button" href="/services">View full schedule</Link></section>

    <section className="feature-band"><ParallaxFrame className="feature-art"><Image src={mediaPaths.celebration} alt="FOLS worship celebration" fill sizes="(max-width: 900px) 100vw, 50vw" /></ParallaxFrame><Reveal className="feature-copy" direction="right"><p className="eyebrow">Youth & Young Adults</p><h2>The Unstoppables</h2><p>The next generation is not just the future of FOLS; they are leading it today—expressing their gifts, leading initiatives, and building strong professional and spiritual networks.</p><ul><li>Weekly Virtual Prayer Meeting</li><li>Monthly Youth Vigil</li><li>Growth and Leadership Cohorts</li></ul><Link className="button" href="/ministries/unstoppables">Explore The Unstoppables</Link></Reveal></section>

    <section className="section"><Reveal><p className="eyebrow">Our ministries</p><h2>Grow. Serve. Belong.</h2></Reveal><div className="ministry-grid">{ministries.map(({ title, description, icon: Icon, href }) => <HoverLift key={title}><article><Icon /><h3>{title}</h3><p>{description}</p>{href && <Link className="text-link" href={href}>Learn more <ArrowRight /></Link>}</article></HoverLift>)}</div><Link className="button outline" href="/login?next=/app/ministries">Join a ministry</Link></section>

    <section className="trust-strip" aria-label="About FOLS"><div><span>01</span><strong>RCCG</strong><small>Lagos Province 27 Headquarters</small></div><div><span>02</span><strong>Family</strong><small>A multi-generational church community</small></div><div><span>03</span><strong>Ogba</strong><small>Rooted in our Lagos neighbourhood</small></div></section>

    <section className="section muted-section"><div><p className="eyebrow">Upcoming events</p><h2>Life happens together</h2></div><EmptyState title="No events published yet" message="Approved FOLS gatherings will appear here as soon as they are available." /></section>

    <section className="section word-section"><video className="section-background-video" autoPlay muted loop playsInline preload="metadata" poster={mediaPaths.choir} aria-hidden="true"><source src={mediaPaths.secondaryVideo} type="video/mp4" /></video><Reveal><p className="eyebrow">Be strengthened</p><h2>Faith comes by hearing the Word.</h2><Link className="button light" href="/sermons">Watch sermons</Link></Reveal></section>

    <section className="prayer-band"><Image className="prayer-band-image" src={mediaPaths.prayerWoman} alt="FOLS worshipper praying" fill sizes="100vw" /><Reveal><p className="eyebrow light-text">We are mountain movers</p><h2>Bring your prayer.<br />Believe for an answer.</h2><Link className="button light" href="/prayer">Send a Prayer Request</Link></Reveal></section>

    <section className="section visit-grid"><Reveal><p className="eyebrow">Plan your visit</p><h2>Come As You Are. You Are Family.</h2><p>Our hospitality team is ready to welcome you, help you navigate the campus, and get your children settled.</p><Link className="button" href="/visit">Plan Your Visit</Link></Reveal><div className="address-card"><MapPin /><h3>{church.address}</h3><p>{church.landmarks}</p><a className="text-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.address)}`}>Get directions <ArrowRight /></a></div></section>

    <section className="giving-band"><p className="eyebrow">Generosity</p><h2>Partner With What God Is Doing</h2><p>Your giving supports ministry, outreach, and community impact.</p><Link className="button light" href="/giving">Giving options</Link></section>

    <section className="brand-outro"><video className="brand-outro-video" autoPlay muted loop playsInline preload="metadata" poster={mediaPaths.congregation[2]} aria-hidden="true"><source src={mediaPaths.secondaryVideo} type="video/mp4" /></video><p>Faith · Family · Leadership · Community</p><strong>FOLS</strong><Link href="/visit">Come worship with us <ArrowRight /></Link></section>
  </>;
}
