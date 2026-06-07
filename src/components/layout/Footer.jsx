import logoImage from "../../assets/logo.webp";
import { Link2, GitBranch, Mail } from "lucide-react";
import creatorProfil from "../../assets/mainPage/creator_profil.webp";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="py-16 px-6 border-t border-white/40 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] relative overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Top: Creator Info */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Left: Brand + Creator */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logoImage}
                alt="LAJU Logo"
                loading="lazy"
                decoding="async"
                className="h-10 md:h-12 object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Studi kasus desain UI/UX
            </p>
          </div>

          {/* Right: Creator Card */}
          <div className="p-6 rounded-3xl glass-card min-w-80 cursor-default flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <img
              src={creatorProfil}
              alt="Ahmad Hakim Itsnaini"
              className="w-24 sm:w-28 h-auto rounded-2xl object-contain shadow-sm border border-white/60 shrink-0"
            />
            <div className="flex flex-col text-center sm:text-left w-full">
              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-2">
                Case Study by
              </p>
              <p className="text-gray-900 font-bold text-lg mb-0.5 leading-tight">
                Ahmad Hakim Itsnaini
              </p>
              <p className="text-gray-500 text-sm">Teknologi Informasi</p>
              <p className="text-gray-700 text-sm font-semibold mb-4">
                Politeknik Negeri Madiun
              </p>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent sm:from-gray-200 sm:via-gray-100 sm:to-transparent mb-4" />

              {/* Social Links */}
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <a
                  href="https://www.linkedin.com/in/ahmad-hakim-itsnaini-013303337/"
                  id="social-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="circle-icon-btn w-9 h-9 flex items-center justify-center text-gray-500 hover:text-[#0052CC] cursor-pointer"
                  title="LinkedIn"
                >
                  <Link2 size={16} />
                </a>
                <a
                  href="https://github.com/ahmadhakimitsnaini"
                  id="social-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="circle-icon-btn w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-900 cursor-pointer"
                  title="GitHub / Dribbble"
                >
                  <GitBranch size={16} />
                </a>
                <a
                  href="mailto:ahmadhakimitsnaini@gmail.com"
                  id="social-email"
                  className="circle-icon-btn w-9 h-9 flex items-center justify-center text-gray-500 hover:text-[#0052CC] cursor-pointer"
                  title="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 Ahmad Hakim Itsnaini (Sani) · All rights reserved.
          </p>
          {/* <p className="text-gray-500 text-sm font-medium flex items-center gap-2">
            Designed with <span className="text-red-400 text-base">❤️</span> using{" "}
            <span className="text-gray-700 font-semibold">Figma</span> &{" "}
            <span className="font-semibold text-gray-700">React</span>
          </p> */}
        </div>
      </div>
    </footer>
  );
}
