document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  const destinations = [
    {
      title: "Pura Besakih",
      image: "Pura Besakih.jpg",
      description: "Pura terbesar dan termegah di Bali...",
      fullDescription: `Pura Agung Besakih adalah pura terbesar dan termegah di Bali. Pulau ini terletak di Desa Besakih, Kecamatan Rendang, berada di lereng sebelah barat daya Gunung Agung, gunung tertinggi di Bali.

Pura Agung Besakih memiliki gaya arsitektur yang mengagumkan khas Bali dan berada di ketinggian 915 kaki di kaki Gunung Agung dengan memukau. Bangunan yang dibangun sejak abad ke-10 Masehi ini menjadi pusat kegiatan spiritual Hindu Dharma di Pulau Dewata.`,
      views: 1200,
      comments: 85,
    },
    {
      title: "Kepulauan Derawan",
      image: "Kepulauan Derawan.jpg",
      description: "Taman bawah laut yang menawan...",
      fullDescription: `Kepulauan Derawan adalah sebuah kepulauan yang berada di Kabupaten Berau, Kalimantan Timur. Di kepulauan ini terdapat sejumlah objek wisata bahari menawan, salah satunya Taman Bawah Laut yang diminati wisatawan mancanegara terutama para penyelam kelas dunia.

Saat pertama kali menginjakan kaki disini, jangan heran bila Toppers akan disambut dengan hamparan pasir putih yang mempesona. Warna airnya yang sangat jernih juga akan bikin kamu betah untuk berlama-lama di kawasan ini. Panorama alam ini menjadi sajian liburan utama bagi wisatawan dalam berkunjung`,
      views: 950,
      comments: 70,
    },
    {
      title: "Taman Nasional Way Kambas",
      image: "Taman Nasional Way Kambas.jpg",
      description: "Taman Warisan ASEAN dengan satwa langka...",
      fullDescription: `Taman Nasional Way Kambas (TNKW) Lampung ditetapkan sebagai kawasan Taman Warisan ASEAN (ASEAN Heritage Park) yang ke-36, pada tanggal 25 Juli 2016. Artinya, Taman Nasional Way Kambas ini menjadi Taman Warisan ASEAN ke-4 di Indonesia.

Terletak di ujung selatan Sumatera atau 110 km dari Bandar Lampung, TNKW merupakan salah satu Taman Nasional pertama dan tertua di Indonesia. Taman Nasional ini menempati 1.300 km persegi dari hutan dataran rendah pantai sekitar Sungai Way Kambas di pantai timur Provinsi Lampung.`,
      views: 800,
      comments: 55,
    },
    {
      title: "Pantai Parai Tenggiri",
      image: "Pantai Parai Tenggiri.jpg",
      description: "Pantai dengan struktur landai dan air laut hijau toska...",
      fullDescription: `Pasti diantara kamu sudah pernah menyaksikan film populer Laskar Pelangi yang berlatar di Pulang Belitung, bukan? Selain alur ceritanya yang menarik, lokasi film ini juga banyak menyita perhatian penonton.

Berbeda dengan pantai lain pada umumnya, Parai Tenggiri memiliki struktur pantai yang landai dengan air laut berwarna hijau toska serta pasir putihnya yang lembut. Ombak di pantai ini juga tenang sehingga menjadi salah satu alasan yang menarik bagi wisatawan yang senang berenang.`,
      views: 700,
      comments: 45,
    },
    {
      title: "Nusa Dua",
      image: "Nusa Dua.jpg",
      description: "Pantai dengan pasir putih dan air laut biru jernih...",
      fullDescription: `Pulau Seribu Dewa satu ini memang tidak perlu diragukan lagi terkait keindahan dan pesonanya dalam memikat para wisatawan dalam negeri maupun mancanegara. Di Bali, ada satu tempat wisata yang begitu cantik, yakni Nusa Dua.

Objek wisata pantai ini memiliki pasir putih yang lembut dan air laut yang berwarna biru jernih. Kamu akan dimanjakan dengan berbagai fasilitas saat berkunjung ke tempat satu ini. Mulai dari penginapan dan resort yang berkelas, restoran, pusat perbelanjaan, hingga aktivitas berselancar di pantainya.`,
      views: 1100,
      comments: 90,
    },
    {
      title: "Gunung Rinjani",
      image: "Gunung Rinjani.jpg",
      description: "Gunung berapi tertinggi kedua di Indonesia...",
      fullDescription: `Selain Gili Trawangan, di Nusa Tenggara Barat juga terdapat wisata yang tak kalah populer dan cocok bagi kamu yang suka mendaki, yakni Gunung Rinjani. Gunung ini adalah gunung berapi tertinggi kedua yang ada di Indonesia.

Gunung Rinjani memiliki pemandangan terindah se-Asia dengan hamparan bunga edelweis dan Danau Segara Anak. Di tempat ini juga bisa menjadi spot menarik bagi para pendaki untuk mendirikan tenda, mandi air hangat, maupun memancing ikan.`,
      views: 900,
      comments: 60,
    },
    {
      title: "Danau Toba",
      image: "Danau Toba.jpg",
      description: "Danau vulkanik terbesar di Asia Tenggara...",
      fullDescription: `Toppers pernah berkunjung ke Danau Toba? Danau dengan keindahan yang tidak tertandingi ini merupakan danau vulkanik terbesar di Asia Tenggara dan terbesar kedua di dunia setelah Danau Victoria.

Danau Toba sudah lama terkenal sebagai salah satu objek wisata Indonesia favorit yang sering dikunjungi sejak tahun 1980-an lho!`,
      views: 1000,
      comments: 75,
    },
    {
      title: "Nusa Penida",
      image: "Nusa Penida.jpg",
      description: "Pulau dengan pemandangan indah dan pantai eksotis...",
      fullDescription: `Pulau Bali, sudah tidak bisa dipungkiri lagi namanya memang merajalela ke seluruh dunia karena pemandangannya yang indah, budayanya yang masih kental terasa dan pantai nya yang eksotis.

Saat Toppers berkunjung ke Bali jangan heran kalau banyak banget turis berlalu lalang di sana, bahkan beberapa ada yang menetap di Bali lho!`,
      views: 850,
      comments: 50,
    },
    {
      title: "Taman Laut Bunaken",
      image: "Taman Laut Bunaken.jpg",
      description: "Taman bawah laut yang mengagumkan...",
      fullDescription: `Destinasi wisata di Indonesia yang populer di mancanegara selanjutnya adalah Taman Laut Bunaken yang berada di Teluk Manado.

Bunaken menjadi salah satu objek wisata di Indonesia yang mengundang decak kagum karena keindahan taman bawah lautnya yang sulit ditemukan di negara lain.`,
      views: 950,
      comments: 65,
    },
    {
      title: "Wakatobi",
      image: "Wakatobi.jpg",
      description: "Taman Nasional dengan terumbu karang yang indah...",
      fullDescription: `Masih di Pulau Sulawesi, Taman Nasional Wakatobi juga merupakan salah satu tujuan wisata bawah laut yang populer dan mendunia.

Dengan luas mencapai 13.900 km2, tujuan wisata terkenal asal Indonesia ini memiliki tak kurang dari 112 jenis terumbu karang yang bersimbiosis dengan ikan-ikan bawah laut sehingga menciptakan panorama bawah laut yang tiada tanding.`,
      views: 1050,
      comments: 80,
    },
  ];

  const container = document.querySelector(".destination-list");
  destinations.forEach((dest) => {
    const card = document.createElement("div");
    card.className = "destination-card";
    card.innerHTML = `
              <img src="${dest.image}" alt="${dest.title}">
              <h3>${dest.title}</h3>
              <p>${dest.description}</p>
              <p><strong>${dest.views}</strong> Views | <strong>${dest.comments}</strong> Comments</p>
              <button>Read More</button>
          `;
    card.querySelector("button").addEventListener("click", () => {
      alert(dest.fullDescription);
    });
    container.appendChild(card);
  });
});
