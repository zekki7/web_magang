import { BookOpen, Users, Target, Award } from 'lucide-react'

export function Program() {
  const features = [
    {
      icon: BookOpen,
      title: 'Pembelajaran Praktis',
      description: 'Mendapatkan pengalaman langsung bekerja dalam operasional kepolisian modern dan profesional.'
    },
    {
      icon: Users,
      title: 'Mentor Berpengalaman',
      description: 'Dibimbing oleh profesional kepolisian yang berpengalaman dan berdedikasi dalam bidangnya.'
    },
    {
      icon: Target,
      title: 'Fokus Pengembangan',
      description: 'Program dirancang untuk mengembangkan skill profesional dan pemahaman tentang penegakan hukum.'
    },
    {
      icon: Award,
      title: 'Sertifikat Resmi',
      description: 'Mendapatkan sertifikat resmi dari Polda Jawa Tengah setelah menyelesaikan program.'
    }
  ]

  return (
    <section id="program" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Tentang Program Magang
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Kami menawarkan program magang komprehensif yang dirancang untuk mengembangkan kompetensi mahasiswa dalam lingkungan profesional kepolisian.
          </p>
        </div>

        {/* Grid Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-secondary rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon size={24} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-primary text-center mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-light text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Program Details */}
        <div className="bg-primary rounded-lg p-8 md:p-12 text-primary-foreground">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-3 border-b-2 border-accent pb-2">
                Durasi Program
              </h3>
              <p className="leading-relaxed">
                Program magang berlangsung selama 3 bulan dengan jadwal yang fleksibel sesuai dengan kebutuhan akademik peserta.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3 border-b-2 border-accent pb-2">
                Tujuan Program
              </h3>
              <p className="leading-relaxed">
                Memberikan wawasan mendalam tentang penegakan hukum dan meningkatkan pemahaman terhadap tugas-tugas kepolisian di lapangan.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3 border-b-2 border-accent pb-2">
                Manfaat Program
              </h3>
              <p className="leading-relaxed">
                Peserta akan mendapatkan sertifikat, pengalaman praktis, dan jaringan profesional yang berharga untuk karir masa depan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
