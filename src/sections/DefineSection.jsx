import { Smartphone, MapPin, Navigation, Lock, Star, Quote, ChevronRight } from "lucide-react";
import { FadeInWhenVisible } from "../components/ui/Animations";

export default function DefineSection() {
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
        <FadeInWhenVisible>
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF7A00]/20 border border-[#FF7A00]/30 text-white text-xs font-semibold mb-4 uppercase tracking-widest">
              Tahap Define
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Struktur & <span className="text-white">Alur Pengguna</span>
            </h2>
          </div>
        </FadeInWhenVisible>

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
