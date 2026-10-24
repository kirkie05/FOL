import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PrayerForm } from "@/components/forms";
export const metadata: Metadata = { title: "Prayer Requests" };
export default function PrayerPage() { return <><PageHero eyebrow="We believe in prayer" title="We Are Mountain Movers" intro="Your request is handled according to the privacy level you choose." /><section className="content-section"><PrayerForm /></section></>; }
