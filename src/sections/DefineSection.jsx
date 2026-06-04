import { Smartphone, MapPin, Navigation, Lock, Star, Quote, ChevronRight } from "lucide-react";
import { FadeInWhenVisible } from "../components/ui/Animations";
import SectionBadge from "../components/ui/SectionBadge";

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

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <FadeInWhenVisible>
          <div className="mb-12">
            <SectionBadge variant="orange">Tahap Define</SectionBadge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Struktur & <span className="text-[#FF7A00]">Alur Pengguna</span>
            </h2>
          </div>
        </FadeInWhenVisible>

        {/* Problem Statement */}
        <div className="relative p-8 rounded-3xl mb-12 overflow-hidden glass-card-blue">
          <div className="absolute top-4 left-6 text-[#0052CC] opacity-10">
            <Quote size={64} strokeWidth={1} />
          </div>
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0052CC] mb-4">
              Problem Statement
            </p>
            <blockquote className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
              "Pengguna layanan transportasi online membutuhkan{" "}
              <span className="text-[#0052CC] font-bold">kontrol lebih</span> dalam memilih
              driver mereka, disertai jaminan{" "}
              <span className="text-[#0052CC] font-bold">keamanan yang terverifikasi</span>,
              dan kemudahan bertransaksi tanpa hambatan melalui{" "}
              <span className="text-[#FF7A00] font-bold">
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
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
            style={{ background: "linear-gradient(135deg, #FF7A00, #FF9A40)" }}
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
              className="p-5 rounded-3xl glass-card cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[#0052CC]"
                  style={{ background: "linear-gradient(135deg, #0052CC18 0%, #0052CC08 100%)", border: "1px solid #0052CC30" }}
                >
                  {stage.icon}
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                    Phase {idx + 1}
                  </span>
                  <h4 className="text-gray-900 font-bold text-sm">
                    {stage.phase}
                  </h4>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-3" />
              <ul className="space-y-2">
                {stage.steps.map((step) => (
                  <li
                    key={step}
                    className="flex items-start gap-2 text-sm text-gray-500"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[#0052CC] shrink-0 mt-0.5"
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
