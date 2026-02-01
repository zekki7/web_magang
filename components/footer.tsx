import { MapPin, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12" id="kontak">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Tentang */}
          <div>
            <h3 className="font-bold text-lg mb-4">Polda Jawa Tengah</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Kepolisian Daerah Jawa Tengah berkomitmen untuk memberikan pengalaman magang yang berkualitas dan mendidik bagi mahasiswa Indonesia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#beranda" className="opacity-90 hover:opacity-100 transition-opacity">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#program" className="opacity-90 hover:opacity-100 transition-opacity">
                  Program Magang
                </a>
              </li>
              <li>
                <a href="#pendaftaran" className="opacity-90 hover:opacity-100 transition-opacity">
                  Pendaftaran
                </a>
              </li>
              <li>
                <a href="#pengumuman" className="opacity-90 hover:opacity-100 transition-opacity">
                  Pengumuman
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontak Kami</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <p className="opacity-90">
                  Jl. Letjen Sutoyo No.1, Semarang<br />
                  Jawa Tengah, 50192
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:magang@polda-jateng.go.id" className="opacity-90 hover:opacity-100 transition-opacity">
                  magang@polda-jateng.go.id
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+62274514488" className="opacity-90 hover:opacity-100 transition-opacity">
                  (0274) 514488
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 Kepolisian Daerah Jawa Tengah. Hak cipta dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  )
}
