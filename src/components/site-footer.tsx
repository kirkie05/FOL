import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";
import { church, nav } from "@/lib/content";

export function SiteFooter() {
  return <footer className="footer">
    <div className="footer-lead">
      <p className="eyebrow">Come as you are</p>
      <h2>You are family.</h2>
      <Link className="button light" href="/visit">Plan your visit</Link>
    </div>
    <div className="footer-grid">
      <div><Image src="/brand/fols-logo.png" alt="FOLS" width={220} height={86} /><p>{church.designation}<br />{church.address}</p></div>
      <div><h3>Explore</h3>{nav.slice(0, 6).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
      <div><h3>Sunday</h3><p>First Service · 7:30 AM<br />Second Service · 10:00 AM</p><div className="social"><a href={church.instagram} aria-label="Instagram"><Instagram /></a><a href={church.youtube} aria-label="YouTube"><Youtube /></a></div></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} RCCG FOLS</span><span><Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link></span></div>
  </footer>;
}
