# Product Requirements Document (PRD)
## LAJU - UI/UX Case Study Portfolio

### 1. Pendahuluan
**1.1 Nama Proyek**
LAJU - UI/UX Case Study Portfolio ("Redefining Ride-Hailing with Human-Centric Tech")

**1.2 Latar Belakang**
Presentasi studi kasus desain UI/UX tradisional umumnya menggunakan format statis seperti PDF atau slide presentasi. Hal ini sering kali membatasi kemampuan desainer untuk menunjukkan interaktivitas, detail animasi, dan nuansa produk (look and feel) yang sebenarnya. 

**1.3 Tujuan (Objective)**
Mentransformasi presentasi studi kasus desain UI/UX menjadi sebuah pengalaman web yang dinamis, interaktif, dan premium. Pengunjung dapat mengeksplorasi proses *Design Thinking* dari awal hingga akhir secara langsung di dalam peramban web mereka dengan tingkat imersi yang tinggi.

### 2. Target Pengguna
- **Perekrut (Recruiters) & Hiring Managers:** Membutuhkan gambaran cepat dan jelas mengenai kemampuan *problem-solving* dan visual desain.
- **Desainer UI/UX & Profesional Tech:** Mencari referensi desain, metodologi, dan inspirasi interaksi (animasi, *layout*).
- **Klien Potensial (Freelance/Agency):** Mengevaluasi kualitas layanan desain dan pengembangan front-end.

### 3. Fitur Utama (Key Features)
Proyek ini memiliki beberapa fitur unggulan yang dirancang untuk meningkatkan *User Experience* (UX):

1. **Smooth Parallax Hero Section**
   - Menampilkan *grid* desain layar aplikasi yang bergerak secara asinkron (efek *parallax*) saat halaman di-*scroll*.
   - **Tujuan:** Memberikan efek "wow" pertama dan menonjolkan estetika UI secara sekilas.

2. **Interactive Ideate Tabs**
   - Sistem *tab* interaktif untuk berpindah antardokumen arsitektur dan sistem desain (Figma embeds).
   - **Tujuan:** Menampilkan banyak data kompleks tanpa membebani performa *loading* browser, serta menjaga struktur halaman tetap rapi.

3. **Immersive Prototype Mockup**
   - Tampilan purwarupa *(High-Fidelity Flow)* Figma yang dibungkus oleh desain perangkat iPhone menggunakan CSS asli.
   - **Tujuan:** Memberikan impresi aplikasi *native* kepada pengunjung saat berinteraksi dengan prototipe.

4. **Smart Glassmorphic Navbar**
   - *Navbar* berdesain transparan yang responsif; mengecil secara halus (*shrink*) saat pengguna melakukan *scroll* ke bawah.
   - Fitur *Auto-highlight* menu navigasi sesuai bagian (*section*) yang sedang dibaca di layar (spy-scroll).

5. **Dynamic Aesthetic Theme**
   - Desain dasar berpusat pada kombinasi estetika premium *tech-startup* dengan efek latar belakang yang dinamis. 
   - Aksen warna *Deep Tech Blue* (`#0052CC`) dan *Warm Tangerine* (`#FF7A00`) digunakan sebagai penanda *call-to-action* dan interaksi utama.

### 4. Struktur Konten (Metodologi Design Thinking)
Aplikasi memuat konten yang merepresentasikan alur kerja standar industri UI/UX, diimplementasikan sebagai komponen seksi (Sections):

- **Overview Section:** Menguraikan konteks proyek, peran, garis waktu (*timeline*), dan pemahaman awal tentang masalah.
- **Define Section:** Analisis masalah pengguna, pemetaan *pain points*, dan penentuan tujuan utama (*objectives*).
- **Ideate Section:** Proses *brainstorming*, rancangan *Information Architecture* (IA), *User Flow*, dan *Design System*.
- **Prototype Section:** Penyajian hasil desain visual (*High-Fidelity*) yang siap diinteraksikan.
- **Test / Validation Section:** Metrik pengujian (usability testing) dan iterasi desain akhir.

### 5. Arsitektur Teknis & Stack Teknologi (Tech Stack)
Pengembangan menggunakan pendekatan modern berbasis komponen (*Component-Driven Development*).

- **Framework:** React 18
- **Build Tool:** Vite (untuk performa *Hot Module Replacement* yang super cepat)
- **Styling:** Tailwind CSS (Utilitas CSS untuk mempercepat *styling*)
- **Animation Engine:** Framer Motion (Digunakan untuk efek *parallax*, transisi seksi, dan *micro-interactions*)
- **Iconography:** Lucide React

### 6. Struktur Komponen (Component Architecture)
Struktur *source code* dibagi secara modular untuk kemudahan *maintenance*:
- `src/App.jsx` : File *entry point* yang merangkai semua komponen menggunakan *React Suspense* dan *Lazy Loading* untuk optimasi *load time*.
- `src/components/layout/` :
  - `Navbar.jsx`: Komponen navigasi atas dengan *glassmorphism*.
  - `Footer.jsx`: Bagian penutup halaman portfolio.
- `src/components/ui/` : Komponen antarmuka yang dapat digunakan kembali (*reusable*).
  - `Animations.jsx`, `DynamicBackground.jsx`, `GradientButton.jsx`, `SectionBadge.jsx`.
- `src/sections/` : Modul yang merepresentasikan setiap bagian tahapan studi kasus.
  - `HeroSection.jsx`
  - `OverviewSection.jsx`
  - `DefineSection.jsx`
  - `IdeateSection.jsx`
  - `PrototypeSection.jsx`
  - `TestSection.jsx`

### 7. Non-Functional Requirements
- **Performance:** Memanfaatkan *React Suspense* dan *lazy loading* untuk setiap bagian (*sections*) demi menjaga nilai *First Contentful Paint* (FCP) yang optimal.
- **Responsiveness:** Harus bisa diakses dan proporsional baik pada perangkat *Mobile*, *Tablet*, maupun *Desktop* (Mobile-First Approach via Tailwind).
- **Accessibility:** Kontras warna dan ukuran *font* (menggunakan *font-family* 'Roobert') yang disesuaikan untuk kenyamanan membaca *long-form content*.

### 8. Panduan Pengembangan (Development Guidelines)
1. Kloning repositori proyek.
2. Jalankan `npm install` untuk mengunduh semua *dependencies* sesuai yang tercatat di `package.json`.
3. Jalankan `npm run dev` untuk memulai server *development* Vite (default di `http://localhost:5173`).
4. Gunakan ESLint (`npm run lint`) untuk memastikan konsistensi kode sebelum melakukan *commit* atau *build*.
