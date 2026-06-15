'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/profil', label: 'Profil' },
  { href: '/akademik', label: 'Akademik' },
  { href: '/kesiswaan', label: 'Kesiswaan' },
  { href: '/fasilitas', label: 'Fasilitas' },
  { href: '/berita', label: 'Berita' },
  { href: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* ===================== TOPBAR ===================== */}
      <div className="bg-[#0f4525] text-white text-xs py-2">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center flex-wrap gap-2">
          <div className="flex gap-5 items-center flex-wrap">
            <span className="flex items-center gap-1.5 opacity-90">
              <i className="ti ti-map-pin text-sm" />
              Jl. Banesyowi, Kel. Kaibus, Teminabuan, Sorong Selatan
            </span>
            <span className="flex items-center gap-1.5 opacity-90 hidden sm:flex">
              <i className="ti ti-phone text-sm" />
              (0951) 321-456
            </span>
            <span className="flex items-center gap-1.5 opacity-90 hidden md:flex">
              <i className="ti ti-mail text-sm" />
              smpn2teminabuan@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity"><i className="ti ti-brand-facebook text-sm" /></a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity"><i className="ti ti-brand-instagram text-sm" /></a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity"><i className="ti ti-brand-youtube text-sm" /></a>
          </div>
        </div>
      </div>

      {/* ===================== NAVBAR ===================== */}
      <nav className="bg-white border-b-2 border-[#1a6b3a] sticky top-0 z-50 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[70px]">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 no-underline">
            <div className="w-[52px] h-[52px] rounded-full overflow-hidden flex-shrink-0 bg-white border-2 border-[#1a6b3a]">
              <Image src="/images/logo-tutwuri.png" alt="Logo Tut Wuri Handayani" width={52} height={52} className="object-contain w-full h-full" />
            </div>
            <div>
              <div className="text-[15px] font-bold text-[#0f4525] leading-tight">SMPN 2 Teminabuan</div>
              <p className="text-[11px] text-gray-400 font-medium">Sorong Selatan — Papua Barat Daya</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all no-underline ${
                    isActive
                      ? 'bg-[#1a6b3a] text-white'
                      : 'text-gray-700 hover:bg-[#1a6b3a] hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/ppdb"
              className="hidden sm:inline-flex bg-[#c8902b] hover:bg-[#e8b04a] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors no-underline"
            >
              Daftar PPDB 2025
            </Link>
            <button
              className="lg:hidden w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className={`ti ${mobileMenuOpen ? 'ti-x' : 'ti-menu-2'} text-xl`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg font-medium text-sm no-underline ${
                    isActive ? 'bg-[#1a6b3a] text-white' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/ppdb"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg bg-[#c8902b] text-white font-semibold text-sm text-center mt-2 no-underline"
            >
              Daftar PPDB 2025
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
