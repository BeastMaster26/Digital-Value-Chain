This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Definisi Umum Aplikasi

Proyek ini dibuat untuk mempercepat pengembangan website yang akan menggunakan fitur LPG dan emas. Aplikasi ini dirancang sebagai fondasi antarmuka digital yang dapat digunakan untuk mendukung proses transaksi, penyajian informasi, serta pengalaman pengguna pada fitur-fitur tersebut secara lebih cepat dan efisien. Dengan demikian, pengembangan website menjadi lebih terstruktur dan dapat disesuaikan dengan kebutuhan bisnis yang terkait dengan layanan LPG dan emas.

# IMPLEMENTASI SISTEM

Bab ini membahas tentang implementasi dari sistem dan pekerjaan yang dilakukan selama kerja praktik.

## 5.1. Komponen Implementasi

Implementasi sistem pada proyek ini dilakukan dengan membangun antarmuka aplikasi secara modular melalui komponen-komponen yang terpisah. Fokus utama penerapan ini adalah pada fitur LPG dan emas, sehingga setiap bagian antarmuka dapat dikembangkan, diuji, dan diperbaiki secara mandiri tanpa mengganggu komponen lain.

### 5.1.1. Implementasi Komponen Antarmuka

Komponen antarmuka yang diterapkan dalam proyek ini meliputi halaman login, halaman dashboard, komponen informasi saldo atau harga, komponen transaksi, serta form input untuk proses pembelian. Pendekatan Component-Based Architecture digunakan agar tampilan dan logika dapat dipisahkan dengan jelas. Dengan demikian, fitur LPG dan emas dapat dikembangkan secara terpisah namun tetap terintegrasi dalam satu aplikasi.

Sebagai contoh, bagian form login dan form transaksi dibuat sebagai komponen terpisah yang dapat dipakai ulang pada halaman yang berbeda. Struktur implementasinya dapat dilihat pada contoh berikut:

```tsx
// File: src/components/LPG/LoginForm_LPG.tsx
export default function LoginForm() {
  return (
    <form>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
```

Selain itu, komponen lain seperti card informasi, transaksi, dan tombol aksi juga diterapkan untuk mempercepat pengembangan tampilan serta menjaga konsistensi desain antar halaman. Hal ini membantu proses implementasi menjadi lebih efisien dan memudahkan pengembangan fitur-fitur baru di masa depan.

### 5.1.2. Contoh Implementasi Komponen Lain

Selain form login, proyek ini juga mengimplementasikan komponen lain yang sangat relevan dengan fitur LPG dan emas. Contohnya, komponen card informasi digunakan untuk menampilkan saldo, harga, atau status transaksi secara ringkas, sedangkan komponen transaksi digunakan untuk menampilkan riwayat pembelian atau daftar aktivitas pengguna. Komponen header dan sidebar juga diterapkan untuk memberikan navigasi yang konsisten pada setiap halaman.

Contoh implementasi komponen card informasi dapat dilihat sebagai berikut:

```tsx
// File: src/components/LPG/Body.tsx
export default function CardInfo() {
  return (
    <div className="p-4 border rounded-xl">
      <h3>Informasi LPG</h3>
      <p>Saldo: 614 | 3kg</p>
    </div>
  );
}
```

Contoh ini menunjukkan bahwa komponen-komponen kecil dapat dipakai berulang pada berbagai halaman, sehingga proses pengembangan menjadi lebih cepat, terstruktur, dan mudah dirawat.

### 5.1.3. Contoh Implementasi Halaman Dashboard

Halaman dashboard merupakan salah satu bagian penting dalam proyek ini karena menjadi titik utama bagi pengguna untuk melihat informasi penting secara ringkas. Pada implementasinya, halaman dashboard disusun dari beberapa komponen kecil, seperti header, card informasi, dan bagian transaksi. Struktur ini memudahkan penyajian data secara terorganisir dan konsisten.

Contoh implementasinya dapat dilihat pada pendekatan berikut:

```tsx
// File: src/app/LPG/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div>
      <Header />
      <CardInfo />
      <TransactionList />
    </div>
  );
}
```

Dengan pendekatan ini, halaman dashboard dapat dikembangkan dengan cepat karena setiap bagian sudah terpisah menjadi komponen yang dapat digunakan kembali.

### 5.1.4. Contoh Implementasi Fitur Transaksi LPG

Fitur transaksi LPG merupakan salah satu fungsi utama yang diimplementasikan dalam sistem ini. Pada tahap implementasinya, pengguna dapat melihat informasi transaksi, memilih jenis layanan, dan mengisi data yang diperlukan melalui form input yang terhubung ke komponen transaksi. Proses ini dirancang agar alur transaksi menjadi lebih jelas, rapi, dan mudah dipahami oleh pengguna.

Contoh implementasinya dapat dilihat pada pendekatan berikut:

```tsx
// File: src/app/LPG/transaction_management/transaksi/page.tsx
import Transaksi from "@/components/LPG/transaksi_1";

export default function BuatPesanan() {
  return (
    <div>
      <Transaksi />
    </div>
  );
}
```

Implementasi ini menunjukkan bahwa fitur transaksi LPG pada halaman tersebut memanfaatkan komponen reusable yang berada di [src/components/LPG/transaksi_1.tsx](src/components/LPG/transaksi_1.tsx), sehingga tampilan dan logika transaksi dapat dikelola secara lebih terstruktur.

# PENGUJIAN SISTEM

Bab ini menjelaskan tahap pengujian terhadap sistem yang dikerjakan selama kerja praktik.

## 6.1. Tujuan Pengujian

Pengujian dilakukan dengan tujuan untuk memastikan bahwa sistem yang dikembangkan dapat berfungsi sesuai kebutuhan pengguna, terutama pada fitur LPG dan emas. Pengujian ini juga bertujuan untuk memverifikasi bahwa antarmuka yang dibangun sudah sesuai dengan alur transaksi, tampilan yang diharapkan, serta kemudahan penggunaan aplikasi.

## 6.2. Kriteria Pengujian

Penilaian atas pencapaian tujuan pengujian memperhatikan beberapa kriteria berikut:

a. Kesesuaian tampilan antar halaman dengan desain yang dirancang.
b. Kemampuan pengguna untuk mengakses fitur utama seperti login, dashboard, dan transaksi.
c. Kelancaran alur proses transaksi pada fitur LPG dan emas.

## 6.3. Skenario Pengujian

Skenario pengujian dilakukan sesuai kebutuhan pengguna berikut:

1. Pengguna dapat membuka halaman login dan melihat form autentikasi dengan benar.
2. Pengguna dapat mengakses halaman dashboard dan melihat informasi utama yang disajikan.
3. Pengguna dapat membuka fitur transaksi LPG dan melihat alur pemesanan yang sesuai.

## 6.4. Evaluasi Pengujian

Berikut hasil evaluasi pengujian yang telah dilakukan.

| Kriteria Pengujian | Hasil Pengujian |
|---|---|
| Kesesuaian tampilan antar halaman | Terpenuhi |
| Kemampuan pengguna mengakses fitur utama | Terpenuhi |
| Kelancaran alur proses transaksi | Terpenuhi |

## Saran untuk Pengembangan Lebih Lanjut

Saran untuk pengembangan lebih lanjut adalah sebagai berikut:

1. Sistem dapat dikembangkan lebih lanjut dengan mengintegrasikan fitur autentikasi yang lebih aman serta manajemen pengguna yang lebih lengkap.
2. Fitur LPG dan emas dapat diperluas dengan menambahkan proses transaksi yang lebih realistis, termasuk validasi data, notifikasi, dan riwayat transaksi yang lebih detail.
3. Tampilan antarmuka dapat disempurnakan dengan desain yang lebih responsif dan konsisten agar lebih nyaman digunakan pada berbagai perangkat.
4. Pengembangan backend dapat ditingkatkan agar data yang ditampilkan lebih dinamis dan terhubung langsung dengan sistem yang sebenarnya.

## development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
