import { AlertCircle, Calendar } from 'lucide-react'

export function Pengumuman() {
  const announcements = [
    {
      id: 1,
      type: 'penting',
      tanggal: '15 Januari 2024',
      judul: 'Pembukaan Pendaftaran Magang 2024',
      isi: 'Pendaftaran magang tahun 2024 resmi dibuka mulai hari ini. Peserta diharapkan segera melakukan registrasi melalui portal resmi kami sebelum batas waktu yang ditentukan.',
    },
    {
      id: 2,
      type: 'info',
      tanggal: '10 Januari 2024',
      judul: 'Perubahan Jadwal Pelaksanaan Tes',
      isi: 'Jadwal pelaksanaan tes seleksi telah diubah dari tanggal 5 Maret menjadi 20 Februari 2024. Peserta yang telah lulus verifikasi dokumen akan diberitahu perubahan ini melalui email resmi.',
    },
    {
      id: 3,
      type: 'info',
      tanggal: '8 Januari 2024',
      judul: 'Panduan Pengiriman Dokumen',
      isi: 'Untuk peserta yang ingin mengirimkan dokumen secara fisik, silakan datang ke kantor Polda Jawa Tengah di Jl. Letjen Sutoyo No.1, Semarang pada jam kerja (09:00 - 16:00 WIB).',
    },
    {
      id: 4,
      type: 'sukses',
      tanggal: '5 Januari 2024',
      judul: 'Pengumuman Peserta Lulus Verifikasi Dokumen',
      isi: 'Total 150 peserta telah lulus tahap verifikasi dokumen administrasi dan akan melanjutkan ke tahap tes seleksi. Daftar peserta dapat diakses melalui portal resmi menggunakan email pendaftar.',
    },
  ]

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'penting':
        return { bg: 'bg-red-50', text: 'text-red-700', label: 'Penting' }
      case 'sukses':
        return { bg: 'bg-green-50', text: 'text-green-700', label: 'Sukses' }
      default:
        return { bg: 'bg-blue-50', text: 'text-blue-700', label: 'Info' }
    }
  }

  return (
    <section id="pengumuman" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Pengumuman Terbaru
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Pantau informasi terbaru mengenai penerimaan magang, jadwal, dan pengumuman hasil seleksi.
          </p>
        </div>

        {/* Alerts Section */}
        <div className="mb-12 space-y-4">
          <div className="bg-red-50 border-l-4 border-red-500 rounded p-6">
            <div className="flex gap-4 items-start">
              <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-red-900 mb-1">Informasi Penting</h3>
                <p className="text-red-800 text-sm">
                  Pendaftaran ditutup 15 Februari 2024 pada pukul 17:00 WIB. Pastikan semua dokumen telah diunggah sebelum batas waktu berakhir.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Announcements List */}
        <div className="space-y-6">
          {announcements.map((announcement) => {
            const badge = getTypeBadge(announcement.type)
            return (
              <div
                key={announcement.id}
                className="bg-secondary border-2 border-primary/10 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-4 items-start mb-4">
                  <span
                    className={`px-3 py-1 rounded text-xs font-bold ${badge.bg} ${badge.text} flex-shrink-0`}
                  >
                    {badge.label}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-text-light flex-shrink-0 ml-auto">
                    <Calendar size={16} />
                    <span>{announcement.tanggal}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-primary mb-3">
                  {announcement.judul}
                </h3>
                <p className="text-text-light leading-relaxed">
                  {announcement.isi}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-primary/5 border-l-4 border-accent rounded p-8 text-center">
          <h3 className="text-xl font-bold text-primary mb-3">
            Ingin mendapatkan update terbaru?
          </h3>
          <p className="text-text-light mb-6">
            Daftarkan email Anda untuk menerima notifikasi tentang pengumuman dan jadwal penting lainnya.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-2 border-2 border-primary rounded focus:outline-none focus:border-primary"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
