import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Penerimaan Peserta Didik Baru (PPDB) 2025/2026 — SMPN 2 Teminabuan',
  description: 'Informasi dan pendaftaran PPDB SMPN 2 Teminabuan Tahun Ajaran 2025/2026. Segera daftarkan putra-putri Anda!',
};

export default function PPDBPage() {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#c8902b] to-[#e8b04a] py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
            <Link href="/" className="hover:text-white transition-colors no-underline text-white/80">Beranda</Link>
            <i className="ti ti-chevron-right text-xs" />
            <span className="text-white font-medium">PPDB 2025</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">PPDB Online 2025/2026</h1>
          <p className="text-white/90 text-[15px] max-w-2xl">Mari bergabung menjadi bagian dari keluarga besar SMP Negeri 2 Teminabuan. Sekolah unggulan pencetak generasi cerdas dan berkarakter.</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_350px] gap-8">
            
            {/* Main Content */}
            <div className="flex flex-col gap-8">
              {/* Jalur Pendaftaran */}
              <div className="bg-white rounded-2xl p-7 border border-gray-200">
                <h2 className="text-[22px] font-extrabold text-[#0f4525] mb-5 border-b border-gray-100 pb-4">Jalur Pendaftaran</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Jalur Zonasi', desc: 'Bagi calon siswa yang berdomisili di dalam wilayah zonasi sekolah. Kuota: 50%', icon: 'ti-map-2' },
                    { title: 'Jalur Afirmasi', desc: 'Bagi calon siswa dari keluarga ekonomi tidak mampu & penyandang disabilitas. Kuota: 15%', icon: 'ti-heart-handshake' },
                    { title: 'Jalur Perpindahan Tugas', desc: 'Bagi calon siswa yang mengikuti perpindahan tugas orang tua/wali. Kuota: 5%', icon: 'ti-truck' },
                    { title: 'Jalur Prestasi', desc: 'Berdasarkan nilai rapor atau prestasi non-akademik (akademik/seni/olahraga). Kuota: 30%', icon: 'ti-trophy' },
                  ].map((jalur) => (
                    <div key={jalur.title} className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col h-full">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#c8902b] text-xl shadow-sm mb-3">
                        <i className={jalur.icon} />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1.5">{jalur.title}</h3>
                      <p className="text-[13px] text-gray-500 leading-relaxed flex-1">{jalur.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Syarat Pendaftaran */}
              <div className="bg-white rounded-2xl p-7 border border-gray-200">
                <h2 className="text-[22px] font-extrabold text-[#0f4525] mb-5 border-b border-gray-100 pb-4">Persyaratan Pendaftaran</h2>
                <div className="flex flex-col gap-3">
                  {[
                    'Berusia maksimal 15 tahun pada tanggal 1 Juli 2025.',
                    'Memiliki Ijazah/SKL SD/MI atau bentuk lain yang sederajat.',
                    'Scan/Fotokopi Kartu Keluarga (KK) minimal 1 tahun terakhir.',
                    'Scan/Fotokopi Akta Kelahiran.',
                    'Scan/Fotokopi Rapor kelas 4, 5, dan 6 (Semester 1).',
                    'Pas foto berwarna ukuran 3x4 (2 lembar).',
                    'Sertifikat Prestasi (khusus Jalur Prestasi).',
                    'Kartu PIP/PKH/KKS (khusus Jalur Afirmasi).',
                  ].map((syarat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#1a6b3a]/10 flex items-center justify-center text-[#1a6b3a] flex-shrink-0 mt-0.5">
                        <i className="ti ti-check text-xs" />
                      </div>
                      <span className="text-[14px] text-gray-700 leading-relaxed">{syarat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alur Pendaftaran */}
              <div className="bg-white rounded-2xl p-7 border border-gray-200">
                <h2 className="text-[22px] font-extrabold text-[#0f4525] mb-6 border-b border-gray-100 pb-4">Alur Pendaftaran Online</h2>
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200 hidden md:block"></div>
                  
                  <div className="flex flex-col gap-6">
                    {[
                      { step: 1, title: 'Buat Akun PPDB', desc: 'Akses portal PPDB SMPN 2 Teminabuan, buat akun dengan NISN dan Email aktif.' },
                      { step: 2, title: 'Isi Formulir & Unggah Berkas', desc: 'Login ke akun Anda, isi formulir data diri lengkap dan unggah dokumen persyaratan dalam format PDF/JPG.' },
                      { step: 3, title: 'Verifikasi Panitia', desc: 'Tunggu panitia melakukan verifikasi data secara online (maksimal 2x24 jam).' },
                      { step: 4, title: 'Cetak Bukti Pendaftaran', desc: 'Jika berkas disetujui, cetak bukti pendaftaran sebagai syarat lapor diri jika diterima.' },
                      { step: 5, title: 'Pengumuman Hasil', desc: 'Cek hasil seleksi melalui website resmi pada tanggal yang telah ditentukan.' },
                    ].map((alur) => (
                      <div key={alur.step} className="flex gap-4 md:gap-6 relative">
                        <div className="w-12 h-12 rounded-full bg-[#1a6b3a] flex items-center justify-center text-white font-bold text-lg flex-shrink-0 z-10 border-4 border-white shadow-sm">
                          {alur.step}
                        </div>
                        <div className="pt-2 pb-4">
                          <h4 className="text-[16px] font-bold text-gray-900 mb-1">{alur.title}</h4>
                          <p className="text-[13.5px] text-gray-500 leading-relaxed">{alur.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              {/* Jadwal Box */}
              <div className="bg-[#0f4525] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-5 flex items-center gap-2">
                  <i className="ti ti-calendar-event text-[#e8b04a]" /> Jadwal Penting
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    { date: '1 - 30 Juni 2026', event: 'Pendaftaran Online' },
                    { date: '1 - 7 Juli 2026', event: 'Verifikasi Berkas' },
                    { date: '10 Juli 2026', event: 'Pengumuman Kelulusan' },
                    { date: '11 - 18 Juli 2026', event: 'Daftar Ulang' },
                    { date: '20 Juli 2026', event: 'Hari Pertama Sekolah / MPLS' },
                  ].map((j, idx) => (
                    <div key={idx} className="border-l-2 border-[#e8b04a] pl-4">
                      <div className="text-[12px] text-white/60 font-semibold mb-0.5">{j.date}</div>
                      <div className="text-[14px] font-medium">{j.event}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Box */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Portal Pendaftaran</h3>
                <p className="text-[13px] text-gray-500 mb-5">Pendaftaran dilakukan secara penuh melalui sistem online.</p>
                <button className="w-full bg-[#c8902b] hover:bg-[#e8b04a] text-white font-bold py-3 rounded-xl transition-colors mb-3">
                  Buat Akun / Daftar
                </button>
                <button className="w-full bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300 font-bold py-2.5 rounded-xl transition-colors">
                  Login Pendaftar
                </button>
              </div>

              {/* Bantuan Box */}
              <div className="bg-[#fdf4e3] border border-[#e8d4aa] rounded-2xl p-6">
                <h3 className="font-bold text-[#0f4525] mb-2 text-sm">Butuh Bantuan?</h3>
                <p className="text-[12px] text-gray-600 mb-4">Tim panitia PPDB siap membantu kendala teknis pendaftaran Anda.</p>
                <div className="flex items-center gap-2 text-[13px] font-semibold text-[#0f4525] mb-2">
                  <i className="ti ti-brand-whatsapp text-green-600 text-lg" /> +62 812-3456-7890
                </div>
                <div className="flex items-center gap-2 text-[13px] font-semibold text-[#0f4525]">
                  <i className="ti ti-mail text-[#c8902b] text-lg" /> ppdb@smpn2teminabuan.sch.id
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
