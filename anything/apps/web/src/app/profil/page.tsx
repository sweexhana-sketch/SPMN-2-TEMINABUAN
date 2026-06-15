import type { Metadata } from 'next';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Profil Sekolah — SMPN 2 Teminabuan',
  description: 'Profil lengkap SMP Negeri 2 Teminabuan: sejarah, visi misi, struktur organisasi, data sekolah, dan tenaga pendidik.',
};

const guruData = [
  { emoji: '👨‍💼', name: 'Drs. Yohanis Marey, M.Pd', jabatan: 'Kepala Sekolah', mapel: '—', pendidikan: 'S2 Manajemen Pendidikan', tahun: 'Sejak 2022' },
  { emoji: '👩‍🏫', name: 'Sitti Rahmawati, S.Pd', jabatan: 'Wakasek Kurikulum', mapel: 'IPA / Biologi', pendidikan: 'S1 Pendidikan Biologi', tahun: 'Guru Berprestasi 2024' },
  { emoji: '👨‍🏫', name: 'Melkyanus Kambu, S.Pd', jabatan: 'Wakasek Kesiswaan', mapel: 'Penjasorkes', pendidikan: 'S1 Penjaskes', tahun: 'Pelatih Nasional' },
  { emoji: '👩‍🏫', name: 'Yuliana Fakdawer, S.Pd', jabatan: 'Guru Seni Budaya', mapel: 'Seni Budaya', pendidikan: 'S1 Seni Rupa', tahun: 'Seniman Lokal' },
  { emoji: '👨‍🏫', name: 'Silas Kombado, S.Pd', jabatan: 'Guru IPS', mapel: 'Ilmu Pengetahuan Sosial', pendidikan: 'S1 Pendidikan IPS', tahun: 'Pembina Pramuka' },
  { emoji: '👩‍🏫', name: 'Maria Kocu, S.Pd', jabatan: 'Guru Bahasa Indonesia', mapel: 'Bahasa Indonesia', pendidikan: 'S1 Pendidikan Bahasa', tahun: 'Pelatih Paduan Suara' },
  { emoji: '👨‍🏫', name: 'Roni Ayamseba, S.Kom', jabatan: 'Guru TIK', mapel: 'Teknologi Informasi', pendidikan: 'S1 Sistem Informasi', tahun: 'IT Specialist' },
  { emoji: '👩‍🏫', name: 'Dewi Setiawati, S.Pd', jabatan: 'Guru Bahasa Inggris', mapel: 'Bahasa Inggris', pendidikan: 'S1 Pendidikan Bahasa Inggris', tahun: 'TOEFL 580' },
];

export default function ProfilPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0f4525] via-[#1a6b3a] to-[#1d8a46] py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <a href="/" className="hover:text-white transition-colors no-underline text-white/60">Beranda</a>
            <i className="ti ti-chevron-right text-xs" />
            <span className="text-white">Profil</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Profil Sekolah</h1>
          <p className="text-white/70 text-[15px]">Mengenal lebih dekat SMP Negeri 2 Teminabuan</p>
        </div>
      </div>

      {/* Tentang Sekolah */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <span className="inline-block bg-[#1a6b3a]/10 text-[#1a6b3a] text-xs font-semibold px-4 py-1 rounded-full tracking-wider mb-3">TENTANG KAMI</span>
              <h2 className="text-[28px] font-extrabold text-[#0f4525] mb-4 leading-snug">
                Membangun Generasi <span className="text-[#c8902b]">Cerdas & Berkarakter</span><br />di Papua Barat Daya
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                SMP Negeri 2 Teminabuan berdiri sejak tahun <strong>1987</strong> dan telah menjadi salah satu sekolah menengah pertama terbaik di Kabupaten Sorong Selatan, Papua Barat Daya. Berlokasi di Jl. Banesyowi, Kelurahan Kaibus, sekolah kami telah melahirkan ribuan alumni yang berkontribusi bagi kemajuan Papua dan Indonesia.
              </p>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-6">
                Dengan predikat <strong>Terakreditasi A</strong> dari BAN-S/M, SMPN 2 Teminabuan berkomitmen untuk memberikan pendidikan berkualitas dengan sentuhan kearifan lokal Papua. Kami mengimplementasikan <strong>Kurikulum Merdeka Belajar</strong> yang berpusat pada siswa dan mengintegrasikan muatan lokal budaya Papua dalam setiap aspek pembelajaran.
              </p>
              <div className="inline-flex items-center gap-2 bg-[#c8902b] text-white px-5 py-2.5 rounded-xl font-bold text-[15px]">
                <i className="ti ti-award" /> Akreditasi A — BAN-S/M
              </div>
            </div>

            {/* Data Sekolah */}
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-200">
              <h3 className="text-[17px] font-bold text-[#0f4525] mb-5 flex items-center gap-2">
                <i className="ti ti-building-school text-[#1a6b3a]" /> Data Sekolah
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Nama Resmi', value: 'SMP Negeri 2 Teminabuan' },
                  { label: 'NPSN', value: '60401770' },
                  { label: 'Status', value: 'Negeri' },
                  { label: 'Akreditasi', value: 'A (Unggul)' },
                  { label: 'Tahun Berdiri', value: '1987' },
                  { label: 'Kepala Sekolah', value: 'Drs. Yohanis Marey, M.Pd' },
                  { label: 'Alamat', value: 'Jl. Banesyowi, Kel. Kaibus, Teminabuan' },
                  { label: 'Kabupaten', value: 'Sorong Selatan' },
                  { label: 'Provinsi', value: 'Papua Barat Daya' },
                  { label: 'Kurikulum', value: 'Kurikulum Merdeka (Fase D)' },
                  { label: 'Jam Belajar', value: 'Senin–Kamis 07:00–14:00, Jumat 07:00–11:30' },
                ].map((d) => (
                  <div key={d.label} className="flex items-start justify-between gap-4 py-2.5 border-b border-gray-200 last:border-0">
                    <span className="text-[13px] text-gray-500 font-medium min-w-[140px]">{d.label}</span>
                    <span className="text-[13.5px] text-gray-900 font-semibold text-right">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section className="bg-[#0f4525] py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '650+', label: 'Siswa Aktif', icon: 'ti-users' },
              { num: '42', label: 'Guru & Staff', icon: 'ti-user-star' },
              { num: '18', label: 'Rombongan Belajar', icon: 'ti-school' },
              { num: '37', label: 'Tahun Pengabdian', icon: 'ti-calendar' },
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

      {/* Visi & Misi */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#1a6b3a] text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wider mb-3">VISI & MISI</span>
            <h2 className="text-[28px] font-extrabold text-[#0f4525]">Arah & Tujuan Kami</h2>
            <div className="w-14 h-[3px] bg-[#c8902b] mx-auto mt-3 rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-gradient-to-br from-[#0f4525] to-[#1a6b3a] text-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-[#c8902b] rounded-xl flex items-center justify-center text-white text-2xl">
                  <i className="ti ti-eye" />
                </div>
                <h3 className="text-xl font-bold">Visi</h3>
              </div>
              <p className="text-white/85 leading-relaxed text-[15px]">
                "Terwujudnya lulusan yang <strong className="text-white">cerdas, beriman, berkarakter Pancasila</strong>, dan berwawasan lokal-global yang mampu bersaing di era modern tanpa melupakan akar budaya Papua."
              </p>
            </div>
            {/* Misi */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-[#1a6b3a] rounded-xl flex items-center justify-center text-white text-2xl">
                  <i className="ti ti-target" />
                </div>
                <h3 className="text-xl font-bold text-[#0f4525]">Misi</h3>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  'Menyelenggarakan pembelajaran inovatif berbasis Kurikulum Merdeka yang berpusat pada siswa',
                  'Mengintegrasikan kearifan lokal Papua dalam proses pendidikan karakter',
                  'Membangun lingkungan sekolah yang aman, inklusif, dan kondusif',
                  'Meningkatkan kompetensi tenaga pendidik secara berkelanjutan',
                  'Menjalin kemitraan aktif dengan orang tua, masyarakat, dan pemerintah',
                ].map((m, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#1a6b3a] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</div>
                    <span className="text-gray-700 text-[14px] leading-relaxed">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Nilai Unggulan */}
          <div className="mt-8 bg-[#fdf4e3] rounded-2xl p-8 border border-[#e8d4aa]">
            <h3 className="text-lg font-bold text-[#0f4525] mb-5 text-center">Nilai-Nilai Unggulan Sekolah</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: 'ti-shield-check', label: 'Integritas', desc: 'Jujur, bertanggung jawab, dan amanah dalam setiap tindakan' },
                { icon: 'ti-users', label: 'Kolaborasi', desc: 'Bekerja sama untuk mencapai tujuan bersama yang lebih besar' },
                { icon: 'ti-bulb', label: 'Inovasi', desc: 'Kreatif dan adaptif menghadapi perubahan zaman' },
                { icon: 'ti-heart', label: 'Cinta Tanah Papua', desc: 'Bangga dan menjaga kearifan lokal budaya Papua' },
              ].map((v) => (
                <div key={v.label} className="text-center bg-white rounded-xl p-5 border border-[#e8d4aa]">
                  <div className="w-12 h-12 bg-[#c8902b] rounded-xl flex items-center justify-center text-white text-2xl mx-auto mb-3">
                    <i className={`ti ${v.icon}`} />
                  </div>
                  <div className="font-bold text-[#0f4525] text-[14px] mb-1">{v.label}</div>
                  <div className="text-gray-500 text-[12px] leading-relaxed">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tenaga Pendidik */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#1a6b3a] text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wider mb-3">TENAGA PENDIDIK</span>
            <h2 className="text-[28px] font-extrabold text-[#0f4525] mb-2">Guru & Staff Pengajar</h2>
            <p className="text-gray-400 text-[15px] max-w-[500px] mx-auto">Didukung oleh tenaga pendidik berpengalaman dan berdedikasi tinggi</p>
            <div className="w-14 h-[3px] bg-[#c8902b] mx-auto mt-3 rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {guruData.map((g) => (
              <div key={g.name} className="bg-white border border-gray-200 rounded-2xl overflow-hidden text-center hover:border-[#1a6b3a] hover:shadow-md transition-all">
                <div className="h-[110px] bg-gradient-to-br from-[#0f4525] to-[#2d9e58] flex items-center justify-center text-[42px]">{g.emoji}</div>
                <div className="p-4">
                  <div className="text-sm font-bold text-gray-900 mb-0.5">{g.name}</div>
                  <div className="text-[12px] text-[#1a6b3a] font-semibold mb-1">{g.jabatan}</div>
                  <div className="text-[12px] text-gray-400 mb-2">{g.mapel}</div>
                  <span className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#1a6b3a]/10 text-[#1a6b3a]">{g.tahun}</span>
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
