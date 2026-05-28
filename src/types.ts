export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
  tag: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price?: string;
  imageUrl: string;
  specs: string[];
  launchYear: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  client: string;
  year: string;
  location: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
  avatarUrl: string;
}

export interface Statistic {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const STATISTICS: Statistic[] = [
  { id: "stat-1", value: 10, suffix: "K+", label: "Koleksi Buku Lengkap" },
  { id: "stat-2", value: 100, suffix: "%", label: "Produk Original" },
  { id: "stat-3", value: 50, suffix: "+", label: "Mitra Penerbit Besar" },
  { id: "stat-4", value: 99, suffix: "%", label: "Pelanggan Puas" },
];

export const SERVICES: Service[] = [
  {
    id: "srv-1",
    title: "Buku Islami & Kitab",
    description: "Koleksi lengkap untuk buku bacaan Islami, kitab kuning, Al-Qur'an, dan literatur sejarah Islam yang dijamin keasliannya.",
    details: ["Al-Qur'an Berbagai Ukuran", "Kitab Kuning Pesantren", "Buku Motivasi Islami", "Buku Sejarah Nabi"],
    iconName: "Compass",
    tag: "Keagamaan"
  },
  {
    id: "srv-2",
    title: "Novel & Sastra",
    description: "Menyediakan novel-novel best seller dari penulis terkemuka nusantara dan dunia, mulai dari fiksi, roman, hingga fantasi.",
    details: ["Novel Best Seller Terkini", "Karya Sastra Klasik", "Antologi Puisi", "Fiksi Remaja"],
    iconName: "Layers",
    tag: "Hiburan"
  },
  {
    id: "srv-3",
    title: "Buku Pelajaran & Umum",
    description: "Memenuhi kebutuhan siswa dan mahasiswa dengan koleksi buku sekolah, modul tes CPNS, hingga referensi akademik kampus.",
    details: ["Buku Pelajaran SD-SMA", "Buku Referensi Kuliah", "Buku Latihan UTBK/CPNS", "Buku Pengembangan Diri"],
    iconName: "Shield",
    tag: "Edukasi"
  },
  {
    id: "srv-4",
    title: "Pemesanan & Pesan Antar",
    description: "Jika buku yang Anda cari sedang kosong, kami dapat memesankannya langsung dari penerbit. Melayani juga pengiriman dalam kota.",
    details: ["Pre-Order Buku Baru", "Pencarian Buku Spesifik", "Pengiriman Cepat", "Pembayaran Fleksibel"],
    iconName: "Cpu",
    tag: "Layanan"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "book-01",
    name: "Bumi Manusia",
    category: "Sastra",
    description: "Novel pertama dari Tetralogi Buru karya Pramoedya Ananta Toer. Kisah Minke, pemuda Jawa terpelajar, yang terjerat cinta dan pergolakan kolonialisme.",
    price: "Tersedia",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
    specs: ["Pengarang: Pramoedya Ananta Toer", "Tahun Terbit: 1980", "Penerbit: Hasta Mitra", "ISBN: 978-979-428-001-3", "Halaman: 354 hlm", "Bahasa: Indonesia"],
    launchYear: "1980"
  },
  {
    id: "book-02",
    name: "Sapiens: Riwayat Singkat Umat Manusia",
    category: "Sains & Sejarah",
    description: "Yuval Noah Harari menelusuri perjalanan Homo sapiens dari zaman batu hingga era digital—narasi megah tentang bagaimana manusia menaklukkan dunia.",
    price: "Tersedia",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
    specs: ["Pengarang: Yuval Noah Harari", "Tahun Terbit: 2011", "Penerbit: KPG", "ISBN: 978-602-481-002-1", "Halaman: 498 hlm", "Bahasa: Indonesia"],
    launchYear: "2017"
  },
  {
    id: "book-03",
    name: "Laskar Pelangi",
    category: "Sastra",
    description: "Kisah inspiratif sepuluh anak Belitung yang berjuang meraih mimpi di sekolah tua yang hampir roboh.",
    price: "Tersedia",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800",
    specs: ["Pengarang: Andrea Hirata", "Tahun Terbit: 2005", "Penerbit: Bentang Pustaka", "ISBN: 978-979-1227-19-7", "Halaman: 529 hlm", "Bahasa: Indonesia"],
    launchYear: "2005"
  },
  {
    id: "book-04",
    name: "Atomic Habits",
    category: "Pengembangan Diri",
    description: "James Clear menguraikan sistem terbukti untuk membangun kebiasaan baik dan menghilangkan kebiasaan buruk.",
    price: "Tersedia",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
    specs: ["Pengarang: James Clear", "Tahun Terbit: 2018", "Penerbit: Gramedia", "ISBN: 978-602-06-3655-7", "Halaman: 368 hlm", "Bahasa: Indonesia"],
    launchYear: "2019"
  },
  {
    id: "book-05",
    name: "Negeri 5 Menara",
    category: "Sastra",
    description: "Alif Fikri meninggalkan kampung halaman untuk belajar di pondok pesantren. Man jadda wajada.",
    price: "Kosong",
    imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800",
    specs: ["Pengarang: Ahmad Fuadi", "Tahun Terbit: 2009", "Penerbit: Gramedia", "ISBN: 978-979-22-4861-6", "Halaman: 423 hlm", "Bahasa: Indonesia"],
    launchYear: "2009"
  },
  {
    id: "book-06",
    name: "Filosofi Teras",
    category: "Filsafat",
    description: "Henry Manampiring memperkenalkan filsafat Stoa kuno dengan cara segar dan relevan untuk kehidupan modern.",
    price: "Tersedia",
    imageUrl: "https://images.unsplash.com/photo-1509266272358-7701da638078?auto=format&fit=crop&q=80&w=800",
    specs: ["Pengarang: Henry Manampiring", "Tahun Terbit: 2018", "Penerbit: Kompas", "ISBN: 978-602-412-500-8", "Halaman: 276 hlm", "Bahasa: Indonesia"],
    launchYear: "2018"
  },
  {
    id: "book-07",
    name: "Sejarah Tuhan",
    category: "Filsafat",
    description: "Karen Armstrong menelusuri 4.000 tahun sejarah monoteisme dari Abraham hingga era modern.",
    price: "Tersedia",
    imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800",
    specs: ["Pengarang: Karen Armstrong", "Tahun Terbit: 1993", "Penerbit: Mizan Pustaka", "ISBN: 978-979-433-293-2", "Halaman: 556 hlm", "Bahasa: Indonesia"],
    launchYear: "2002"
  },
  {
    id: "book-08",
    name: "Thinking, Fast and Slow",
    category: "Psikologi",
    description: "Daniel Kahneman mengungkap dua sistem berpikir manusia—cepat dan lambat—serta bias kognitif kita.",
    price: "Tersedia",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
    specs: ["Pengarang: Daniel Kahneman", "Tahun Terbit: 2011", "Penerbit: Gramedia", "ISBN: 978-979-22-9606-8", "Halaman: 512 hlm", "Bahasa: Indonesia"],
    launchYear: "2013"
  },
  {
    id: "book-09",
    name: "Pulang",
    category: "Sastra",
    description: "Bujang, anak lelaki dari pedalaman Sumatera, tumbuh menjadi pejuang terkuat. Tere Liye di karya terbaiknya.",
    price: "Tersedia",
    imageUrl: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=800",
    specs: ["Pengarang: Tere Liye", "Tahun Terbit: 2015", "Penerbit: Republika", "ISBN: 978-602-0818-05-7", "Halaman: 400 hlm", "Bahasa: Indonesia"],
    launchYear: "2015"
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Hj. Siti Nurhaliza",
    role: "Guru Ngaji",
    company: "Pondok Pesantren Al-Hidayah",
    rating: 5,
    comment: "Alhamdulillah, buku-buku kitab dan Al-Qur'an di sini lengkap sekali. Harganya pun lebih terjangkau dibanding toko buku besar. Sudah langganan bertahun-tahun untuk kebutuhan santri.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-2",
    name: "Ahmad Rizki",
    role: "Mahasiswa",
    company: "Universitas Suryakancana",
    rating: 5,
    comment: "Tempatnya strategis banget, tepat di samping Masjid Agung. Buku-buku pelajaran dan referensi kuliah selalu tersedia. Penjualnya juga ramah dan sabar membantu carikan buku yang saya butuhkan.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-3",
    name: "Ibu Yanti Sumarni",
    role: "Wali Murid",
    company: "SDN 1 Cianjur",
    rating: 5,
    comment: "Setiap tahun ajaran baru, saya selalu beli buku pelajaran anak-anak di sini. Dijamin original dan lengkap. Pelayanannya cepat, tidak perlu antre lama. Terima kasih Kios Buku!",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  }
];
