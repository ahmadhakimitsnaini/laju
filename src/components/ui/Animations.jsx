/* eslint-disable react-refresh/only-export-components */
/**
 * Animations.jsx
 *
 * Optimized: Menggunakan LazyMotion + domAnimation untuk tree-shaking
 * Framer Motion yang lebih agresif. Semua komponen `motion.*` diganti
 * dengan `m.*` agar hanya fitur yang dipakai yang masuk ke bundle.
 *
 * Hemat ~30KB gzip vs import `motion` penuh.
 */
import { lazy, Suspense } from "react";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import { useRef } from "react";

// ─────────────────────────────────────────────────────────
// Provider: Bungkus seluruh app dengan LazyMotionProvider
// ─────────────────────────────────────────────────────────
export function MotionProvider({ children }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}

// ─────────────────────────────────────────────────────────
// Variants
// ─────────────────────────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Composed animation untuk Hero grid columns
export const composedAnimation = {
  hidden: { opacity: 0, scale: 0.8, y: 60, rotateX: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      duration: 0.8,
    },
  },
};

// ─────────────────────────────────────────────────────────
// Reusable scroll-triggered wrapper — menggunakan `m.div`
// viewport: { once: true } agar animasi tidak diulang saat
// user scroll balik ke atas (hemat CPU)
// ─────────────────────────────────────────────────────────
export function FadeInWhenVisible({
  children,
  variants = fadeUp,
  className = "",
  delay = 0,
}) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </m.div>
  );
}

// ─────────────────────────────────────────────────────────
// Stagger Wrapper — menggunakan `m.div`
// ─────────────────────────────────────────────────────────
export function StaggerWrap({ children, className = "", delay = 0 }) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer}
      transition={{ delay }}
    >
      {children}
    </m.div>
  );
}

// ─────────────────────────────────────────────────────────
// Stagger Text Item — menggunakan `m.div`
// ─────────────────────────────────────────────────────────
export function StaggerText({ children, className = "" }) {
  return (
    <m.div className={className} variants={staggerItem}>
      {children}
    </m.div>
  );
}

// ─────────────────────────────────────────────────────────
// Re-export `m` agar komponen lain bisa pakai `m.div`, dll
// tanpa perlu import dari framer-motion langsung
// ─────────────────────────────────────────────────────────
export { m };
