import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0a2e18] text-white pt-14 pb-6">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-white border-2 border-[#1a6b3a] flex-shrink-0">
                <Image src="/images/logo-tutwuri.png" alt="Logo SMPN 2 Teminabuan" width={50} height={50} className="object-contain w-full h-full" />
              </div>
              <div>
                <div className="font-bold text-[14px] leading-tight">SMPN 2 Teminabuan</div>
                <div className="text-[11px] text-white/50">Sorong Selatan</div>
              </div>
            </div>
            <p className="text-white/60 text-[13px] leading-relaxed mb-4">
              Mencetak generasi cerdas, berkarakter, dan berbudaya di jantung Papua Barat Daya.
            </p>
            <div className="flex gap-3">
              {[
                { icon: 'ti-brand-facebook', href: '#' },
                { icon: 'ti-brand-instagram', href: '#' },
                { icon: 'ti-brand-youtube', href: '#' },
              ].map((s) => (
                <a key={s.icon} href={s.href} className="w-8 h-8 bg-white/10 hover:bg-[#1a6b3a] rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-all">
                  <i className={`ti ${s.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <div className="text-xs font-bold text-[#e8b04a] uppercase tracking-widest mb-4">Menu Utama</div>
            <div className="flex flex-col gap-2.5">
              {[
                { href: '/', label: 'Beranda' },
                { href: '/profil', label: 'Profil Sekolah' },
                { href: '/akademik', label: 'Akademik' },
                { href: '/kesiswaan', label: 'Kesiswaan' },
                { href: '/fasilitas', label: 'Fasilitas' },
                { href: '/berita', label: 'Berita' },
                { href: '/kontak', label: 'Kontak' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-white/65 hover:text-white text-[13.5px] transition-colors no-underline flex items-center gap-1.5">
                  <i className="ti ti-chevron-right text-[10px] text-[#e8b04a]" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Layanan */}
          <div>
            <div className="text-xs font-bold text-[#e8b04a] uppercase tracking-widest mb-4">Layanan</div>
            <div className="flex flex-col gap-2.5">
              {[
                { href: '/ppdb', label: 'PPDB Online 2025' },
                { href: '#', label: 'E-Raport Siswa' },
                { href: '#', label: 'Kalender Akademik' },
                { href: '#', label: 'Unduh Formulir' },
                { href: '/berita', label: 'Pengumuman' },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="text-white/65 hover:text-white text-[13.5px] transition-colors no-underline flex items-center gap-1.5">
                  <i className="ti ti-chevron-right text-[10px] text-[#e8b04a]" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Kontak */}
          <div>
            <div className="text-xs font-bold text-[#e8b04a] uppercase tracking-widest mb-4">Kontak</div>
            <div className="flex flex-col gap-3">
              {[
                { icon: 'ti-map-pin', text: 'Jl. Banesyowi, Kel. Kaibus, Teminabuan, Sorong Selatan' },
                { icon: 'ti-phone', text: '(0951) 321-456' },
                { icon: 'ti-mail', text: 'smpn2teminabuan@gmail.com' },
                { icon: 'ti-clock', text: 'Senin–Kamis: 07:00–14:00' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-2.5">
                  <i className={`ti ${item.icon} text-[#e8b04a] text-sm mt-0.5 flex-shrink-0`} />
                  <span className="text-white/60 text-[13px] leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-white/40 text-[12.5px]">
            © {new Date().getFullYear()} SMP Negeri 2 Teminabuan · NPSN 60401770 · Terakreditasi A
          </div>
          <div className="flex items-center gap-2 text-white/40 text-[12px]">
            <i className="ti ti-heart-filled text-red-400 text-[10px]" />
            Website Resmi SMPN 2 Teminabuan
          </div>
        </div>
      </div>
    </footer>
  );
}
