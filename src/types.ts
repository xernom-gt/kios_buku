export interface WhyUsCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
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

export interface Statistic {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const STATISTICS: Statistic[] = [
  { id: "stat-1", value: 12, suffix: "K+", label: "Koleksi Buku" },
  { id: "stat-2", value: 100, suffix: "%", label: "Buku Original" },
  { id: "stat-3", value: 20, suffix: "+", label: "Tahun Mengabdi" },
  { id: "stat-4", value: 50, suffix: "+", label: "Penerbit Resmi" },
];

export const WHY_US: WhyUsCard[] = [
  {
    id: "why-1",
    title: "Buku Original",
    description: "Kami berkomitmen menjaga kualitas literasi dengan hanya menyediakan buku 100% original langsung dari penerbit terpercaya.",
    iconName: "ShieldCheck"
  },
  {
    id: "why-2",
    title: "Koleksi Lengkap",
    description: "Mulai dari literatur Islami klasik, novel best seller, buku pengembangan diri, hingga komik dan bacaan ramah anak.",
    iconName: "BookOpen"
  },
  {
    id: "why-3",
    title: "Harga Terjangkau",
    description: "Harga bersahabat dan transparan dengan berbagai diskon menarik agar budaya membaca dapat dijangkau oleh semua kalangan.",
    iconName: "Coins"
  },
  {
    id: "why-4",
    title: "Tempat Nyaman untuk Pecinta Buku",
    description: "Berlokasi tepat di samping Masjid Agung Cianjur, kios kami menawarkan suasana tenang, ramah, dan penuh nuansa literasi hangat.",
    iconName: "Heart"
  }
];

export const PRODUCTS: Product[] = [
  // --- Buku Islami ---
  {
    id: "islami-01",
    name: "Riyadhus Shalihin",
    category: "Buku Islami",
    description: "Kumpulan hadits shahih dari Rasulullah SAW mengenai akhlak, ibadah, dan panduan kehidupan sehari-hari umat Muslim.",
    price: "Tersedia",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600",
    specs: ["Pengarang: Imam An-Nawawi", "Penerbit: Darul Haq", "ISBN: 978-979-1254-01-2", "Halaman: 850 hlm", "Bahasa: Indonesia / Arab"],
    launchYear: "2019"
  },
  {
    id: "islami-02",
    name: "La Tahzan (Jangan Bersedih)",
    category: "Buku Islami",
    description: "Buku motivasi Islami legendaris yang menawarkan solusi Qur'ani dan sunnah dalam menghadapi berbagai problem kehidupan dan kesedihan.",
    price: "Tersedia",
    imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=600",
    specs: ["Pengarang: Dr. Aidh Al-Qarni", "Penerbit: Qisthi Press", "ISBN: 978-979-3715-05-6", "Halaman: 560 hlm", "Bahasa: Indonesia"],
    launchYear: "2015"
  },
  // --- Novel ---
  {
    id: "novel-01",
    name: "Bumi Manusia",
    category: "Novel",
    description: "Novel mahakarya Pramoedya Ananta Toer yang mengisahkan perjuangan cinta Minke dan Annelies di tengah pergolakan sosial kolonialisme Hindia Belanda.",
    price: "Tersedia",
    imageUrl: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=600",
    specs: ["Pengarang: Pramoedya Ananta Toer", "Penerbit: Lentera Dipantara", "ISBN: 978-979-97312-3-4", "Halaman: 535 hlm", "Bahasa: Indonesia"],
    launchYear: "2005"
  },
  {
    id: "novel-02",
    name: "Laskar Pelangi",
    category: "Novel",
    description: "Kisah inspiratif sepuluh anak Belitung yang tergabung dalam Laskar Pelangi, berjuang menuntut ilmu di tengah keterbatasan fasilitas sekolah.",
    price: "Tersedia",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600",
    specs: ["Pengarang: Andrea Hirata", "Penerbit: Bentang Pustaka", "ISBN: 978-979-1227-19-7", "Halaman: 529 hlm", "Bahasa: Indonesia"],
    launchYear: "2005"
  },
  // --- Buku Anak ---
  {
    id: "anak-01",
    name: "Cerita Bergambar Kisah 25 Nabi & Rasul",
    category: "Buku Anak",
    description: "Kumpulan kisah teladan 25 Nabi dan Rasul yang disajikan dengan ilustrasi visual penuh warna dan bahasa yang mudah dipahami anak-anak.",
    price: "Tersedia",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=600",
    specs: ["Pengarang: Kak Rahmad", "Penerbit: Luxima", "ISBN: 978-602-268-120-2", "Halaman: 120 hlm (Full Color)", "Bahasa: Indonesia"],
    launchYear: "2021"
  },
  // --- Komik ---
  {
    id: "komik-01",
    name: "Muhammad Al-Fatih: Penakluk Konstantinopel",
    category: "Komik",
    description: "Komik sejarah Islam yang menggambarkan kepemimpinan, strategi militer, dan keimanan Sultan Muhammad Al-Fatih dalam membebaskan kota Konstantinopel.",
    price: "Tersedia",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600",
    specs: ["Pengarang: Handri Satria", "Penerbit: Salsabila", "ISBN: 978-602-1695-42-5", "Halaman: 216 hlm", "Bahasa: Indonesia"],
    launchYear: "2017"
  },
  // --- Self Improvement ---
  {
    id: "self-01",
    name: "Atomic Habits",
    category: "Self Improvement",
    description: "Sebuah sistem praktis untuk mengubah kebiasaan hidup Anda secara perlahan tapi pasti, dimulai dari perubahan-perubahan kecil 1% setiap hari.",
    price: "Tersedia",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600",
    specs: ["Pengarang: James Clear", "Penerbit: Gramedia Pustaka Utama", "ISBN: 978-602-06-3655-7", "Halaman: 356 hlm", "Bahasa: Indonesia"],
    launchYear: "2019"
  },
  {
    id: "self-02",
    name: "Filosofi Teras",
    category: "Self Improvement",
    description: "Pengenalan filsafat Stoisisme kuno Yunani-Romawi sebagai panduan praktis mengatasi kecemasan mental dan emosi negatif di era modern.",
    price: "Tersedia",
    imageUrl: "https://images.unsplash.com/photo-1509266272358-7701da638078?auto=format&fit=crop&q=80&w=600",
    specs: ["Pengarang: Henry Manampiring", "Penerbit: Buku Kompas", "ISBN: 978-602-412-518-9", "Halaman: 320 hlm", "Bahasa: Indonesia"],
    launchYear: "2018"
  },
  // --- Best Seller ---
  {
    id: "best-01",
    name: "Sapiens: Riwayat Singkat Umat Manusia",
    category: "Best Seller",
    description: "Buku fenomenal yang merangkum sejarah peradaban Homo Sapiens sejak zaman prasejarah hingga revolusi bioteknologi masa kini.",
    price: "Tersedia",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=600",
    specs: ["Pengarang: Yuval Noah Harari", "Penerbit: KPG", "ISBN: 978-602-424-928-1", "Halaman: 520 hlm", "Bahasa: Indonesia"],
    launchYear: "2017"
  }
];
