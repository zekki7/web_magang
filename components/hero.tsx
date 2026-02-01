'use client';

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  onRegisterClick: () => void
}

export function Hero({ onRegisterClick }: HeroProps) {
  return (
    <section
      id="beranda"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Penerimaan Magang Mahasiswa
              </h1>
              <p className="text-xl text-text-light font-medium">
                Polda Jawa Tengah
              </p>
            </div>

            <p className="text-lg text-text-light leading-relaxed">
              Bergabunglah dengan program magang kami dan dapatkan pengalaman berharga bekerja di institusi kepolisian negara. Kami menawarkan kesempatan untuk belajar langsung dari profesional berpengalaman.
            </p>

            <div className="flex gap-4 pt-4">
              <button
                onClick={onRegisterClick}
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                Daftar Sekarang
                <ArrowRight size={20} />
              </button>
              <Link
                href="#program"
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded hover:bg-primary/5 transition-colors"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-text-light">Peserta Aktif</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">8</p>
                <p className="text-sm text-text-light">Unit Kerja</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">3</p>
                <p className="text-sm text-text-light">Bulan Program</p>
              </div>
            </div>
          </div>

          {/* Right - Illustration */}
          <div className="hidden md:block">
            <div className="bg-primary/5 rounded-lg p-12 border-2 border-primary/10">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🎓</div>
                  <p className="text-primary font-bold">Program Magang</p>
                  <p className="text-sm text-text-light">Polda Jawa Tengah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
