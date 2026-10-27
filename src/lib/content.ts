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

export type Ministry = {
  slug: string;
  title: string;
  description: string;
  about: string;
  leader: string | null;
  meeting: string | null;
  image?: string;
  icon: LucideIcon;
  href: string;
};
export const ministries: Ministry[] = [
  { slug: "children", title: "Children's Church", description: "A safe, joyful environment where children discover God and grow in faith.", about: "Children's Church helps children encounter God through age-appropriate teaching, expressive worship, prayer, creativity, and caring relationships in a safe environment.", leader: null, meeting: null, image: "/media/celebration.webp", icon: Baby, href: "/ministries/children" },
  { slug: "teens", title: "Teens Ministry", description: "Helping teenagers build conviction, character, friendship, and confidence in God.", about: "Teens Ministry gives teenagers room to deepen their faith, form healthy friendships, ask honest questions, discover their gifts, and grow in character and service.", leader: null, meeting: null, image: "/media/worship-yellow.webp", icon: Users, href: "/ministries/teens" },
  { slug: "unstoppables", title: "The Unstoppables", description: "Young adults growing in faith, purpose, leadership, and meaningful community.", about: "The Unstoppables equips young professionals and students to express their gifts, lead initiatives, develop spiritually, and build strong personal and professional relationships.", leader: null, meeting: "Weekly virtual prayer: Wednesday · 8:30 PM. Monthly youth vigil: second Friday · 11:00 PM.", image: "/media/worship-dance.webp", icon: BriefcaseBusiness, href: "/ministries/unstoppables" },
  { slug: "family-marriage", title: "Family & Marriage", description: "Biblical encouragement and practical support for strong, healthy homes.", about: "Family & Marriage Ministry strengthens homes through biblical encouragement, practical support, honest conversations, fellowship, and resources for healthy relationships.", leader: null, meeting: null, image: "/media/congregation-worship-4.webp", icon: HeartHandshake, href: "/ministries/family-marriage" },
];

export const pillars = [
  { number: "01", title: "Stronger Families", text: "Biblical truth and practical support for homes where faith, love, and purpose can flourish." },
  { number: "02", title: "Purposeful Leaders", text: "We equip people to lead with character and excellence in church, at home, at work, and in society." },
  { number: "03", title: "Community Impact", text: "We serve Ogba and the wider community with compassion, hope, and practical expressions of God's love." },
  { number: "04", title: "A Praying Church", text: "We face life's seasons together through Scripture, persistent prayer, and confident faith in God.", icon: Mountain },
] as const;

export const publicPages: Record<string, { eyebrow: string; title: string; intro: string }> = {
  about: { eyebrow: "Who we are", title: "A Church for Your Family, A Voice for Our Community", intro: "RCCG Fountain of Life Sanctuary is a family church where people deepen their relationship with God, build strong homes, grow into purposeful leaders, and serve the community with practical love." },
  beliefs: { eyebrow: "What we believe", title: "Rooted in Scripture, centred on Christ", intro: "Our faith is grounded in the Bible, the saving work of Jesus Christ, the presence and power of the Holy Spirit, a life of prayer and holiness, and the hope of eternity with God." },
  leadership: { eyebrow: "Church leadership", title: "Leading by serving", intro: "Pastor Noruwa Edokpolo leads Fountain of Life Sanctuary with a commitment to sound teaching, spiritual growth, strong families, and service to the wider community." },
  ministries: { eyebrow: "Find your place", title: "Grow in faith. Serve with purpose.", intro: "Our ministries create space for every generation to build meaningful relationships, discover their gifts, and take an active part in the life of the church." },
  services: { eyebrow: "Worship with us", title: "Make yourself at home", intro: "Join the FOLS family for worship, prayer, biblical teaching, and genuine fellowship. All service times are shown in West Africa Time." },
  sermons: { eyebrow: "Messages", title: "Truth for everyday life", intro: "Watch official FOLS sermons, services, Bible studies, and livestream replays designed to strengthen faith and help you live the Word." },
  events: { eyebrow: "What's ahead", title: "Life is better together", intro: "Discover opportunities to worship, grow, build relationships, and serve alongside the FOLS family." },
  prayer: { eyebrow: "We believe in prayer", title: "We Are Mountain Movers", intro: "Share a request securely with the pastoral team, authorized prayer team, or—with your explicit consent—the moderated community prayer wall." },
  testimonies: { eyebrow: "Stories of grace", title: "Share what God has done", intro: "Your story can encourage someone else's faith. Testimonies are reviewed with care and published only when you give clear consent." },
  contact: { eyebrow: "Get in touch", title: "We would love to hear from you", intro: `Whether you are planning a visit, looking for prayer, or asking about church life, you can find us at ${church.address}.` },
  giving: { eyebrow: "Give", title: "Partner With What God Is Doing", intro: "Your generosity supports worship, discipleship, outreach, church operations, and practical service to our community." },
  privacy: { eyebrow: "Your information", title: "Privacy Policy", intro: "We collect only the information needed to serve you and operate the platform, with additional care for membership, prayer, and financial records." },
  terms: { eyebrow: "Using this platform", title: "Terms of Use", intro: "These terms help keep FOLS digital spaces safe, respectful, and useful for every member of our community." },
};

export type PublicPageSection = { title: string; text: string };
export const publicPageSections: Record<string, PublicPageSection[]> = {
  leadership: [
    { title: "Servant leadership", text: "Leadership at FOLS is expressed through service, spiritual care, sound teaching, and responsibility to the church family." },
    { title: "Raising leaders", text: "We help people grow in character, competence, and confidence so they can lead faithfully at church, at home, in the marketplace, and in the community." },
    { title: "Shared responsibility", text: "Ministry is carried by people who use their gifts to serve others. Additional approved leadership profiles will be published when supplied by the church." },
  ],
  ministries: [
    { title: "Discover your place", text: "Explore communities shaped for different life stages, interests, and opportunities to serve." },
    { title: "Grow with others", text: "Ministries create smaller spaces for friendship, discipleship, prayer, learning, and practical care." },
    { title: "Use your gifts", text: "Members can express interest securely through FOLS Connect and receive the appropriate follow-up from a ministry team." },
  ],
  services: [
    { title: "Come expectant", text: "Gather with the FOLS family for worship, prayer, biblical teaching, and fellowship." },
    { title: "Bring the family", text: "Children, teenagers, young adults, and families have a place to belong and grow at FOLS." },
    { title: "Stay connected", text: "Where a gathering is virtual, only approved church connection details will be published." },
  ],
  sermons: [
    { title: "Biblical teaching", text: "Messages are shared to help people understand Scripture and live out practical faith." },
    { title: "Watch here", text: "Official FOLS broadcasts play within the website so the experience remains simple and focused." },
    { title: "Keep growing", text: "Return to recent services, Bible studies, and messages whenever you need encouragement in the Word." },
  ],
  events: [
    { title: "Worship together", text: "Approved services and special gatherings will be published here with confirmed dates and details." },
    { title: "Build community", text: "FOLS gatherings create room for fellowship, spiritual growth, family life, and service." },
    { title: "Register securely", text: "When registration is required, the event page will explain what information is needed and how it is used." },
  ],
  testimonies: [
    { title: "Give God the glory", text: "Testimonies celebrate what God has done and encourage faith across the church family." },
    { title: "Shared with consent", text: "A testimony is never published publicly without review and explicit publication consent." },
    { title: "Handled with care", text: "Sensitive personal information can be removed or kept private during the review process." },
  ],
  contact: [
    { title: "Visit us", text: `Worship with us at ${church.address}.` },
    { title: "Connect online", text: "Use only the verified FOLS social links published on this website." },
    { title: "We are here to help", text: "Questions about visits, ministries, prayer, membership, and church activities can be directed to the appropriate team." },
  ],
  giving: [
    { title: "Support the mission", text: "Giving supports ministry, outreach, discipleship, church operations, and service to the community." },
    { title: "Give securely", text: "Only verified bank instructions and approved payment methods will be displayed on this platform." },
    { title: "Clear records", text: "Authenticated donation history and receipts will become available only after the approved giving system is configured." },
  ],
  privacy: [
    { title: "Data minimisation", text: "FOLS collects only the information needed to provide church services and operate the platform." },
    { title: "Sensitive records", text: "Membership, emergency contacts, prayer requests, and financial information receive additional protection." },
    { title: "Your choices", text: "Directory visibility, notifications, and eligible communication preferences remain under member control." },
  ],
  terms: [
    { title: "Respectful participation", text: "Use the platform in a way that supports a safe, truthful, and welcoming church community." },
    { title: "Account responsibility", text: "Keep sign-in details secure and provide accurate information when using member or registration services." },
    { title: "Protected access", text: "Administrative, membership, pastoral, and financial capabilities remain restricted by role and authorization." },
  ],
};
