# 🐱 Aplikasi Dashboard Perawatan Kucing

Aplikasi ini merupakan sistem manajemen transaksi layanan perawatan kucing, seperti mandi, grooming, potong kuku, dan spa. Dibuat menggunakan **Vue 3 + Pinia** dan **Tailwind CSS**, aplikasi ini menyediakan antarmuka yang rapi dan fungsional untuk mencatat, mengelola, dan menyelesaikan layanan perawatan hewan peliharaan.

---

## 🚀 Fitur Utama

### ✅ Manajemen Transaksi
- Input nama pelanggan.
- Pilih layanan perawatan dari daftar menu.
- Tambahkan ke keranjang.
- Checkout dan simpan transaksi.

### 🕒 Pengerjaan
- Menampilkan transaksi yang **belum selesai**.
- Tombol **"Selesai"** untuk menandai layanan telah selesai.

### 📋 Riwayat Transaksi
- Menampilkan transaksi yang telah **diselesaikan**.
- Ditampilkan dalam bentuk **tabel terstruktur**.

### 📊 Dashboard Ringkasan
- Menampilkan jumlah layanan yang sedang dikerjakan dan yang telah selesai.
- Ringkasan dalam bentuk tabel mini.

---

## 🧾 Data & Struktur

### 📁 `db.json` (digunakan oleh json-server)

```json
{
  "menu": [
    { "id": 1, "nama": "Mandi Kucing", "harga": 30000 },
    { "id": 2, "nama": "Potong Kuku", "harga": 20000 },
    { "id": 3, "nama": "Spa Kucing Premium", "harga": 120000 }
  ],
  "transaksi": [
    {
      "id": "1002",
      "pelanggan": "Budi",
      "items": [
        { "menuId": 3, "nama": "Spa Kucing Premium", "harga": 120000, "jumlah": 1 }
      ],
      "total": 120000,
      "waktu": "2025-07-06T15:45:00.000Z",
      "selesai": false
    }
  ]
}

---

## 📂 Struktur Routing (Vue Router)
| Path          | Komponen             | Deskripsi                         |
| ------------- | -------------------- | --------------------------------- |
| `/`           | `DashboardPage.vue`  | Halaman utama ringkasan           |
| `/transaksi`  | `TransaksiPage.vue`  | Halaman input dan pemesanan       |
| `/pengerjaan` | `PengerjaanPage.vue` | Menampilkan pesanan belum selesai |
| `/riwayat`    | `RiwayatPage.vue`    | Menampilkan transaksi selesai     |

---

## 🔌 API Endpoint (json-server)
Menu Perawatan
GET /menu → Mendapatkan seluruh daftar layanan.

Transaksi
GET /transaksi → Mendapatkan semua transaksi.

POST /transaksi → Menyimpan transaksi baru.

PATCH /transaksi/:id → Memperbarui status selesai.

--- 

## 🎨 UI Framework & Tools
⚡ Vue 3 + Composition API

🧠 Pinia (State Management)

🎨 Tailwind CSS (Custom Theme)

🧪 Vitest (Unit Testing)

🔗 Axios (HTTP Client)

🗄️ JSON Server (Fake REST API)