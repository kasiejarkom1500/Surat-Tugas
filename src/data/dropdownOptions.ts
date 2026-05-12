// src/data/dropdownOptions.ts
export const dropdownOptions = {
  pangkat: [
    "IV.d", "IV.c", "IV.b", "IV.a",
    "III.d", "III.c", "III.b", "III.a",
    "II.d", "II.c", "II.b", "II.a",
    "V", "IX", "VII", "III", 
    // Tambahkan kalau ada yang baru
  ].sort((a, b) => a.localeCompare(b)),

  jabatan: [
    "Kepala",
    "Kepala Bagian Umum",
    "Kasubbag. Umum",
    "Statistisi Ahli Madya",
    "Statistisi Ahli Muda",
    "Statistisi Ahli Pertama",
    "Statistisi Penyelia",
    "Statistisi Mahir",
    "Statistisi Terampil",
    "Pranata Komputer Ahli Madya",
    "Pranata Komputer Ahli Muda",
    "Pranata Komputer Ahli Pertama",
    "Analis Pengelola Keuangan APBN Ahli Madya",
    "Analis Pengelola Keuangan APBN Ahli Muda",
    "Analis Pengelola Keuangan APBN Ahli Pertama",
    "Pelaksana",
    "Arsiparis Ahli Madya",
    "Pranata Humas Ahli Pertama",
    "Asesor SDM Aparatur Ahli Muda",
    "Penyuluh Hukum Ahli Muda",
    "Pengelola PBJ Ahli Muda",
    "PPPK/Operator Layanan Operasional",
    "CPNS/Statistisi Ahli Pertama",
    // Tambah baru di sini
  ].sort((a, b) => a.localeCompare(b)),
};