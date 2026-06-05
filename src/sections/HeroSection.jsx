import { useRef } from "react";
import screen1 from "../assets/mainPage/screen.webp";
import screen2 from "../assets/mainPage/screen 2.webp";
import screen3 from "../assets/mainPage/screen 3.webp";
import screen4 from "../assets/mainPage/screen 4.webp";
import { Clock, Wrench, ArrowRight } from "lucide-react";
import { useScroll, useTransform } from "framer-motion";
import {
  staggerContainer,
  composedAnimation,
  m,
} from "../components/ui/Animations";
import GradientButton from "../components/ui/GradientButton";

export default function HeroSection() {
  const containerRef = useRef(null);

  // Parallax ringan saat user men-scroll ke bawah
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Berbagai kecepatan parallax untuk menciptakan efek kedalaman pada grid
  const yParallax1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yParallax2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const yParallax3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yParallax4 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // 4 kolom mockup — pola arah: ↑ ↓ ↓ ↑
  const col1 = [screen1, screen2, screen3, screen4];
  const col2 = [screen2, screen3, screen4, screen1];
  const col3 = [screen3, screen4, screen1, screen2];
  const col4 = [screen4, screen1, screen2, screen3];

  return (
    <section
      ref={containerRef}
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
          {/* Main Logo in Hero */}
          {/* <div className="mb-6">
            <img src={logoImage} alt="LAJU Logo" className="h-16 md:h-20 lg:h-24 object-contain" />
          </div> */}

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-2 max-w-4xl">
            LAJU
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 max-w-4xl">
            Redefining <span className="text-[#0052CC]">Ride-Hailing</span> with{" "}
            <span className="text-[#FF7A00]">Human-Centric</span> Tech
          </h2>

          {/* Sub-headline */}
          {/* <p className="text-base md:text-xl text-gray-700 max-w-2xl mb-8 leading-relaxed">
            Solusi transportasi modern yang menghubungkan kebutuhan mobilitas
            Anda dengan kenyamanan dan keamanan.
          </p> */}

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

          {/* CTA Button */}
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
          </div>
        </m.div>

        {/* ── BAWAH: MASONRY 4-KOLOM GRID ── */}
        <m.div
          className="relative w-full h-[100vh] max-h-[1200px] overflow-hidden flex justify-center items-start px-4 md:px-8 gap-4 md:gap-6 lg:gap-8 mt-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Fade gradient atas/bawah dihapus agar DynamicBackground terlihat utuh */}

          {/* Kolom 1 (Kiri Luar - Ke Atas) */}
          <m.div
            style={{ y: yParallax1 }}
            className="flex-1 flex flex-col mt-12 overflow-visible"
            variants={composedAnimation}
          >
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 animate-marquee-up">
              {[...col1, ...col1, ...col1, ...col1, ...col1, ...col1].map(
                (src, i) => (
                  <img
                    key={`col1-${i}`}
                    src={src}
                    alt={`Mockup 1-${i}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-contain rounded-[1.5rem] md:rounded-[2rem] border border-white/40 shadow-xl shadow-black/5 transition-transform duration-500 hover:scale-105"
                  />
                ),
              )}
            </div>
          </m.div>

          {/* Kolom 2 (Tengah Kiri - Ke Bawah) */}
          <m.div
            style={{ y: yParallax2 }}
            className="flex-1 flex flex-col -mt-8 overflow-visible"
            variants={composedAnimation}
          >
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 animate-marquee-down">
              {[...col2, ...col2, ...col2, ...col2, ...col2, ...col2].map(
                (src, i) => (
                  <img
                    key={`col2-${i}`}
                    src={src}
                    alt={`Mockup 2-${i}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-contain rounded-[1.5rem] md:rounded-[2rem] border border-white/40 shadow-xl shadow-black/5 transition-transform duration-500 hover:scale-105"
                  />
                ),
              )}
            </div>
          </m.div>

          {/* Kolom 3 (Tengah Kanan - Ke Bawah) */}
          <m.div
            style={{ y: yParallax3 }}
            className="flex-1 flex flex-col mt-4 overflow-visible"
            variants={composedAnimation}
          >
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 animate-marquee-down">
              {[...col3, ...col3, ...col3, ...col3, ...col3, ...col3].map(
                (src, i) => (
                  <img
                    key={`col3-${i}`}
                    src={src}
                    alt={`Mockup 3-${i}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-contain rounded-[1.5rem] md:rounded-[2rem] border border-white/40 shadow-xl shadow-black/5 transition-transform duration-500 hover:scale-105"
                  />
                ),
              )}
            </div>
          </m.div>

          {/* Kolom 4 (Kanan Luar - Ke Atas) */}
          <m.div
            style={{ y: yParallax4 }}
            className="flex-1 flex flex-col mt-20 overflow-visible"
            variants={composedAnimation}
          >
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 animate-marquee-up">
              {[...col4, ...col4, ...col4, ...col4, ...col4, ...col4].map(
                (src, i) => (
                  <img
                    key={`col4-${i}`}
                    src={src}
                    alt={`Mockup 4-${i}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full object-contain rounded-[1.5rem] md:rounded-[2rem] border border-white/40 shadow-xl shadow-black/5 transition-transform duration-500 hover:scale-105"
                  />
                ),
              )}
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
