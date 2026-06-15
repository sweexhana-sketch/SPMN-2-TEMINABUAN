import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      {/* ===================== HERO ===================== */}
      <section className="hero-pattern relative bg-gradient-to-br from-[#0f4525] via-[#1a6b3a] to-[#1d8a46] min-h-[520px] flex items-center overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-5">
              <i className="ti ti-star-filled text-[#e8b04a]" /> Terakreditasi A — NPSN 60401770
            </div>
            <h2 className="text-4xl md:text-[42px] font-extrabold text-white leading-[1.15] mb-4">
              Sekolah Menengah Pertama<br />
              <span className="text-[#e8b04a]">Unggulan Papua</span><br />
              Barat Daya
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-7 max-w-lg">
              SMPN 2 Teminabuan hadir untuk mencetak generasi cerdas, berkarakter, dan berbudaya di jantung Sorong Selatan. Bergabunglah bersama kami dalam perjalanan pendidikan yang bermakna.
            </p>
            <div className="flex gap-3 flex-wrap mb-10">
              <Link href="/ppdb" className="inline-flex items-center gap-2 bg-[#c8902b] hover:bg-[#e8b04a] text-white px-6 py-3 rounded-[9px] font-semibold text-[15px] transition-colors no-underline">
                <i className="ti ti-arrow-right" /> Daftar Sekarang
              </Link>
              <Link href="/profil" className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-6 py-3 rounded-[9px] font-medium text-[15px] transition-colors no-underline">
                <i className="ti ti-info-circle" /> Tentang Sekolah
              </Link>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: '650+', label: 'Siswa Aktif' },
                { num: '42', label: 'Tenaga Pengajar' },
                { num: '18', label: 'Ekskul Aktif' },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-[28px] font-extrabold text-[#e8b04a]">{s.num}</div>
                  <div className="text-xs text-white/75 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual — Info Cards */}
          <div className="flex flex-col gap-3">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-[#c8902b] rounded-lg flex items-center justify-center text-white text-lg"><i className="ti ti-calendar-event" /></div>
                <div>
                  <div className="text-white font-semibold text-sm">Tahun Ajaran 2025/2026</div>
                  <div className="text-white/60 text-xs">Aktif · Semester Ganjil</div>
                </div>
              </div>
              <p className="text-white/80 text-[13px] leading-relaxed">Penerimaan Peserta Didik Baru (PPDB) sedang dibuka. Segera daftarkan putra-putri Anda sebelum kuota terpenuhi.</p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-[#c8902b] rounded-lg flex items-center justify-center text-white text-lg"><i className="ti ti-trophy" /></div>
                <div>
                  <div className="text-white font-semibold text-sm">Prestasi Terbaru</div>
                  <div className="text-white/60 text-xs">Juara 1 OSN IPA Tingkat Kabupaten</div>
                </div>
              </div>
              <p className="text-white/80 text-[13px] leading-relaxed">Siswa kami meraih Juara 1 Olimpiade Sains Nasional bidang IPA di tingkat Kabupaten Sorong Selatan, Mei 2025.</p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-[#c8902b] rounded-lg flex items-center justify-center text-white text-lg"><i className="ti ti-clock" /></div>
                <div>
                  <div className="text-white font-semibold text-sm">Jadwal Kegiatan Hari Ini</div>
                  <div className="text-white/60 text-xs">{new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</div>
                </div>
              </div>
              <p className="text-white/80 text-[13px] leading-relaxed">07:00 — Upacara Bendera · 08:00 — KBM Reguler · 14:00 — Ekskul Pramuka & Olahraga</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TICKER ===================== */}
      <div className="bg-[#fdf4e3] border-t-[3px] border-[#c8902b] border-b border-b-[#e8d4aa]">
        <div className="max-w-[1200px] mx-auto px-0 flex items-stretch">
          <div className="bg-[#c8902b] text-white text-xs font-bold px-5 py-2.5 flex items-center gap-2 flex-shrink-0 whitespace-nowrap">
            <i className="ti ti-bell-ringing" /> PENGUMUMAN
          </div>
          <div className="overflow-hidden flex-1 flex items-center px-4">
            <div className="ticker-animate flex gap-12 whitespace-nowrap">
              {[
                'PPDB Tahun Ajaran 2025/2026 Dibuka — Kuota Terbatas!',
                'Ujian Akhir Semester Ganjil: 10–20 Juni 2026',
                'Lomba Seni Budaya Papua 22 Juni 2026 — Daftarkan Tim Anda!',
                'Pembagian Rapor Semester Ganjil: 28 Juni 2026',
                'PPDB Tahun Ajaran 2025/2026 Dibuka — Kuota Terbatas!',
                'Ujian Akhir Semester Ganjil: 10–20 Juni 2026',
                'Lomba Seni Budaya Papua 22 Juni 2026 — Daftarkan Tim Anda!',
                'Pembagian Rapor Semester Ganjil: 28 Juni 2026',
              ].map((t, i) => (
                <span key={i} className="flex items-center gap-2 text-[13px] text-[#0f4525] font-medium cursor-pointer hover:text-[#c8902b] transition-colors">
                  <span className="w-1.5 h-1.5 bg-[#c8902b] rounded-full flex-shrink-0" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===================== QUICK ACCESS ===================== */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { icon: 'ti-user-plus', label: 'PPDB Online', href: '/ppdb' },
              { icon: 'ti-calendar-month', label: 'Kalender Akademik', href: '/akademik' },
              { icon: 'ti-building-school', label: 'Profil Sekolah', href: '/profil' },
              { icon: 'ti-star', label: 'Ekstrakurikuler', href: '/kesiswaan' },
              { icon: 'ti-map-pin', label: 'Lokasi Sekolah', href: '/kontak' },
              { icon: 'ti-headset', label: 'Hubungi Kami', href: '/kontak' },
            ].map((q) => (
              <Link key={q.label} href={q.href} className="card-hover bg-white border border-gray-200 rounded-2xl p-5 text-center no-underline hover:border-[#1a6b3a] group">
                <div className="w-[52px] h-[52px] bg-[#1a6b3a]/10 rounded-xl flex items-center justify-center mx-auto mb-2.5 text-[#1a6b3a] text-2xl transition-colors group-hover:bg-[#1a6b3a] group-hover:text-white">
                  <i className={`ti ${q.icon}`} />
                </div>
                <div className="text-[13px] font-semibold text-gray-700">{q.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BERITA PREVIEW ===================== */}
      <section className="py-[72px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#1a6b3a] text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wider mb-2.5">BERITA & INFORMASI</span>
            <h2 className="text-[30px] font-extrabold text-[#0f4525] mb-2.5">Berita Terkini Sekolah</h2>
            <p className="text-gray-400 text-[15px] max-w-[560px] mx-auto leading-relaxed">Update terbaru kegiatan, prestasi, dan informasi penting dari SMPN 2 Teminabuan.</p>
            <div className="w-14 h-[3px] bg-[#c8902b] mx-auto mt-3.5 rounded-full" />
          </div>
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-6">
            {/* Main News */}
            <div className="card-hover rounded-2xl overflow-hidden border border-gray-200 bg-white group">
              <div className="h-[220px] relative overflow-hidden">
                <Image src="/images/event-pramuka.webp" alt="Event Pramuka SMPN 2 Teminabuan" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3.5 left-3.5 bg-[#c8902b] text-white text-[11.5px] font-bold px-3 py-1 rounded-full">Prestasi</div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2.5"><i className="ti ti-calendar" /> 5 Juni 2026 <i className="ti ti-point" /> Admin</div>
                <h3 className="text-[16.5px] font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#1a6b3a] transition-colors">Siswa SMPN 2 Teminabuan Raih Juara 1 OSN Bidang IPA Tingkat Kabupaten Sorong Selatan</h3>
                <p className="text-[13.5px] text-gray-400 leading-relaxed">Atas nama seluruh keluarga besar SMPN 2 Teminabuan, kami mengucapkan selamat kepada siswa yang berhasil meraih Juara 1 Olimpiade Sains Nasional bidang IPA tahun 2025...</p>
              </div>
            </div>

            {/* Side News */}
            <div className="flex flex-col gap-4">
              {[
                { emoji: '📚', cat: 'Akademik', title: 'Peluncuran Program Literasi Digital Siswa 2025', date: '1 Juni 2026' },
                { emoji: '🎨', cat: 'Seni Budaya', title: 'Festival Seni Tradisional Papua di Hari Jadi Sekolah', date: '28 Mei 2026' },
                { emoji: '⚽', cat: 'Olahraga', title: 'Tim Sepak Bola Lolos ke Final Turnamen Antar-SMP', date: '20 Mei 2026' },
                { emoji: '🌿', cat: 'Lingkungan', title: 'Program Adiwiyata: Penghijauan Halaman Sekolah', date: '15 Mei 2026' },
              ].map((n) => (
                <Link key={n.title} href="/berita" className="card-hover flex gap-3.5 p-3.5 rounded-xl border border-gray-200 bg-white no-underline text-gray-900 hover:border-[#1a6b3a] group">
                  <div className="w-[70px] h-[70px] rounded-lg bg-gradient-to-br from-[#0f4525] to-[#2d9e58] flex-shrink-0 flex items-center justify-center text-[26px]">{n.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold text-[#1a6b3a] uppercase tracking-wider">{n.cat}</div>
                    <div className="text-[13.5px] font-semibold leading-snug mt-0.5 mb-1 line-clamp-2 group-hover:text-[#1a6b3a] transition-colors">{n.title}</div>
                    <div className="text-[11.5px] text-gray-400 flex items-center gap-1"><i className="ti ti-calendar" style={{ fontSize: 11 }} /> {n.date}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/berita" className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#1a6b3a] text-[#1a6b3a] rounded-[9px] text-sm font-semibold hover:bg-[#1a6b3a] hover:text-white transition-colors no-underline">
              <i className="ti ti-arrow-right" /> Lihat Semua Berita
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== PPDB BANNER ===================== */}
      <section className="bg-gradient-to-br from-[#c8902b] to-[#e8b04a] py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="inline-block bg-white/30 text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wider mb-4">PPDB 2025/2026</span>
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-white mb-4 leading-tight">Penerimaan Peserta Didik Baru Dibuka!</h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Daftarkan putra-putri Anda sekarang dan bergabunglah bersama keluarga besar SMPN 2 Teminabuan. Proses pendaftaran mudah, cepat, dan transparan secara online.
          </p>
          <Link href="/ppdb" className="inline-flex items-center gap-2 bg-white text-[#c8902b] hover:bg-[#0f4525] hover:text-white px-8 py-3.5 rounded-xl font-bold text-[16px] transition-colors no-underline shadow-lg hover:shadow-xl">
            <i className="ti ti-arrow-right" /> Daftar Online Sekarang
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
