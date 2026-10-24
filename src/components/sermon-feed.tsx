"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Play, Radio } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { sermonVideos, youtubeChannel, type SermonVideo } from "@/lib/sermons";

type Filter = "all" | SermonVideo["kind"];

export function SermonFeed() {
  const [active, setActive] = useState(sermonVideos[0]);
  const [filter, setFilter] = useState<Filter>("all");
  const playerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const visible = useMemo(() => filter === "all" ? sermonVideos : sermonVideos.filter((video) => video.kind === filter), [filter]);

  function play(video: SermonVideo) {
    setActive(video);
    playerRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
  }

  return <>
    <section className="sermon-player-section" ref={playerRef}>
      <div className="sermon-player-copy">
        <p className="eyebrow">Now playing · {active.kind === "live" ? "Livestream replay" : "Message"}</p>
        <h2>{active.title}</h2>
        <p>{active.published} · Official RCCG Fountain of Life Sanctuary broadcast</p>
        <a className="text-link" href={`${youtubeChannel.url}/live`}>Visit the live channel <ArrowUpRight /></a>
      </div>
      <div className="sermon-player-shell">
        <iframe
          key={active.id}
          src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0&modestbranding=1`}
          title={active.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>

    <section className="sermon-feed-section">
      <div className="sermon-feed-heading">
        <div><p className="eyebrow">Official FOLS broadcasts</p><h2>Watch the Word</h2></div>
        <div className="sermon-filters" aria-label="Filter sermons">
          {(["all", "live", "message"] as const).map((value) => <button key={value} className={filter === value ? "active" : ""} onClick={() => setFilter(value)}>{value === "all" ? "All" : value === "live" ? "Live & replays" : "Messages"}</button>)}
        </div>
      </div>
      <div className="sermon-grid">
        {visible.map((video, index) => <motion.button
          className={`sermon-card${active.id === video.id ? " playing" : ""}`}
          key={video.id}
          onClick={() => play(video)}
          initial={reduced ? false : { opacity: 0, y: 28 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          whileHover={reduced ? undefined : { y: -6 }}
          viewport={{ once: true, amount: .15 }}
          transition={{ duration: .55, delay: Math.min(index, 5) * .04 }}
        >
          <span className="sermon-thumb" style={{ backgroundImage: `linear-gradient(0deg, rgba(39,34,26,.5), transparent 65%), url(https://i.ytimg.com/vi/${video.id}/hqdefault.jpg)` }}>
            <span className="sermon-play"><Play fill="currentColor" /></span>
            {video.kind === "live" && <span className="sermon-live"><Radio /> Live archive</span>}
          </span>
          <span className="sermon-card-meta"><small>{String(index + 1).padStart(2, "0")} · {video.published}</small><strong>{video.title}</strong><span>Play on FOLS <ArrowUpRight /></span></span>
        </motion.button>)}
      </div>
    </section>

    <section className="sermon-archive">
      <div><p className="eyebrow">Complete channel archive</p><h2>Every public FOLS broadcast, in one player.</h2><p>The official uploads playlist includes the full public video library and livestream replays. Use the playlist control inside the player to browse the archive.</p></div>
      <div className="sermon-player-shell archive-player"><iframe src={`https://www.youtube-nocookie.com/embed/videoseries?list=${youtubeChannel.uploadsPlaylist}&rel=0&modestbranding=1`} title="Complete RCCG FOLS video archive" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy" /></div>
    </section>
  </>;
}
