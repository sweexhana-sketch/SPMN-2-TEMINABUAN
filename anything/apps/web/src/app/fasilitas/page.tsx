import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Fasilitas — SMPN 2 Teminabuan',
  description: 'Fasilitas lengkap SMPN 2 Teminabuan: ruang kelas, laboratorium IPA, lab komputer, perpustakaan, lapangan olahraga, dan aula serbaguna.',
};

const fasilitasUtama = [
  {
    emoji: '🏫',
    nama: '18 Ruang Kelas',
    desc: 'Setiap ruang kelas dilengkapi dengan AC, proyektor interaktif, papan tulis elektronik, dan pencahayaan yang optimal untuk kenyamanan belajar.',
    detail: ['18 ruang kelas standar nasional', 'AC dan sirkulasi udara baik', 'Proyektor & papan tulis interaktif', 'Kapasitas 32–36 siswa/kelas'],
  },
  {
    emoji: '🔬',
    nama: 'Laboratorium IPA',
    desc: 'Laboratorium lengkap untuk praktikum fisika, kimia, dan biologi dengan peralatan modern yang mendukung pembelajaran sains secara langsung.',
    detail: ['Peralatan fisika, kimia & biologi', 'Mikroskop digital', 'Lemari penyimpanan reagen', 'Kapasitas 35 siswa/sesi'],
  },
  {
    emoji: '💻',
    nama: 'Laboratorium Komputer',
    desc: 'Laboratorium TIK dengan 40 unit komputer terbaru yang terhubung internet fiber optic berkecepatan tinggi untuk mendukung literasi digital.',
    detail: ['40 unit PC spesifikasi terkini', 'Internet fiber optic 100 Mbps', 'Sistem operasi Windows & Linux', 'Software edukatif berlisensi'],
  },
  {
    emoji: '📚',
    nama: 'Perpustakaan',
    desc: 'Koleksi lebih dari 5.000 buku pelajaran, novel, ensiklopedia, dan referensi ilmiah. Dilengkapi ruang baca yang nyaman dan sistem digital.',
    detail: ['5.000+ koleksi buku', 'Sistem katalog digital', 'Ruang baca ber-AC', 'Akses e-book & jurnal online'],
  },
  {
    emoji: '⛹️',
    nama: 'Lapangan Olahraga',
    desc: 'Kompleks olahraga multifungsi yang mencakup lapangan sepak bola, lapangan basket, dan lapangan voli standar untuk kegiatan PJOK dan ekskul.',
    detail: ['Lapangan sepak bola mini', 'Lapangan basket standar', 'Lapangan voli standar', 'Trek lari 200m'],
  },
  {
    emoji: '🎭',
    nama: 'Aula Serbaguna',
    desc: 'Aula besar berkapasitas 500 orang untuk kegiatan pentas seni, upacara adat, seminar, wisuda, dan berbagai kegiatan sekolah lainnya.',
    detail: ['Kapasitas 500 orang', 'Sound system profesional', 'Panggung permanen', 'AC central & proyektor besar'],
  },
  {
    emoji: '🕌',
    nama: 'Musholla & Kapel',
    desc: 'Fasilitas ibadah untuk semua agama tersedia di lingkungan sekolah, mencerminkan nilai toleransi dan keberagaman yang kami junjung tinggi.',
    detail: ['Musholla kapasitas 100 orang', 'Kapel untuk umat Kristiani', 'Peralatan ibadah lengkap', 'Tempat wudhu bersih'],
  },
  {
    emoji: '🍽️',
    nama: 'Kantin Sekolah',
    desc: 'Kantin bersih dan sehat dengan menu makanan bergizi yang terjangkau. Dikelola langsung oleh koperasi sekolah dengan pengawasan kebersihan ketat.',
    detail: ['8 stand makanan & minuman', 'Menu sehat & bergizi', 'Harga terjangkau siswa', 'Pengawasan kebersihan rutin'],
  },
  {
    emoji: '🅿️',
    nama: 'Area Parkir',
    desc: 'Area parkir luas dan tertata rapi untuk kendaraan guru, staff, dan tamu. Dilengkapi sistem keamanan 24 jam.',
    detail: ['Parkir roda 2 & roda 4', 'Sistem keamanan CCTV', 'Akses mudah dari jalan utama', 'Kapasitas 100+ kendaraan'],
  },
  {
    emoji: '🏥',
    nama: 'Ruang UKS',
    desc: 'Unit Kesehatan Sekolah yang siap melayani siswa dengan tenaga kesehatan terlatih dan perlengkapan P3K yang lengkap.',
    detail: ['Tenaga kesehatan terlatih', 'Perlengkapan P3K lengkap', '4 tempat tidur perawatan', 'Kerja sama dengan Puskesmas'],
  },
  {
    emoji: '🚿',
    nama: 'Toilet & Sanitasi',
    desc: 'Fasilitas toilet bersih terpisah antara putra dan putri di setiap gedung, dengan pembersihan rutin setiap hari.',
    detail: ['Toilet terpisah putra-putri', 'Pembersihan 2x sehari', 'Air bersih mengalir', 'Hand sanitizer tersedia'],
  },
  {
    emoji: '🔒',
    nama: 'Keamanan Sekolah',
    desc: 'Sistem keamanan 24 jam dengan petugas satpam, CCTV di setiap sudut, dan gerbang masuk yang dikontrol untuk keamanan seluruh warga sekolah.',
    detail: ['Satpam 24 jam', '32 kamera CCTV', 'Sistem absensi digital', 'Gerbang akses terkontrol'],
  },
];

export default function FasilitasPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0f4525] via-[#1a6b3a] to-[#1d8a46] py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <a href="/" className="hover:text-white transition-colors no-underline text-white/60">Beranda</a>
            <i className="ti ti-chevron-right text-xs" />
            <span className="text-white">Fasilitas</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Fasilitas Sekolah</h1>
          <p className="text-white/70 text-[15px]">Sarana dan prasarana lengkap untuk mendukung proses belajar mengajar</p>
        </div>
      </div>

      {/* Ringkasan Fasilitas */}
      <section className="bg-[#0f4525] py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '18', label: 'Ruang Kelas', icon: 'ti-school' },
              { num: '3', label: 'Laboratorium', icon: 'ti-flask' },
              { num: '5.000+', label: 'Koleksi Buku', icon: 'ti-book' },
              { num: '40', label: 'Unit Komputer', icon: 'ti-device-desktop' },
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

      {/* Galeri Foto */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#1a6b3a] text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wider mb-3">GALERI</span>
            <h2 className="text-[26px] font-extrabold text-[#0f4525]">Foto Fasilitas</h2>
            <div className="w-14 h-[3px] bg-[#c8902b] mx-auto mt-3 rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16" style={{ gridAutoRows: '180px' }}>
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden">
              <Image src="/images/guru-staff.webp" alt="Fasilitas SMPN 2 Teminabuan" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">Gedung Utama Sekolah</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image src="/images/papan-nama.webp" alt="Papan Nama SMPN 2 Teminabuan" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">Papan Nama Sekolah</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image src="/images/event-pramuka.webp" alt="Kegiatan Pramuka" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">Lapangan Upacara</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image src="/images/tari-tradisional.webp" alt="Tari Tradisional Papua" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">Aula Serbaguna</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a6b3a] to-[#2d9e58] flex items-center justify-center">
              <div className="text-center text-white p-4">
                <i className="ti ti-photo text-4xl block mb-2" />
                <p className="text-sm font-semibold">Lihat Lebih Banyak</p>
              </div>
            </div>
          </div>

          {/* Daftar Fasilitas */}
          <div className="text-center mb-12">
            <span className="inline-block bg-[#1a6b3a] text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wider mb-3">SARANA & PRASARANA</span>
            <h2 className="text-[26px] font-extrabold text-[#0f4525] mb-2">Fasilitas Lengkap</h2>
            <div className="w-14 h-[3px] bg-[#c8902b] mx-auto mt-3 rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {fasilitasUtama.map((f) => (
              <div key={f.nama} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#1a6b3a] hover:shadow-md transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{f.emoji}</span>
                  <div>
                    <h3 className="text-[16px] font-bold text-gray-900 mb-1">{f.nama}</h3>
                    <p className="text-[13.5px] text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {f.detail.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-[12.5px] text-gray-600">
                      <i className="ti ti-check text-[#1a6b3a] text-sm flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
