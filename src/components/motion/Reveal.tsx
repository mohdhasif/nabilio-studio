"use client";

import { motion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
};

/**
 * Subtle fade-and-rise on first scroll into view.
 * The same element renders on server and client (no hydration mismatch); with
 * prefers-reduced-motion, MotionProvider drops the movement and keeps only the fade.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
