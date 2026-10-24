"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, Plus, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { nav } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  return <header className="site-header">
    <motion.button whileTap={reduced ? undefined : { scale: .96 }} className="menu-button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
      {open ? <X /> : <Menu />}<span>{open ? "Close" : "Menu"}</span>
    </motion.button>
    <motion.div className="header-brand-motion" whileHover={reduced ? undefined : { scale: 1.04 }}><Link className="brand" href="/" aria-label="RCCG Fountain of Life Sanctuary home">
      <Image src="/favicon.png" alt="" width={32} height={32} priority /><span>FOLS</span>
    </Link></motion.div>
    <div className="header-actions"><Link href="/visit">Visit <ArrowUpRight /></Link><Link href="/login">Connect</Link></div>
    <AnimatePresence>
      {open && <motion.nav
        id="main-nav"
        className="nav open"
        aria-label="Main navigation"
        initial={reduced ? false : { opacity: 1, clipPath: "inset(0 100% 0 0)" }}
        animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
        exit={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
        transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }}
      >
        {nav.map(([label, href], index) => <motion.div className={label === "Ministries" ? "nav-item has-submenu" : "nav-item"} key={href} initial={reduced ? false : { opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduced ? 0 : .08 + index * .035, duration: .38 }}>
          <Link href={href} onClick={() => setOpen(false)}>{label}{label === "Ministries" && <Plus />}</Link>
          {label === "Ministries" && <div className="nav-submenu"><Link href="/ministries" onClick={() => setOpen(false)}>All ministries</Link><Link href="/ministries/unstoppables" onClick={() => setOpen(false)}>The Unstoppables</Link><Link href="/ministries" onClick={() => setOpen(false)}>Children & Teens</Link><Link href="/ministries" onClick={() => setOpen(false)}>Family & Marriage</Link></div>}
        </motion.div>)}
        <motion.div className="nav-item nav-connect" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .34 }}><Link href="/login" onClick={() => setOpen(false)}>Connect <ArrowUpRight /></Link></motion.div>
      </motion.nav>}
    </AnimatePresence>
  </header>;
}
