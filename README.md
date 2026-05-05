# Quiz Pekan 3 & Tugas 16 (Cypress Intercept)
**Oleh: Mila Sari Rusadi**

Project ini berisi gabungan dari **Quiz 3** (10 Test Case Login) dan **Tugas 16** (Implementasi `cy.intercept` pada Automation Testing) menggunakan **Cypress** pada website OrangeHRM.

## 📁 Informasi File & Folder
* **Quiz 3:** `cypress/e2e/login_orangehrm.cy.js` (Pengujian fungsional dasar)
* **Tugas 16:** `cypress/e2e/intercepts_login.cy.js` (Pengujian dengan Intercept API)

## 🚀 Hasil Pengujian Quiz 3 (Screenshot)
<img width="1573" height="752" alt="image" src="https://github.com/user-attachments/assets/b5f728be-c8b7-4176-a71e-de9d3f8871a9" />

## 🚀 Hasil Pengujian Tugas 16 (Screenshot)
<img width="1582" height="890" alt="image" src="https://github.com/user-attachments/assets/6a202d40-9bd5-4cd3-81bd-5da642bc0572" />

*Menampilkan Test Case utama yang berhasil dijalankan dengan status PASSED menggunakan Intercept.*

## 📋 Skenario Pengujian & Implementasi Intercept (Tugas 16)
Sesuai instruksi, pada file `intercepts_login.cy.js`, setiap Test Case menggunakan alias intercept yang berbeda untuk memastikan validasi API yang spesifik:

| ID | Judul Test Case | Action Utama | Intercept API (Berbeda tiap TC) | Tujuan Intercept |
|:---:|---|---|---|---|
| **TC-001** | Login Valid | `.click()` login | `**/action-summary` | Menunggu data Dashboard summary muncul. |
| **TC-002** | Invalid Password | `.click()` login | `**/validate` | Menangkap respon error login dari server. |
| **TC-003** | Invalid Username | `.click()` login | `**/messages` | Menunggu API notifikasi/pesan sistem dimuat. |
| **TC-004** | Login Empty (Semua Kosong) | `.click()` login | `**/localization` | Memantau API bahasa yang dipanggil saat interaksi form (@apiLocal) (mencegat API lain yang terpanggil). |
| **TC-007** | Forgot Password | `.click()` link | `**/requestPasswordResetCode` | Memastikan API reset password terpanggil. |
| **TC-009** | Case Sensitivity | `.click()` login | `**/subunits` | Memastikan API struktur organisasi dimuat setelah login. |
| **TC-010** | Space Handling | `.click()` login | `**/employees/shortcut` | Memantau API shortcut data karyawan saat login diproses (@apiShortcut) (mencegat API lain yang terpanggil). |

## 🧪 Detail 10 Test Case Utama (Quiz 3)
Berikut adalah daftar lengkap skenario yang diuji pada fitur login:
1. **TC-001**: Login dengan kredensial valid (Success).
2. **TC-002**: Login dengan password salah.
3. **TC-003**: Login dengan username salah.
4. **TC-004**: Login dengan semua kolom kosong (Client-side validation).
5. **TC-005**: Login dengan password kosong.
6. **TC-006**: Login dengan username kosong.
7. **TC-007**: Verifikasi navigasi halaman 'Forgot Password'.
8. **TC-008**: Verifikasi atribut keamanan (Password Masking).
9. **TC-009**: Verifikasi Case Sensitivity pada username.
10. **TC-010**: Penanganan input dengan spasi (Trim/Space Handling).

# 📋 Requirement
Sebelum menjalankan pengujian, pastikan telah menginstal:
* [Node.js](https://nodejs.org/) (Versi terbaru direkomendasikan)
* [Cypress](https://www.cypress.io/)

# 🛠️ Cara Menjalankan
1. **Clone repository** ini ke komputer Anda.
2. Buka terminal di VS Code, jalankan perintah:
   ```bash
   npm install
