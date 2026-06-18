# Rumah Belajar Nur Ilmi 🌟

Landing page responsif dan modern untuk **Rumah Belajar Nur Ilmi**, sebuah fasilitas pendidikan anak usia dini (PAUD/TK) swadaya yang berlokasi di Cimenyan, Kabupaten Bandung. Website ini didesain secara khusus untuk merefleksikan lingkungan belajar yang ceria, penuh kasih sayang, dan organik (tanpa desain kaku/kotak-kotak).

## 🚀 Fitur Utama

- **Desain Organik & Playful**: Menggunakan bentuk asimetris, *svg wave dividers*, dan sudut melengkung yang lembut untuk menciptakan nuansa yang ramah anak.
- **Micro-Animations Halus**: Interaksi hover bergaya *spring* (memantul), parallax elemen dekoratif (*Floating Shapes*), dan animasi masuk menggunakan **Framer Motion**.
- **Performa Tinggi**: Dibangun dengan **Next.js 14 (App Router)** untuk loading yang super cepat dan SEO-friendly.
- **Pemisahan Data & UI**: Seluruh konten tulisan (teks pahlawan, program, testimoni, kontak) dikelola secara terpusat di `lib/data.ts` sehingga mempermudah pembaruan konten tanpa perlu menyentuh struktur kode UI.
- **Terintegrasi secara Langsung**: 
  - *Embed* Google Maps yang interaktif dan dapat diklik untuk membuka aplikasi navigasi.
  - Video *embed* YouTube responsif.
  - Tautan *Call to Action* (CTA) WhatsApp dengan *draft* pesan otomatis.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React, App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Komponen berbasis [Shadcn UI](https://ui.shadcn.com/) (Cards, Buttons)
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Ikonografi**: [Lucide React](https://lucide.dev/)
- **Tipografi**: Google Fonts (`Fredoka` untuk judul yang *bouncy* dan ceria, `Nunito` untuk teks badan yang ramah dibaca).

## 📁 Struktur Proyek Utama

- `app/page.tsx` - Komponen halaman utama (Hero, About, Programs, Testimonials, dll).
- `app/layout.tsx` - Konfigurasi layout global, font, dan Metadata (SEO).
- `app/icon.svg` - Favicon kustom khusus untuk Nur Ilmi.
- `lib/data.ts` - *Single Source of Truth* untuk semua konten teks (copywriting) website.
- `components/ui/` - Komponen UI yang digunakan ulang.

## 💻 Panduan Instalasi & Menjalankan (Local Development)

Pastikan Anda memiliki [Node.js](https://nodejs.org/) terinstal di mesin Anda.

1. **Clone repository ini** (jika menggunakan git) dan masuk ke direktori proyek.
2. **Install dependencies**:
   ```bash
   npm install
   # atau
   yarn install
   ```
3. **Jalankan *Development Server***:
   ```bash
   npm run dev
   # atau
   yarn dev
   ```
4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya. Halaman akan otomatis melakukan *update* jika Anda mengedit file.

---
*Developed by Kelompok NaraCahaya.* 🧡
