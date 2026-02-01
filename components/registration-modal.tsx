'use client'

import React, { useState } from 'react'
import { FileUp, X } from 'lucide-react'

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    noHp: '',
    asal: '',
    semester: '',
    ipk: '',
    pilihan1: '',
    pilihan2: '',
    pilihan3: '',
    agama: '',
    statusPernikahan: 'belum menikah',
    kewarganegaraan: 'wni',
  })

  const [uploaded, setUploaded] = useState<Record<string, boolean>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileUpload = (field: string) => {
    setUploaded((prev) => ({
      ...prev,
      [field]: true,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Terima kasih telah mendaftar! Tim kami akan menghubungi Anda dalam waktu singkat.')
    onClose()
  }

  const unitKerjaOptions = [
    'Direktorat Reserse Kriminal',
    'Direktorat Operasional',
    'Direktorat Lalu Lintas',
    'Direktorat Jaga Malam',
    'Direktorat Pemberdayaan Masyarakat',
    'Direktorat Teknis Kriminal',
    'Direktorat Intelijen',
    'Direktorat Sumber Daya Manusia',
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-background rounded-lg shadow-2xl w-full max-w-4xl my-8">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b-2 border-primary/10 px-6 md:px-8 py-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-primary">Pendaftaran Online</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded transition-colors"
            aria-label="Close modal"
          >
            <X size={24} className="text-primary" />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          {/* Informasi Pribadi */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-6 pb-3 border-b-2 border-accent">
              Informasi Pribadi
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-border rounded focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-border rounded focus:outline-none focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Nomor Telepon *
                </label>
                <input
                  type="tel"
                  name="noHp"
                  value={formData.noHp}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-border rounded focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Agama *
                </label>
                <select
                  name="agama"
                  value={formData.agama}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-border rounded focus:outline-none focus:border-primary"
                  required
                >
                  <option value="">-- Pilih Agama --</option>
                  <option value="islam">Islam</option>
                  <option value="kristen">Kristen</option>
                  <option value="katolik">Katolik</option>
                  <option value="hindu">Hindu</option>
                  <option value="buddha">Buddha</option>
                  <option value="konghucu">Konghucu</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Kewarganegaraan *
                </label>
                <select
                  name="kewarganegaraan"
                  value={formData.kewarganegaraan}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-border rounded focus:outline-none focus:border-primary"
                >
                  <option value="wni">WNI (Warga Negara Indonesia)</option>
                  <option value="wna">WNA (Warga Negara Asing)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Status Pernikahan *
                </label>
                <select
                  name="statusPernikahan"
                  value={formData.statusPernikahan}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-border rounded focus:outline-none focus:border-primary"
                >
                  <option value="belum menikah">Belum Menikah</option>
                  <option value="menikah">Menikah</option>
                  <option value="cerai">Cerai</option>
                </select>
              </div>
            </div>
          </div>

          {/* Informasi Akademik */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-6 pb-3 border-b-2 border-accent">
              Informasi Akademik
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Asal Universitas/Perguruan Tinggi *
                </label>
                <input
                  type="text"
                  name="asal"
                  value={formData.asal}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-border rounded focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Semester Saat Ini *
                </label>
                <select
                  name="semester"
                  value={formData.semester}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-border rounded focus:outline-none focus:border-primary"
                  required
                >
                  <option value="">-- Pilih Semester --</option>
                  <option value="4">Semester 4</option>
                  <option value="5">Semester 5</option>
                  <option value="6">Semester 6</option>
                  <option value="7">Semester 7</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                IPK Terkini *
              </label>
              <input
                type="number"
                name="ipk"
                value={formData.ipk}
                onChange={handleInputChange}
                step="0.01"
                min="0"
                max="4"
                className="w-full px-4 py-2 border-2 border-border rounded focus:outline-none focus:border-primary"
                required
              />
            </div>
          </div>

          {/* Pilihan Unit Kerja */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-6 pb-3 border-b-2 border-accent">
              Pilihan Unit Kerja
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Pilihan 1 (Utama) *
                </label>
                <select
                  name="pilihan1"
                  value={formData.pilihan1}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-border rounded focus:outline-none focus:border-primary"
                  required
                >
                  <option value="">-- Pilih Unit --</option>
                  {unitKerjaOptions.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Pilihan 2 (Alternatif)
                </label>
                <select
                  name="pilihan2"
                  value={formData.pilihan2}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-border rounded focus:outline-none focus:border-primary"
                >
                  <option value="">-- Pilih Unit --</option>
                  {unitKerjaOptions.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Pilihan 3 (Alternatif)
                </label>
                <select
                  name="pilihan3"
                  value={formData.pilihan3}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-border rounded focus:outline-none focus:border-primary"
                >
                  <option value="">-- Pilih Unit --</option>
                  {unitKerjaOptions.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Upload Dokumen */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-6 pb-3 border-b-2 border-accent">
              Upload Dokumen
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {['KTP', 'Transkrip Akademik', 'Surat Rekomendasi', 'BPJS/Asuransi', 'Foto 3x4', 'Surat Pernyataan'].map(
                (doc) => (
                  <div key={doc} className="border-2 border-dashed border-primary/30 rounded p-6 text-center cursor-pointer hover:border-primary/60 transition-colors">
                    <FileUp size={24} className="mx-auto mb-2 text-primary" />
                    <p className="text-sm font-semibold text-primary mb-1">{doc}</p>
                    <input
                      type="file"
                      onChange={() => handleFileUpload(doc)}
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    <p className={`text-xs ${uploaded[doc] ? 'text-accent' : 'text-text-light'}`}>
                      {uploaded[doc] ? '✓ File dipilih' : 'Klik untuk pilih file'}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-12 py-3 bg-primary text-primary-foreground font-bold rounded hover:bg-primary/90 transition-colors inline-block"
            >
              Kirim Pendaftaran
            </button>
            <p className="text-xs text-text-light mt-4">
              Dengan mengirim formulir ini, Anda menyetujui persyaratan dan ketentuan program magang Polda Jawa Tengah
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
