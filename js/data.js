/* DATA.JS — MPI Kecerdasan Digital. Materi ditulis untuk pembelajaran kelas IX.
Rujukan pemetaan area dan tingkat: DQ Institute, https://www.dqinstitute.org/global-standards-2022/
Contoh dan aktivitas disusun untuk konteks sekolah. */

const SEKOLAH = {
  "nama": "MTsN 1 Alor",
  "mapel": "Informatika",
  "kelas": "IX",
  "fase": "D",
  "kurikulum": "Kurikulum Merdeka",
  "materi": "Kecerdasan Digital",
  "guru": "Guru Informatika"
};

const BAGIAN_MATERI = [
  {
    "id": "A",
    "judul": "A. Kecerdasan Digital"
  },
  {
    "id": "B",
    "judul": "B. Mengembangkan Kecerdasan Digital"
  }
];

const TUJUAN = [
  {
    "judul": "Memahami Pengertian Kecerdasan Digital",
    "kompetensi": "Kecerdasan digital dan tanggung jawab",
    "contoh": "Siswa menolak meneruskan kabar yang belum diperiksa meskipun kabar itu sedang ramai.",
    "aktivitas": "Tuliskan alasan mengapa kemampuan memakai aplikasi perlu disertai tanggung jawab."
  },
  {
    "judul": "Memahami Area dan Tingkat Kecerdasan Digital",
    "kompetensi": "Kecerdasan digital dan tanggung jawab",
    "contoh": "Siswa menjaga identitas akun, bekerja sama membuat karya, lalu mengembangkan solusi yang membantu sekolah.",
    "aktivitas": "Petakan kegiatan digitalmu ke delapan area dan pilih satu kemampuan yang ingin ditingkatkan."
  },
  {
    "judul": "Memahami Kewarganegaraan Digital",
    "kompetensi": "Kecerdasan digital dan tanggung jawab",
    "contoh": "Anggota grup kelas menghormati pendapat, memeriksa informasi, dan menolong teman yang mengalami perundungan.",
    "aktivitas": "Susun kesepakatan warga digital kelas yang mencakup etika, privasi, dan bantuan."
  },
  {
    "judul": "Memahami Mengembangkan Keahlian Dasar Pengguna Teknologi Digital",
    "kompetensi": "Kecerdasan digital dan tanggung jawab",
    "contoh": "Siswa menyimpan tugas dengan rapi, mencantumkan sumber, dan membagikannya hanya kepada penerima yang tepat.",
    "aktivitas": "Buat daftar keterampilan yang sudah dikuasai dan pilih satu untuk dilatih minggu ini."
  },
  {
    "judul": "Memahami Kreativitas Digital",
    "kompetensi": "Kecerdasan digital dan tanggung jawab",
    "contoh": "Kelompok membuat poster anti perundungan dengan pembagian peran, jadwal sehat, serta izin penggunaan gambar.",
    "aktivitas": "Rancang poster kampanye kelas beserta pembagian peran, izin aset, dan aturan kolaborasinya."
  },
  {
    "judul": "Memahami Daya Saing Digital",
    "kompetensi": "Kecerdasan digital dan tanggung jawab",
    "contoh": "Tim siswa mengolah survei anonim menjadi usulan pengurangan sampah, lalu menyampaikan hasil secara jelas kepada warga sekolah.",
    "aktivitas": "Rancang solusi untuk masalah sekolah: jelaskan kebutuhan, pengguna, data, risiko, dan ukuran keberhasilannya."
  }
];

const MATERI = [
  {
    "id": "a1",
    "bagian": "A",
    "judul": "1. Pengertian Kecerdasan Digital",
    "ic": "🧠",
    "pengertian": "Kecerdasan digital membantu kita mengambil keputusan yang tepat saat menggunakan teknologi, bukan sekadar menguasai aplikasi.",
    "submateri": [
      {
        "judul": "Memahami kecerdasan digital",
        "isi": "Kecerdasan digital adalah perpaduan pengetahuan, keterampilan, sikap, dan nilai untuk menggunakan teknologi secara bijak, aman, bertanggung jawab, serta bermanfaat. Kecakapan ini mencakup cara berpikir, menjaga diri, dan memperlakukan orang lain di ruang digital.",
        "contoh": "Siswa memeriksa kebenaran kabar, menjaga data pribadi, lalu menyampaikan informasi dengan sopan.",
        "aktivitas": "Tuliskan satu tindakan cerdas digital yang dapat kamu lakukan hari ini."
      },
      {
        "judul": "Cakap menggunakan, bijak mengambil keputusan",
        "isi": "Kemampuan menekan tombol atau memakai banyak aplikasi belum cukup. Pengguna juga perlu menilai tujuan penggunaan, dampak pada orang lain, dan risiko dari setiap tindakan.",
        "contoh": "Sebelum mengunggah foto kelompok, siswa meminta persetujuan teman yang tampak dalam foto.",
        "aktivitas": "Bandingkan tindakan pandai memakai aplikasi dengan tindakan bijak memakai aplikasi."
      }
    ],
    "contoh": [
      "Siswa memeriksa kebenaran kabar, menjaga data pribadi, lalu menyampaikan informasi dengan sopan.",
      "Sebelum mengunggah foto kelompok, siswa meminta persetujuan teman yang tampak dalam foto."
    ],
    "manfaat": [
      "Mengambil keputusan digital yang lebih bertanggung jawab.",
      "Menerapkan pengetahuan pada kegiatan belajar dan kehidupan sehari-hari."
    ],
    "contohNyata": "Siswa menolak meneruskan kabar yang belum diperiksa meskipun kabar itu sedang ramai.",
    "flow": [
      "Kenali situasi",
      "Pertimbangkan dampak",
      "Pilih tindakan",
      "Evaluasi hasil"
    ],
    "aktivitas": "Tuliskan alasan mengapa kemampuan memakai aplikasi perlu disertai tanggung jawab.",
    "pertanyaan": {
      "q": "Kecerdasan digital paling tepat ditunjukkan oleh…",
      "opsi": [
        "Banyak memasang aplikasi",
        "Menggunakan teknologi dengan bijak dan bertanggung jawab",
        "Selalu mengikuti tren",
        "Membagikan semua informasi"
      ],
      "jawaban": 1,
      "penjelasan": "Keputusan yang bijak mempertimbangkan tujuan, risiko, dan dampak pada orang lain."
    }
  },
  {
    "id": "a2",
    "bagian": "A",
    "judul": "2. Area dan Tingkat Kecerdasan Digital",
    "ic": "🌐",
    "pengertian": "Area menjelaskan bidang kemampuan, sedangkan tingkat menjelaskan tujuan pengembangannya. Pelajaran ini membahas delapan area serta tiga tingkat: kewarganegaraan, kreativitas, dan daya saing digital.",
    "submateri": [
      {
        "judul": "a. Identitas Digital",
        "isi": "Identitas digital adalah gambaran diri yang terbentuk dari profil, unggahan, komentar, dan aktivitas online. Kelola jejak digital secara jujur dan batasi informasi pribadi yang dibagikan.",
        "contoh": "Menggunakan nama akun yang pantas tanpa mencantumkan alamat rumah atau jadwal pribadi.",
        "aktivitas": "Rancang profil contoh dengan data rekaan yang aman."
      },
      {
        "judul": "b. Penggunaan Digital",
        "isi": "Penggunaan digital berkaitan dengan kebiasaan menggunakan perangkat, waktu, dan layanan digital sesuai tujuan. Seimbangkan kegiatan online dengan belajar, istirahat, dan interaksi langsung.",
        "contoh": "Menonaktifkan notifikasi permainan saat mengerjakan tugas.",
        "aktivitas": "Susun jadwal penggunaan HP yang memberi waktu untuk kegiatan offline."
      },
      {
        "judul": "c. Keselamatan Digital",
        "isi": "Keselamatan digital berfokus pada perlindungan manusia dari dampak berbahaya, seperti perundungan, manipulasi, dan konten yang tidak sesuai. Kenali risiko dan cari dukungan ketika diperlukan.",
        "contoh": "Tidak meneruskan video yang mempermalukan teman; laporkan melalui fitur platform dan beri tahu guru.",
        "aktivitas": "Tulis langkah menghadapi pesan yang membuatmu tidak nyaman tanpa menyebarkan pesannya."
      },
      {
        "judul": "d. Keamanan Digital",
        "isi": "Keamanan digital melindungi akun, perangkat, jaringan, dan data dari akses yang tidak diizinkan. Gunakan kata sandi kuat yang berbeda, verifikasi dua langkah jika tersedia, serta pembaruan perangkat.",
        "contoh": "Tidak membagikan kata sandi atau kode OTP kepada siapa pun.",
        "aktivitas": "Buat daftar pemeriksaan keamanan akun tanpa menuliskan kata sandi sebenarnya."
      },
      {
        "judul": "e. Kecerdasan Emosional Digital",
        "isi": "Kecerdasan emosional digital adalah kemampuan mengenali emosi diri, mengatur respons, dan memahami perasaan orang lain saat berinteraksi melalui teknologi.",
        "contoh": "Berhenti sejenak saat marah sebelum membalas komentar.",
        "aktivitas": "Ubah contoh balasan kasar menjadi kalimat yang berempati."
      },
      {
        "judul": "f. Komunikasi Digital",
        "isi": "Komunikasi digital adalah kemampuan menyampaikan dan menerima pesan secara jelas, sopan, serta sesuai konteks dan penerima. Pilih saluran yang tepat dan hargai waktu orang lain.",
        "contoh": "Mengirim pertanyaan tugas di grup kelas dengan salam, konteks, dan bahasa yang jelas.",
        "aktivitas": "Susun pesan permintaan bantuan kepada guru secara sopan."
      },
      {
        "judul": "g. Literasi Digital",
        "isi": "Literasi digital mencakup kemampuan mencari, memahami, mengevaluasi, dan membuat informasi digital. Periksa penulis, tanggal, bukti, serta kesesuaian isi sebelum mempercayai atau membagikan informasi.",
        "contoh": "Membandingkan berita dengan sumber resmi, bukan hanya membaca judul.",
        "aktivitas": "Bandingkan dua informasi bertema sama dan jelaskan alasan memilih sumber yang lebih dapat dipercaya."
      },
      {
        "judul": "h. Hak Digital",
        "isi": "Hak digital mencakup kepentingan seperti privasi, kebebasan berekspresi secara bertanggung jawab, dan penghargaan terhadap karya. Hak diri sendiri berjalan bersama kewajiban menghormati hak orang lain.",
        "contoh": "Meminta izin memakai foto teman dan mencantumkan kredit gambar sesuai ketentuan penggunaannya.",
        "aktivitas": "Tulis dua hak dan dua tanggung jawab saat menerbitkan karya kelas."
      },
      {
        "judul": "Tingkat 1 · Kewarganegaraan Digital",
        "isi": "Menggunakan teknologi secara aman, etis, dan bertanggung jawab dalam kehidupan sehari-hari.",
        "contoh": "Memeriksa tautan dan menghormati teman di grup kelas.",
        "aktivitas": "Pilih satu kebiasaan aman yang perlu kamu perbaiki."
      },
      {
        "judul": "Tingkat 2 · Kreativitas Digital",
        "isi": "Memanfaatkan teknologi untuk menciptakan pengetahuan, konten, atau solusi bersama orang lain.",
        "contoh": "Membuat poster kampanye kebersihan bersama kelompok.",
        "aktivitas": "Tentukan masalah sekolah yang dapat dijelaskan melalui karya digital."
      },
      {
        "judul": "Tingkat 3 · Daya Saing Digital",
        "isi": "Mengembangkan inovasi dan kemampuan digital yang memberi nilai bagi masyarakat serta mendukung kesiapan masa depan.",
        "contoh": "Mengolah data sampah sekolah untuk mengusulkan program pengurangan sampah.",
        "aktivitas": "Jelaskan manfaat solusi digital bagi pengguna, bukan hanya kecanggihan alatnya."
      }
    ],
    "contoh": [
      "Menggunakan nama akun yang pantas tanpa mencantumkan alamat rumah atau jadwal pribadi.",
      "Menonaktifkan notifikasi permainan saat mengerjakan tugas.",
      "Tidak meneruskan video yang mempermalukan teman; laporkan melalui fitur platform dan beri tahu guru.",
      "Tidak membagikan kata sandi atau kode OTP kepada siapa pun.",
      "Berhenti sejenak saat marah sebelum membalas komentar.",
      "Mengirim pertanyaan tugas di grup kelas dengan salam, konteks, dan bahasa yang jelas.",
      "Membandingkan berita dengan sumber resmi, bukan hanya membaca judul.",
      "Meminta izin memakai foto teman dan mencantumkan kredit gambar sesuai ketentuan penggunaannya.",
      "Memeriksa tautan dan menghormati teman di grup kelas.",
      "Membuat poster kampanye kebersihan bersama kelompok.",
      "Mengolah data sampah sekolah untuk mengusulkan program pengurangan sampah."
    ],
    "manfaat": [
      "Mengambil keputusan digital yang lebih bertanggung jawab.",
      "Menerapkan pengetahuan pada kegiatan belajar dan kehidupan sehari-hari."
    ],
    "contohNyata": "Siswa menjaga identitas akun, bekerja sama membuat karya, lalu mengembangkan solusi yang membantu sekolah.",
    "flow": [
      "Kenali situasi",
      "Pertimbangkan dampak",
      "Pilih tindakan",
      "Evaluasi hasil"
    ],
    "aktivitas": "Petakan kegiatan digitalmu ke delapan area dan pilih satu kemampuan yang ingin ditingkatkan.",
    "pertanyaan": {
      "q": "Manakah yang termasuk identitas digital?",
      "opsi": [
        "Profil dan jejak aktivitas online",
        "Jenis kabel listrik",
        "Ukuran meja",
        "Warna dinding kelas"
      ],
      "jawaban": 0,
      "penjelasan": "Profil, unggahan, dan komentar membantu membentuk gambaran diri online."
    }
  },
  {
    "id": "a3",
    "bagian": "A",
    "judul": "3. Kewarganegaraan Digital",
    "ic": "🤝",
    "pengertian": "Kewarganegaraan digital adalah kecakapan berpartisipasi secara aman, etis, dan bertanggung jawab sebagai anggota masyarakat di ruang digital.",
    "submateri": [
      {
        "judul": "Etika dan Tanggung Jawab",
        "isi": "Warga digital ikut menjaga ruang bersama dengan menghormati perbedaan, menyampaikan informasi yang dapat dipertanggungjawabkan, serta tidak merundung atau menyamar sebagai orang lain.",
        "contoh": "Mengkritik pendapat dengan alasan tanpa menyerang pribadi penulisnya.",
        "aktivitas": "Buat tiga kesepakatan etika untuk grup kelas."
      },
      {
        "judul": "Partisipasi yang Bermanfaat",
        "isi": "Kewarganegaraan digital juga berarti berkontribusi secara positif dan menghargai kebutuhan orang lain. Pilih kegiatan yang sesuai kemampuan dan kondisi teman.",
        "contoh": "Membuat pengumuman kegiatan sekolah dengan teks yang mudah dibaca.",
        "aktivitas": "Rancang satu kegiatan digital yang membantu teman belajar."
      },
      {
        "judul": "Menghadapi Masalah Digital",
        "isi": "Saat menemukan perundungan atau konten berbahaya, jangan ikut menyebarkan. Gunakan fitur blokir atau lapor bila sesuai dan minta bantuan guru atau orang dewasa tepercaya.",
        "contoh": "Mendampingi teman yang menerima ejekan dan membantunya melapor dengan aman.",
        "aktivitas": "Tulis alur bantuan yang dapat digunakan siswa di sekolah."
      }
    ],
    "contoh": [
      "Mengkritik pendapat dengan alasan tanpa menyerang pribadi penulisnya.",
      "Membuat pengumuman kegiatan sekolah dengan teks yang mudah dibaca.",
      "Mendampingi teman yang menerima ejekan dan membantunya melapor dengan aman."
    ],
    "manfaat": [
      "Mengambil keputusan digital yang lebih bertanggung jawab.",
      "Menerapkan pengetahuan pada kegiatan belajar dan kehidupan sehari-hari."
    ],
    "contohNyata": "Anggota grup kelas menghormati pendapat, memeriksa informasi, dan menolong teman yang mengalami perundungan.",
    "flow": [
      "Kenali situasi",
      "Pertimbangkan dampak",
      "Pilih tindakan",
      "Evaluasi hasil"
    ],
    "aktivitas": "Susun kesepakatan warga digital kelas yang mencakup etika, privasi, dan bantuan.",
    "pertanyaan": {
      "q": "Tindakan warga digital yang bertanggung jawab adalah…",
      "opsi": [
        "Mengejek pendapat berbeda",
        "Meneruskan rumor",
        "Memeriksa informasi sebelum membagikannya",
        "Menyamar sebagai teman"
      ],
      "jawaban": 2,
      "penjelasan": "Warga digital bertanggung jawab atas informasi dan perilakunya."
    }
  },
  {
    "id": "a4",
    "bagian": "A",
    "judul": "4. Mengembangkan Keahlian Dasar Pengguna Teknologi Digital",
    "ic": "💻",
    "pengertian": "Keahlian dasar dibangun dengan latihan penggunaan perangkat, pengelolaan berkas, pencarian informasi, perlindungan akun, dan pembuatan karya sederhana.",
    "submateri": [
      {
        "judul": "Mengoperasikan Perangkat dan Mengelola Berkas",
        "isi": "Kenali fungsi perangkat, buat folder yang rapi, beri nama berkas yang jelas, dan simpan salinan tugas di tempat yang sesuai. Keluar dari akun setelah memakai perangkat bersama.",
        "contoh": "Menyimpan tugas dengan nama Kelas_Nama_Topik pada folder mata pelajaran.",
        "aktivitas": "Buat rancangan struktur folder untuk tugas Informatika."
      },
      {
        "judul": "Mencari dan Memeriksa Informasi",
        "isi": "Gunakan kata kunci spesifik, baca isi lengkap, periksa sumber dan tanggal, serta bandingkan informasi. Popularitas tidak menjamin ketepatan.",
        "contoh": "Memeriksa jadwal sekolah pada pengumuman resmi sebelum meneruskan pesan.",
        "aktivitas": "Tulis tiga pertanyaan untuk menilai sebuah berita."
      },
      {
        "judul": "Menjaga Akun dan Privasi",
        "isi": "Tinjau siapa yang dapat melihat profil atau dokumen. Berikan izin aplikasi sesuai kebutuhan, gunakan kata sandi yang unik, dan jangan membagikan kode OTP.",
        "contoh": "Mengatur dokumen kelompok agar hanya anggota yang dapat mengedit.",
        "aktivitas": "Periksa contoh pengaturan berbagi menggunakan akun dan data rekaan."
      },
      {
        "judul": "Membuat dan Membagikan Karya",
        "isi": "Sesuaikan isi dengan tujuan, periksa kembali, gunakan aset yang diizinkan, cantumkan sumber, dan pilih penerima yang tepat.",
        "contoh": "Menyusun presentasi dengan gambar berizin dan bahasa sendiri.",
        "aktivitas": "Buat rencana poster sederhana beserta daftar sumber gambarnya."
      }
    ],
    "contoh": [
      "Menyimpan tugas dengan nama Kelas_Nama_Topik pada folder mata pelajaran.",
      "Memeriksa jadwal sekolah pada pengumuman resmi sebelum meneruskan pesan.",
      "Mengatur dokumen kelompok agar hanya anggota yang dapat mengedit.",
      "Menyusun presentasi dengan gambar berizin dan bahasa sendiri."
    ],
    "manfaat": [
      "Mengambil keputusan digital yang lebih bertanggung jawab.",
      "Menerapkan pengetahuan pada kegiatan belajar dan kehidupan sehari-hari."
    ],
    "contohNyata": "Siswa menyimpan tugas dengan rapi, mencantumkan sumber, dan membagikannya hanya kepada penerima yang tepat.",
    "flow": [
      "Kenali situasi",
      "Pertimbangkan dampak",
      "Pilih tindakan",
      "Evaluasi hasil"
    ],
    "aktivitas": "Buat daftar keterampilan yang sudah dikuasai dan pilih satu untuk dilatih minggu ini.",
    "pertanyaan": {
      "q": "Saat selesai memakai komputer bersama, kamu sebaiknya…",
      "opsi": [
        "Membiarkan akun terbuka",
        "Menyimpan kata sandi di layar",
        "Membagikan OTP",
        "Keluar dari akun"
      ],
      "jawaban": 3,
      "penjelasan": "Keluar dari akun membantu mencegah akses oleh pengguna berikutnya."
    }
  },
  {
    "id": "b1",
    "bagian": "B",
    "judul": "1. Kreativitas Digital",
    "ic": "🎨",
    "pengertian": "Kreativitas digital mengembangkan kemampuan mencipta dan bekerja bersama untuk menyelesaikan masalah. Karya yang baik memperhatikan kesehatan, keamanan, dan dampaknya pada orang lain.",
    "submateri": [
      {
        "judul": "a. Identitas Kokreator Digital",
        "isi": "Kokreator digital membangun identitas sebagai pencipta yang bekerja bersama orang lain. Tunjukkan kontribusi secara jujur, hormati pembagian tugas, dan beri kredit kepada rekan.",
        "contoh": "Poster kelas mencantumkan nama tim serta kontribusi penulis, ilustrator, dan pemeriksa isi.",
        "aktivitas": "Buat pembagian peran dan aturan pencantuman nama anggota."
      },
      {
        "judul": "b. Penggunaan Teknologi yang Sehat",
        "isi": "Gunakan teknologi untuk berkarya tanpa mengabaikan istirahat, tanggung jawab, serta hubungan langsung. Sadari kapan notifikasi atau aktivitas online mulai mengganggu tujuan.",
        "contoh": "Kelompok menetapkan waktu diskusi dan tidak menuntut balasan sepanjang malam.",
        "aktivitas": "Susun kesepakatan waktu kerja dan waktu istirahat kelompok."
      },
      {
        "judul": "c. Manajemen Konten yang Berbahaya",
        "isi": "Kenali, hindari, dan tangani konten berbahaya secara tepat. Jangan memproduksi atau meneruskan konten yang merendahkan, menipu, atau membocorkan data; gunakan pelaporan dan bantuan orang dewasa.",
        "contoh": "Mengganti gambar yang mempermalukan teman dengan ilustrasi yang disetujui bersama.",
        "aktivitas": "Tinjau rancangan konten dan tandai bagian yang perlu diperbaiki."
      },
      {
        "judul": "d. Manajemen Keamanan Jaringan",
        "isi": "Pahami bahwa jaringan dan akses berbagi perlu dikelola. Gunakan jaringan tepercaya, periksa pengaturan berbagi, dan ikuti aturan sekolah tanpa mencoba mengakses sistem yang bukan hakmu.",
        "contoh": "Menghindari pengiriman data sensitif melalui layanan yang tidak dikenal di jaringan publik.",
        "aktivitas": "Susun daftar pemeriksaan jaringan dan izin berbagi sebelum kolaborasi."
      },
      {
        "judul": "e. Manajemen dan Kesadaran Diri",
        "isi": "Kenali emosi, kemampuan, kebiasaan, dan batas diri saat berkarya. Tetapkan target realistis, terima umpan balik, dan atur respons ketika menemui kesulitan.",
        "contoh": "Menerima saran perbaikan poster tanpa membalas dengan ejekan.",
        "aktivitas": "Tuliskan kekuatan diri dan satu kebiasaan yang perlu dilatih."
      },
      {
        "judul": "f. Komunikasi dan Kolaborasi Online",
        "isi": "Sampaikan tujuan, bagikan peran, gunakan komentar yang membangun, dan atur akses dokumen. Konfirmasikan keputusan agar anggota memahami hasil diskusi.",
        "contoh": "Memberi komentar spesifik pada dokumen bersama tanpa menghapus pekerjaan anggota lain sembarangan.",
        "aktivitas": "Buat pesan koordinasi yang mencantumkan tugas, tenggat, dan cara memberi masukan."
      }
    ],
    "contoh": [
      "Poster kelas mencantumkan nama tim serta kontribusi penulis, ilustrator, dan pemeriksa isi.",
      "Kelompok menetapkan waktu diskusi dan tidak menuntut balasan sepanjang malam.",
      "Mengganti gambar yang mempermalukan teman dengan ilustrasi yang disetujui bersama.",
      "Menghindari pengiriman data sensitif melalui layanan yang tidak dikenal di jaringan publik.",
      "Menerima saran perbaikan poster tanpa membalas dengan ejekan.",
      "Memberi komentar spesifik pada dokumen bersama tanpa menghapus pekerjaan anggota lain sembarangan."
    ],
    "manfaat": [
      "Mengambil keputusan digital yang lebih bertanggung jawab.",
      "Menerapkan pengetahuan pada kegiatan belajar dan kehidupan sehari-hari."
    ],
    "contohNyata": "Kelompok membuat poster anti perundungan dengan pembagian peran, jadwal sehat, serta izin penggunaan gambar.",
    "flow": [
      "Kenali situasi",
      "Pertimbangkan dampak",
      "Pilih tindakan",
      "Evaluasi hasil"
    ],
    "aktivitas": "Rancang poster kampanye kelas beserta pembagian peran, izin aset, dan aturan kolaborasinya.",
    "pertanyaan": {
      "q": "Kokreator digital yang baik akan…",
      "opsi": [
        "Mengambil seluruh kredit tim",
        "Memberi kredit sesuai kontribusi anggota",
        "Menghapus karya rekan",
        "Menyembunyikan pembagian tugas"
      ],
      "jawaban": 1,
      "penjelasan": "Kokreator menghargai kontribusi dan membangun karya bersama secara jujur."
    }
  },
  {
    "id": "b2",
    "bagian": "B",
    "judul": "2. Daya Saing Digital",
    "ic": "🚀",
    "pengertian": "Daya saing digital adalah kemampuan mengembangkan dan menerapkan solusi yang bernilai. Pada tingkat siswa, fokusnya adalah manfaat nyata, pengelolaan risiko, hubungan, komunikasi publik, serta penggunaan data dan AI secara bertanggung jawab.",
    "submateri": [
      {
        "judul": "a. Identitas Pencipta Perubahan Digital",
        "isi": "Pencipta perubahan menggunakan identitas dan kemampuannya untuk mengatasi masalah serta menghasilkan manfaat. Bangun reputasi melalui karya jujur dan dampak yang dapat dijelaskan.",
        "contoh": "Tim siswa membuat kampanye hemat air dengan data penggunaan air di sekolah.",
        "aktivitas": "Pilih satu masalah dan jelaskan siapa yang akan terbantu oleh solusimu."
      },
      {
        "judul": "b. Penggunaan Teknologi untuk Kehidupan",
        "isi": "Pilih teknologi berdasarkan kebutuhan, akses, dan manfaat. Pertimbangkan keterbatasan biaya, koneksi, kemampuan pengguna, serta dampaknya pada kehidupan sehari-hari.",
        "contoh": "Membuat pengingat jadwal piket yang tetap bisa dibaca teman dengan koneksi terbatas.",
        "aktivitas": "Bandingkan dua pilihan alat berdasarkan kebutuhan pengguna."
      },
      {
        "judul": "c. Manajemen Risiko Dunia Maya dalam Komersial dan Komunikasi",
        "isi": "Kenali risiko penipuan, iklan menyesatkan, penyalahgunaan identitas, dan kebocoran data saat bertransaksi atau berkomunikasi. Periksa identitas pihak lain dan gunakan kanal yang dapat dipercaya.",
        "contoh": "Tidak mengirim kode OTP kepada pihak yang mengaku petugas toko; meminta pendampingan orang tua untuk transaksi.",
        "aktivitas": "Analisis contoh iklan rekaan dan tandai informasi yang harus diverifikasi."
      },
      {
        "judul": "d. Manajemen Keamanan Siber dan Organisasi",
        "isi": "Keamanan bersama memerlukan aturan akses, pembaruan, pencadangan, serta alur pelaporan insiden. Berikan akses sesuai peran dan libatkan pengelola yang berwenang saat ada masalah.",
        "contoh": "Hanya pengurus yang ditunjuk mendapat akses pengelolaan akun organisasi kelas.",
        "aktivitas": "Susun pembagian hak akses untuk akun proyek menggunakan data rekaan."
      },
      {
        "judul": "e. Manajemen Hubungan",
        "isi": "Rawat hubungan yang saling menghargai melalui komunikasi, batas pribadi, dan penyelesaian konflik. Hindari tekanan untuk membagikan data pribadi atau selalu tersedia online.",
        "contoh": "Menyelesaikan salah paham melalui dialog yang sopan tanpa mengumumkan percakapan pribadi.",
        "aktivitas": "Tulis kesepakatan kelompok saat terjadi perbedaan pendapat."
      },
      {
        "judul": "f. Komunikasi Publik dan Massa",
        "isi": "Pesan untuk khalayak luas perlu akurat, jelas, sesuai audiens, dan mempertimbangkan dampaknya. Periksa fakta, izin penggunaan materi, dan kemungkinan salah tafsir sebelum publikasi.",
        "contoh": "Pengumuman lomba mencantumkan jadwal yang sudah diperiksa dan kontak panitia yang diizinkan.",
        "aktivitas": "Tinjau naskah pengumuman untuk memastikan isi, sumber, dan penerima sudah tepat."
      },
      {
        "judul": "g. Literasi Data dan Kecerdasan Buatan (AI)",
        "isi": "Literasi data meliputi membaca, mengumpulkan secara bertanggung jawab, menafsirkan, dan menyajikan data. AI dapat membantu, tetapi hasilnya perlu diperiksa karena dapat keliru atau bias. Jangan memasukkan data pribadi atau rahasia ke layanan AI tanpa izin.",
        "contoh": "Menyajikan survei kelas secara agregat tanpa nama lalu memeriksa ulang ringkasan yang dibantu AI.",
        "aktivitas": "Periksa satu contoh keluaran AI menggunakan sumber tepercaya dan tandai bagian yang belum terbukti."
      }
    ],
    "contoh": [
      "Tim siswa membuat kampanye hemat air dengan data penggunaan air di sekolah.",
      "Membuat pengingat jadwal piket yang tetap bisa dibaca teman dengan koneksi terbatas.",
      "Tidak mengirim kode OTP kepada pihak yang mengaku petugas toko; meminta pendampingan orang tua untuk transaksi.",
      "Hanya pengurus yang ditunjuk mendapat akses pengelolaan akun organisasi kelas.",
      "Menyelesaikan salah paham melalui dialog yang sopan tanpa mengumumkan percakapan pribadi.",
      "Pengumuman lomba mencantumkan jadwal yang sudah diperiksa dan kontak panitia yang diizinkan.",
      "Menyajikan survei kelas secara agregat tanpa nama lalu memeriksa ulang ringkasan yang dibantu AI."
    ],
    "manfaat": [
      "Mengambil keputusan digital yang lebih bertanggung jawab.",
      "Menerapkan pengetahuan pada kegiatan belajar dan kehidupan sehari-hari."
    ],
    "contohNyata": "Tim siswa mengolah survei anonim menjadi usulan pengurangan sampah, lalu menyampaikan hasil secara jelas kepada warga sekolah.",
    "flow": [
      "Kenali situasi",
      "Pertimbangkan dampak",
      "Pilih tindakan",
      "Evaluasi hasil"
    ],
    "aktivitas": "Rancang solusi untuk masalah sekolah: jelaskan kebutuhan, pengguna, data, risiko, dan ukuran keberhasilannya.",
    "pertanyaan": {
      "q": "Solusi digital yang bernilai sebaiknya…",
      "opsi": [
        "Memenuhi kebutuhan pengguna dan memberi manfaat",
        "Selalu paling mahal",
        "Mengumpulkan data sebanyak mungkin tanpa izin",
        "Hanya terlihat canggih"
      ],
      "jawaban": 0,
      "penjelasan": "Nilai solusi ditentukan antara lain oleh manfaatnya bagi kebutuhan pengguna."
    }
  }
];

const PERANGKAT = [
  {
    "n": "Komputer / Laptop",
    "ic": "💻",
    "d": "Digunakan untuk belajar, mengolah informasi, dan membuat karya."
  },
  {
    "n": "Ponsel / Tablet",
    "ic": "📱",
    "d": "Digunakan dengan batas waktu serta pengaturan privasi yang sesuai."
  },
  {
    "n": "Jaringan Internet",
    "ic": "🌐",
    "d": "Menghubungkan layanan digital; gunakan akses sesuai aturan dan izin."
  },
  {
    "n": "Penyimpanan",
    "ic": "💾",
    "d": "Simpan berkas dengan rapi dan kelola izin ketika berbagi."
  }
];

const PLATFORM = [
  {
    "n": "Platform Belajar",
    "ic": "📚",
    "d": "Mendukung akses materi dan pengumpulan tugas."
  },
  {
    "n": "Dokumen Kolaboratif",
    "ic": "🤝",
    "d": "Mendukung kerja kelompok dengan pembagian akses yang jelas."
  },
  {
    "n": "Aplikasi Kreatif",
    "ic": "🎨",
    "d": "Membantu membuat poster atau presentasi dengan aset yang diizinkan."
  },
  {
    "n": "Alat Analisis dan AI",
    "ic": "🧠",
    "d": "Membantu mengolah informasi dengan pemeriksaan ulang hasil dan perlindungan data."
  }
];

const SUMBER = [
  {
    "n": "Kerangka DQ",
    "ic": "📘",
    "d": "Rujukan delapan area serta tiga tingkat pembelajaran: https://www.dqinstitute.org/global-standards-2022/"
  },
  {
    "n": "Panduan Sekolah",
    "ic": "🏫",
    "d": "Gunakan tata tertib teknologi dan kesepakatan kelas sebagai pedoman praktik."
  },
  {
    "n": "Pusat Bantuan Layanan",
    "ic": "🛡️",
    "d": "Baca panduan resmi layanan untuk pengaturan akun, privasi, dan pelaporan."
  },
  {
    "n": "Diskusi dan Studi Kasus",
    "ic": "💬",
    "d": "Gunakan contoh rekaan dan hindari membuka data pribadi saat latihan."
  }
];

const DND = {
  "kategori": [
    {
      "id": "warga",
      "nama": "Kewarganegaraan Digital"
    },
    {
      "id": "kreatif",
      "nama": "Kreativitas Digital"
    },
    {
      "id": "saing",
      "nama": "Daya Saing Digital"
    }
  ],
  "item": [
    {
      "n": "Menjaga kata sandi akun",
      "kat": "warga"
    },
    {
      "n": "Memeriksa berita sebelum berbagi",
      "kat": "warga"
    },
    {
      "n": "Menghormati teman di grup",
      "kat": "warga"
    },
    {
      "n": "Membuat poster bersama",
      "kat": "kreatif"
    },
    {
      "n": "Membagi peran produksi video",
      "kat": "kreatif"
    },
    {
      "n": "Memberi kredit anggota tim",
      "kat": "kreatif"
    },
    {
      "n": "Mengolah data untuk solusi sekolah",
      "kat": "saing"
    },
    {
      "n": "Mengukur manfaat inovasi digital",
      "kat": "saing"
    },
    {
      "n": "Menyusun rencana solusi berkelanjutan",
      "kat": "saing"
    }
  ]
};

const BADGES = [
  {
    "id": "beginner",
    "ic": "🏆",
    "nama": "Warga Digital Pemula",
    "syarat": "Selesaikan satu topik materi"
  },
  {
    "id": "explorer",
    "ic": "🏆",
    "nama": "Penjelajah Kecerdasan Digital",
    "syarat": "Selesaikan seluruh 6 topik dalam bagian A dan B"
  },
  {
    "id": "smart",
    "ic": "🏆",
    "nama": "Pemikir Digital",
    "syarat": "Nilai Quiz Latihan ≥ 80"
  },
  {
    "id": "safety",
    "ic": "🏆",
    "nama": "Pengambil Keputusan Bijak",
    "syarat": "Selesaikan semua Simulasi dan Drag and Drop"
  },
  {
    "id": "master",
    "ic": "🏆",
    "nama": "Duta Kecerdasan Digital",
    "syarat": "Nilai Evaluasi Akhir ≥ 80"
  }
];

const REFLEKSI_Q = [
  "Apa makna kecerdasan digital bagi kegiatan saya sehari-hari?",
  "Dari delapan area kecerdasan digital, mana yang paling perlu saya latih?",
  "Bagaimana saya menerapkan kewarganegaraan digital di grup kelas?",
  "Bagaimana saya akan berkolaborasi dan membuat karya digital dengan bertanggung jawab?",
  "Bagaimana saya akan memeriksa informasi, data, dan hasil AI sebelum menggunakannya?"
];

const MOOD_OPT = [
  {
    "ic": "😊",
    "l": "Sangat Paham"
  },
  {
    "ic": "🙂",
    "l": "Paham"
  },
  {
    "ic": "😐",
    "l": "Cukup Paham"
  },
  {
    "ic": "😟",
    "l": "Belum Paham"
  }
];

const PROYEK_FIELDS = [
  {
    "k": "materi",
    "l": "Tema karya atau solusi digital",
    "type": "input"
  },
  {
    "k": "tujuan",
    "l": "Masalah dan tujuan",
    "type": "textarea"
  },
  {
    "k": "media",
    "l": "Media atau alat yang digunakan",
    "type": "input"
  },
  {
    "k": "format",
    "l": "Peran dan aturan kolaborasi",
    "type": "input"
  },
  {
    "k": "sumber",
    "l": "Sumber informasi dan izin aset",
    "type": "textarea"
  },
  {
    "k": "aktivitas",
    "l": "Langkah pelaksanaan dan pengelolaan risiko",
    "type": "textarea"
  },
  {
    "k": "evaluasi",
    "l": "Manfaat, bukti keberhasilan, dan perbaikan",
    "type": "textarea"
  }
];

const QUIZ_BANK = [
  {
    "q": "Kecerdasan digital paling tepat ditunjukkan oleh…",
    "opsi": [
      "Banyak memasang aplikasi",
      "Menggunakan teknologi dengan bijak dan bertanggung jawab",
      "Selalu mengikuti tren",
      "Membagikan semua informasi"
    ],
    "jawaban": 1,
    "pembahasan": "Keputusan yang bijak mempertimbangkan tujuan, risiko, dan dampak pada orang lain.",
    "tipe": "pg"
  },
  {
    "q": "Manakah yang termasuk identitas digital?",
    "opsi": [
      "Profil dan jejak aktivitas online",
      "Jenis kabel listrik",
      "Ukuran meja",
      "Warna dinding kelas"
    ],
    "jawaban": 0,
    "pembahasan": "Profil, unggahan, dan komentar membantu membentuk gambaran diri online.",
    "tipe": "pg"
  },
  {
    "q": "Tindakan warga digital yang bertanggung jawab adalah…",
    "opsi": [
      "Mengejek pendapat berbeda",
      "Meneruskan rumor",
      "Memeriksa informasi sebelum membagikannya",
      "Menyamar sebagai teman"
    ],
    "jawaban": 2,
    "pembahasan": "Warga digital bertanggung jawab atas informasi dan perilakunya.",
    "tipe": "pg"
  },
  {
    "q": "Saat selesai memakai komputer bersama, kamu sebaiknya…",
    "opsi": [
      "Membiarkan akun terbuka",
      "Menyimpan kata sandi di layar",
      "Membagikan OTP",
      "Keluar dari akun"
    ],
    "jawaban": 3,
    "pembahasan": "Keluar dari akun membantu mencegah akses oleh pengguna berikutnya.",
    "tipe": "pg"
  },
  {
    "q": "Kokreator digital yang baik akan…",
    "opsi": [
      "Mengambil seluruh kredit tim",
      "Memberi kredit sesuai kontribusi anggota",
      "Menghapus karya rekan",
      "Menyembunyikan pembagian tugas"
    ],
    "jawaban": 1,
    "pembahasan": "Kokreator menghargai kontribusi dan membangun karya bersama secara jujur.",
    "tipe": "pg"
  },
  {
    "q": "Solusi digital yang bernilai sebaiknya…",
    "opsi": [
      "Memenuhi kebutuhan pengguna dan memberi manfaat",
      "Selalu paling mahal",
      "Mengumpulkan data sebanyak mungkin tanpa izin",
      "Hanya terlihat canggih"
    ],
    "jawaban": 0,
    "pembahasan": "Nilai solusi ditentukan antara lain oleh manfaatnya bagi kebutuhan pengguna.",
    "tipe": "pg"
  },
  {
    "q": "Perbedaan area dan tingkat kecerdasan digital adalah…",
    "opsi": [
      "Keduanya nama aplikasi",
      "Area menunjukkan usia pengguna",
      "Area adalah bidang kemampuan; tingkat adalah tujuan pengembangan",
      "Tingkat menunjukkan harga perangkat"
    ],
    "jawaban": 2,
    "pembahasan": "Area dan tingkat adalah dua cara memetakan pengembangan kecakapan digital.",
    "tipe": "pg"
  },
  {
    "q": "Tingkat dasar untuk menggunakan teknologi secara etis adalah…",
    "opsi": [
      "Daya saing digital",
      "Kewarganegaraan digital",
      "Kreativitas digital",
      "Perdagangan digital"
    ],
    "jawaban": 1,
    "pembahasan": "Kewarganegaraan digital berfokus pada penggunaan yang aman dan bertanggung jawab.",
    "tipe": "pg"
  },
  {
    "q": "Saat melihat perundungan di grup, tindakan yang tepat adalah…",
    "opsi": [
      "Ikut tertawa",
      "Menyebarkan tangkapan layar ke semua grup",
      "Menyalahkan korban",
      "Mendukung korban dan mencari bantuan yang tepat"
    ],
    "jawaban": 3,
    "pembahasan": "Jangan memperluas penyebaran; bantu korban mendapat dukungan.",
    "tipe": "pg"
  },
  {
    "q": "Keamanan digital terutama melindungi…",
    "opsi": [
      "Akun, perangkat, jaringan, dan data",
      "Jumlah pengikut",
      "Popularitas unggahan",
      "Kecepatan mengetik"
    ],
    "jawaban": 0,
    "pembahasan": "Keamanan melindungi aset digital dari akses atau tindakan yang tidak diizinkan.",
    "tipe": "pg"
  },
  {
    "q": "Keselamatan digital berfokus pada…",
    "opsi": [
      "Warna aplikasi",
      "Bentuk keyboard",
      "Perlindungan manusia dari dampak berbahaya di ruang digital",
      "Jumlah akun"
    ],
    "jawaban": 2,
    "pembahasan": "Keselamatan mempertimbangkan dampak seperti perundungan dan konten berbahaya.",
    "tipe": "pg"
  },
  {
    "q": "Saat marah membaca komentar, sebaiknya…",
    "opsi": [
      "Segera membalas kasar",
      "Berhenti sejenak lalu merespons dengan tenang",
      "Membocorkan data penulis",
      "Mengajak teman menyerang"
    ],
    "jawaban": 1,
    "pembahasan": "Pengaturan emosi membantu menjaga komunikasi tetap baik.",
    "tipe": "pg"
  },
  {
    "q": "Contoh penggunaan teknologi yang sehat adalah…",
    "opsi": [
      "Bermain hingga mengabaikan tugas",
      "Menuntut balasan tengah malam",
      "Memakai HP setiap saat",
      "Mengatur waktu dan tetap melakukan kegiatan offline"
    ],
    "jawaban": 3,
    "pembahasan": "Keseimbangan penggunaan mendukung tujuan dan tanggung jawab sehari-hari.",
    "tipe": "pg"
  },
  {
    "q": "Sebelum menggunakan foto teman, kamu sebaiknya…",
    "opsi": [
      "Meminta persetujuannya",
      "Menganggap semua foto bebas pakai",
      "Menghapus nama pemilik",
      "Membagikan tanpa bertanya"
    ],
    "jawaban": 0,
    "pembahasan": "Persetujuan membantu menghormati privasi dan kenyamanan teman.",
    "tipe": "pg"
  },
  {
    "q": "Untuk menilai informasi, langkah yang tepat adalah…",
    "opsi": [
      "Hanya menghitung jumlah suka",
      "Percaya pada judul sensasional",
      "Memeriksa sumber, bukti, tanggal, dan pembanding",
      "Mengikuti komentar terbanyak"
    ],
    "jawaban": 2,
    "pembahasan": "Popularitas bukan bukti kebenaran informasi.",
    "tipe": "pg"
  },
  {
    "q": "Saat berkolaborasi online, izin edit sebaiknya…",
    "opsi": [
      "Dibuka untuk semua orang tanpa alasan",
      "Diberikan sesuai kebutuhan anggota",
      "Diberikan kepada akun asing",
      "Tidak pernah ditinjau"
    ],
    "jawaban": 1,
    "pembahasan": "Pengaturan akses membantu melindungi dokumen dan kontribusi tim.",
    "tipe": "pg"
  },
  {
    "q": "Ketika menemukan konten yang mempermalukan teman, kamu sebaiknya…",
    "opsi": [
      "Memviralkannya",
      "Menyimpannya untuk bahan ejekan",
      "Menandai banyak orang",
      "Tidak meneruskan dan meminta bantuan bila perlu"
    ],
    "jawaban": 3,
    "pembahasan": "Mengurangi penyebaran dan mencari bantuan dapat mengurangi dampak buruk.",
    "tipe": "pg"
  },
  {
    "q": "Sikap yang tepat terhadap umpan balik karya adalah…",
    "opsi": [
      "Menimbang saran dan memperbaiki bagian yang relevan",
      "Menyerang pemberi saran",
      "Menolak semua masukan",
      "Menghapus karya kelompok"
    ],
    "jawaban": 0,
    "pembahasan": "Kesadaran diri membantu kita berkembang melalui masukan.",
    "tipe": "pg"
  },
  {
    "q": "Dalam komunikasi publik, hal yang perlu diperiksa adalah…",
    "opsi": [
      "Hanya jumlah emoji",
      "Hanya panjang judul",
      "Ketepatan isi, penerima, dan dampak pesan",
      "Warna foto profil penulis"
    ],
    "jawaban": 2,
    "pembahasan": "Pesan publik dapat menjangkau banyak orang sehingga perlu ditinjau.",
    "tipe": "pg"
  },
  {
    "q": "Hasil AI sebaiknya…",
    "opsi": [
      "Selalu dianggap benar",
      "Diperiksa dengan sumber tepercaya",
      "Disalin tanpa dipahami",
      "Diisi data rahasia untuk setiap tugas"
    ],
    "jawaban": 1,
    "pembahasan": "AI dapat keliru atau bias; pengguna tetap perlu memeriksa hasilnya.",
    "tipe": "pg"
  }
];

const EVALUASI_BANK = [
  {
    "q": "Kecerdasan digital paling tepat ditunjukkan oleh…",
    "opsi": [
      "Banyak memasang aplikasi",
      "Menggunakan teknologi dengan bijak dan bertanggung jawab",
      "Selalu mengikuti tren",
      "Membagikan semua informasi"
    ],
    "jawaban": 1,
    "pembahasan": "Keputusan yang bijak mempertimbangkan tujuan, risiko, dan dampak pada orang lain.",
    "tag": "konsep"
  },
  {
    "q": "Manakah yang termasuk identitas digital?",
    "opsi": [
      "Profil dan jejak aktivitas online",
      "Jenis kabel listrik",
      "Ukuran meja",
      "Warna dinding kelas"
    ],
    "jawaban": 0,
    "pembahasan": "Profil, unggahan, dan komentar membantu membentuk gambaran diri online.",
    "tag": "penerapan"
  },
  {
    "q": "Tindakan warga digital yang bertanggung jawab adalah…",
    "opsi": [
      "Mengejek pendapat berbeda",
      "Meneruskan rumor",
      "Memeriksa informasi sebelum membagikannya",
      "Menyamar sebagai teman"
    ],
    "jawaban": 2,
    "pembahasan": "Warga digital bertanggung jawab atas informasi dan perilakunya.",
    "tag": "analisis"
  },
  {
    "q": "Saat selesai memakai komputer bersama, kamu sebaiknya…",
    "opsi": [
      "Membiarkan akun terbuka",
      "Menyimpan kata sandi di layar",
      "Membagikan OTP",
      "Keluar dari akun"
    ],
    "jawaban": 3,
    "pembahasan": "Keluar dari akun membantu mencegah akses oleh pengguna berikutnya.",
    "tag": "konsep"
  },
  {
    "q": "Kokreator digital yang baik akan…",
    "opsi": [
      "Mengambil seluruh kredit tim",
      "Memberi kredit sesuai kontribusi anggota",
      "Menghapus karya rekan",
      "Menyembunyikan pembagian tugas"
    ],
    "jawaban": 1,
    "pembahasan": "Kokreator menghargai kontribusi dan membangun karya bersama secara jujur.",
    "tag": "penerapan"
  },
  {
    "q": "Solusi digital yang bernilai sebaiknya…",
    "opsi": [
      "Memenuhi kebutuhan pengguna dan memberi manfaat",
      "Selalu paling mahal",
      "Mengumpulkan data sebanyak mungkin tanpa izin",
      "Hanya terlihat canggih"
    ],
    "jawaban": 0,
    "pembahasan": "Nilai solusi ditentukan antara lain oleh manfaatnya bagi kebutuhan pengguna.",
    "tag": "analisis"
  },
  {
    "q": "Perbedaan area dan tingkat kecerdasan digital adalah…",
    "opsi": [
      "Keduanya nama aplikasi",
      "Area menunjukkan usia pengguna",
      "Area adalah bidang kemampuan; tingkat adalah tujuan pengembangan",
      "Tingkat menunjukkan harga perangkat"
    ],
    "jawaban": 2,
    "pembahasan": "Area dan tingkat adalah dua cara memetakan pengembangan kecakapan digital.",
    "tag": "konsep"
  },
  {
    "q": "Tingkat dasar untuk menggunakan teknologi secara etis adalah…",
    "opsi": [
      "Daya saing digital",
      "Kewarganegaraan digital",
      "Kreativitas digital",
      "Perdagangan digital"
    ],
    "jawaban": 1,
    "pembahasan": "Kewarganegaraan digital berfokus pada penggunaan yang aman dan bertanggung jawab.",
    "tag": "penerapan"
  },
  {
    "q": "Saat melihat perundungan di grup, tindakan yang tepat adalah…",
    "opsi": [
      "Ikut tertawa",
      "Menyebarkan tangkapan layar ke semua grup",
      "Menyalahkan korban",
      "Mendukung korban dan mencari bantuan yang tepat"
    ],
    "jawaban": 3,
    "pembahasan": "Jangan memperluas penyebaran; bantu korban mendapat dukungan.",
    "tag": "analisis"
  },
  {
    "q": "Keamanan digital terutama melindungi…",
    "opsi": [
      "Akun, perangkat, jaringan, dan data",
      "Jumlah pengikut",
      "Popularitas unggahan",
      "Kecepatan mengetik"
    ],
    "jawaban": 0,
    "pembahasan": "Keamanan melindungi aset digital dari akses atau tindakan yang tidak diizinkan.",
    "tag": "konsep"
  },
  {
    "q": "Keselamatan digital berfokus pada…",
    "opsi": [
      "Warna aplikasi",
      "Bentuk keyboard",
      "Perlindungan manusia dari dampak berbahaya di ruang digital",
      "Jumlah akun"
    ],
    "jawaban": 2,
    "pembahasan": "Keselamatan mempertimbangkan dampak seperti perundungan dan konten berbahaya.",
    "tag": "penerapan"
  },
  {
    "q": "Saat marah membaca komentar, sebaiknya…",
    "opsi": [
      "Segera membalas kasar",
      "Berhenti sejenak lalu merespons dengan tenang",
      "Membocorkan data penulis",
      "Mengajak teman menyerang"
    ],
    "jawaban": 1,
    "pembahasan": "Pengaturan emosi membantu menjaga komunikasi tetap baik.",
    "tag": "analisis"
  },
  {
    "q": "Contoh penggunaan teknologi yang sehat adalah…",
    "opsi": [
      "Bermain hingga mengabaikan tugas",
      "Menuntut balasan tengah malam",
      "Memakai HP setiap saat",
      "Mengatur waktu dan tetap melakukan kegiatan offline"
    ],
    "jawaban": 3,
    "pembahasan": "Keseimbangan penggunaan mendukung tujuan dan tanggung jawab sehari-hari.",
    "tag": "konsep"
  },
  {
    "q": "Sebelum menggunakan foto teman, kamu sebaiknya…",
    "opsi": [
      "Meminta persetujuannya",
      "Menganggap semua foto bebas pakai",
      "Menghapus nama pemilik",
      "Membagikan tanpa bertanya"
    ],
    "jawaban": 0,
    "pembahasan": "Persetujuan membantu menghormati privasi dan kenyamanan teman.",
    "tag": "penerapan"
  },
  {
    "q": "Untuk menilai informasi, langkah yang tepat adalah…",
    "opsi": [
      "Hanya menghitung jumlah suka",
      "Percaya pada judul sensasional",
      "Memeriksa sumber, bukti, tanggal, dan pembanding",
      "Mengikuti komentar terbanyak"
    ],
    "jawaban": 2,
    "pembahasan": "Popularitas bukan bukti kebenaran informasi.",
    "tag": "analisis"
  },
  {
    "q": "Saat berkolaborasi online, izin edit sebaiknya…",
    "opsi": [
      "Dibuka untuk semua orang tanpa alasan",
      "Diberikan sesuai kebutuhan anggota",
      "Diberikan kepada akun asing",
      "Tidak pernah ditinjau"
    ],
    "jawaban": 1,
    "pembahasan": "Pengaturan akses membantu melindungi dokumen dan kontribusi tim.",
    "tag": "konsep"
  },
  {
    "q": "Ketika menemukan konten yang mempermalukan teman, kamu sebaiknya…",
    "opsi": [
      "Memviralkannya",
      "Menyimpannya untuk bahan ejekan",
      "Menandai banyak orang",
      "Tidak meneruskan dan meminta bantuan bila perlu"
    ],
    "jawaban": 3,
    "pembahasan": "Mengurangi penyebaran dan mencari bantuan dapat mengurangi dampak buruk.",
    "tag": "penerapan"
  },
  {
    "q": "Sikap yang tepat terhadap umpan balik karya adalah…",
    "opsi": [
      "Menimbang saran dan memperbaiki bagian yang relevan",
      "Menyerang pemberi saran",
      "Menolak semua masukan",
      "Menghapus karya kelompok"
    ],
    "jawaban": 0,
    "pembahasan": "Kesadaran diri membantu kita berkembang melalui masukan.",
    "tag": "analisis"
  },
  {
    "q": "Dalam komunikasi publik, hal yang perlu diperiksa adalah…",
    "opsi": [
      "Hanya jumlah emoji",
      "Hanya panjang judul",
      "Ketepatan isi, penerima, dan dampak pesan",
      "Warna foto profil penulis"
    ],
    "jawaban": 2,
    "pembahasan": "Pesan publik dapat menjangkau banyak orang sehingga perlu ditinjau.",
    "tag": "konsep"
  },
  {
    "q": "Hasil AI sebaiknya…",
    "opsi": [
      "Selalu dianggap benar",
      "Diperiksa dengan sumber tepercaya",
      "Disalin tanpa dipahami",
      "Diisi data rahasia untuk setiap tugas"
    ],
    "jawaban": 1,
    "pembahasan": "AI dapat keliru atau bias; pengguna tetap perlu memeriksa hasilnya.",
    "tag": "penerapan"
  },
  {
    "q": "Saat orang lain meminta OTP melalui chat, kamu sebaiknya…",
    "opsi": [
      "Mengirim agar cepat selesai",
      "Mengunggah ke grup",
      "Membalas dengan kata sandi",
      "Tidak membagikan OTP"
    ],
    "jawaban": 3,
    "pembahasan": "OTP tidak boleh dibagikan kepada pihak lain.",
    "tag": "analisis"
  },
  {
    "q": "Dalam organisasi kelas, akses akun pengurus sebaiknya…",
    "opsi": [
      "Diberikan sesuai peran dan ditinjau saat pergantian pengurus",
      "Dibuka kepada semua pengunjung",
      "Dibagikan ke akun tak dikenal",
      "Dibiarkan tanpa penanggung jawab"
    ],
    "jawaban": 0,
    "pembahasan": "Pembagian peran dan peninjauan akses menjaga tanggung jawab bersama.",
    "tag": "konsep"
  },
  {
    "q": "Sebelum transaksi online yang belum kamu pahami, sebaiknya…",
    "opsi": [
      "Langsung mentransfer uang",
      "Mengirim data pribadi ke pengiklan",
      "Memverifikasi informasi dan meminta pendampingan orang tua",
      "Mempercayai semua testimoni"
    ],
    "jawaban": 2,
    "pembahasan": "Verifikasi serta pendampingan membantu menghadapi risiko transaksi.",
    "tag": "penerapan"
  },
  {
    "q": "Cara menjaga hubungan online adalah…",
    "opsi": [
      "Memaksa teman selalu membalas",
      "Menghormati batas pribadi dan membahas konflik dengan sopan",
      "Menyebarkan chat pribadi",
      "Mengancam keluar dari kelompok"
    ],
    "jawaban": 1,
    "pembahasan": "Hubungan yang baik membutuhkan rasa hormat dan batas yang sehat.",
    "tag": "analisis"
  },
  {
    "q": "Data survei kelas untuk presentasi sebaiknya…",
    "opsi": [
      "Dilengkapi kata sandi siswa",
      "Dipublikasikan dengan alamat rumah",
      "Diunggah seluruhnya tanpa pertimbangan",
      "Disajikan seperlunya tanpa membuka identitas pribadi"
    ],
    "jawaban": 3,
    "pembahasan": "Pembatasan data membantu menjaga privasi responden.",
    "tag": "konsep"
  },
  {
    "q": "Identitas pencipta perubahan digital dibangun melalui…",
    "opsi": [
      "Karya jujur yang memberi manfaat",
      "Klaim keberhasilan tanpa bukti",
      "Membeli komentar pujian",
      "Meniru identitas pihak lain"
    ],
    "jawaban": 0,
    "pembahasan": "Reputasi positif dapat dibangun melalui kontribusi dan dampak yang nyata.",
    "tag": "penerapan"
  },
  {
    "q": "Jika teknologi baru sulit diakses sebagian teman, keputusan terbaik adalah…",
    "opsi": [
      "Tetap memaksa tanpa bantuan",
      "Membatalkan semua pembelajaran",
      "Memilih atau menyesuaikan alat agar kebutuhan pengguna terpenuhi",
      "Mengejek teman yang kesulitan"
    ],
    "jawaban": 2,
    "pembahasan": "Pilihan teknologi perlu mempertimbangkan akses dan kebutuhan pengguna.",
    "tag": "analisis"
  },
  {
    "q": "Komunikasi dan kolaborasi online yang baik mencakup…",
    "opsi": [
      "Mengubah tugas diam-diam",
      "Tujuan, peran, tenggat, dan umpan balik yang jelas",
      "Menghapus semua komentar",
      "Menyembunyikan hasil diskusi"
    ],
    "jawaban": 1,
    "pembahasan": "Kejelasan koordinasi membantu anggota bekerja menuju tujuan bersama.",
    "tag": "konsep"
  },
  {
    "q": "Jika jaringan atau akun sekolah bermasalah, siswa sebaiknya…",
    "opsi": [
      "Mencoba masuk ke akun pengelola",
      "Membagikan akses ke pihak asing",
      "Mengutak-atik sistem tanpa izin",
      "Melapor kepada guru atau pengelola berwenang"
    ],
    "jawaban": 3,
    "pembahasan": "Penanganan sistem bersama perlu mengikuti izin dan tanggung jawab pengelola.",
    "tag": "penerapan"
  },
  {
    "q": "Contoh literasi data adalah…",
    "opsi": [
      "Menafsirkan grafik dan memeriksa dasar kesimpulannya",
      "Mengarang angka agar menarik",
      "Mengabaikan sumber data",
      "Menganggap semua grafik benar"
    ],
    "jawaban": 0,
    "pembahasan": "Literasi data membantu memahami bukti serta batas kesimpulan.",
    "tag": "analisis"
  }
];

const SIMULASI = [
  {
    "id": "sim1",
    "judul": "Memeriksa Informasi",
    "skenario": "Untuk menilai informasi, langkah yang tepat adalah…",
    "pilihan": [
      "Hanya menghitung jumlah suka",
      "Percaya pada judul sensasional",
      "Memeriksa sumber, bukti, tanggal, dan pembanding",
      "Mengikuti komentar terbanyak"
    ],
    "benar": [
      "Memeriksa sumber, bukti, tanggal, dan pembanding"
    ],
    "penjelasanBenar": "Popularitas bukan bukti kebenaran informasi.",
    "tipe": "single"
  },
  {
    "id": "sim2",
    "judul": "Menjaga Keselamatan",
    "skenario": "Saat melihat perundungan di grup, tindakan yang tepat adalah…",
    "pilihan": [
      "Ikut tertawa",
      "Menyebarkan tangkapan layar ke semua grup",
      "Menyalahkan korban",
      "Mendukung korban dan mencari bantuan yang tepat"
    ],
    "benar": [
      "Mendukung korban dan mencari bantuan yang tepat"
    ],
    "penjelasanBenar": "Jangan memperluas penyebaran; bantu korban mendapat dukungan.",
    "tipe": "single"
  },
  {
    "id": "sim3",
    "judul": "Berkarya Bersama",
    "skenario": "Kokreator digital yang baik akan…",
    "pilihan": [
      "Mengambil seluruh kredit tim",
      "Memberi kredit sesuai kontribusi anggota",
      "Menghapus karya rekan",
      "Menyembunyikan pembagian tugas"
    ],
    "benar": [
      "Memberi kredit sesuai kontribusi anggota"
    ],
    "penjelasanBenar": "Kokreator menghargai kontribusi dan membangun karya bersama secara jujur.",
    "tipe": "single"
  },
  {
    "id": "sim4",
    "judul": "Komunikasi Publik",
    "skenario": "Dalam komunikasi publik, hal yang perlu diperiksa adalah…",
    "pilihan": [
      "Hanya jumlah emoji",
      "Hanya panjang judul",
      "Ketepatan isi, penerima, dan dampak pesan",
      "Warna foto profil penulis"
    ],
    "benar": [
      "Ketepatan isi, penerima, dan dampak pesan"
    ],
    "penjelasanBenar": "Pesan publik dapat menjangkau banyak orang sehingga perlu ditinjau.",
    "tipe": "single"
  },
  {
    "id": "sim5",
    "judul": "Memeriksa Hasil AI",
    "skenario": "Hasil AI sebaiknya…",
    "pilihan": [
      "Selalu dianggap benar",
      "Diperiksa dengan sumber tepercaya",
      "Disalin tanpa dipahami",
      "Diisi data rahasia untuk setiap tugas"
    ],
    "benar": [
      "Diperiksa dengan sumber tepercaya"
    ],
    "penjelasanBenar": "AI dapat keliru atau bias; pengguna tetap perlu memeriksa hasilnya.",
    "tipe": "single"
  }
];