import { useRef } from "react";
import screen1 from "../assets/mainPage/screen.png";
import screen2 from "../assets/mainPage/screen 2.png";
import screen3 from "../assets/mainPage/screen 3.png";
import screen4 from "../assets/mainPage/screen 4.png";
import { Clock, Wrench, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { staggerContainer, composedAnimation } from "../components/ui/Animations";

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
      className="relative flex flex-col overflow-x-hidden pt-20 bg-[#1E1E1E]"
    >
      {/* Kontainer Utama */}
      <div className="w-full flex flex-col items-center justify-start z-10">
        {/* Background Gradient Blobs */}
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #0052CC, transparent)",
          }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #FF7A00, transparent)",
          }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* ── ATAS: TEKS HERO ── */}
        <motion.div
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2 max-w-4xl">
            LAJU
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl">
            Redefining <span className="text-white">Ride-Hailing</span> with{" "}
            <span className="text-white">Human-Centric</span> Tech
          </h2>

          {/* Sub-headline */}
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
            Solusi transportasi modern yang menghubungkan kebutuhan mobilitas
            Anda dengan kenyamanan dan keamanan.
          </p>

          {/* Info Cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-[#0052CC]/20 flex items-center justify-center">
                <Clock size={16} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium text-left">
                  Timeline
                </p>
                <p className="text-white font-semibold text-sm">4 Minggu</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-[#FF7A00]/20 flex items-center justify-center">
                <Wrench size={16} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium text-left">
                  Tools
                </p>
                <p className="text-white font-semibold text-sm">
                  Figma, Auto Flow
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="#overview"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#overview")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FF7A00]/30"
              style={{
                background: "linear-gradient(135deg, #FF7A00, #FF9A3C)",
              }}
            >
              Baca Case Study <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* ── BAWAH: MASONRY 4-KOLOM GRID ── */}
        <motion.div
          className="relative w-full h-[100vh] max-h-[1200px] overflow-hidden flex justify-center items-start px-4 md:px-8 gap-4 md:gap-6 lg:gap-8 mt-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Fade gradient atas/bawah agar terpotong dengan mulus */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#1E1E1E] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#1E1E1E] to-transparent z-20 pointer-events-none" />

          {/* Kolom 1 (Kiri Luar - Ke Atas) */}
          <motion.div
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
                    className="w-full object-contain rounded-[1.5rem] md:rounded-[2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-105 hover:border-white/30"
                  />
                ),
              )}
            </div>
          </motion.div>

          {/* Kolom 2 (Tengah Kiri - Ke Bawah) */}
          <motion.div
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
                    className="w-full object-contain rounded-[1.5rem] md:rounded-[2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-105 hover:border-white/30"
                  />
                ),
              )}
            </div>
          </motion.div>

          {/* Kolom 3 (Tengah Kanan - Ke Bawah) */}
          <motion.div
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
                    className="w-full object-contain rounded-[1.5rem] md:rounded-[2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-105 hover:border-white/30"
                  />
                ),
              )}
            </div>
          </motion.div>

          {/* Kolom 4 (Kanan Luar - Ke Atas) */}
          <motion.div
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
                    className="w-full object-contain rounded-[1.5rem] md:rounded-[2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-105 hover:border-white/30"
                  />
                ),
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
