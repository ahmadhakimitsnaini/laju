import logoImage from "../../assets/logo.png";
import { Link2, GitBranch, Mail } from "lucide-react";

export default function Footer() {
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
