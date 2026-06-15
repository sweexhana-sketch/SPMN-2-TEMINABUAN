'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export default function KontakPage() {
  const [contactForm, setContactForm] = useState({
    nama: '', telepon: '', email: '', keperluan: 'Informasi Umum', pesan: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setContactForm({ nama: '', telepon: '', email: '', keperluan: 'Informasi Umum', pesan: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0f4525] via-[#1a6b3a] to-[#1d8a46] py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <Link href="/" className="hover:text-white transition-colors no-underline text-white/60">Beranda</Link>
            <i className="ti ti-chevron-right text-xs" />
            <span className="text-white">Kontak</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Hubungi Kami</h1>
          <p className="text-white/70 text-[15px]">Kami siap membantu menjawab pertanyaan Anda terkait sekolah</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10">
            {/* Info Kontak */}
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-[26px] font-extrabold text-[#0f4525] mb-2">Informasi Kontak</h2>
                <p className="text-gray-500 text-[14.5px] leading-relaxed mb-6">Jangan ragu untuk menghubungi kami melalui saluran berikut jika Anda memerlukan bantuan atau informasi lebih lanjut.</p>
              </div>

              {[
                { icon: 'ti-map-pin', label: 'Alamat Sekolah', value: 'Jl. Banesyowi, Kelurahan Kaibus,<br/>Kecamatan Teminabuan,<br/>Kabupaten Sorong Selatan,<br/>Papua Barat Daya' },
                { icon: 'ti-phone', label: 'Telepon & WhatsApp', value: '(0951) 321-456<br/>+62 812-3456-7890 (WA Admin)' },
                { icon: 'ti-mail', label: 'Email Resmi', value: 'smpn2teminabuan@gmail.com' },
                { icon: 'ti-clock', label: 'Jam Operasional Kantor', value: 'Senin–Kamis: 07:00–15:00<br/>Jumat: 07:00–12:00<br/>Sabtu & Minggu: Tutup' },
              ].map((c) => (
                <div key={c.label} className="flex gap-4 items-start p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-[#1a6b3a] transition-colors">
                  <div className="w-12 h-12 bg-[#c8902b]/10 rounded-xl flex items-center justify-center text-[#c8902b] text-2xl flex-shrink-0">
                    <i className={`ti ${c.icon}`} />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-1">{c.label}</div>
                    <div className="text-[15px] font-medium text-gray-900 leading-relaxed" dangerouslySetInnerHTML={{ __html: c.value }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Form Kontak */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm h-fit">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#1a6b3a] rounded-xl flex items-center justify-center text-white text-xl">
                  <i className="ti ti-mail-forward" />
                </div>
                <h3 className="text-[22px] font-bold text-[#0f4525]">Kirim Pesan Online</h3>
              </div>
              
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-3xl mx-auto mb-4">
                    <i className="ti ti-check" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Pesan Berhasil Terkirim!</h4>
                  <p className="text-sm">Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.</p>
                </div>
              ) : null}

              <form onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-[13px] font-semibold text-gray-700 mb-1.5 block">Nama Lengkap <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1a6b3a] focus:ring-4 focus:ring-[#1a6b3a]/10 transition-all"
                      placeholder="Masukkan nama Anda"
                      value={contactForm.nama}
                      onChange={(e) => setContactForm({ ...contactForm, nama: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[13px] font-semibold text-gray-700 mb-1.5 block">Nomor WhatsApp</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1a6b3a] focus:ring-4 focus:ring-[#1a6b3a]/10 transition-all"
                      placeholder="Contoh: 08123456789"
                      value={contactForm.telepon}
                      onChange={(e) => setContactForm({ ...contactForm, telepon: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="text-[13px] font-semibold text-gray-700 mb-1.5 block">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1a6b3a] focus:ring-4 focus:ring-[#1a6b3a]/10 transition-all"
                    placeholder="email@contoh.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="text-[13px] font-semibold text-gray-700 mb-1.5 block">Keperluan <span className="text-red-500">*</span></label>
                  <select
                    className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1a6b3a] focus:ring-4 focus:ring-[#1a6b3a]/10 transition-all appearance-none bg-white"
                    value={contactForm.keperluan}
                    onChange={(e) => setContactForm({ ...contactForm, keperluan: e.target.value })}
                  >
                    <option>Informasi Umum</option>
                    <option>Informasi PPDB (Pendaftaran)</option>
                    <option>Pertanyaan Akademik / Nilai</option>
                    <option>Kerjasama & Kemitraan</option>
                    <option>Kritik & Saran</option>
                    <option>Lainnya</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label className="text-[13px] font-semibold text-gray-700 mb-1.5 block">Isi Pesan <span className="text-red-500">*</span></label>
                  <textarea
                    className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#1a6b3a] focus:ring-4 focus:ring-[#1a6b3a]/10 transition-all resize-y min-h-[120px]"
                    placeholder="Tuliskan pesan Anda secara detail di sini..."
                    value={contactForm.pesan}
                    onChange={(e) => setContactForm({ ...contactForm, pesan: e.target.value })}
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#1a6b3a] hover:bg-[#0f4525] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <i className="ti ti-send" /> Kirim Pesan
                </button>
              </form>
            </div>
          </div>
          
          {/* Peta Lokasi */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[24px] font-extrabold text-[#0f4525]">Lokasi Kami</h2>
              <a href="#" className="text-[#c8902b] font-semibold text-sm hover:underline flex items-center gap-1">
                Buka di Google Maps <i className="ti ti-external-link" />
              </a>
            </div>
            <div className="w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden border border-gray-300 flex items-center justify-center relative">
              {/* Dummy Map Placeholder */}
              <div className="absolute inset-0 bg-[#e5e7eb] flex flex-col items-center justify-center text-gray-400">
                <i className="ti ti-map text-5xl mb-3 opacity-50" />
                <p className="font-medium">Integrasi Google Maps Embed diletakkan di sini</p>
                <p className="text-sm mt-1">Koordinat: Teminabuan, Sorong Selatan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
