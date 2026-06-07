/**
 * LightboxModal.jsx
 *
 * Komponen galeri lightbox yang muncul saat pengguna mengklik gambar
 * pada Masonry Grid di HeroSection.
 *
 * Fitur:
 * - Overlay gelap blur di belakang layar
 * - Tampilan gambar utama tengah layar dengan animasi slide
 * - Navigasi Prev / Next dengan tombol dan keyboard (Arrow, Escape)
 * - Thumbnail scrollable di bagian bawah
 * - Mencegah halaman utama ikut ter-scroll saat lightbox terbuka
 */

import { useEffect, useCallback, useRef } from "react";
import { m } from "./Animations";
import { AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";

// ─────────────────────────────────────────────
// Variants Animasi
// ─────────────────────────────────────────────
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: "easeIn" } },
};

const imageVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.25, ease: "easeIn" },
  }),
};

const modalPanelVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 16,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

// ─────────────────────────────────────────────
// Komponen Utama
// ─────────────────────────────────────────────
export default function LightboxModal({
  isOpen,
  images,         // Array<{ src: string, label: string }>
  currentIndex,
  direction,
  onClose,
  onNext,
  onPrev,
  onSelectIndex,
}) {
  const thumbnailRef = useRef(null);

  // ── Keyboard handler ──────────────────────────────────────
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  // ── Efek: pasang/lepas keyboard listener + kunci scroll body ──
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Cegah background scroll
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  // ── Auto-scroll thumbnail ke item yang aktif ──────────────
  useEffect(() => {
    if (!thumbnailRef.current) return;
    const activeThumb = thumbnailRef.current.querySelector(
      `[data-thumb-index="${currentIndex}"]`
    );
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        // ── Overlay ─────────────────────────────────────────────
        <m.div
          key="lightbox-overlay"
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose} // Klik overlay → tutup
          style={{
            background: "rgba(5, 10, 25, 0.88)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* ── Panel Utama Modal ──────────────────────────────── */}
          <m.div
            key="lightbox-panel"
            className="relative w-full max-w-4xl flex flex-col items-center gap-5"
            variants={modalPanelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // Cegah klik panel menutup overlay
          >
            {/* ── Header: Label & Counter ──────────────────────── */}
            <div className="w-full flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, #0052CC 0%, #003d99 100%)",
                  }}
                >
                  <Images size={15} className="text-white" />
                </div>
                <span className="text-white/90 text-sm font-semibold tracking-wide">
                  {images[currentIndex]?.label || `Mockup ${currentIndex + 1}`}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/40 text-sm font-mono">
                  {currentIndex + 1} / {images.length}
                </span>
                {/* Tombol Close */}
                <button
                  id="lightbox-close-btn"
                  aria-label="Tutup galeri"
                  onClick={onClose}
                  className="flex items-center justify-center w-9 h-9 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* ── Area Gambar Utama ─────────────────────────────── */}
            <div
              className="relative w-full flex items-center justify-center"
              style={{ minHeight: "55vh" }}
            >
              {/* Tombol Navigasi Kiri */}
              <button
                id="lightbox-prev-btn"
                aria-label="Gambar sebelumnya"
                onClick={onPrev}
                className="absolute left-0 z-10 flex items-center justify-center w-11 h-11 rounded-2xl text-white/70 hover:text-white hover:bg-white/15 active:bg-white/20 transition-all duration-200 -translate-x-2 md:-translate-x-5"
                style={{ backdropFilter: "blur(8px)" }}
              >
                <ChevronLeft size={22} />
              </button>

              {/* Gambar Utama dengan animasi slide */}
              <div className="w-full flex justify-center overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait" custom={direction}>
                  <m.img
                    key={`lightbox-img-${currentIndex}`}
                    src={images[currentIndex]?.src}
                    alt={images[currentIndex]?.label || `Mockup ${currentIndex + 1}`}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="max-h-[55vh] w-auto object-contain rounded-2xl shadow-2xl"
                    style={{
                      boxShadow: "0 32px 80px rgba(0, 82, 204, 0.25)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    draggable={false}
                  />
                </AnimatePresence>
              </div>

              {/* Tombol Navigasi Kanan */}
              <button
                id="lightbox-next-btn"
                aria-label="Gambar berikutnya"
                onClick={onNext}
                className="absolute right-0 z-10 flex items-center justify-center w-11 h-11 rounded-2xl text-white/70 hover:text-white hover:bg-white/15 active:bg-white/20 transition-all duration-200 translate-x-2 md:translate-x-5"
                style={{ backdropFilter: "blur(8px)" }}
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* ── Thumbnail Scrollable ──────────────────────────── */}
            <div className="w-full flex flex-col items-center gap-2">
              <p className="text-white/30 text-xs font-medium tracking-widest uppercase">
                Semua Mockup — Scroll untuk melihat lebih
              </p>
              <div
                ref={thumbnailRef}
                className="w-full flex flex-row gap-3 overflow-x-auto pb-2 px-1 scroll-smooth"
                style={{
                  // Sembunyikan scrollbar tapi tetap bisa scroll
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {images.map((img, idx) => (
                  <button
                    key={`thumb-${idx}`}
                    data-thumb-index={idx}
                    id={`lightbox-thumb-${idx}`}
                    aria-label={`Pilih ${img.label || `Mockup ${idx + 1}`}`}
                    onClick={() => onSelectIndex(idx)}
                    className={`
                      relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden
                      transition-all duration-250 border-2
                      ${idx === currentIndex
                        ? "border-[#0052CC] scale-105 shadow-lg shadow-[#0052CC]/30"
                        : "border-white/10 opacity-50 hover:opacity-80 hover:border-white/30"
                      }
                    `}
                  >
                    <img
                      src={img.src}
                      alt={img.label || `Thumb ${idx + 1}`}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    {/* Indikator aktif */}
                    {idx === currentIndex && (
                      <div
                        className="absolute inset-0 rounded-xl"
                        style={{
                          boxShadow: "inset 0 0 0 2px rgba(0,82,204,0.6)",
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Hint Keyboard ────────────────────────────────── */}
            <div className="flex items-center gap-4 text-white/25 text-xs">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px]">←</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px]">→</kbd>
                Navigasi
              </span>
              <span className="w-px h-3 bg-white/20" />
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px]">Esc</kbd>
                Tutup
              </span>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
