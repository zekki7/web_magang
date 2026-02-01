'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Program } from '@/components/program'
import { UnitKerja } from '@/components/unit-kerja'
import { Persyaratan } from '@/components/persyaratan'
import { RegistrationModal } from '@/components/registration-modal'
import { Pengumuman } from '@/components/pengumuman'
import { Footer } from '@/components/footer'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero onRegisterClick={handleOpenModal} />
      <Program />
      <UnitKerja />
      <Persyaratan />
      <Pengumuman />
      <Footer />
      <RegistrationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  )
}
