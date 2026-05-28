import { ExternalLink } from "lucide-react";
import { FadeInWhenVisible } from "../components/ui/Animations";

export default function IdeateSection() {
  const embedItems = [
    {
      id: "brainstorming",
      number: "01",
      title: "Crazy 8's & Brainstorming",
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
        <FadeInWhenVisible>
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
        </FadeInWhenVisible>

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
