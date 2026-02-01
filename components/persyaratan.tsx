import { CheckCircle } from 'lucide-react'

export function Persyaratan() {
  const requirements = [
    {
      kategori: 'Persyaratan Umum',
      items: [
        'Mahasiswa aktif perguruan tinggi negeri atau swasta terakreditasi',
        'Berada di semester 4-7 (atau setara) pada saat pendaftaran',
        'Memiliki Indeks Prestasi Kumulatif (IPK) minimal 2.7 dari skala 4.0',
        'Belum pernah mengikuti program magang Polda sebelumnya',
        'Memiliki surat rekomendasi dari akademik/kaprodi',
        'Siap mengikuti seleksi (administrasi, interview, dan tes kesehatan)'
      ]
    },
    {
      kategori: 'Persyaratan Dokumen',
      items: [
        'Fotokopi KTP atau kartu identitas pelajar yang masih berlaku',
        'Fotokopi Kartu Tanda Penduduk (KTP) orang tua',
        'Surat rekomendasi dari Dekan/Wakil Dekan (asli)',
        'Transkrip akademik resmi terbaru (dilegalisir)',
        'Surat izin dari orang tua (untuk yang masih dibawah 21 tahun)',
        'Fotokopi BPJS Kesehatan atau asuransi kesehatan lainnya',
        'Cv singkat dengan foto formal (3x4 cm)',
        'Surat pernyataan bahwa data yang diberikan adalah benar'
      ]
    }
  ]

  const criteria = [
    {
      title: 'Kesehatan Fisik & Mental',
      description: 'Harus lolos pemeriksaan kesehatan dari dokter resmi dan tidak memiliki gangguan kesehatan yang signifikan'
    },
    {
      title: 'Rekam Jejak Hukum',
      description: 'Tidak pernah dihukum atas suatu kejahatan, tidak sedang dalam proses hukum, dan memiliki karakter baik'
    },
    {
      title: 'Kelayakan Akademik',
      description: 'Nilai akademik yang baik menunjukkan komitmen terhadap pembelajaran dan pengembangan diri'
    },
    {
      title: 'Integritas Personal',
      description: 'Menunjukkan nilai-nilai kejujuran, disiplin, dan dedikasi yang sejalan dengan nilai institusi kepolisian'
    }
  ]

  return (
    <section id="persyaratan" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Persyaratan & Ketentuan
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Pelajari semua persyaratan yang diperlukan untuk mengikuti program magang di Polda Jawa Tengah.
          </p>
        </div>

        {/* Requirements Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {requirements.map((req, idx) => (
            <div key={idx} className="bg-secondary rounded-lg p-8 border-2 border-primary/10">
              <h3 className="text-xl font-bold text-primary mb-6 border-b-2 border-accent pb-3">
                {req.kategori}
              </h3>
              <ul className="space-y-3">
                {req.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex gap-3 items-start">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-text-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Kriteria Seleksi */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Kriteria Seleksi Peserta
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {criteria.map((crit, idx) => (
              <div key={idx} className="bg-primary/5 border-l-4 border-accent rounded p-6">
                <h4 className="font-bold text-lg text-primary mb-2">
                  {crit.title}
                </h4>
                <p className="text-text-light leading-relaxed">
                  {crit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-8">Jadwal Penerimaan</h3>
          <div className="space-y-6">
            <div className="flex gap-6 items-start md:items-center">
              <div className="w-24 font-bold text-accent flex-shrink-0">
                15 Jan - 15 Feb
              </div>
              <div>
                <p className="font-semibold">Pendaftaran Online</p>
                <p className="text-sm opacity-90">Buka pendaftaran calon peserta magang melalui portal resmi</p>
              </div>
            </div>
            <div className="border-t border-primary-foreground/20" />
            <div className="flex gap-6 items-start md:items-center">
              <div className="w-24 font-bold text-accent flex-shrink-0">
                20 - 28 Feb
              </div>
              <div>
                <p className="font-semibold">Verifikasi Dokumen</p>
                <p className="text-sm opacity-90">Tim kami akan memverifikasi kelengkapan dan keaslian dokumen</p>
              </div>
            </div>
            <div className="border-t border-primary-foreground/20" />
            <div className="flex gap-6 items-start md:items-center">
              <div className="w-24 font-bold text-accent flex-shrink-0">
                5 - 15 Mar
              </div>
              <div>
                <p className="font-semibold">Pelaksanaan Tes & Interview</p>
                <p className="text-sm opacity-90">Calon peserta mengikuti tes tertulis, wawancara, dan pemeriksaan kesehatan</p>
              </div>
            </div>
            <div className="border-t border-primary-foreground/20" />
            <div className="flex gap-6 items-start md:items-center">
              <div className="w-24 font-bold text-accent flex-shrink-0">
                25 Mar
              </div>
              <div>
                <p className="font-semibold">Pengumuman Hasil</p>
                <p className="text-sm opacity-90">Pengumuman peserta yang diterima melalui email dan portal</p>
              </div>
            </div>
            <div className="border-t border-primary-foreground/20" />
            <div className="flex gap-6 items-start md:items-center">
              <div className="w-24 font-bold text-accent flex-shrink-0">
                1 Apr - 30 Jun
              </div>
              <div>
                <p className="font-semibold">Pelaksanaan Magang</p>
                <p className="text-sm opacity-90">Program magang 3 bulan di unit kerja masing-masing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
