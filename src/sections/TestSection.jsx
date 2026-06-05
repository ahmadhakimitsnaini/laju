import { CheckCircle2, Star, Quote } from "lucide-react";
import { FadeInWhenVisible } from "../components/ui/Animations";
import SectionBadge from "../components/ui/SectionBadge";
import arkan1 from "../assets/mainPage/arkan1.webp";
import arkan2 from "../assets/mainPage/arkan2.webp";

export default function TestSection() {
  const testResults = [
    {
      task: "Login dengan Verifikasi OTP",
      status: "success",
      statusLabel: "Berhasil",
      completion: "100%",
      note: "Semua pengguna berhasil dalam ≤ 2 menit. OTP flow dianggap intuitif dan cepat.",
    },
    {
      task: "Memilih Promo & Menerapkan Kode Diskon",
      status: "warning",
      statusLabel: "Perlu Perbaikan",
      completion: "75%",
      note: "2 dari 8 pengguna kesulitan menemukan menu promo. Perlu penambahan visual cue yang lebih menonjol.",
    },
    {
      task: "Memberikan Ulasan Bintang 5 Setelah Perjalanan",
      status: "success",
      statusLabel: "Berhasil",
      completion: "100%",
      note: "Post-trip flow sangat smooth. Rating stars langsung accessible dari layar ringkasan perjalanan.",
    },
    // {
    //   task: "Top-Up Dompet LAJU",
    //   status: "success",
    //   statusLabel: "Berhasil",
    //   completion: "88%",
    //   note: "7 dari 8 pengguna berhasil. 1 pengguna butuh bantuan karena kurang familiar dengan e-wallet.",
    // },
    {
      task: "Pilih Driver Manual Berdasarkan Rating",
      status: "success",
      statusLabel: "Berhasil",
      completion: "100%",
      note: "Fitur paling disukai! Pengguna sangat antusias dengan kemampuan memilih driver sendiri.",
    },
  ];

  return (
    <section id="test" className="py-24 px-6 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <FadeInWhenVisible>
          <div className="mb-12">
            <SectionBadge variant="orange">Tahap Test & Validasi</SectionBadge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Hasil <span className="text-[#0052CC]">Pengujian</span> Pengguna
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
              Pengujian usability dilakukan kepada{" "}
              <span className="text-gray-800 font-semibold">
                1 pengguna target
              </span>{" "}
              (mahasiswa) dengan skenario tugas berbasis task-based testing
              dalam sesi moderasi selama ±15 menit per sesi.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Testing Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-start">
          {/* Image 1 */}
          <FadeInWhenVisible delay={0.2}>
            <div className="rounded-3xl overflow-hidden glass-card border border-white/40 shadow-lg relative group bg-black/5 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
              <img
                src={arkan1}
                alt="Dokumentasi Usability Testing 1"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-white font-medium bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-xs inline-block border border-white/20">
                  Sesi Pengujian 1
                </p>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Image 2 */}
          <FadeInWhenVisible delay={0.3}>
            <div className="rounded-3xl overflow-hidden glass-card border border-white/40 shadow-lg relative group bg-black/5 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
              <img
                src={arkan2}
                alt="Dokumentasi Usability Testing 2"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-white font-medium bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-xs inline-block border border-white/20">
                  Sesi Pengujian 2
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>

        {/* Test Results Table */}
        <div className="overflow-x-auto mb-12 rounded-3xl glass-card border border-white/40">
          <table className="w-full" id="test-results-table">
            <thead>
              <tr
                className="border-b border-white/20"
                style={{ background: "#2A2A2A" }}
              >
                <th className="text-left px-6 py-4 text-gray-600 font-semibold text-sm w-8">
                  #
                </th>
                <th className="text-left px-4 py-4 text-gray-600 font-semibold text-sm">
                  Task / Skenario
                </th>
                <th className="text-left px-4 py-4 text-gray-600 font-semibold text-sm">
                  Status
                </th>
                <th className="text-left px-4 py-4 text-gray-600 font-semibold text-sm">
                  Completion
                </th>
                <th className="text-left px-4 py-4 text-gray-600 font-semibold text-sm">
                  Catatan Temuan
                </th>
              </tr>
            </thead>
            <tbody>
              {testResults.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-200 hover:bg-white/60 transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-gray-400 text-sm font-medium">
                    {idx + 1}
                  </td>
                  <td className="px-4 py-4 text-gray-800 text-sm font-medium min-w-48">
                    {row.task}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                        row.status === "success"
                          ? "bg-[#0052CC]/20 text-black border border-[#0052CC]/30"
                          : "bg-[#FF7A00]/20 text-black border border-[#FF7A00]/30"
                      }`}
                    >
                      {row.status === "success" ? (
                        <CheckCircle2 size={12} />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-[#FB923C]" />
                      )}
                      {row.statusLabel}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: row.completion,
                            backgroundColor:
                              row.status === "success" ? "#60A5FA" : "#FB923C",
                          }}
                        />
                      </div>
                      <span className="text-xs font-bold text-gray-700">
                        {row.completion}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-600 text-sm leading-relaxed min-w-64">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* User Feedback Quote */}
        <div className="grid grid-cols-1 gap-6">
          {[
            // {
            //   quote:
            //     '"Fitur pilih driver-nya itu game changer banget! Akhirnya ada aplikasi yang ngerti kebutuhan aku sebagai pengguna wanita yang sering naik ojol malem-malem."',
            //   name: "Responden A",
            //   role: "Mahasiswi, 21 tahun",
            //   stars: 5,
            // },
            {
              quote:
                '"Tampilannya clean banget dan dark mode-nya enak di mata. Navigasi antar menu juga udah sangat intuitif, gak perlu mikir panjang buat nemuin fitur yang dicari."',
              name: "Arkan",
              role: "Mahasiswa, 20 Tahun",
              stars: 5,
            },
          ].map((feedback, idx) => (
            <div
              key={idx}
              id={`feedback-quote-${idx + 1}`}
              className="relative p-6 rounded-3xl glass-card overflow-hidden cursor-pointer"
            >
              <Quote
                size={36}
                className="text-[#0052CC]/15 absolute top-4 right-4"
                strokeWidth={1}
              />
              <div className="flex mb-4">
                {[...Array(feedback.stars)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-[#FF7A00] text-[#FF7A00]"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-5">
                {feedback.quote}
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #0052CC, #F177A4)",
                  }}
                >
                  {feedback.name.charAt(feedback.name.length - 1)}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">
                    {feedback.name}
                  </p>
                  <p className="text-gray-400 text-xs">{feedback.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Conclusion */}
        <FadeInWhenVisible delay={0.4}>
          <div className="mt-12 p-8 rounded-3xl glass-card border border-[#0052CC]/20 bg-gradient-to-br from-white/80 to-[#0052CC]/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0052CC]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 shrink-0">
                <CheckCircle2 size={32} className="text-[#0052CC]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Kesimpulan Proyek
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Proyek UI/UX LAJU berhasil menghadirkan solusi inovatif untuk
                  layanan transportasi online. Melalui proses riset, ideasi, dan
                  pengujian yang komprehensif, antarmuka ini terbukti lebih
                  intuitif dan meningkatkan kenyamanan serta keamanan pengguna,
                  khususnya dengan fitur unggulan pemilihan driver manual dan
                  kemudahan transaksi e-wallet.
                </p>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
