import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";
import { church, nav } from "@/lib/content";

export function SiteFooter() {
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.address)}`;
  return <footer className="footer">
    <div className="footer-grid">
      <div><Image src="/brand/fols-logo-light.png" alt="RCCG Fountain of Life Sanctuary" width={291} height={164} /><p>{church.designation}<br />{church.address}</p></div>
      <div><h3>Explore</h3>{nav.slice(0, 6).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
      <div><h3>Take action</h3><Link href="/prayer">Prayer Request</Link><Link href="/giving">Partner With Us</Link><a href={directions} target="_blank" rel="noreferrer">Get Directions</a><Link href="/visit">Plan Your Visit</Link><Link href="/ministries">Join a Ministry</Link></div>
      <div><h3>Sunday</h3><p>First Service · 7:30 AM<br />Second Service · 10:00 AM</p><div className="social"><a href={church.instagram} aria-label="Instagram"><Instagram /></a><a href={church.youtube} aria-label="YouTube"><Youtube /></a></div></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} RCCG FOLS</span><span><Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link></span></div>
  </footer>;
}
