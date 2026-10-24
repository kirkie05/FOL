import { PortalPage } from "@/components/app-shell";
const allowed=["connect","bible","events","ministries","giving","notifications","profile","settings"];
export default async function MemberSection({params}:{params:Promise<{section:string}>}) { const {section}=await params; return <PortalPage section={allowed.includes(section)?section:"home"}/>; }
