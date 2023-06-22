// import images
import LogoImg from "../assets/logo.png"
import HeroImg from "../assets/HERO.png"
import image from "../assets/wedding.png"
import CardIconImg1 from "../assets/icons/responsive2.png"
import CardIconImg2 from "../assets/icons/calendar.png"
import CardIconImg3 from "../assets/icons/gallery2.png"
import CardIconImg4 from "../assets/icons/navigation.png"
import CardIconImg5 from "../assets/icons/music.png"
import CardIconImg6 from "../assets/icons/moment.png"
import CardIconImg7 from "../assets/icons/amplop.png"
import CardIconImg8 from "../assets/icons/love.png"
import TestiCard1 from "../assets/testimoni-1.jpg"
import TestiCard2 from "../assets/testimoni-2.jpg"
import TestiCard3 from "../assets/testimoni-3.jpg"
import TestiCard4 from "../assets/testimoni-4.jpg"
import TestiCard5 from "../assets/testimoni-5.jpg"
import ImgCard1 from "../assets/icons/bca.png"
import ImgCard2 from "../assets/icons/bersama.png"
import ImgCard3 from "../assets/icons/bni.png"
import ImgCard5 from "../assets/icons/bri.png"
import ImgCard4 from "../assets/icons/dana.png"
import ImgCard6 from "../assets/icons/mandiri.png"
import ImgCard7 from "../assets/icons/ovo.png"
import ImgCard8 from "../assets/icons/gopay.png"

// export components

export const dataNavLink = [
  { id: 1, name: "Home", path: "/#home" },
  { id: 2, name: "Katalog", path: "/#katalog" },
  { id: 3, name: "Paket", path: "/#harga" },
  { id: 4, name: "Fitur", path: "/#fitur" },
  { id: 5, name: "Testimoni", path: "/#testimoni" },
  { id: 6, name: "Faq", path: "/#faq" },
]

export const dataNavLinkOrder = [
  { id: 1, name: "Katalog", path: "/#katalog" },
  { id: 2, name: "Paket", path: "/#paket" },
  { id: 3, name: "Fitur", path: "/#fitur" },
  { id: 4, name: "Testimoni", path: "/#testimoni" },
  { id: 5, name: "Faq", path: "/#faq" },
]

export const hero = {
  title: "JASA PEMBUATAN UNDANGAN DIGITAL",

  subtitle:
    "Temukan kemudahan, keindahan, dan efisiensi dalam mengundang tamu dengan Citra-Invitation",
  btnText: "Buat undangan",
  image: HeroImg,
}

export const features = {
  feature1: {
    image: image,
    title: "Apa Itu ",
    subtitle:
      "Undangan digital adalah inovasi modern yang mengubah cara tradisional mengirim undangan. Dalam era digital, undangan digital dikirim secara elektronik melalui email, pesan teks, atau platform undangan online. Keuntungan utamanya adalah kemudahan pengiriman, pelacakan RSVP, fleksibilitas desain, dan ramah lingkungan. Undangan digital efisien, praktis, dan populer dalam mengadakan acara saat ini.",
    desc: "Undangan ini biasa disebut dengan ",
  },
}

export const product = {
  title: "Fitur Unggulan",
  subtitle: "Fitur Undangan Digital",
  cards: [
    {
      icon: CardIconImg1,
      title: "Design Modern & Responsive",
      subtitle:
        "Tampilan desain responsif dan elegant pada undangan online di semua perangkat",
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: "Menambahkan ke kalendar",
      subtitle: "Anda untuk melihat dan mengatur jadwal acara dengan cepat",
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: "Gallery Foto",
      subtitle:
        "Anda untuk memamerkan momen-momen berharga acara Anda dengan mudah dan elegan ",
      delay: 600,
    },
    {
      icon: CardIconImg4,
      title: "Navigasi Lokasi",
      subtitle:
        "Anda dapat menjelajahi koleksi foto acara Anda secara praktis dan intuitif ",
      delay: 600,
    },
    {
      icon: CardIconImg5,
      title: "Background Musik",
      subtitle:
        "Anda dapat memilih untuk menambahkan musik sesuai dengan keinginan anda",
      delay: 600,
    },
    {
      icon: CardIconImg6,
      title: "Berbagi moment indah dan Ucapan",
      subtitle:
        "Anda dapat berbagi moment dengan tamu dengan mengirimkan gambar dan ucapan",
      delay: 600,
    },
    {
      icon: CardIconImg7,
      title: "Amplop Digital",
      subtitle:
        "Tamu undangan dapat membuka amplop digital dengan satu klik dan langsung melihat konten undangan Anda.",
      delay: 600,
    },
    {
      icon: CardIconImg8,
      title: "Love Story & Quotes",
      subtitle:
        "Ceritakan kisah cinta Anda dalam bentuk yang kreatif dan personal",
      delay: 600,
    },
  ],
}

export const testimonials = {
  title: "Testimoni",
  subtitle:
    "Bukti nyata bahwa Citra Invitation telah menjadi bagian kebahagiaan momen terbaik mereka",
  clients: [
    {
      imageUrl: TestiCard1,
      imageAlt: "testing",
      from: "Desi & Aldi",
      title: "Jumat, 20 Oktober 2021",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora!",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: TestiCard2,
      imageAlt: "testing",
      imageAlt: "testing",
      from: "Desi & Aldi",
      title: "Jumat, 20 Oktober 2021",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora!",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: TestiCard3,
      imageAlt: "testing",
      from: "Desi & Aldi",
      title: "Jumat, 20 Oktober 2021",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora!",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: TestiCard4,
      imageAlt: "testing",
      from: "Desi & Aldi",
      title: "Jumat, 20 Oktober 2021",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora!",
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl: TestiCard5,
      imageAlt: "testing",
      from: "Desi & Aldi",
      title: "Jumat, 20 Oktober 2021",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora!",
      reviewCount: 34,
      rating: 4,
    },
  ],
}

export const dataPaket = {
  title: "Daftar Harga",
  subtitle:
    "Pilih dari berbagai paket yang kami tawarkan, sesuai dengan kebutuhan anda!",
  cards: [
    {
      id: 0,
      title: "Standard",
      price: "150K",
      description: [
        { titleDesc: "Desain Basic" },
        {
          titleDesc: "Masa Aktif 6 Bulan",
        },
        {
          titleDesc: "Quotes",
        },
        {
          titleDesc: "Informasi Pengantin",
        },
        {
          titleDesc: "Detail Acara",
        },
        {
          titleDesc: "RSVP",
          titleDesc2: "Konfirmasi Kehadiran Via WhatsApp",
        },
        {
          titleDesc: "Unlimited Tamu Undangan",
        },
        {
          titleDesc: "Galeri Foto",
          titleDesc2: "Maksimal 5 foto",
        },
        {
          titleDesc: "Waktu Dan lokasi",
        },
      ],
      btnText: "Pesan Sekarang",
      borderColor: "#361500",
    },
    {
      id: 1,
      title: "Premium",
      price: "300K",
      description: [
        { titleDesc: "Semua Fitur Basic" },
        {
          titleDesc: "Masa Aktif 1 Tahun",
        },
        {
          titleDesc: "Love Stories",
        },
        {
          titleDesc: "Peta Lokasi",
        },
        {
          titleDesc: "Galeri Foto",
          titleDesc2: "Maximal 10 foto",
        },
        {
          titleDesc: "Embed Video",
          titleDesc2: "Link dari YouTube",
        },
        {
          titleDesc: "Musik",
        },
        {
          titleDesc: "RSVP",
          titleDesc2: "Via WhatsApp atau Google SpreadSheet",
        },
        {
          titleDesc: "Ucapan",
        },
        {
          titleDesc: "Amplop Digital",
          titleDesc2: "Dana, Bank, Ovo, Gopay",
        },
      ],
      btnText: "Pesan Sekarang",
      borderColor: "#411530",
    },
    {
      id: 2,
      title: "Exclusive",
      price: "450Jt",
      description: [
        { titleDesc: "Semua Fitur Premium" },
        {
          titleDesc: "Masa Aktif Selamanya",
          titleDesc2: "Selama Citra invitation ada",
        },
        {
          titleDesc: "Desain Custom",
        },
        {
          titleDesc: "Galeri Foto",
          titleDesc2: "Maksimal 20 foto",
        },
        {
          titleDesc: "Link Live Foto",
          titleDesc2: "hanya berupa tombol untuk mengarahkan ke live streaming",
        },
        {
          titleDesc: "Undangan Fisik",
          titleDesc2: "Bebas request berapa banyak undangan",
        },
      ],
      btnText: "Pesan Sekarang",
      borderColor: "#262A56",
    },
  ],
}

export const faq = {
  title: "Pertanyaan",
  subtitle:
    "Berikut ini jawaban dari pertanyaan yang paling sering diajukan. Jika pertanyaan kamu masih belum juga terjawab, silakan menghubungi kami.",
  accordions: [
    {
      id: 1,
      question: "Berapa Lama pengerjaan undangan website?",
      answer:
        "Estimasi pengerjaan undangan website bisa selesai dalam waktu 1-3 hari jika kamu melakukan pembayaran dan pengisian data dengan lengkap.",
    },
    {
      id: 2,
      question: "Apakah bisa custom Tema sesuai dengan keinginan saya?",
      answer:
        "Anda dapat meminta tema khusus ke admin melalui obrolan whatsaap. Tema khusus selain tema yang disediakan bisa hubungi admin melalui whats'app",
    },
    {
      id: 3,
      question:
        "Apa saja yang perlu saya siapkan untuk membuat undangan online?",
      answer:
        "cukup klik pesan sekarang / lansung via Chat Whatsapp, kemudian isi informasi mempelai ,lokasi akad nikah , reesepsi, foto dan video prawedding (jika ada), backgroud music, dan informasi lainnya yang dibutuhkan.",
    },
    {
      id: 4,
      question: "Bagaimana cara membuat undangannya?",
      answer:
        "Pilih paket yang diinginkan, klik pesan & pilih metode pembayarannya. Setelah pembayaran terverifikasi, kamu dapat mengisi data dirimu & pasangan, data acara, foto-foto dan data lainnya yang dibutuhkan",
    },
  ],
}

export const footer = {
  logo: LogoImg,
  description: [
    {
      id: "1",
      icon1: ImgCard1,
    },
    {
      id: "2",
      icon1: ImgCard2,
    },
    {
      id: "3",
      icon1: ImgCard3,
    },
    {
      id: "5",
      icon1: ImgCard4,
    },
  ],
  subdecsripton: [
    {
      id: "4",
      icon2: ImgCard5,
    },
    {
      id: "6",
      icon2: ImgCard6,
    },
    {
      id: "7",
      icon2: ImgCard7,
    },
    {
      id: "8",
      icon2: ImgCard8,
    },
  ],
}
