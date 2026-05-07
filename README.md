# Quiz Pekan 3, Tugas 16, Tugas 17, dan Tugas 18
**Oleh: Mila Sari Rusadi**

Project ini berisi gabungan dari **Quiz 3** (10 Test Case Login) dan **Tugas 16** (Implementasi `cy.intercept` pada Automation Testing) menggunakan **Cypress** pada website OrangeHRM.

## 📁 Informasi File & Folder
* **Quiz 3:** `cypress/e2e/login_orangehrm.cy.js` (Pengujian)
* **Tugas 16:** `cypress/e2e/intercepts_login.cy.js` (Pengujian dengan Intercept API)

* **Tugas 17: Page Object (Locator & Action):** `cypress/support/page_objects/loginPage.js`
* **Tugas 17: Test Spec (Logika Pengujian):** `cypress/e2e/login.cy.js`

* **Tugas 18:** `cypress/e2e/tugas-18-api/api_test.cy.js` (automation API pakai platzi)

---

## 🚀 Hasil Pengujian Quiz 3 (Screenshot)
<img width="1573" height="752" alt="image" src="https://github.com/user-attachments/assets/b5f728be-c8b7-4176-a71e-de9d3f8871a9" />

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

test case:

| ID | Test Case | Skenario | Action Utama (Interaksi) | Assertion Utama (Ekspektasi) |
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

---

## 🚀 Hasil Pengujian Tugas 16 (Screenshot)
<img width="1582" height="890" alt="image" src="https://github.com/user-attachments/assets/6a202d40-9bd5-4cd3-81bd-5da642bc0572" />
*Menampilkan Test Case utama yang berhasil dijalankan dengan status PASSED menggunakan Intercept.*

## 📋 Skenario Pengujian & Implementasi Intercept (Tugas 16)
Sesuai instruksi, pada file `intercepts_login.cy.js`, setiap Test Case menggunakan alias intercept yang berbeda untuk memastikan validasi API yang spesifik:

| ID | Test Case | Action Utama | Intercept API (Berbeda tiap TC) | Tujuan Intercept |
|:---:|---|---|---|---|
| **TC-001** | Login Valid | `.click()` login | `**/action-summary` | Menunggu data Dashboard summary muncul. |
| **TC-002** | Invalid Password | `.click()` login | `**/validate` | Menangkap respon error login dari server. |
| **TC-003** | Invalid Username | `.click()` login | `**/messages` | Menunggu API notifikasi/pesan sistem dimuat. |
| **TC-004** | Login Empty (Semua Kosong) | `.click()` login | `**/localization` | Memantau API bahasa yang dipanggil saat interaksi form (@apiLocal) (mencegat API lain yang terpanggil). |
| **TC-007** | Forgot Password | `.click()` link | `**/requestPasswordResetCode` | Memastikan API reset password terpanggil. |
| **TC-009** | Case Sensitivity | `.click()` login | `**/subunits` | Memastikan API struktur organisasi dimuat setelah login. |
| **TC-010** | Space Handling | `.click()` login | `**/employees/shortcut` | Memantau API shortcut data karyawan saat login diproses (@apiShortcut) (mencegat API lain yang terpanggil). 

---

## 🚀 Hasil Pengujian Tugas 17 (Screenshot)
<img width="1585" height="721" alt="image" src="https://github.com/user-attachments/assets/167a5ab6-d18e-46dd-97c7-ccd4147bc3c3" />

## 📋 Daftar Test Case (Skenario POM)
Teradapat **7 Skenario Utama** dengan method yang disediakan oleh Class `LoginPage`:

| ID | Test Case | Action Utama (via POM) | Assertion Utama |
|:---:|---|---|---|
| **TC-001** | Login Valid | `loginPage.fillUsername('Admin')`<br>`loginPage.fillPassword('admin123')`<br>`loginPage.clickLogin()` | URL mengandung `/dashboard` |
| **TC-002** | Login Invalid Password | Mengisi password salah, lalu klik login. | Memunculkan alert error |
| **TC-003** | Login Empty Fields | Klik login tanpa mengisi kolom apa pun. | Muncul 2 label "Required" |
| **TC-004** | Login Empty Username | Mengisi password saja, lalu klik login. | Kolom username memunculkan "Required" |
| **TC-005** | Login Empty Password | Mengisi username saja, lalu klik login. | Kolom password memunculkan "Required" |
| **TC-006** | Logout | `loginPage.logout()` (setelah login valid) | Kembali ke halaman login (`/login`) |
| **TC-007** | Forgot Password | `loginPage.clickForgotPassword()` | Navigasi ke `/requestPasswordResetCode` |

---

## 🚀 Hasil Pengujian Tugas 18 (Screenshot)
<img width="1582" height="785" alt="image" src="https://github.com/user-attachments/assets/37a62e93-cf1f-4d85-bb5e-e58b97cd0b18" />
*Seluruh skenario (10/10) telah berhasil dijalankan dengan status **PASSED** di Cypress Runner.*

## 📋 Skenario Pengujian (10 Test Cases)
Berikut adalah detail request dan asersi yang dilakukan untuk memastikan fungsionalitas API berjalan dengan baik:

| ID | Method | Endpoint | Skenario | Deskripsi Asersi |
|:---|:---|:---|:---|:---|
| **TC-001** | `GET` | `/products` | Get All Products | Status 200, Responnya array, length min 1 |
| **TC-002** | `GET` | `/products/{id}` | Get Single Product | Status 200, ID produk sesuai dengan yang diminta |
| **TC-003** | `POST` | `/categories` | Create Category | Status 201, Nama kategori unik (random), property 'name' sesuai |
| **TC-004** | `PUT` | `/categories/1` | Update Category | Status 200, Nama kategori berhasil diperbarui |
| **TC-005** | `GET` | `/products/` | Filter by Price | Status 200, Harga produk pertama berada di range $100 - $500 |
| **TC-006** | `DELETE`| `/products/1` | Delete Product | Status 200 atau 400 (jika sudah terhapus) |
| **TC-007** | `GET` | `/users/1` | Get Single User | Status 200, Memiliki property 'role' |
| **TC-008** | `GET` | `/products/` | Filter by Category | Status 200, Respon berupa array |
| **TC-009** | `POST` | `/users` | Create New User | Status 201, Email unik menggunakan timestamp |
| **TC-010** | `GET` | `/categories` | Get All Categories | Status 200, Array tidak kosong, item punya 'name' |

## 🛠️ Alat dan bahan (Requirements)
Sebelum menjalankan pengujian, pastikan telah menginstal:
* [Node.js](https://nodejs.org/) (Versi terbaru direkomendasikan)
* **Framework:** [Cypress](https://www.cypress.io/)
* **Language:** JavaScript
* **Target API:** [Platzi Fake Store API](https://api.escuelajs.co/docs/)

## 🛠️ Cara Menjalankan
1. Clone repository ini.
2. Jalankan `npm install`.
3. Jalankan `npx cypress open` dan pilih file yang akan dijalankan.
