import { Shield, Users, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInWhenVisible, StaggerWrap, StaggerText, staggerContainer, staggerItem } from "../components/ui/Animations";

export default function OverviewSection() {
  const pillars = [
    {
      id: "pillar-trust",
      icon: <Shield size={28} className="text-white" />,
      color: "#0052CC",
      colorLight: "#60A5FA",
      title: "Dynamic Trust",
      subtitle: "Keamanan & Transparansi",
      desc: "Verifikasi OTP dua-arah, real-time GPS tracking, dan riwayat perjalanan yang transparan membangun kepercayaan antara penumpang dan driver.",
      tags: ["OTP Verification", "Live Tracking", "Trip History"],
    },
    {
      id: "pillar-empowerment",
      icon: <Users size={28} className="text-white" />,
      color: "#FFFFFF",
      colorLight: "#FB923C",
      title: "User Empowerment",
      subtitle: "Kontrol Penuh di Tangan Anda",
      desc: "Bebas memilih driver berdasarkan profil, rating bintang, dan riwayat perjalanan. Pengguna memegang kendali atas pengalaman perjalanan mereka.",
      tags: ["Pilih Driver", "Rating System", "Multi-Service"],
    },
    {
      id: "pillar-fintech",
      icon: <Wallet size={28} className="text-white" />,
      color: "#0052CC",
      colorLight: "#60A5FA",
      title: "Seamless Fintech",
      subtitle: "Ekosistem Pembayaran Terintegrasi",
      desc: "Dompet LAJU mengintegrasikan pembayaran cashless, manajemen saldo, histori transaksi, dan top-up dalam satu ekosistem yang mulus.",
      tags: ["Dompet LAJU", "Cashless Pay", "Top-Up"],
    },
  ];

  return (
    <section id="overview" className="py-24 px-6 relative overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #60A5FA 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Blue glow top-right */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #0052CC, transparent)" }}
      />
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <StaggerWrap>
          <div className="mb-16">
            <StaggerText>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0052CC]/20 border border-[#0052CC]/30 text-white text-xs font-semibold mb-4 uppercase tracking-widest">
                Tahap Empathize
              </div>
            </StaggerText>
            <StaggerText>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                Mengapa <span style={{ color: "#FFFFFF" }}>LAJU</span>?
              </h2>
            </StaggerText>
            <div className="flex flex-col md:flex-row gap-6 max-w-4xl">
              <StaggerText className="flex-1 p-6 rounded-2xl border border-white/10 bg-white/5">
                <p className="text-gray-300 leading-relaxed">
                  Riset menunjukkan bahwa pengguna layanan ride-hailing sering
                  merasa tidak berdaya — driver ditugaskan secara acak tanpa
                  pilihan, meninggalkan rasa ketidakamanan terutama bagi
                  penumpang wanita dan perjalanan malam. LAJU hadir untuk
                  mengubah paradigma ini.
                </p>
              </StaggerText>
              <StaggerText className="flex-1 p-6 rounded-2xl border border-white/10 bg-white/5">
                <p className="text-gray-300 leading-relaxed">
                  Selain itu, ketidaktransparanan biaya dan ketergantungan pada
                  uang tunai menciptakan gesekan dalam pengalaman pengguna.
                  Fitur{" "}
                  <span className="text-white font-semibold">Dompet LAJU</span>{" "}
                  hadir sebagai solusi ekosistem pembayaran yang seamless dan
                  terpercaya.
                </p>
              </StaggerText>
            </div>
          </div>
        </StaggerWrap>

        {/* Figma Embed Placeholder */}
        <FadeInWhenVisible delay={0.1}>
          <div className="max-w-4xl mb-16 rounded-2xl overflow-hidden border border-white/10 bg-[#232323] p-4 md:p-6 lg:p-8">
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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              id={pillar.id}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/20 hover:shadow-2xl cursor-default overflow-hidden"
              variants={staggerItem}
            >
              {/* Glow background */}
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                style={{ backgroundColor: pillar.color }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  backgroundColor: `${pillar.color}20`,
                  border: `1px solid ${pillar.color}40`,
                }}
              >
                {pillar.icon}
              </div>

              {/* Content */}
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{ color: "#FFFFFF" }}
              >
                {pillar.subtitle}
              </p>
              <h3 className="text-xl font-bold text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {pillar.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium border"
                    style={{
                      borderColor: `${pillar.color}60`,
                      color: "#FFFFFF",
                      backgroundColor: `${pillar.color}15`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
