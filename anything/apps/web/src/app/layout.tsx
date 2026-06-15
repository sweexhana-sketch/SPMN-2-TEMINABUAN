import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';
import './global.css';

export const metadata: Metadata = {
  title: 'SMPN 2 Teminabuan — Sekolah Unggulan Sorong Selatan, Papua Barat Daya',
  description:
    'Website resmi SMP Negeri 2 Teminabuan, Kabupaten Sorong Selatan, Papua Barat Daya. NPSN 60401770. Terakreditasi A. Mencetak generasi cerdas, berkarakter, dan berbudaya.',
  keywords: [
    'SMPN 2 Teminabuan',
    'SMP Negeri 2 Teminabuan',
    'Sekolah Teminabuan',
    'Sorong Selatan',
    'Papua Barat Daya',
    'PPDB',
    'Pendidikan Papua',
  ],
  authors: [{ name: 'SMPN 2 Teminabuan' }],
  openGraph: {
    title: 'SMPN 2 Teminabuan — Sekolah Unggulan Papua Barat Daya',
    description:
      'Mencetak generasi cerdas, berkarakter, dan berbudaya di Kabupaten Sorong Selatan.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />
        <link rel="icon" href="/images/logo-tutwuri.png" type="image/png" />
      </head>
      <body style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" }}>
        {children}
        <Toaster position="top-right" closeButton richColors />
      </body>
    </html>
  );
}
