import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { VisitForm } from "@/components/forms";
import { church } from "@/lib/content";
export const metadata: Metadata = { title: "Plan Your Visit" };
export default function VisitPage() { return <><PageHero eyebrow="Your family church in Ogba" title="At FOLS, you are family from the moment you arrive." intro="Our hospitality team will help you navigate the campus and settle children into their classes." /><section className="content-section"><div className="detail-grid"><article className="detail-card"><h2>Find us</h2><p>{church.address}<br />{church.landmarks}</p></article><article className="detail-card"><h2>Sunday services</h2><p>7:30 AM and 10:00 AM<br />Thanksgiving: first Sunday monthly</p></article><article className="detail-card"><h2>What to expect</h2><p>A welcoming, multi-generational family with Children's Church, Teens Ministry, clear teaching, and practical faith.</p></article></div><VisitForm /></section></>; }
