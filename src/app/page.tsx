import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { HeroMotion, HoverLift, ParallaxFrame, Reveal, ScrollProgress } from "@/components/reveal";
import { EmptyState } from "@/components/empty-state";
import { LazyBackgroundVideo } from "@/components/lazy-background-video";
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
      <HeroMotion title={<h1>Faith for life.<br /><em>Family</em> for the journey.</h1>}><p>A family church where people encounter God, grow in faith, build strong homes, and become leaders who serve their world.</p><div className="hero-actions"><Link className="button light" href="/visit">Plan Your Visit</Link><a className="button light" href={church.youtube} target="_blank" rel="noreferrer">Worship Online</a><Link className="button light" href="/ministries">Join a Ministry</Link></div></HeroMotion>
      <div className="scroll-cue"><ArrowDown /> Scroll to explore</div>
    </section>

    <section className="split-section section"><Reveal className="split-copy"><p className="eyebrow">RCCG · Lagos Province 27</p><h2>A Church for Your Family, A Voice for Our Community</h2></Reveal><Reveal className="body-copy"><p>Fountain of Life Sanctuary is a multi-generational family church committed to helping people know God, grow in faith, and build relationships that endure beyond Sunday.</p><p>Led by {church.pastor}, we equip people to lead with character, strengthen their homes, and serve the community with practical expressions of God's love.</p><Link className="text-link" href="/about">Discover our story <ArrowRight /></Link></Reveal></section>

    <section className="blue-section section benefits-showcase"><Reveal className="benefits-heading"><p className="eyebrow">Life at FOLS</p><h2>A Place to Grow and Belong</h2><p className="section-lead">Faith for everyday life, relationships that feel like family, and opportunities to make a meaningful difference.</p></Reveal><div className="pillar-grid">{pillars.map((p, index) => <Reveal className="pillar" delay={index * .08} key={p.number}><div className="pillar-visual"><Image src={pillarMedia[index]} alt="" fill sizes="(max-width: 900px) 100vw, 32vw" /></div><span>{p.number}</span><h3>{p.title}</h3><p>{p.text}</p></Reveal>)}</div></section>

    <section className="section"><Reveal><p className="eyebrow">Worship with us</p><h2>There's a Place for You Here</h2></Reveal><div className="schedule-strip">{services.slice(0, 3).map((s) => <div key={s.title}><span>{s.title}</span><strong>{s.schedule}</strong></div>)}</div><div className="section-actions"><Link className="button" href="/services">View full schedule</Link><Link className="button outline" href="/prayer">Send a Prayer Request</Link></div></section>

    <section className="feature-band"><ParallaxFrame className="feature-art"><Image src={mediaPaths.celebration} alt="FOLS worship celebration" fill sizes="(max-width: 900px) 100vw, 50vw" /></ParallaxFrame><Reveal className="feature-copy" direction="right"><p className="eyebrow">Youth & Young Adults</p><h2>The Unstoppables</h2><p>The next generation is not just the future of FOLS; they are leading it today—expressing their gifts, leading initiatives, and building strong professional and spiritual networks.</p><ul><li>Weekly Virtual Prayer Meeting</li><li>Monthly Youth Vigil</li><li>Growth and Leadership Cohorts</li></ul><Link className="button" href="/ministries/unstoppables">Explore The Unstoppables</Link></Reveal></section>

    <section className="section"><Reveal><p className="eyebrow">Our ministries</p><h2>Grow. Serve. Belong.</h2></Reveal><div className="ministry-grid">{ministries.map(({ title, description, icon: Icon, href }) => <HoverLift key={title}><Link className="ministry-card-link" href={href} aria-label={`Explore ${title}`}><article><Icon /><h3>{title}</h3><p>{description}</p><span className="text-link">Learn more <ArrowRight /></span></article></Link></HoverLift>)}</div><Link className="button outline" href="/login?next=/app/ministries">Join a ministry</Link></section>

    <section className="section muted-section"><div><p className="eyebrow">Upcoming events</p><h2>Life happens together</h2></div><EmptyState title="No events published yet" message="Approved FOLS gatherings will appear here as soon as they are available." /></section>

    <section className="section word-section"><LazyBackgroundVideo className="section-background-video" src={mediaPaths.secondaryVideos[0]} poster={mediaPaths.choir} /><Reveal><p className="eyebrow">Be strengthened</p><h2>Faith comes by hearing the Word.</h2><Link className="button light" href="/sermons">Watch sermons</Link></Reveal></section>

    <section className="giving-band">
      <div className="giving-content">
        <div className="giving-heading"><p className="eyebrow">Give</p><h2>Partner With What God Is Doing</h2></div>
        <div className="giving-copy"><p>Your giving supports ministry, outreach, and community impact through Fountain of Life Sanctuary.</p><Link className="button light" href="/giving">Give</Link></div>
      </div>
    </section>
  </>;
}
