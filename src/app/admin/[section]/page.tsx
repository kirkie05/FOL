import { notFound } from "next/navigation"; import { AdminModule,adminSections } from "@/components/admin-shell";
export default async function AdminSection({params}:{params:Promise<{section:string}>}){const {section}=await params;if(!(adminSections as readonly string[]).includes(section))notFound();return <AdminModule section={section}/>}
