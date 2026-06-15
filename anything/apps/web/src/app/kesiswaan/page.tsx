import type { Metadata } from 'next';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Kesiswaan — SMPN 2 Teminabuan',
  description: 'Informasi kesiswaan SMPN 2 Teminabuan: ekstrakurikuler, OSIS, prestasi siswa, dan kegiatan kesiswaan.',
};

const ekskulData = [
  { emoji: '🏸', name: 'Bulu Tangkis', pelatih: 'Pak Yanto', jadwal: 'Sabtu, 08:00–10:00', tag: 'Olahraga', anggota: 28 },
  { emoji: '🎭', name: 'Tari Tradisional Papua', pelatih: 'Bu Yuliana Fakdawer', jadwal: 'Jumat, 14:00–16:00', tag: 'Seni Budaya', anggota: 22 },
  { emoji: '🔬', name: 'Kelompok Ilmiah Remaja', pelatih: 'Bu Sitti Rahmawati', jadwal: 'Kamis, 14:00–16:00', tag: 'Akademik', anggota: 20 },
  { emoji: '⚽', name: 'Sepak Bola', pelatih: 'Pak Melkyanus Kambu', jadwal: 'Sabtu, 07:00–09:00', tag: 'Olahraga', anggota: 32 },
  { emoji: '🎤', name: 'Paduan Suara', pelatih: 'Bu Maria Kocu', jadwal: 'Rabu, 13:30–15:30', tag: 'Seni', anggota: 25 },
  { emoji: '🏕️', name: 'Pramuka', pelatih: 'Pak Silas Kombado', jadwal: 'Jumat, 14:00–16:30', tag: 'Kepemimpinan', anggota: 45 },
  { emoji: '💻', name: 'Teknologi Informatika', pelatih: 'Pak Roni Ayamseba', jadwal: 'Kamis, 13:00–15:00', tag: 'Akademik', anggota: 24 },
  { emoji: '🎨', name: 'Seni Lukis & Kriya', pelatih: 'Bu Dewi Setiawati', jadwal: 'Selasa, 14:00–16:00', tag: 'Seni', anggota: 18 },
  { emoji: '🏀', name: 'Bola Basket', pelatih: 'Pak Yanto', jadwal: 'Sabtu, 08:00–10:00', tag: 'Olahraga', anggota: 26 },
  { emoji: '🎸', name: 'Band / Musik', pelatih: 'Pak Ferry Tabuni', jadwal: 'Selasa, 13:30–15:30', tag: 'Seni', anggota: 15 },
  { emoji: '📰', name: 'Jurnalistik & Mading', pelatih: 'Bu Maria Kocu', jadwal: 'Rabu, 14:00–16:00', tag: 'Akademik', anggota: 16 },
  { emoji: '🤸', name: 'Taekwondo', pelatih: 'Pak Bobi Howay', jadwal: 'Sabtu, 09:00–11:00', tag: 'Olahraga', anggota: 20 },
  { emoji: '🌿', name: 'Palang Merah Remaja', pelatih: 'Bu Sitti Rahmawati', jadwal: 'Kamis, 13:00–15:00', tag: 'Kesehatan', anggota: 22 },
  { emoji: '♟️', name: 'Catur', pelatih: 'Pak Silas Kombado', jadwal: 'Rabu, 13:00–15:00', tag: 'Akademik', anggota: 14 },
  { emoji: '🏐', name: 'Bola Voli', pelatih: 'Pak Melkyanus Kambu', jadwal: 'Sabtu, 07:00–09:00', tag: 'Olahraga', anggota: 30 },
  { emoji: '🎭', name: 'Drama & Teater', pelatih: 'Bu Yuliana Fakdawer', jadwal: 'Senin, 14:00–16:00', tag: 'Seni', anggota: 18 },
  { emoji: '🌍', name: 'Bahasa Inggris Club', pelatih: 'Bu Dewi Setiawati', jadwal: 'Selasa, 13:00–15:00', tag: 'Akademik', anggota: 20 },
  { emoji: '🖼️', name: 'Fotografi & Desain', pelatih: 'Pak Roni Ayamseba', jadwal: 'Jumat, 13:00–15:00', tag: 'Seni', anggota: 17 },
];

const prestasiSiswa = [
  { medal: '🥇', juara: 'Juara 1', event: 'Olimpiade Sains Nasional (OSN) Bidang IPA', level: 'Tingkat Kabupaten', tahun: '2025' },
  { medal: '🥇', juara: 'Juara 1', event: 'Festival Tari Tradisional Papua', level: 'Tingkat Provinsi', tahun: '2025' },
  { medal: '🥇', juara: 'Juara 1', event: 'Festival Paduan Suara Pelajar', level: 'Tingkat Provinsi', tahun: '2024' },
  { medal: '🥈', juara: 'Juara 2', event: 'Turnamen Sepak Bola O2SN', level: 'Tingkat Kabupaten', tahun: '2025' },
  { medal: '🥉', juara: 'Juara 3', event: 'Kompetisi Sains Madrasah (KSM) Matematika', level: 'Tingkat Kabupaten', tahun: '2025' },
  { medal: '🏆', juara: 'Juara 1', event: 'Lomba Karya Tulis Ilmiah Remaja', level: 'Tingkat Kabupaten', tahun: '2024' },
  { medal: '🥇', juara: 'Juara 1', event: 'Lomba Pidato Bahasa Indonesia', level: 'Tingkat Kabupaten', tahun: '2025' },
  { medal: '🥈', juara: 'Juara 2', event: 'Lomba Bulu Tangkis Pelajar', level: 'Tingkat Kabupaten', tahun: '2025' },
];

const tagColors: Record<string, string> = {
  'Olahraga': 'bg-blue-50 text-blue-600',
  'Seni Budaya': 'bg-orange-50 text-orange-600',
  'Akademik': 'bg-green-50 text-green-700',
  'Seni': 'bg-purple-50 text-purple-600',
  'Kepemimpinan': 'bg-emerald-50 text-emerald-700',
  'Kesehatan': 'bg-red-50 text-red-600',
};

export default function KesiswaanPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0f4525] via-[#1a6b3a] to-[#1d8a46] py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <a href="/" className="hover:text-white transition-colors no-underline text-white/60">Beranda</a>
            <i className="ti ti-chevron-right text-xs" />
            <span className="text-white">Kesiswaan</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Kesiswaan</h1>
          <p className="text-white/70 text-[15px]">Ekstrakurikuler, organisasi siswa, dan prestasi SMPN 2 Teminabuan</p>
        </div>
      </div>

      {/* Statistik Kesiswaan */}
      <section className="bg-[#0f4525] py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '650+', label: 'Total Siswa', icon: 'ti-users' },
              { num: '18', label: 'Ekstrakurikuler', icon: 'ti-star' },
              { num: '3', label: 'Tingkat Kelas', icon: 'ti-school' },
              { num: '32+', label: 'Prestasi Tahun Ini', icon: 'ti-trophy' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#e8b04a] text-2xl mx-auto mb-3">
                  <i className={`ti ${s.icon}`} />
                </div>
                <div className="text-4xl font-extrabold text-[#e8b04a] mb-1">{s.num}</div>
                <div className="text-white/65 text-[13px]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OSIS */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-gradient-to-br from-[#fdf4e3] to-[#fff9f0] border border-[#e8d4aa] rounded-2xl p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block bg-[#c8902b]/10 text-[#c8902b] text-xs font-semibold px-4 py-1 rounded-full tracking-wider mb-3">ORGANISASI</span>
                <h2 className="text-[26px] font-extrabold text-[#0f4525] mb-4">OSIS SMPN 2 Teminabuan</h2>
                <p className="text-gray-600 leading-relaxed text-[14.5px] mb-4">
                  Organisasi Intra Sekolah (OSIS) merupakan wadah bagi siswa untuk berlatih berorganisasi, mengembangkan jiwa kepemimpinan, dan berkreasi dalam berbagai kegiatan sekolah.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { label: 'Ketua OSIS', value: 'Agustinus Kambu — Kelas 9A' },
                    { label: 'Wakil Ketua', value: 'Sari Wulandari — Kelas 8B' },
                    { label: 'Sekretaris', value: 'Johan Fakdawer — Kelas 9C' },
                    { label: 'Pembina', value: 'Pak Silas Kombado, S.Pd' },
                  ].map((o) => (
                    <div key={o.label} className="flex items-center gap-3 py-2 border-b border-[#e8d4aa] last:border-0">
                      <span className="text-[13px] text-gray-500 w-32">{o.label}</span>
                      <span className="text-[13.5px] text-gray-900 font-semibold">{o.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: 'ti-calendar-event', label: 'Mengorganisir kegiatan sekolah' },
                  { icon: 'ti-users', label: 'Mewakili aspirasi siswa' },
                  { icon: 'ti-flag', label: 'Peringatan hari nasional' },
                  { icon: 'ti-heart', label: 'Kegiatan sosial & kemasyarakatan' },
                  { icon: 'ti-podium', label: 'Lomba & kompetisi antar kelas' },
                  { icon: 'ti-palette', label: 'Festival seni & budaya' },
                ].map((f) => (
                  <div key={f.label} className="bg-white border border-[#e8d4aa] rounded-xl p-4 text-center">
                    <i className={`ti ${f.icon} text-[#c8902b] text-2xl block mb-2`} />
                    <div className="text-[12px] text-gray-700 font-medium leading-snug">{f.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ekstrakurikuler */}
          <div className="text-center mb-12">
            <span className="inline-block bg-[#1a6b3a] text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wider mb-3">EKSTRAKURIKULER</span>
            <h2 className="text-[26px] font-extrabold text-[#0f4525] mb-2">18 Ekstrakurikuler Aktif</h2>
            <p className="text-gray-400 text-[15px] max-w-[500px] mx-auto">Beragam pilihan untuk mengembangkan bakat dan potensi siswa</p>
            <div className="w-14 h-[3px] bg-[#c8902b] mx-auto mt-3 rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-16">
            {ekskulData.map((e) => (
              <div key={e.name} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#1a6b3a] hover:shadow-md transition-all">
                <div className="h-[90px] flex items-center gap-4 px-5 bg-gray-50 border-b border-gray-200">
                  <span className="text-4xl">{e.emoji}</span>
                  <div>
                    <div className="text-[14.5px] font-bold text-gray-900">{e.name}</div>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${tagColors[e.tag] || 'bg-gray-100 text-gray-600'}`}>{e.tag}</span>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-[13px] text-gray-600">
                    <i className="ti ti-user text-[#1a6b3a] text-sm" />
                    <span>{e.pelatih}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-gray-600">
                    <i className="ti ti-calendar text-[#1a6b3a] text-sm" />
                    <span>{e.jadwal}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-gray-600">
                    <i className="ti ti-users text-[#1a6b3a] text-sm" />
                    <span>{e.anggota} anggota aktif</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prestasi */}
          <div>
            <div className="text-center mb-10">
              <span className="inline-block bg-[#1a6b3a] text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wider mb-3">PRESTASI SISWA</span>
              <h2 className="text-[26px] font-extrabold text-[#0f4525] mb-2">Penghargaan & Prestasi Terbaru</h2>
              <p className="text-gray-400 text-[15px] max-w-[500px] mx-auto">Capaian membanggakan siswa di berbagai kompetisi</p>
              <div className="w-14 h-[3px] bg-[#c8902b] mx-auto mt-3 rounded-full" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {prestasiSiswa.map((p) => (
                <div key={p.event} className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:border-[#1a6b3a] transition-colors">
                  <span className="text-3xl">{p.medal}</span>
                  <div className="flex-1">
                    <div className="text-[13px] font-bold text-[#c8902b] mb-0.5">{p.juara}</div>
                    <div className="text-[14px] font-semibold text-gray-900 mb-1">{p.event}</div>
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] bg-[#1a6b3a]/10 text-[#1a6b3a] px-2.5 py-0.5 rounded-full font-semibold">{p.level}</span>
                      <span className="text-[12px] text-gray-400">{p.tahun}</span>
                    </div>
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
