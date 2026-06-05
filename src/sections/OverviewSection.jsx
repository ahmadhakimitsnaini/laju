import { Shield, Users, Wallet } from "lucide-react";
import { FadeInWhenVisible, StaggerWrap, StaggerText, staggerContainer, staggerItem, m } from "../components/ui/Animations";
import SectionBadge from "../components/ui/SectionBadge";

export default function OverviewSection() {
  const pillars = [
    {
      id: "pillar-trust",
      icon: <Shield size={28} className="text-[#0052CC]" />,
      accentColor: "#0052CC",
      title: "Dynamic Trust",
      subtitle: "Keamanan & Transparansi",
      desc: "Verifikasi OTP dua-arah, real-time GPS tracking, dan riwayat perjalanan yang transparan membangun kepercayaan antara penumpang dan driver.",
      tags: ["OTP Verification", "Live Tracking", "Trip History"],
    },
    {
      id: "pillar-empowerment",
      icon: <Users size={28} className="text-[#F177A4]" />,
      accentColor: "#F177A4",
      title: "User Empowerment",
      subtitle: "Kontrol Penuh di Tangan Anda",
      desc: "Bebas memilih driver berdasarkan profil, rating bintang, dan riwayat perjalanan. Pengguna memegang kendali atas pengalaman perjalanan mereka.",
      tags: ["Pilih Driver", "Rating System", "Multi-Service"],
    },
    {
      id: "pillar-fintech",
      icon: <Wallet size={28} className="text-[#0052CC]" />,
      accentColor: "#0052CC",
      title: "Seamless Fintech",
      subtitle: "Ekosistem Pembayaran Terintegrasi",
      desc: "Dompet LAJU mengintegrasikan pembayaran cashless, manajemen saldo, histori transaksi, dan top-up dalam satu ekosistem yang mulus.",
      tags: ["Dompet LAJU", "Cashless Pay", "Top-Up"],
    },
  ];

  return (
    <section id="overview" className="py-24 px-6 relative overflow-hidden">

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <StaggerWrap>
          <div className="mb-16">
            <StaggerText>
              <SectionBadge variant="blue">Tahap Empathize</SectionBadge>
            </StaggerText>
            <StaggerText>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Mengapa <span className="text-[#0052CC]">LAJU</span>?
            </h2>
            </StaggerText>
            <div className="flex flex-col md:flex-row gap-6 max-w-4xl">
              <StaggerText className="flex-1 p-6 rounded-3xl glass-card text-gray-700 leading-relaxed">
                <p>
                  Riset menunjukkan bahwa pengguna layanan ride-hailing sering
                  merasa tidak berdaya — driver ditugaskan secara acak tanpa
                  pilihan, meninggalkan rasa ketidakamanan terutama bagi
                  penumpang wanita dan perjalanan malam. LAJU hadir untuk
                  mengubah paradigma ini.
                </p>
              </StaggerText>
              <StaggerText className="flex-1 p-6 rounded-3xl glass-card text-gray-700 leading-relaxed">
                <p className="text-gray-700 leading-relaxed">
                  Selain itu, ketidaktransparanan biaya dan ketergantungan pada
                  uang tunai menciptakan gesekan dalam pengalaman pengguna.
                  Fitur{" "}
                  <span className="text-[#0052CC] font-semibold">Dompet LAJU</span>{" "}
                  hadir sebagai solusi ekosistem pembayaran yang seamless dan
                  terpercaya.
                </p>
              </StaggerText>
            </div>
          </div>
        </StaggerWrap>

        {/* Figma Embed Placeholder */}
        <FadeInWhenVisible delay={0.1}>
          <div className="max-w-4xl mb-16 rounded-3xl overflow-hidden border border-white/20 bg-[#232323] p-4 md:p-6 lg:p-8 shadow-xl shadow-black/10">
            <iframe
              style={{ border: "none" }}
              className="w-full aspect-video rounded-xl"
              src="https://embed.figma.com/design/XF3j3uIAgfkrNqcWO36REq/Untitled?node-id=1063-4081&embed-host=share"
              allowFullScreen
              title="Figma Embed Empathize"
            ></iframe>
          </div>
        </FadeInWhenVisible>

        {/* Pillars Grid */}
        <m.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {pillars.map((pillar) => (
            <m.div
              key={pillar.id}
              id={pillar.id}
              className="group relative p-6 rounded-3xl glass-card cursor-pointer overflow-hidden"
              variants={staggerItem}
            >
              {/* Accent glow background */}
              <div
                className="absolute -top-10 -right-10 w-36 h-36 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl pointer-events-none"
                style={{ backgroundColor: pillar.accentColor }}
              />

              {/* Icon Container */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: `linear-gradient(135deg, ${pillar.accentColor}18 0%, ${pillar.accentColor}08 100%)`,
                  border: `1px solid ${pillar.accentColor}30`,
                }}
              >
                {pillar.icon}
              </div>

              {/* Subtitle */}
              <p className="text-xs font-bold uppercase tracking-widest mb-1 text-gray-400">
                {pillar.subtitle}
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {pillar.desc}
              </p>

              {/* Stats Divider Row */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="glass-tag px-3 py-1 rounded-full text-xs font-semibold text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
