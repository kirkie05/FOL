import type { LucideIcon } from "lucide-react";
import { Baby, BriefcaseBusiness, HeartHandshake, Mountain, Users } from "lucide-react";

export const church = {
  name: "RCCG Fountain of Life Sanctuary",
  shortName: "FOLS",
  designation: "Lagos Province 27 Headquarters",
  pastor: "Pastor Noruwa Edokpolo",
  address: "1 Isreal Adebajo Close, Ogba, Ikeja 101233, Lagos, Nigeria",
  landmarks: "Near Cocoa Industries Road / Akilo Road",
  timezone: "Africa/Lagos",
  youtube: "https://www.youtube.com/@RCCGFOL",
  instagram: "https://www.instagram.com/rccgfols/",
  linktree: "https://linktr.ee/rccgfolslp27",
} as const;

export const nav = [
  ["About", "/about"], ["Ministries", "/ministries"], ["Services", "/services"],
  ["Sermons", "/sermons"], ["Events", "/events"], ["Visit", "/visit"], ["Giving", "/giving"],
] as const;

export const services = [
  { group: "Sunday Worship", title: "First Service", schedule: "Sunday · 7:30 AM" },
  { group: "Sunday Worship", title: "Second Service", schedule: "Sunday · 10:00 AM" },
  { group: "Sunday Worship", title: "Thanksgiving Service", schedule: "First Sunday of every month" },
  { group: "Midweek Services", title: "Digging Deep", schedule: "Tuesday · 6:00 PM · Main Auditorium & Teens Church" },
  { group: "Midweek Services", title: "Faith Clinic", schedule: "Thursday · 6:00 PM · Virtual via Telegram" },
  { group: "Midweek Services", title: "Early Morning Prayer with PICP", schedule: "Thursday · 12:30 AM · Virtual via Telegram" },
  { group: "Youth Activities", title: "Weekly Virtual Prayer Meeting", schedule: "Wednesday · 8:30 PM" },
  { group: "Youth Activities", title: "Monthly Youth Vigil", schedule: "Second Friday · 11:00 PM · Teens Church" },
] as const;

export type Ministry = { title: string; description: string; icon: LucideIcon; href?: string };
export const ministries: Ministry[] = [
  { title: "Children's Church", description: "A safe, engaging environment where children grow in faith.", icon: Baby },
  { title: "Teens Ministry", description: "Helping teenagers build conviction, character, and community.", icon: Users },
  { title: "The Unstoppables", description: "Youth and young adults leading with faith in Lagos.", icon: BriefcaseBusiness, href: "/ministries/unstoppables" },
  { title: "Family & Marriage", description: "Practical spiritual support for thriving homes.", icon: HeartHandshake },
];

export const pillars = [
  { number: "01", title: "Building Thriving Families", text: "We provide spiritual foundations and practical support to cultivate happy, resilient homes." },
  { number: "02", title: "Developing Exceptional Leaders", text: "We equip members to lead in the marketplace, their communities, and the kingdom." },
  { number: "03", title: "Neighborhood Relevant", text: "We are here for Ogba, bringing tangible value, hope, and the love of Christ." },
  { number: "04", title: "A Culture of Mountain Movers", text: "We are a praying church that meets life's challenges with fervent faith.", icon: Mountain },
] as const;

export const publicPages: Record<string, { eyebrow: string; title: string; intro: string }> = {
  about: { eyebrow: "Who we are", title: "A Church for Your Family, A Voice for Our Community", intro: "Welcome to RCCG Fountain of Life Sanctuary, the official Headquarters of Lagos Province 27. We are a neighborhood-focused family church committed to spiritual growth, community impact, and personal excellence." },
  beliefs: { eyebrow: "Statement of faith", title: "Rooted in the Word", intro: "Approved RCCG doctrinal copy is being prepared for this page. We will not publish or invent doctrine without verified church approval." },
  leadership: { eyebrow: "Church leadership", title: "Serving with faith and clarity", intro: "Pastor Noruwa Edokpolo serves as Lead Pastor of RCCG Fountain of Life Sanctuary. An approved portrait and biography will appear here when supplied." },
  ministries: { eyebrow: "Find your place", title: "Built to grow together", intro: "Every generation has a place to learn, serve, build relationships, and use their gifts at FOLS." },
  services: { eyebrow: "Worship with us", title: "There's a Place for You Here", intro: "Join us in Ogba or connect through our configured virtual gatherings. All times are West Africa Time." },
  sermons: { eyebrow: "The Word", title: "Be Strengthened by the Word", intro: "Watch official sermons, services, Bible studies, and livestream replays from RCCG Fountain of Life Sanctuary." },
  events: { eyebrow: "What's ahead", title: "Gather, grow, and serve", intro: "No published events are available yet. Approved church events will appear here automatically." },
  prayer: { eyebrow: "We believe in prayer", title: "We Are Mountain Movers", intro: "Share a request securely with the pastoral team, authorized prayer team, or—with your explicit consent—the moderated community prayer wall." },
  testimonies: { eyebrow: "Stories of grace", title: "Tell what God has done", intro: "Submit a testimony for review. Only approved testimonies with publication consent are shown publicly." },
  contact: { eyebrow: "Get in touch", title: "We'd love to hear from you", intro: `Visit us at ${church.address} or reach us through our verified social channels.` },
  giving: { eyebrow: "Generosity", title: "Partner With What God Is Doing", intro: "Support ministry, outreach, and community impact. Verified bank details and sandbox payment options will appear when configured." },
  privacy: { eyebrow: "Your information", title: "Privacy Policy", intro: "FOLS limits data collection to church operations, protects sensitive records, and never publishes private prayer, membership, or financial information without authorization." },
  terms: { eyebrow: "Using this platform", title: "Terms of Use", intro: "Use FOLS digital services respectfully, provide accurate information, and do not attempt to access records or capabilities beyond your authorization." },
};
