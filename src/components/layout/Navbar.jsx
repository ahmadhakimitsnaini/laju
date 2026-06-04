import { useState, useEffect } from "react";
import logoImage from "../../assets/logo.webp";
import { ArrowRight, Menu, X, ChevronRight } from "lucide-react";
import GradientButton from "../ui/GradientButton";

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#define", label: "Define" },
  { href: "#ideate", label: "Ideate" },
  { href: "#prototype", label: "Prototype" },
  { href: "#test", label: "Validasi" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map(link => document.querySelector(link.href)).filter(Boolean);
      let current = "";
      
      // Calculate offset based on scroll position + a threshold
      // 150px allows the section to become active just as it approaches the top
      for (const section of sections) {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id");
        }
      }
      
      // Special case: highlight first section when at the very top (e.g. hero area)
      if (window.scrollY < 100) {
        current = ""; // Atau isi dengan id hero jika ada
      }

      setActiveSection(current);
    };

    // Run initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      // 1. Perbaikan Penempatan Scroll (Offset)
      // Hitung posisi dari top dikurangi tinggi navbar (sekitar 80px)
      const navbarHeight = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#F4F4F0]/80 border-b border-white/40 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* 2. Penyesuaian Tinggi Navbar (Shrink on Scroll) */}
      <div 
        className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-2" : "py-4 md:py-5"
        }`}
      >
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
            className={`object-contain transition-all duration-300 ${
              scrolled ? "h-7 md:h-8" : "h-8 md:h-10"
            }`}
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            // 3. Highlight Menu Aktif
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className={`text-sm font-medium transition-all duration-200 relative group flex items-center ${
                    isActive ? "text-black" : "text-gray-700 hover:text-black"
                  }`}
                >
                  {link.label}
                  <span 
                    className={`absolute -bottom-1.5 left-0 h-0.5 bg-[#FF7A00] transition-all duration-300 rounded-full ${
                      isActive 
                        ? "w-full shadow-[0_0_8px_#FF7A00]" // Menambahkan efek glow tipis pada menu aktif
                        : "w-0 group-hover:w-full"
                    }`} 
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA Button Desktop */}
        <GradientButton
          href="#prototype"
          onClick={() => handleNav("#prototype")}
          className={`hidden md:flex px-4 rounded-lg font-semibold transition-all duration-300 ${
             scrolled ? "py-1.5 text-xs" : "py-2 text-sm"
          }`}
        >
          Lihat Prototype <ArrowRight size={14} className="ml-1" />
        </GradientButton>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden text-gray-700 hover:text-black transition-colors p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden backdrop-blur-md bg-[#F4F4F0]/95 border-t border-white/40 px-6 py-4 absolute w-full shadow-lg">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className={`text-base font-medium transition-colors flex items-center gap-2 ${
                      isActive ? "text-[#FF7A00]" : "text-gray-700 hover:text-black"
                    }`}
                  >
                    <ChevronRight size={16} className={isActive ? "text-[#FF7A00]" : "text-black/50"} />
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2">
              <GradientButton
                href="#prototype"
                onClick={() => handleNav("#prototype")}
                className="w-full py-3 rounded-lg text-sm font-semibold justify-center flex items-center"
              >
                Lihat Prototype <ArrowRight size={14} className="ml-2" />
              </GradientButton>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
