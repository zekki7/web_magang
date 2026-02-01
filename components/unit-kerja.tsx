export function UnitKerja() {
  const units = [
    {
      id: 1,
      name: 'Direktorat Reserse Kriminal',
      deskripsi: 'Bertugas menangani kejahatan umum dan khusus',
      kuota: 5,
      kualifikasi: ['Min. IPK 2.8', 'Komunikasi baik', 'Analitik tinggi']
    },
    {
      id: 2,
      name: 'Direktorat Operasional',
      deskripsi: 'Mengelola operasi kepolisian dan keamanan publik',
      kuota: 4,
      kualifikasi: ['Min. IPK 2.7', 'Fisik prima', 'Kepemimpinan']
    },
    {
      id: 3,
      name: 'Direktorat Lalu Lintas',
      deskripsi: 'Menangani keselamatan jalan raya dan registrasi kendaraan',
      kuota: 6,
      kualifikasi: ['Min. IPK 2.8', 'Detail-oriented', 'Disiplin']
    },
    {
      id: 4,
      name: 'Direktorat Jaga Malam',
      deskripsi: 'Pengamanan 24 jam dan respons cepat terhadap insiden',
      kuota: 5,
      kualifikasi: ['Min. IPK 2.7', 'Tanggap situasi', 'Berani']
    },
    {
      id: 5,
      name: 'Direktorat Pemberdayaan Masyarakat',
      deskripsi: 'Program keamanan komunitas dan sosialisasi hukum',
      kuota: 5,
      kualifikasi: ['Min. IPK 2.8', 'Komunikasi sosial', 'Empati']
    },
    {
      id: 6,
      name: 'Direktorat Teknis Kriminal',
      deskripsi: 'Forensik, identifikasi, dan penyelidikan teknis',
      kuota: 4,
      kualifikasi: ['Min. IPK 3.0', 'STEM background', 'Presisi']
    },
    {
      id: 7,
      name: 'Direktorat Intelijen',
      deskripsi: 'Pengumpulan dan analisis informasi keamanan',
      kuota: 3,
      kualifikasi: ['Min. IPK 3.1', 'Analitik', 'Keamanan data']
    },
    {
      id: 8,
      name: 'Direktorat Sumber Daya Manusia',
      deskripsi: 'Pengembangan SDM dan administrasi kepegawaian',
      kuota: 3,
      kualifikasi: ['Min. IPK 2.9', 'Administrasi', 'Manajemen']
    }
  ]

  return (
    <section id="unit-kerja" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Unit Kerja & Bidang Magang
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Pilih unit kerja yang sesuai dengan minat dan kompetensi Anda. Setiap unit menawarkan pengalaman unik dan berharga.
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {units.map((unit) => (
            <div
              key={unit.id}
              className="bg-background rounded-lg border-2 border-primary/10 p-6 hover:shadow-xl hover:border-accent transition-all"
            >
              {/* Unit Name */}
              <h3 className="font-bold text-lg text-primary mb-3">
                {unit.name}
              </h3>

              {/* Deskripsi */}
              <p className="text-sm text-text-light mb-4 leading-relaxed">
                {unit.deskripsi}
              </p>

              {/* Kuota */}
              <div className="mb-4 pb-4 border-b border-border">
                <p className="text-sm font-semibold text-primary">
                  Kuota: <span className="text-accent">{unit.kuota} peserta</span>
                </p>
              </div>

              {/* Kualifikasi */}
              <div>
                <p className="text-xs font-bold text-primary/80 mb-2 uppercase">
                  Kualifikasi
                </p>
                <ul className="space-y-1">
                  {unit.kualifikasi.map((qual, idx) => (
                    <li key={idx} className="text-xs text-text-light flex items-start gap-2">
                      <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-primary/5 border-l-4 border-accent rounded p-8">
          <h3 className="font-bold text-lg text-primary mb-3">Informasi Penting</h3>
          <ul className="space-y-2 text-text-light">
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Total kuota penerimaan adalah 35 peserta untuk tahun ini</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Penempatan unit kerja didasarkan pada nilai akademik dan hasil interview</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Peserta dapat memilih sampai dengan 3 pilihan unit kerja sesuai preferensi</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Setiap unit kerja memiliki mentor yang siap membimbing peserta magang</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
