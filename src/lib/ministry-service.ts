import "server-only";

import { Users } from "lucide-react";
import { adminDb } from "@/lib/firebase/admin";
import { ministries as configuredMinistries, type Ministry } from "@/lib/content";
import { ministrySchema } from "@/lib/schemas";

export async function getPublicMinistries(): Promise<Ministry[]> {
  if (!adminDb) return configuredMinistries;

  try {
    const snapshot = await adminDb.collection("ministries").where("status", "==", "published").limit(100).get();
    const managed = snapshot.docs.flatMap((document) => {
      const parsed = ministrySchema.safeParse({ slug: document.id, ...document.data() });
      if (!parsed.success) return [];
      const item = parsed.data;
      return [{
        slug: item.slug,
        title: item.title,
        description: item.description,
        about: item.about,
        leader: item.leader || null,
        meeting: item.meeting || null,
        image: item.image,
        icon: Users,
        href: `/ministries/${item.slug}`,
      } satisfies Ministry];
    });

    const merged = new Map(configuredMinistries.map((ministry) => [ministry.slug, ministry]));
    managed.forEach((ministry) => merged.set(ministry.slug, ministry));
    return [...merged.values()].sort((a, b) => a.title.localeCompare(b.title));
  } catch {
    return configuredMinistries;
  }
}

export async function getPublicMinistry(slug: string) {
  return (await getPublicMinistries()).find((ministry) => ministry.slug === slug);
}
