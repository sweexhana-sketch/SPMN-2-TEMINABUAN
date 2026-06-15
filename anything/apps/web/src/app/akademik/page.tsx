import type { Metadata } from 'next';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Akademik — SMPN 2 Teminabuan',
  description: 'Informasi akademik SMPN 2 Teminabuan: kurikulum merdeka belajar, program unggulan, jadwal pembelajaran, dan kalender akademik 2025/2026.',
};

const mataPelajaran = [
  { icon: '📖', nama: 'Pendidikan Agama & Budi Pekerti', jam: '3 JP/minggu', kurikulum: 'Wajib' },
  { icon: '🇮🇩', nama: 'Pendidikan Pancasila', jam: '2 JP/minggu', kurikulum: 'Wajib' },
  { icon: '📝', nama: 'Bahasa Indonesia', jam: '6 JP/minggu', kurikulum: 'Wajib' },
  { icon: '➕', nama: 'Matematika', jam: '5 JP/minggu', kurikulum: 'Wajib' },
  { icon: '🔬', nama: 'Ilmu Pengetahuan Alam (IPA)', jam: '5 JP/minggu', kurikulum: 'Wajib' },
  { icon: '🌍', nama: 'Ilmu Pengetahuan Sosial (IPS)', jam: '4 JP/minggu', kurikulum: 'Wajib' },
  { icon: '🌐', nama: 'Bahasa Inggris', jam: '4 JP/minggu', kurikulum: 'Wajib' },
  { icon: '🎨', nama: 'Seni Budaya', jam: '3 JP/minggu', kurikulum: 'Wajib' },
  { icon: '⚽', nama: 'Pendidikan Jasmani (PJOK)', jam: '3 JP/minggu', kurikulum: 'Wajib' },
  { icon: '💻', nama: 'Teknologi Informasi & Komunikasi', jam: '2 JP/minggu', kurikulum: 'Wajib' },
  { icon: '🌿', nama: 'Muatan Lokal — Bahasa Daerah Papua', jam: '2 JP/minggu', kurikulum: 'Mulok' },
  { icon: '🎭', nama: 'Muatan Lokal — Budaya Papua', jam: '1 JP/minggu', kurikulum: 'Mulok' },
];

const jadwalHarian = [
  { waktu: '06:45 – 07:00', kegiatan: 'Persiapan & Doa Pagi Bersama', ket: 'Seluruh siswa' },
  { waktu: '07:00 – 07:40', kegiatan: 'Jam Pelajaran 1', ket: '40 menit' },
  { waktu: '07:40 – 08:20', kegiatan: 'Jam Pelajaran 2', ket: '40 menit' },
  { waktu: '08:20 – 09:00', kegiatan: 'Jam Pelajaran 3', ket: '40 menit' },
  { waktu: '09:00 – 09:20', kegiatan: 'Istirahat Pertama', ket: '20 menit' },
  { waktu: '09:20 – 10:00', kegiatan: 'Jam Pelajaran 4', ket: '40 menit' },
  { waktu: '10:00 – 10:40', kegiatan: 'Jam Pelajaran 5', ket: '40 menit' },
  { waktu: '10:40 – 11:20', kegiatan: 'Jam Pelajaran 6', ket: '40 menit' },
  { waktu: '11:20 – 11:40', kegiatan: 'Istirahat Kedua & Sholat Dzuhur', ket: '20 menit' },
  { waktu: '11:40 – 12:20', kegiatan: 'Jam Pelajaran 7', ket: '40 menit' },
  { waktu: '12:20 – 13:00', kegiatan: 'Jam Pelajaran 8', ket: '40 menit' },
  { waktu: '13:00 – 14:00', kegiatan: 'Kegiatan Pengayaan / Ekskul', ket: 'Kondisional' },
];

const kalenderAkademik = [
  { bulan: 'Juli 2025', kegiatan: 'Awal Tahun Ajaran 2025/2026 · MPLS Kelas 7' },
  { bulan: 'Agustus 2025', kegiatan: 'Peringatan HUT RI ke-80 · Penilaian Harian 1' },
  { bulan: 'September 2025', kegiatan: 'Penilaian Tengah Semester (PTS) Ganjil' },
  { bulan: 'Oktober 2025', kegiatan: 'Pekan Kreasi Siswa · Penilaian Harian 2' },
  { bulan: 'November 2025', kegiatan: 'Peringatan Hari Guru Nasional · PTS Lanjutan' },
  { bulan: 'Desember 2025', kegiatan: 'Ujian Akhir Semester Ganjil · Pembagian Rapor · Libur Semester' },
  { bulan: 'Januari 2026', kegiatan: 'Awal Semester Genap · Penilaian Harian 1' },
  { bulan: 'Februari 2026', kegiatan: 'Perkiraan Ujian Praktek Kelas 9' },
  { bulan: 'Maret 2026', kegiatan: 'PTS Genap · Simulasi Ujian Nasional' },
  { bulan: 'April 2026', kegiatan: 'Ujian Sekolah Kelas 9 · OSN/O2SN Kabupaten' },
  { bulan: 'Mei 2026', kegiatan: 'Pengumuman Kelulusan Kelas 9 · Wisuda' },
  { bulan: 'Juni 2026', kegiatan: 'UAS Genap · Pembagian Rapor · PPDB 2026/2027' },
];

export default function AkademikPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0f4525] via-[#1a6b3a] to-[#1d8a46] py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <a href="/" className="hover:text-white transition-colors no-underline text-white/60">Beranda</a>
            <i className="ti ti-chevron-right text-xs" />
            <span className="text-white">Akademik</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Akademik</h1>
          <p className="text-white/70 text-[15px]">Kurikulum, program pembelajaran, dan kalender akademik SMPN 2 Teminabuan</p>
        </div>
      </div>

      {/* Kurikulum */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="inline-block bg-[#1a6b3a]/10 text-[#1a6b3a] text-xs font-semibold px-4 py-1 rounded-full tracking-wider mb-3">KURIKULUM</span>
              <h2 className="text-[26px] font-extrabold text-[#0f4525] mb-4 leading-snug">
                Kurikulum Merdeka Belajar <span className="text-[#c8902b]">Fase D</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                SMPN 2 Teminabuan mengimplementasikan <strong>Kurikulum Merdeka</strong> yang berpusat pada siswa (student-centered learning). Pendekatan ini memberikan fleksibilitas bagi siswa untuk mengeksplorasi minat dan bakat mereka secara lebih mendalam.
              </p>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-6">
                Selain kurikulum nasional, kami mengintegrasikan <strong>Muatan Lokal (Mulok) Budaya Papua</strong> untuk menguatkan identitas dan kecintaan siswa terhadap kekayaan budaya lokal.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: 'ti-book', label: 'Projek Penguatan Profil Pelajar Pancasila (P5)' },
                  { icon: 'ti-heart', label: 'Muatan Lokal Budaya Papua' },
                  { icon: 'ti-device-laptop', label: 'Pembelajaran Berbasis Digital' },
                  { icon: 'ti-users', label: 'Pembelajaran Kolaboratif' },
                ].map((f) => (
                  <div key={f.label} className="flex items-start gap-2.5 p-3 bg-gray-50 rounded-xl border border-gray-200">
                    <i className={`ti ${f.icon} text-[#1a6b3a] text-lg mt-0.5 flex-shrink-0`} />
                    <span className="text-[13px] text-gray-700 font-medium leading-snug">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0f4525] rounded-2xl p-7 text-white">
              <h3 className="font-bold text-lg mb-5 flex items-center gap-2">
                <i className="ti ti-award text-[#e8b04a]" /> Program Unggulan
              </h3>
              {[
                { icon: '🏆', title: 'Olimpiade Sains (OSN)', desc: 'Program intensif persiapan OSN bidang IPA, Matematika, dan IPS untuk siswa berprestasi.' },
                { icon: '🌐', title: 'English Proficiency Program', desc: 'Kelas tambahan bahasa Inggris untuk meningkatkan kemampuan komunikasi global.' },
                { icon: '🌿', title: 'Program Adiwiyata', desc: 'Pendidikan lingkungan hidup terintegrasi untuk membangun kesadaran ekologis.' },
                { icon: '💻', title: 'Literasi Digital', desc: 'Pelatihan kecakapan digital, coding dasar, dan keamanan berinternet.' },
                { icon: '🎭', title: 'Seni Budaya Papua', desc: 'Pelestarian seni tari, musik, dan kerajinan tradisional Papua dalam kurikulum.' },
              ].map((p) => (
                <div key={p.title} className="flex gap-3 mb-4 last:mb-0">
                  <span className="text-xl flex-shrink-0 mt-0.5">{p.icon}</span>
                  <div>
                    <div className="text-sm font-bold mb-0.5">{p.title}</div>
                    <div className="text-white/65 text-[12.5px] leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mata Pelajaran */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <span className="inline-block bg-[#1a6b3a] text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wider mb-3">MATA PELAJARAN</span>
              <h2 className="text-[26px] font-extrabold text-[#0f4525]">Struktur Kurikulum</h2>
              <div className="w-14 h-[3px] bg-[#c8902b] mx-auto mt-3 rounded-full" />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {mataPelajaran.map((mp) => (
                <div key={mp.nama} className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-[#1a6b3a] transition-colors">
                  <span className="text-2xl">{mp.icon}</span>
                  <div className="flex-1">
                    <div className="text-[14px] font-semibold text-gray-900">{mp.nama}</div>
                    <div className="text-[12px] text-gray-400">{mp.jam}</div>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${mp.kurikulum === 'Mulok' ? 'bg-[#c8902b]/10 text-[#c8902b]' : 'bg-[#1a6b3a]/10 text-[#1a6b3a]'}`}>
                    {mp.kurikulum}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Jadwal Harian */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <span className="inline-block bg-[#1a6b3a] text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wider mb-3">JADWAL BELAJAR</span>
              <h2 className="text-[26px] font-extrabold text-[#0f4525]">Jadwal Kegiatan Harian</h2>
              <div className="w-14 h-[3px] bg-[#c8902b] mx-auto mt-3 rounded-full" />
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              {jadwalHarian.map((j, idx) => (
                <div key={j.waktu} className={`flex items-center gap-4 px-6 py-4 border-b border-gray-100 last:border-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                  <div className="w-[140px] flex-shrink-0">
                    <span className="text-[13px] font-bold text-[#1a6b3a] font-mono">{j.waktu}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-[14px] font-semibold text-gray-900">{j.kegiatan}</div>
                  </div>
                  <div className="hidden md:block">
                    <span className="text-[12px] text-gray-400 bg-gray-100 px-2.5 py-0.5 rounded-full">{j.ket}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kalender Akademik */}
          <div>
            <div className="text-center mb-10">
              <span className="inline-block bg-[#1a6b3a] text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wider mb-3">KALENDER</span>
              <h2 className="text-[26px] font-extrabold text-[#0f4525]">Kalender Akademik 2025/2026</h2>
              <div className="w-14 h-[3px] bg-[#c8902b] mx-auto mt-3 rounded-full" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {kalenderAkademik.map((k, idx) => (
                <div key={k.bulan} className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:border-[#1a6b3a] transition-colors">
                  <div className="w-10 h-10 bg-[#1a6b3a] rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#c8902b] mb-0.5">{k.bulan}</div>
                    <div className="text-[13.5px] text-gray-700 leading-relaxed">{k.kegiatan}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
