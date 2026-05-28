import { ExternalLink } from "lucide-react";
import { FadeInWhenVisible } from "../components/ui/Animations";

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
        </FadeInWhenVisible>

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
