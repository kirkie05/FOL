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

export const allowedImageTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
export const userRoles = ["superAdmin", "churchAdmin", "pastor", "ministryLeader", "financeAdmin", "communityModerator", "member", "pendingMember", "visitor"] as const;
export type UserRole = (typeof userRoles)[number];
