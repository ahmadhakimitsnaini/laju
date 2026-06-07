import { useState, useCallback } from "react";
import screen1 from "../assets/mainPage/screen.webp";
import screen2 from "../assets/mainPage/screen 2.webp";
import screen3 from "../assets/mainPage/screen 3.webp";
import screen4 from "../assets/mainPage/screen 4.webp";
import { Clock, Wrench, ArrowRight, LayoutGrid } from "lucide-react";
import {
  staggerContainer,
  composedAnimation,
  m,
} from "../components/ui/Animations";
import GradientButton from "../components/ui/GradientButton";
import LightboxModal from "../components/ui/LightboxModal";

// ─────────────────────────────────────────────────────
// Array Master — sumber kebenaran tunggal untuk lightbox
// ─────────────────────────────────────────────────────
const allMockups = [
  { src: screen1, label: "Home Screen" },
  { src: screen2, label: "Ride Booking" },
  { src: screen3, label: "Driver View" },
  { src: screen4, label: "Trip Summary" },
];

export default function HeroSection() {

  // ── State Lightbox ─────────────────────────────────
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex]     = useState(0);
  const [direction, setDirection]           = useState(1); // 1 = next, -1 = prev

  // ── Handler Open ───────────────────────────────────
  const openLightbox = useCallback((index) => {
    setCurrentIndex(index);
    setDirection(1);
    setIsLightboxOpen(true);
  }, []);

  // ── Handler Close ──────────────────────────────────
  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  // ── Handler Next ──────────────────────────────────
  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % allMockups.length);
  }, []);

  // ── Handler Prev ──────────────────────────────────
  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? allMockups.length - 1 : prev - 1
    );
  }, []);

  // ── Handler Select by Thumbnail ───────────────────
  const handleSelectIndex = useCallback((idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  }, [currentIndex]);

  // ── 4 kolom masonry — pola arah: ↑ ↓ ↓ ↑ ─────────
  // Setiap kolom memetakan src ke index allMockups untuk onClick
  const col1 = [0, 1, 2, 3]; // index ke allMockups
  const col2 = [1, 2, 3, 0];
  const col3 = [2, 3, 0, 1];
  const col4 = [3, 0, 1, 2];

  // Helper: render gambar dengan efek hover & onClick
  const renderImage = (mockupIndex, keyPrefix, i) => (
    <img
      key={`${keyPrefix}-${i}`}
      src={allMockups[mockupIndex].src}
      alt={allMockups[mockupIndex].label}
      loading="lazy"
      decoding="async"
      onClick={() => openLightbox(mockupIndex)}
      className="relative w-full object-contain rounded-[1.5rem] md:rounded-[2rem] border border-white/40 shadow-xl shadow-black/5 transition-all duration-300 hover:scale-105 hover:z-10 hover:shadow-2xl cursor-pointer group-hover:opacity-40 group-hover:blur-[2px] hover:!opacity-100 hover:!blur-none hover:ring-4 hover:ring-[#0052CC]/80 hover:ring-offset-4"
    />
  );

  return (
    <>
      {/* ── Lightbox Modal ──────────────────────────────── */}
      <LightboxModal
        isOpen={isLightboxOpen}
        images={allMockups}
        currentIndex={currentIndex}
        direction={direction}
        onClose={closeLightbox}
        onNext={handleNext}
        onPrev={handlePrev}
        onSelectIndex={handleSelectIndex}
      />

      <section
        id="hero"
        className="relative flex flex-col overflow-x-hidden pt-32 md:pt-40"
      >
        {/* Kontainer Utama */}
        <div className="w-full flex flex-col items-center justify-start z-10">

          {/* ── ATAS: TEKS HERO ── */}
          <m.div
            className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto w-full mb-16"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-2 max-w-4xl">
              LAJU
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 max-w-4xl">
              Redefining <span className="text-[#0052CC]">Ride-Hailing</span> with{" "}
              <span className="text-[#0052CC]">Human-Centric</span> Tech
            </h2>

            {/* Info Cards */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl glass-card cursor-pointer">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #0052CC18 0%, #0052CC08 100%)", border: "1px solid #0052CC30" }}
                >
                  <Clock size={16} className="text-[#0052CC]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold text-left uppercase tracking-wider">
                    Timeline
                  </p>
                  <p className="text-gray-900 font-bold text-sm">4 Minggu</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl glass-card cursor-pointer">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #FF7A0018 0%, #FF7A0008 100%)", border: "1px solid #FF7A0030" }}
                >
                  <Wrench size={16} className="text-[#FF7A00]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold text-left uppercase tracking-wider">
                    Tools
                  </p>
                  <p className="text-gray-900 font-bold text-sm">
                    Figma, Auto Flow
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              <GradientButton
                href="#overview"
                onClick={() => {
                  document
                    .querySelector("#overview")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 rounded-xl font-bold text-base"
              >
                Baca Case Study <ArrowRight size={18} />
              </GradientButton>

              {/* Tombol "Lihat Galeri" — Trigger kedua selain klik gambar */}
              <button
                id="open-gallery-btn"
                aria-label="Buka galeri mockup"
                onClick={() => openLightbox(0)}
                className="flex items-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm text-[#0052CC] border border-[#0052CC]/25 hover:bg-[#0052CC]/8 hover:border-[#0052CC]/50 transition-all duration-250 glass-card"
              >
                <LayoutGrid size={16} />
                Lihat Galeri
              </button>
            </div>
          </m.div>

          {/* ── BAWAH: MASONRY 4-KOLOM GRID ── */}
          <m.div
            className="relative w-full max-w-6xl mx-auto h-[70vh] max-h-[800px] overflow-hidden flex justify-center items-start px-4 md:px-8 gap-3 md:gap-5 lg:gap-6 mt-8 group"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
              maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
            }}
          >
            {/* Kolom 1 (Kiri Luar - Ke Atas) */}
            <m.div
              className="flex-1 flex flex-col mt-12 overflow-visible"
              variants={composedAnimation}
            >
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 animate-marquee-up group-hover:[animation-play-state:paused]">
                {[...col1, ...col1].map((mockupIdx, i) =>
                  renderImage(mockupIdx, "col1", i)
                )}
              </div>
            </m.div>

            {/* Kolom 2 (Tengah Kiri - Ke Bawah) */}
            <m.div
              className="flex-1 flex flex-col -mt-8 overflow-visible"
              variants={composedAnimation}
            >
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 animate-marquee-down group-hover:[animation-play-state:paused]">
                {[...col2, ...col2].map((mockupIdx, i) =>
                  renderImage(mockupIdx, "col2", i)
                )}
              </div>
            </m.div>

            {/* Kolom 3 (Tengah Kanan - Ke Bawah) */}
            <m.div
              className="flex-1 flex flex-col mt-4 overflow-visible"
              variants={composedAnimation}
            >
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 animate-marquee-down group-hover:[animation-play-state:paused]">
                {[...col3, ...col3].map((mockupIdx, i) =>
                  renderImage(mockupIdx, "col3", i)
                )}
              </div>
            </m.div>

            {/* Kolom 4 (Kanan Luar - Ke Atas) */}
            <m.div
              className="flex-1 flex flex-col mt-20 overflow-visible"
              variants={composedAnimation}
            >
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 animate-marquee-up group-hover:[animation-play-state:paused]">
                {[...col4, ...col4].map((mockupIdx, i) =>
                  renderImage(mockupIdx, "col4", i)
                )}
              </div>
            </m.div>
          </m.div>
        </div>
      </section>
    </>
  );
}
