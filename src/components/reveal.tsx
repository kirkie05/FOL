"use client";

import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import type { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}>;

const offsets = {
  up: { x: 0, y: 38 },
  left: { x: -48, y: 0 },
  right: { x: 48, y: 0 },
};

export function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  const reduced = useReducedMotion();
  return <motion.div
    className={className}
    initial={reduced ? false : { opacity: 0, ...offsets[direction] }}
    whileInView={reduced ? undefined : { opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, amount: .16 }}
    transition={{ duration: .85, delay, ease: [0.22, 1, 0.36, 1] }}
  >{children}</motion.div>;
}

const heroVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delayChildren: .18, staggerChildren: .12 } },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: .9, ease: [0.22, 1, 0.36, 1] } },
};

export function HeroMotion({ eyebrow, title, children }: PropsWithChildren<{ eyebrow?: React.ReactNode; title: React.ReactNode }>) {
  const reduced = useReducedMotion();
  return <motion.div
    className="hero-content"
    variants={reduced ? undefined : heroVariants}
    initial={reduced ? false : "hidden"}
    animate={reduced ? undefined : "visible"}
  >
    {eyebrow && <motion.div className="hero-kicker" variants={heroItemVariants}>{eyebrow}</motion.div>}
    <motion.div className="hero-title" variants={heroItemVariants}>{title}</motion.div>
    <motion.div className="hero-bottom" variants={heroItemVariants}>{children}</motion.div>
  </motion.div>;
}

export function HoverLift({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  const reduced = useReducedMotion();
  return <motion.div
    className={className}
    whileHover={reduced ? undefined : { y: -8 }}
    transition={{ duration: .35, ease: [0.22, 1, 0.36, 1] }}
  >{children}</motion.div>;
}

export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  return <motion.div className="scroll-progress" style={reduced ? undefined : { scaleX: scrollYProgress }} aria-hidden="true" />;
}

export function ParallaxFrame({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  return <motion.div className={className} style={reduced ? undefined : { y }}>{children}</motion.div>;
}
