import { ExternalLink } from "lucide-react";
import { FadeInWhenVisible } from "../components/ui/Animations";
import SectionBadge from "../components/ui/SectionBadge";

export default function PrototypeSection() {
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
        <FadeInWhenVisible>
          <div className="mb-12">
            <SectionBadge variant="orange">Tahap Prototype</SectionBadge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
              <span className="text-[#0052CC]">Prototype</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              Wireframe ditransformasi menjadi desain visual akhir menggunakan
              palet{" "}
              <span className="text-gray-800 font-semibold">Dynamic Trust</span>{" "}
              dengan basis{" "}
              <span className="font-mono text-[#0052CC] bg-[#0052CC]/8 px-1.5 py-0.5 rounded-md text-sm">#1E1E1E Dark Mode</span>.
              Setiap elemen dirancang untuk memadukan estetika modern dengan
              usability yang intuitif.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Design Decisions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {[
            {
              label: "Dark Mode (#1E1E1E)",
              desc: "Latar belakang gelap elegan mengurangi kelelahan mata dan memberikan kesan premium tech-startup.",
              color: "#0052CC",
            },
            {
              label: "Deep Tech Blue (#0052CC)",
              desc: "Warna aksen utama pada navigasi, rute peta, dan elemen keamanan untuk membangun kepercayaan.",
              color: "#0052CC",
            },
            {
              label: "Warm Tangerine (#FF7A00)",
              desc: "Warna CTA dan elemen humanis seperti rating bintang — menciptakan rasa hangat dan antusias.",
              color: "#FF7A00",
            },
            {
              label: "Roobert Font",
              desc: "Tipografi modern dengan bobot beragam untuk hierarchy teks yang jelas dan keterbacaan optimal.",
              color: "#0052CC",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 p-5 rounded-3xl glass-card cursor-pointer"
            >
              <div
                className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${item.color}18 0%, ${item.color}08 100%)`,
                  border: `1px solid ${item.color}30`,
                }}
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-sm mb-1">
                  {item.label}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Figma Prototype Embed */}
        <div className="relative flex flex-col items-center">
          {/* Wide landscape container — lets Figma's native device frame render naturally */}
          <div
            className="relative mt-6 mb-6 w-full mx-auto overflow-hidden rounded-2xl shadow-xl"
            style={{
              maxWidth: "1000px",
              height: "700px",
              background: "#1E1E1E",
            }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              style={{
                border: "none",
              }}
              src="https://embed.figma.com/proto/XF3j3uIAgfkrNqcWO36REq/Untitled?node-id=1040-5557&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1040%3A5557&embed-host=share"
              allowFullScreen
              title="Figma Embed High-Fidelity Flow"
            ></iframe>
          </div>

          {/* Full Screen CTA Button */}
          <div className="mt-2 flex items-center justify-center">
            <a
              href="https://www.figma.com/proto/XF3j3uIAgfkrNqcWO36REq/Untitled?node-id=1040-5557&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1040%3A5557"
              id="fullscreen-prototype-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #0052CC 0%, #0052CC 100%)",
                color: "#ffffff",
                boxShadow: "0 4px 20px rgba(0,82,204,0.3)",
              }}
            >
              <ExternalLink size={18} />
              Buka di Figma (Full Screen)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
