import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Berita & Informasi — SMPN 2 Teminabuan',
  description: 'Berita terbaru, pengumuman, dan informasi kegiatan dari SMP Negeri 2 Teminabuan.',
};

const beritaUtama = {
  image: '/images/event-pramuka.webp',
  tag: 'Prestasi',
  date: '5 Juni 2026',
  author: 'Admin',
  title: 'Siswa SMPN 2 Teminabuan Raih Juara 1 OSN Bidang IPA Tingkat Kabupaten Sorong Selatan',
  excerpt: 'Atas nama seluruh keluarga besar SMPN 2 Teminabuan, kami mengucapkan selamat kepada siswa yang berhasil meraih Juara 1 Olimpiade Sains Nasional bidang IPA tahun 2025. Capaian ini menjadi motivasi bagi siswa lain untuk terus berprestasi.',
};

const daftarBerita = [
  { emoji: '📚', cat: 'Akademik', title: 'Peluncuran Program Literasi Digital Siswa 2025', date: '1 Juni 2026', author: 'Humas', excerpt: 'Dalam upaya meningkatkan literasi digital, sekolah meluncurkan program pelatihan terpadu bagi seluruh siswa kelas 7.' },
  { emoji: '🎨', cat: 'Seni Budaya', title: 'Festival Seni Tradisional Papua di Hari Jadi Sekolah', date: '28 Mei 2026', author: 'OSIS', excerpt: 'Puncak peringatan HUT sekolah dimeriahkan dengan penampilan seni tari dan musik tradisional dari berbagai daerah di Papua.' },
  { emoji: '⚽', cat: 'Olahraga', title: 'Tim Sepak Bola Lolos ke Final Turnamen Antar-SMP', date: '20 Mei 2026', author: 'Admin', excerpt: 'Tim kebanggaan kita berhasil menembus babak final setelah mengalahkan juara bertahan di pertandingan semi-final yang sengit.' },
  { emoji: '🌿', cat: 'Lingkungan', title: 'Program Adiwiyata: Penghijauan Halaman Sekolah', date: '15 Mei 2026', author: 'Tim Adiwiyata', excerpt: 'Guru dan siswa bergotong royong menanam puluhan pohon pelindung untuk menciptakan lingkungan belajar yang lebih asri.' },
  { emoji: '📢', cat: 'Pengumuman', title: 'Jadwal Pengambilan Rapor Semester Genap 2025/2026', date: '10 Mei 2026', author: 'Kurikulum', excerpt: 'Pengambilan rapor akan dilaksanakan secara bergiliran untuk masing-masing tingkatan kelas mulai tanggal 15 Juni.' },
  { emoji: '🏆', cat: 'Prestasi', title: 'Grup Paduan Suara Sabet Medali Emas Tingkat Provinsi', date: '2 Mei 2026', author: 'Admin', excerpt: 'Paduan suara Gita Bahana SMPN 2 Teminabuan sukses mengharumkan nama Kabupaten di festival paduan suara pelajar.' },
];

export default function BeritaPage() {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0f4525] via-[#1a6b3a] to-[#1d8a46] py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <Link href="/" className="hover:text-white transition-colors no-underline text-white/60">Beranda</Link>
            <i className="ti ti-chevron-right text-xs" />
            <span className="text-white">Berita</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Berita & Informasi</h1>
          <p className="text-white/70 text-[15px]">Kumpulan berita terbaru dan pengumuman resmi sekolah</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* Highlight / Berita Utama */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#c8902b] rounded-xl flex items-center justify-center text-white text-xl">
                <i className="ti ti-flame" />
              </div>
              <h2 className="text-[24px] font-extrabold text-[#0f4525]">Sorotan Utama</h2>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 grid md:grid-cols-2 group hover:shadow-md transition-shadow">
              <div className="relative h-[300px] md:h-auto overflow-hidden">
                <Image 
                  src={beritaUtama.image} 
                  alt={beritaUtama.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-[#c8902b] text-white text-[12px] font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {beritaUtama.tag}
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-[13px] text-gray-500 mb-3">
                  <span className="flex items-center gap-1.5"><i className="ti ti-calendar" /> {beritaUtama.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span className="flex items-center gap-1.5"><i className="ti ti-user" /> {beritaUtama.author}</span>
                </div>
                <h3 className="text-[22px] font-bold text-gray-900 leading-snug mb-4 group-hover:text-[#1a6b3a] transition-colors">
                  {beritaUtama.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
                  {beritaUtama.excerpt}
                </p>
                <Link href="#" className="inline-flex items-center gap-2 text-[#1a6b3a] font-bold text-[14.5px] hover:text-[#0f4525] no-underline">
                  Baca Selengkapnya <i className="ti ti-arrow-right" />
                </Link>
              </div>
            </div>
          </div>

          {/* Daftar Berita */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#1a6b3a] rounded-xl flex items-center justify-center text-white text-xl">
                <i className="ti ti-news" />
              </div>
              <h2 className="text-[24px] font-extrabold text-[#0f4525]">Berita Lainnya</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {daftarBerita.map((berita, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-[#1a6b3a] hover:shadow-md transition-all flex flex-col h-full group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f4525] to-[#2d9e58] flex items-center justify-center text-[24px] flex-shrink-0">
                      {berita.emoji}
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-[#c8902b] uppercase tracking-wider mb-0.5">{berita.cat}</div>
                      <div className="text-[12px] text-gray-500 flex items-center gap-1.5">
                        <i className="ti ti-calendar" /> {berita.date}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-[16px] font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#1a6b3a] transition-colors">
                    {berita.title}
                  </h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed mb-5 flex-1">
                    {berita.excerpt}
                  </p>
                  <Link href="#" className="inline-flex items-center gap-2 text-[#1a6b3a] font-bold text-[13.5px] hover:text-[#0f4525] no-underline mt-auto">
                    Baca <i className="ti ti-arrow-right" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-12 flex justify-center gap-2">
              <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
                <i className="ti ti-chevron-left" />
              </button>
              <button className="w-10 h-10 rounded-xl bg-[#1a6b3a] text-white font-bold flex items-center justify-center">1</button>
              <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 font-medium">2</button>
              <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 font-medium">3</button>
              <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50">
                <i className="ti ti-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
