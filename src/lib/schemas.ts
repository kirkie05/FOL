import { z } from "zod";

export const visitSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  email: z.email(),
  phone: z.string().trim().min(7).max(20),
  expectedVisitDate: z.string().date(),
  guests: z.coerce.number().int().min(1).max(20),
  bringingChildren: z.boolean().optional(),
  additionalInformation: z.string().max(1000).optional(),
  consent: z.literal(true),
});

export const prayerSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().optional().or(z.literal("")),
  request: z.string().trim().min(10).max(3000),
  privacy: z.enum(["pastoral", "prayer-team", "community"]),
  consent: z.literal(true),
});

export const communityPostSchema = z.object({
  body: z.string().trim().min(1).max(3000),
  kind: z.enum(["post", "testimony", "scripture"]).default("post"),
  imageCount: z.number().int().min(0).max(6),
});

export const ministrySchema = z.object({
  title: z.string().trim().min(2).max(120),
  slug: z.string().trim().min(2).max(80).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  description: z.string().trim().min(20).max(240),
  about: z.string().trim().min(40).max(1200),
  leader: z.string().trim().max(120).optional().or(z.literal("")),
  meeting: z.string().trim().max(240).optional().or(z.literal("")),
  image: z.string().trim().regex(/^\/media\/[a-zA-Z0-9/_-]+\.(?:jpg|jpeg|png|webp)$/).default("/media/congregation-worship-1.webp"),
  status: z.enum(["draft", "published"]).default("published"),
});

export const allowedImageTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
export const userRoles = ["superAdmin", "churchAdmin", "pastor", "ministryLeader", "financeAdmin", "communityModerator", "member", "pendingMember", "visitor"] as const;
export type UserRole = (typeof userRoles)[number];
