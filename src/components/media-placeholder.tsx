import { ImageIcon, Video } from "lucide-react";

export function MediaPlaceholder({ label, kind = "image", className = "" }: { label: string; kind?: "image" | "video"; className?: string }) {
  const Icon = kind === "video" ? Video : ImageIcon;
  return <div className={`media-placeholder ${className}`} role="img" aria-label={`${label} placeholder`}>
    <Icon aria-hidden="true" />
    <span>{label}</span>
    <small>{kind === "video" ? "Video placeholder" : "Image placeholder"}</small>
  </div>;
}
