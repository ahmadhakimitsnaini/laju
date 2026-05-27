import { useState, useEffect } from "react";
import logoImage from "./assets/logo.png";
import screen1 from "./assets/mainPage/screen.png";
import screen2 from "./assets/mainPage/screen 2.png";
import screen3 from "./assets/mainPage/screen 3.png";
import screen4 from "./assets/mainPage/screen 4.png";
import {
  Shield,
  Users,
  Wallet,
  MapPin,
  Star,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Link2,
  GitBranch,
  Mail,
  ExternalLink,
  Clock,
  Wrench,
  Quote,
  ChevronRight,
  Smartphone,
  Lock,
  CreditCard,
  Zap,
  Navigation,
} from "lucide-react";

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#overview", label: "Overview" },
    { href: "#define", label: "Define" },
    { href: "#ideate", label: "Ideate" },
    { href: "#prototype", label: "Prototype" },
    { href: "#test", label: "Validasi" },
  ];

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#1E1E1E]/80 border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#hero");
          }}
          className="flex items-center gap-2 group"
        >
          <img
            src={logoImage}
            alt="LAJU Logo"
            className="h-8 md:h-10 object-contain"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="text-gray-300 hover:text-white text-sm font-medium transition-all duration-200 hover:text-white relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF7A00] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button Desktop */}
        <a
          href="#prototype"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#prototype");
          }}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{ background: "linear-gradient(135deg, #FF7A00, #FF9A3C)" }}
        >
          Lihat Prototype <ArrowRight size={14} />
        </a>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-md bg-[#1E1E1E]/95 border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className="text-gray-300 hover:text-white text-base font-medium transition-colors flex items-center gap-2"
                >
                  <ChevronRight size={16} className="text-white" />
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#prototype"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("#prototype");
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold text-white"
                style={{
                  background: "linear-gradient(135deg, #FF7A00, #FF9A3C)",
                }}
              >
                Lihat Prototype <ArrowRight size={14} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient Blobs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #0052CC, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #FF7A00, transparent)" }}
      />
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        {/* Main Logo in Hero */}
        <div className="mb-6">
          <img src={logoImage} alt="LAJU Logo" className="h-16 md:h-20 lg:h-24 object-contain" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0052CC]/50 bg-[#0052CC]/10 text-white text-sm font-medium mb-6">
          <Zap size={14} className="text-white" />
          UI/UX Case Study — Ride-Hailing & Logistics App
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2 max-w-4xl">
          LAJU
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl">
          Redefining <span className="text-white">Ride-Hailing</span> with{" "}
          <span className="text-white">Human-Centric</span> Tech
        </h1>

        {/* Sub-headline */}
        <p className="text-base md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
          Solusi transportasi modern yang menghubungkan kebutuhan mobilitas Anda dengan kenyamanan dan keamanan.
        </p>

        {/* Info Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-lg bg-[#0052CC]/20 flex items-center justify-center">
              <Clock size={16} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Timeline</p>
              <p className="text-white font-semibold text-sm">4 Minggu</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-lg bg-[#FF7A00]/20 flex items-center justify-center">
              <Wrench size={16} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Tools</p>
              <p className="text-white font-semibold text-sm">
                Figma, Auto Flow
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
          <a
            href="#prototype"
            id="cta-lihat-prototype"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#prototype")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FF7A00]/30"
            style={{ background: "linear-gradient(135deg, #FF7A00, #FF9A3C)" }}
          >
            Lihat Prototype <ArrowRight size={18} />
          </a>
          <a
            href="#overview"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#overview")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-gray-300 text-base border border-white/20 hover:border-white/40 hover:text-white transition-all duration-300"
          >
            Baca Case Study
          </a>
        </div>

        {/* 4 Mockup Screens */}
        <div className="w-full max-w-6xl overflow-x-auto pb-8 flex justify-start lg:justify-center items-center gap-4 md:gap-6 snap-x snap-mandatory hide-scrollbar">
          <img src={screen1} alt="Mockup 1" className="h-[350px] md:h-[450px] lg:h-[550px] w-auto object-contain snap-center shrink-0 shadow-2xl rounded-[24px] md:rounded-[32px]" />
          <img src={screen2} alt="Mockup 2" className="h-[350px] md:h-[450px] lg:h-[550px] w-auto object-contain snap-center shrink-0 shadow-2xl rounded-[24px] md:rounded-[32px]" />
          <img src={screen3} alt="Mockup 3" className="h-[350px] md:h-[450px] lg:h-[550px] w-auto object-contain snap-center shrink-0 shadow-2xl rounded-[24px] md:rounded-[32px]" />
          <img src={screen4} alt="Mockup 4" className="h-[350px] md:h-[450px] lg:h-[550px] w-auto object-contain snap-center shrink-0 shadow-2xl rounded-[24px] md:rounded-[32px]" />
        </div>

        {/* Scroll indicator */}
        <div className="relative mt-8 flex flex-col items-center gap-2 animate-bounce">
          <p className="text-gray-500 text-xs font-medium">
            Scroll untuk melanjutkan
          </p>
          <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}

// ─── Overview & Design Goals ──────────────────────────────────────────────────
function OverviewSection() {
  const pillars = [
    {
      id: "pillar-trust",
      icon: <Shield size={28} className="text-white" />,
      color: "#0052CC",
      colorLight: "#60A5FA",
      title: "Dynamic Trust",
      subtitle: "Keamanan & Transparansi",
      desc: "Verifikasi OTP dua-arah, real-time GPS tracking, dan riwayat perjalanan yang transparan membangun kepercayaan antara penumpang dan driver.",
      tags: ["OTP Verification", "Live Tracking", "Trip History"],
    },
    {
      id: "pillar-empowerment",
      icon: <Users size={28} className="text-white" />,
      color: "#FFFFFF",
      colorLight: "#FB923C",
      title: "User Empowerment",
      subtitle: "Kontrol Penuh di Tangan Anda",
      desc: "Bebas memilih driver berdasarkan profil, rating bintang, dan riwayat perjalanan. Pengguna memegang kendali atas pengalaman perjalanan mereka.",
      tags: ["Pilih Driver", "Rating System", "Multi-Service"],
    },
    {
      id: "pillar-fintech",
      icon: <Wallet size={28} className="text-white" />,
      color: "#0052CC",
      colorLight: "#60A5FA",
      title: "Seamless Fintech",
      subtitle: "Ekosistem Pembayaran Terintegrasi",
      desc: "Dompet LAJU mengintegrasikan pembayaran cashless, manajemen saldo, histori transaksi, dan top-up dalam satu ekosistem yang mulus.",
      tags: ["Dompet LAJU", "Cashless Pay", "Top-Up"],
    },
  ];

  return (
    <section id="overview" className="py-24 px-6 relative overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #60A5FA 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Blue glow top-right */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #0052CC, transparent)" }}
      />
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0052CC]/20 border border-[#0052CC]/30 text-white text-xs font-semibold mb-4 uppercase tracking-widest">
            Tahap Empathize
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Mengapa <span style={{ color: "#FFFFFF" }}>LAJU</span>?
          </h2>
          <div className="flex flex-col md:flex-row gap-6 max-w-4xl">
            <div className="flex-1 p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-gray-300 leading-relaxed">
                Riset menunjukkan bahwa pengguna layanan ride-hailing sering
                merasa tidak berdaya — driver ditugaskan secara acak tanpa
                pilihan, meninggalkan rasa ketidakamanan terutama bagi penumpang
                wanita dan perjalanan malam. LAJU hadir untuk mengubah paradigma
                ini.
              </p>
            </div>
            <div className="flex-1 p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-gray-300 leading-relaxed">
                Selain itu, ketidaktransparanan biaya dan ketergantungan pada
                uang tunai menciptakan gesekan dalam pengalaman pengguna. Fitur{" "}
                <span className="text-white font-semibold">Dompet LAJU</span>{" "}
                hadir sebagai solusi ekosistem pembayaran yang seamless dan
                terpercaya.
              </p>
            </div>
          </div>
        </div>

        {/* Figma Embed Placeholder */}
        <div className="max-w-4xl mb-16 rounded-2xl overflow-hidden border border-white/10 bg-[#232323] p-4 md:p-6 lg:p-8">
          <iframe
            style={{ border: "none" }}
            className="w-full aspect-video rounded-xl"
            src="https://embed.figma.com/design/XF3j3uIAgfkrNqcWO36REq/Untitled?node-id=1063-4081&embed-host=share"
            allowFullScreen
            title="Figma Embed Empathize"
          ></iframe>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              id={pillar.id}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/20 hover:shadow-2xl cursor-default overflow-hidden"
            >
              {/* Glow background */}
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                style={{ backgroundColor: pillar.color }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  backgroundColor: `${pillar.color}20`,
                  border: `1px solid ${pillar.color}40`,
                }}
              >
                {pillar.icon}
              </div>

              {/* Content */}
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{ color: "#FFFFFF" }}
              >
                {pillar.subtitle}
              </p>
              <h3 className="text-xl font-bold text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {pillar.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium border"
                    style={{
                      borderColor: `${pillar.color}60`,
                      color: "#FFFFFF",
                      backgroundColor: `${pillar.color}15`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Define Section ───────────────────────────────────────────────────────────
function DefineSection() {
  const journeyStages = [
    {
      phase: "Onboarding",
      icon: <Smartphone size={16} />,
      steps: [
        "Registrasi & Verifikasi Data",
        "OTP via SMS/Email",
        "Setup Profil Pengguna",
      ],
    },
    {
      phase: "Exploration",
      icon: <MapPin size={16} />,
      steps: [
        "Beranda (Home) Layanan",
        "Lihat & Edit Profil",
        "Notifikasi & Histori",
      ],
    },
    {
      phase: "Booking",
      icon: <Navigation size={16} />,
      steps: [
        "Pilih Lokasi Jemput & Tujuan",
        "Pilih Layanan (Motor/Mobil/Logistik)",
        "Filter & Pilih Driver Manual",
        "Konfirmasi Pesanan & Pembayaran",
      ],
    },
    {
      phase: "In-Trip",
      icon: <Lock size={16} />,
      steps: [
        "Grid Map Live Tracking",
        "OTP Keberangkatan",
        "Estimasi Waktu & Biaya Real-Time",
      ],
    },
    {
      phase: "Post-Trip",
      icon: <Star size={16} />,
      steps: [
        "Ulasan & Rating Driver",
        "Riwayat Perjalanan",
        "Bayar / Konfirmasi Dompet LAJU",
      ],
    },
  ];

  return (
    <section id="define" className="py-24 px-6 relative overflow-hidden">
      {/* Diagonal line grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #FF7A00 0px, #FF7A00 1px, transparent 1px, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Orange glow bottom-left */}
      <div
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #FF7A00, transparent)" }}
      />
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF7A00]/20 border border-[#FF7A00]/30 text-white text-xs font-semibold mb-4 uppercase tracking-widest">
            Tahap Define
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Struktur & <span className="text-white">Alur Pengguna</span>
          </h2>
        </div>

        {/* Problem Statement */}
        <div
          className="relative p-8 rounded-2xl mb-12 overflow-hidden border border-[#0052CC]/40"
          style={{
            background: "linear-gradient(135deg, #0052CC15, #0052CC05)",
          }}
        >
          <div className="absolute top-4 left-6 text-white opacity-40">
            <Quote size={64} strokeWidth={1} />
          </div>
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Problem Statement
            </p>
            <blockquote className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
              "Pengguna layanan transportasi online membutuhkan{" "}
              <span className="text-white">kontrol lebih</span> dalam memilih
              driver mereka, disertai jaminan{" "}
              <span className="text-white">keamanan yang terverifikasi</span>,
              dan kemudahan bertransaksi tanpa hambatan melalui{" "}
              <span className="text-white">
                ekosistem pembayaran terintegrasi
              </span>
              ."
            </blockquote>
            <p className="mt-4 text-gray-400 text-sm">
              — Disintesis dari riset pengguna & competitive analysis
            </p>
          </div>
        </div>

        {/* Core User Journey */}
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <span
            className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold text-white"
            style={{ background: "#FF7A00" }}
          >
            ✦
          </span>
          Core User Journey
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {journeyStages.map((stage, idx) => (
            <div
              key={stage.phase}
              id={`journey-${stage.phase.toLowerCase()}`}
              className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300 hover:bg-white/8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#0052CC]/20 border border-[#0052CC]/40 flex items-center justify-center text-white">
                  {stage.icon}
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-medium">
                    Phase {idx + 1}
                  </span>
                  <h4 className="text-white font-bold text-sm">
                    {stage.phase}
                  </h4>
                </div>
              </div>
              <ul className="space-y-2">
                {stage.steps.map((step) => (
                  <li
                    key={step}
                    className="flex items-start gap-2 text-sm text-gray-400"
                  >
                    <ChevronRight
                      size={14}
                      className="text-white shrink-0 mt-0.5"
                    />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Ideate Section ───────────────────────────────────────────────────────────
function IdeateSection() {
  const embedItems = [
    {
      id: "brainstorming",
      number: "01",
      title: "Brainstorming Design",
      desc: "Eksplorasi ide awal menggunakan FigJam — memetakan pain points, crazy-8s, dan kemungkinan solusi secara visual sebelum difilter menjadi konsep terpilih.",
      accentColor: "#0052CC",
      accentLight: "#60A5FA",
      iframeSrc:
        "https://embed.figma.com/design/XF3j3uIAgfkrNqcWO36REq/Untitled?node-id=1066-4083&embed-host=share",
    },
    {
      id: "hifi-flow",
      number: "02",
      title: "High-Fidelity Flow",
      desc: "Alur lengkap desain high-fidelity — setiap layar dihubungkan menggunakan plugin Auto Flow untuk menunjukkan koneksi dan transisi antar screen secara menyeluruh.",
      accentColor: "#FF7A00",
      accentLight: "#FB923C",
      iframeSrc:
        "https://embed.figma.com/design/XF3j3uIAgfkrNqcWO36REq/Untitled?node-id=1040-5419&embed-host=share",
    },
    {
      id: "user-flow",
      number: "03",
      title: "User Flow",
      desc: "Diagram alur pengguna dari entry point hingga task completion — mencakup semua jalur utama (happy path) dan jalur alternatif yang mungkin ditempuh pengguna.",
      accentColor: "#0052CC",
      accentLight: "#60A5FA",
      iframeSrc:
        "https://embed.figma.com/design/XF3j3uIAgfkrNqcWO36REq/Untitled?node-id=1021-9609&embed-host=share",
    },
    {
      id: "information-architecture",
      number: "04",
      title: "Information Architecture",
      desc: "Struktur hierarki informasi aplikasi LAJU — memetakan navigasi utama, sub-menu, dan hubungan antar fitur untuk memastikan pengguna selalu tahu posisi mereka.",
      accentColor: "#FF7A00",
      accentLight: "#FB923C",
    },
    {
      id: "ui-kit",
      number: "05",
      title: "UI Kit & Design System",
      desc: "Komponen library lengkap LAJU — mencakup color palette, typography scale, icon set, button variants, card components, dan semua atomic elements yang digunakan secara konsisten.",
      accentColor: "#0052CC",
      accentLight: "#60A5FA",
      iframeSrc:
        "https://embed.figma.com/design/XF3j3uIAgfkrNqcWO36REq/Untitled?node-id=1070-4097&embed-host=share",
    },
  ];

  return (
    <section id="ideate" className="py-24 px-6 relative overflow-hidden">
      {/* Crosshatch grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,82,204,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,82,204,0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Blue glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #0052CC, transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0052CC]/20 border border-[#0052CC]/30 text-white text-xs font-semibold mb-4 uppercase tracking-widest">
            Tahap Ideate
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Desain & <span className="text-white">Ideation Process</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
            Dari brainstorming liar hingga sistem desain yang rapi — berikut
            adalah{" "}
            <span className="text-white font-semibold">5 artefak utama</span>{" "}
            yang dihasilkan pada tahap ideasi LAJU menggunakan Figma & FigJam.
          </p>
        </div>

        {/* 5 Figma Embed Items */}
        <div className="flex flex-col gap-16">
          {embedItems.map((item, index) => (
            <div key={item.id} id={`ideate-${item.id}`}>
              {/* Item Header */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-extrabold"
                  style={{
                    backgroundColor: `${item.accentColor}20`,
                    border: `1px solid ${item.accentColor}40`,
                    color: "#FFFFFF",
                  }}
                >
                  {item.number}
                </div>
                <div className="flex-1 pt-1">
                  <h3
                    className="text-xl md:text-2xl font-bold mb-2"
                    style={{ color: "#FFFFFF" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Figma Embed Placeholder */}
              {item.iframeSrc ? (
                <div className="w-full aspect-video rounded-2xl overflow-hidden bg-[#232323] border border-white/10 p-4 md:p-6 lg:p-8">
                  <iframe
                    style={{ border: "none" }}
                    className="w-full h-full rounded-xl"
                    src={item.iframeSrc}
                    allowFullScreen
                    title={`Figma Embed ${item.title}`}
                  ></iframe>
                </div>
              ) : (
                <div
                  id={`embed-${item.id}`}
                  className="aspect-video rounded-2xl flex flex-col items-center justify-center border-2 border-dashed transition-all duration-300 cursor-default group"
                  style={{
                    backgroundColor: "#232323",
                    borderColor: `${item.accentColor}30`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${item.accentColor}60`;
                    e.currentTarget.style.backgroundColor = `${item.accentColor}08`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${item.accentColor}30`;
                    e.currentTarget.style.backgroundColor = "#232323";
                  }}
                >
                  <div className="text-center px-6">
                    <div
                      className="w-16 h-16 rounded-2xl border-2 border-dashed flex items-center justify-center mx-auto mb-4 transition-colors duration-300"
                      style={{
                        borderColor: `${item.accentColor}40`,
                        color: "#FFFFFF",
                      }}
                    >
                      <ExternalLink size={26} />
                    </div>
                    <p
                      className="font-semibold text-base mb-2"
                      style={{ color: "#FFFFFF" }}
                    >
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Ganti dengan{" "}
                      <code
                        className="px-2 py-0.5 rounded text-xs"
                        style={{
                          color: "#FFFFFF",
                          backgroundColor: `${item.accentColor}15`,
                        }}
                      >
                        &lt;iframe src="..."&gt;
                      </code>{" "}
                      dari Figma embed link
                    </p>
                  </div>
                </div>
              )}

              {/* Separator (except last) */}
              {index < embedItems.length - 1 && (
                <div
                  className="mt-16 h-px w-full"
                  style={{
                    background: `linear-gradient(to right, transparent, ${item.accentColor}30, transparent)`,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Prototype Section ────────────────────────────────────────────────────────
function PrototypeSection() {
  return (
    <section id="prototype" className="py-24 px-6 relative overflow-hidden">
      {/* Horizontal stripes grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #FF7A00 0px, #FF7A00 1px, transparent 1px, transparent 40px)",
        }}
      />
      {/* Subtle vertical accents */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #FF7A00 0px, #FF7A00 1px, transparent 1px, transparent 120px)",
        }}
      />
      {/* Orange glow top-left */}
      <div
        className="absolute -top-48 -left-24 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #FF7A00, transparent)" }}
      />
      {/* Blue glow bottom-right */}
      <div
        className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #0052CC, transparent)" }}
      />
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF7A00]/20 border border-[#FF7A00]/30 text-white text-xs font-semibold mb-4 uppercase tracking-widest">
            Tahap Prototype
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            <span className="text-white">Prototype</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
            Wireframe ditransformasi menjadi desain visual akhir menggunakan
            palet{" "}
            <span className="text-white font-semibold">Dynamic Trust</span>{" "}
            dengan basis{" "}
            <span className="font-mono text-white">#1E1E1E Dark Mode</span>.
            Setiap elemen dirancang untuk memadukan estetika modern dengan
            usability yang intuitif.
          </p>
        </div>

        {/* Design Decisions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {[
            {
              label: "Dark Mode (#1E1E1E)",
              desc: "Latar belakang gelap elegan mengurangi kelelahan mata dan memberikan kesan premium tech-startup.",
              color: "#60A5FA",
            },
            {
              label: "Deep Tech Blue (#0052CC)",
              desc: "Warna aksen utama pada navigasi, rute peta, dan elemen keamanan untuk membangun kepercayaan.",
              color: "#0052CC",
            },
            {
              label: "Warm Tangerine (#FF7A00)",
              desc: "Warna CTA dan elemen humanis seperti rating bintang — menciptakan rasa hangat dan antusias.",
              color: "#FFFFFF",
            },
            {
              label: "Plus Jakarta Sans",
              desc: "Tipografi modern dengan bobot beragam untuk hierarchy teks yang jelas dan keterbacaan optimal.",
              color: "#a855f7",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/8 transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center"
                style={{
                  backgroundColor: `${item.color}25`,
                  border: `1px solid ${item.color}50`,
                }}
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">
                  {item.label}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Figma Prototype Embed */}
        <div className="relative">
          <div className="relative w-full h-[600px] md:h-[800px] rounded-2xl overflow-hidden bg-[#232323] border border-white/10 p-4 md:p-6 lg:p-8">
            <iframe
              style={{ border: "none" }}
              className="w-full h-full rounded-xl"
              src="https://embed.figma.com/proto/XF3j3uIAgfkrNqcWO36REq/Untitled?node-id=1040-5557&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1040%3A5557&embed-host=share"
              allowFullScreen
              title="Figma Embed High-Fidelity Flow"
            ></iframe>
          </div>

          {/* Full Screen Link */}
          <div className="mt-4 flex items-center justify-center">
            <a
              href="#"
              id="fullscreen-prototype-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white hover:text-white font-semibold transition-colors duration-200 group"
            >
              <ExternalLink
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
              Buka Full Screen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Test & Validation Section ────────────────────────────────────────────────
function TestSection() {
  const testResults = [
    {
      task: "Login dengan Verifikasi OTP",
      status: "success",
      statusLabel: "Berhasil",
      completion: "100%",
      note: "Semua pengguna berhasil dalam ≤ 2 menit. OTP flow dianggap intuitif dan cepat.",
    },
    {
      task: "Memilih Promo & Menerapkan Kode Diskon",
      status: "warning",
      statusLabel: "Perlu Perbaikan",
      completion: "75%",
      note: "2 dari 8 pengguna kesulitan menemukan menu promo. Perlu penambahan visual cue yang lebih menonjol.",
    },
    {
      task: "Memberikan Ulasan Bintang 5 Setelah Perjalanan",
      status: "success",
      statusLabel: "Berhasil",
      completion: "100%",
      note: "Post-trip flow sangat smooth. Rating stars langsung accessible dari layar ringkasan perjalanan.",
    },
    {
      task: "Top-Up Dompet LAJU",
      status: "success",
      statusLabel: "Berhasil",
      completion: "88%",
      note: "7 dari 8 pengguna berhasil. 1 pengguna butuh bantuan karena kurang familiar dengan e-wallet.",
    },
    {
      task: "Pilih Driver Manual Berdasarkan Rating",
      status: "success",
      statusLabel: "Berhasil",
      completion: "100%",
      note: "Fitur paling disukai! Pengguna sangat antusias dengan kemampuan memilih driver sendiri.",
    },
  ];

  return (
    <section id="test" className="py-24 px-6 relative overflow-hidden">
      {/* Radial dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #60A5FA 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
          backgroundPosition: "18px 18px",
        }}
      />
      {/* Blue glow top-right */}
      <div
        className="absolute -top-20 right-0 w-96 h-96 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #0052CC, transparent)" }}
      />
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF7A00]/20 border border-[#FF7A00]/30 text-white text-xs font-semibold mb-4 uppercase tracking-widest">
            Tahap Test & Validasi
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Hasil <span className="text-white">Pengujian</span> Pengguna
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
            Pengujian usability dilakukan kepada{" "}
            <span className="text-white font-semibold">8 pengguna target</span>{" "}
            (mahasiswa & profesional muda, 18–30 tahun) dengan skenario tugas
            berbasis task-based testing dalam sesi moderasi selama ±45 menit per
            sesi.
          </p>
        </div>

        {/* Test Results Table */}
        <div className="overflow-x-auto mb-12 rounded-2xl border border-white/10">
          <table className="w-full" id="test-results-table">
            <thead>
              <tr
                className="border-b border-white/10"
                style={{ background: "#2A2A2A" }}
              >
                <th className="text-left px-6 py-4 text-gray-400 font-semibold text-sm w-8">
                  #
                </th>
                <th className="text-left px-4 py-4 text-gray-400 font-semibold text-sm">
                  Task / Skenario
                </th>
                <th className="text-left px-4 py-4 text-gray-400 font-semibold text-sm">
                  Status
                </th>
                <th className="text-left px-4 py-4 text-gray-400 font-semibold text-sm">
                  Completion
                </th>
                <th className="text-left px-4 py-4 text-gray-400 font-semibold text-sm">
                  Catatan Temuan
                </th>
              </tr>
            </thead>
            <tbody>
              {testResults.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-gray-500 text-sm font-medium">
                    {idx + 1}
                  </td>
                  <td className="px-4 py-4 text-white text-sm font-medium min-w-48">
                    {row.task}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                        row.status === "success"
                          ? "bg-[#0052CC]/20 text-white border border-[#0052CC]/30"
                          : "bg-[#FF7A00]/20 text-white border border-[#FF7A00]/30"
                      }`}
                    >
                      {row.status === "success" ? (
                        <CheckCircle2 size={12} />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-[#FB923C]" />
                      )}
                      {row.statusLabel}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: row.completion,
                            backgroundColor:
                              row.status === "success" ? "#60A5FA" : "#FB923C",
                          }}
                        />
                      </div>
                      <span className="text-xs font-bold text-gray-300">
                        {row.completion}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-400 text-sm leading-relaxed min-w-64">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* User Feedback Quote */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              quote:
                '"Fitur pilih driver-nya itu game changer banget! Akhirnya ada aplikasi yang ngerti kebutuhan aku sebagai pengguna wanita yang sering naik ojol malem-malem."',
              name: "Responden A",
              role: "Mahasiswi, 21 tahun",
              stars: 5,
            },
            {
              quote:
                '"Tampilannya clean banget dan dark mode-nya enak di mata. Navigasi antar menu juga udah sangat intuitif, gak perlu mikir panjang buat nemuin fitur yang dicari."',
              name: "Responden B",
              role: "Profesional, 27 tahun",
              stars: 5,
            },
          ].map((feedback, idx) => (
            <div
              key={idx}
              id={`feedback-quote-${idx + 1}`}
              className="relative p-6 rounded-2xl border border-[#0052CC]/20 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0052CC10, #0052CC05)",
              }}
            >
              <Quote
                size={40}
                className="text-white/20 absolute top-4 right-4"
                strokeWidth={1}
              />
              <div className="flex mb-3">
                {[...Array(feedback.stars)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-white fill-[#FF7A00]"
                  />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic mb-4">
                {feedback.quote}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #0052CC, #FF7A00)",
                  }}
                >
                  {feedback.name.charAt(feedback.name.length - 1)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {feedback.name}
                  </p>
                  <p className="text-gray-500 text-xs">{feedback.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      id="footer"
      className="py-16 px-6 border-t border-white/10 relative overflow-hidden"
    >
      {/* Subtle large grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Gradient fade overlay at top */}
      <div
        className="absolute top-0 inset-x-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #1E1E1E, transparent)",
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        {/* Top: Creator Info */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Left: Brand + Creator */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logoImage}
                alt="LAJU Logo"
                className="h-10 md:h-12 object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Studi kasus desain UI/UX untuk aplikasi ride-hailing & logistik
              dengan pendekatan human-centric design.
            </p>
          </div>

          {/* Right: Creator Card */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm min-w-72">
            <p className="text-xs text-gray-500 uppercase font-semibold tracking-widest mb-3">
              Case Study by
            </p>
            <p className="text-white font-bold text-lg mb-1">
              Ahmad Hakim Itsnaini (Sani)
            </p>
            <p className="text-gray-400 text-sm">Teknologi Informasi</p>
            <p className="text-white text-sm font-medium">
              Politeknik Negeri Madiun
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="#"
                id="social-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#0052CC] hover:bg-[#0052CC]/20 transition-all duration-300"
                title="LinkedIn"
              >
                <Link2 size={16} />
              </a>
              <a
                href="#"
                id="social-github"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all duration-300"
                title="GitHub / Dribbble"
              >
                <GitBranch size={16} />
              </a>
              <a
                href="mailto:sani@example.com"
                id="social-email"
                className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF7A00] hover:bg-[#FF7A00]/20 transition-all duration-300"
                title="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2024 Ahmad Hakim Itsnaini (Sani) · All rights reserved.
          </p>
          <p className="text-gray-400 text-sm font-medium flex items-center gap-2">
            Designed with <span className="text-white text-base">❤️</span> using{" "}
            <span className="text-white font-semibold">Figma</span> &{" "}
            <span className="font-semibold text-white">React</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div
      style={{
        backgroundColor: "transparent",
        minHeight: "100vh",
        color: "#F3F4F6",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <DefineSection />
        <IdeateSection />
        <PrototypeSection />
        <TestSection />
      </main>
      <Footer />
    </div>
  );
}
