import { useState, useEffect } from "react";
import logoImage from "../../assets/logo.png";
import { ArrowRight, Menu, X, ChevronRight } from "lucide-react";
import GradientButton from "../ui/GradientButton";

export default function Navbar() {
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
        <GradientButton
          href="#prototype"
          onClick={() => handleNav("#prototype")}
          className="hidden md:flex px-4 py-2 rounded-lg text-sm font-semibold"
        >
          Lihat Prototype <ArrowRight size={14} />
        </GradientButton>

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
              <GradientButton
                href="#prototype"
                onClick={() => handleNav("#prototype")}
                className="w-full py-3 rounded-lg text-sm font-semibold"
              >
                Lihat Prototype <ArrowRight size={14} />
              </GradientButton>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
