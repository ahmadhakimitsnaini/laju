import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { FadeInWhenVisible } from "../components/ui/Animations";
import SectionBadge from "../components/ui/SectionBadge";

export default function IdeateSection() {
  const [activeTab, setActiveTab] = useState("brainstorming");
  const [iframeLoaded, setIframeLoaded] = useState(false);


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

  const activeItem = embedItems.find((item) => item.id === activeTab) || embedItems[0];

  return (
    <section id="ideate" className="py-24 px-6 relative overflow-hidden">


      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <FadeInWhenVisible>
          <div className="mb-14">
            <SectionBadge variant="blue">Tahap Ideate</SectionBadge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Desain & <span className="text-[#0052CC]">Ideation Process</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              Dari brainstorming liar hingga sistem desain yang rapi — berikut
              adalah{" "}
              <span className="text-gray-800 font-semibold">5 artefak utama</span>{" "}
              yang dihasilkan pada tahap ideasi LAJU menggunakan Figma & FigJam.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Layout Navigasi & Konten */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Kolom Kiri: Navigasi Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {embedItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIframeLoaded(false);
                  }}
                  className={`flex flex-col text-left px-5 py-4 rounded-3xl transition-all duration-300 border ${
                    isActive
                      ? "glass-card shadow-lg translate-x-2"
                      : "bg-transparent border-transparent hover:bg-white/60 hover:shadow-sm"
                  }`}
                  style={{
                    borderColor: isActive ? `${item.accentColor}50` : "transparent",
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span 
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-extrabold transition-colors duration-300 ${
                        isActive ? "text-black" : "text-black0"
                      }`}
                      style={{
                        backgroundColor: isActive ? `${item.accentColor}30` : "transparent",
                        border: `1px solid ${isActive ? item.accentColor : "transparent"}`,
                      }}
                    >
                      {item.number}
                    </span>
                    <span 
                      className={`font-semibold text-lg transition-colors duration-300 ${
                        isActive ? "text-black" : "text-gray-600"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                  <p 
                    className={`text-sm transition-colors duration-300 line-clamp-2 ${
                      isActive ? "text-gray-700" : "text-black0"
                    }`}
                  >
                    {item.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Kolom Kanan: Area Konten iFrame */}
          <div className="lg:col-span-8 flex flex-col">
            <FadeInWhenVisible key={activeItem.id}>
              {/* Header Item Aktif */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-extrabold shadow-lg transition-colors duration-500"
                  style={{
                    backgroundColor: `${activeItem.accentColor}20`,
                    border: `1px solid ${activeItem.accentColor}40`,
                    color: "#FFFFFF",
                  }}
                >
                  {activeItem.number}
                </div>
                <div className="flex-1 pt-1">
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-3"
                    style={{ color: "#FFFFFF" }}
                  >
                    {activeItem.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {activeItem.desc}
                  </p>
                </div>
              </div>

              {/* Tempat iFrame / Placeholder */}
              {activeItem.iframeSrc ? (
                <div className="relative w-full aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden bg-[#181818] border border-white/20 p-2 md:p-4 shadow-xl shadow-black/10">
                  
                  {/* Skeleton Loading State */}
                  {!iframeLoaded && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#181818]">
                      <div 
                        className="w-12 h-12 border-4 border-gray-700 rounded-full animate-spin mb-4" 
                        style={{ borderTopColor: activeItem.accentColor }} 
                      />
                      <p className="text-gray-600 font-medium animate-pulse">Memuat Figma Workspace...</p>
                    </div>
                  )}

                  <iframe
                    onLoad={() => setIframeLoaded(true)}
                    style={{ border: "none" }}
                    className={`w-full h-full rounded-2xl transition-opacity duration-700 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                    src={activeItem.iframeSrc}
                    allowFullScreen
                    title={`Figma Embed ${activeItem.title}`}
                  ></iframe>
                </div>
              ) : (
                <div
                  className="w-full aspect-[4/3] md:aspect-video rounded-3xl flex flex-col items-center justify-center border-2 border-dashed transition-all duration-300 cursor-default group"
                  style={{
                    backgroundColor: "#181818",
                    borderColor: `${activeItem.accentColor}30`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${activeItem.accentColor}60`;
                    e.currentTarget.style.backgroundColor = `${activeItem.accentColor}08`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${activeItem.accentColor}30`;
                    e.currentTarget.style.backgroundColor = "#181818";
                  }}
                >
                  <div className="text-center px-6">
                    <div
                      className="w-20 h-20 rounded-full border-2 border-dashed flex items-center justify-center mx-auto mb-6 transition-colors duration-300 bg-[#232323]"
                      style={{
                        borderColor: `${activeItem.accentColor}40`,
                        color: activeItem.accentLight,
                      }}
                    >
                      <ExternalLink size={32} />
                    </div>
                    <p
                      className="text-2xl font-bold mb-3"
                      style={{ color: "#FFFFFF" }}
                    >
                      Visual Sedang Dipersiapkan
                    </p>
                    <p className="text-black0 text-base max-w-md mx-auto">
                      Representasi visual untuk bagian Arsitektur Informasi ini sedang dalam tahap penyelesaian dan akan segera tersedia.
                    </p>
                  </div>
                </div>
              )}
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
}
