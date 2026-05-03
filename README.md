# Automation Testing OrangeHRM - Quiz Pekan 3 
-Mila Sari Rusadi

Project ini berisi tugas pengujian otomatis (Automation Testing) fitur Login pada website OrangeHRM menggunakan **Cypress** untuk memenuhi kuis pekan 3.

## 🚀 Hasil Pengujian (Screenshot)
<img width="1573" height="752" alt="image" src="https://github.com/user-attachments/assets/b5f728be-c8b7-4176-a71e-de9d3f8871a9" />

*Menampilkan 10 Test Case utama yang berhasil dijalankan dengan status PASSED.*

## 📋 Daftar Test Case (TC-001 s/d TC-010)
Berikut adalah skenario yang diuji:
1. **TC-001**: Login dengan kredensial valid (Success).
2. **TC-002**: Login dengan password salah.
3. **TC-003**: Login dengan username salah.
4. **TC-004**: Login dengan semua kolom kosong.
5. **TC-005**: Login dengan password kosong.
6. **TC-006**: Login dengan username kosong.
7. **TC-007**: Verifikasi tombol 'Forgot Password'.
8. **TC-008**: Verifikasi keamanan (Password Masking).
9. **TC-009**: Verifikasi Case Sensitivity pada username.
10. **TC-010**: Penanganan input dengan spasi (Space Handling).

# 📋 Requirement
Sebelum menjalankan pengujian, pastikan telah menginstal:
* [Node.js](https://nodejs.org/) (Versi terbaru direkomendasikan)
* [Cypress](https://www.cypress.io/)

# 🧪 Skenario Pengujian (Test Cases)

| ID | Judul Test Case | Skenario | Action Utama (Interaksi) | Assertion Utama (Ekspektasi) |
|:---:|---|---|---|---|
| **TC-01** | Login Valid | Login menggunakan kredensial yang terdaftar. | `.type()`, `.click()` | URL mengandung `/dashboard` |
| **TC-02** | Invalid Password | Login dengan password yang salah. | `.type()`, `.click()` | Alert berisi "Invalid credentials" |
| **TC-03** | Invalid Username | Login dengan username yang tidak terdaftar. | `.type()`, `.click()` | Alert berisi "Invalid credentials" |
| **TC-04** | Login Empty | Login dengan kolom kosong. | `.click()` | Muncul pesan "Required" |
| **TC-05** | Empty Password | Login tanpa mengisi password. | `.type()`, `.click()` | Muncul pesan "Required" |
| **TC-06** | Empty Username | Login tanpa mengisi username. | `.type()`, `.click()` | Muncul pesan "Required" |
| **TC-07** | Forgot Password | Klik link lupa password. | `.click()` | URL mengandung `/requestPasswordResetCode` |
| **TC-08** | Masking Password | Memastikan password tidak terlihat. | `.type()` | Atribut input adalah `type="password"` |
| **TC-09** | Case Sensitivity | Cek sensitivitas huruf besar/kecil. | `.type()` | Berhasil login jika sistem non-sensitive |
| **TC-10** | Space Handling | Cek input dengan spasi tambahan. | `.type()` | Pesan error jika tidak di-trim otomatis |

## 🛠️ Cara Menjalankan
1. Clone repository ini.
2. Jalankan `npm install`.
3. Jalankan `npx cypress open` dan pilih file `login_orangehrm.cy.js`.
