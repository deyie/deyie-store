// ===================================================
// DEYA STORE — SCRIPT UTAMA (UPDATE PRICELIST SOSMED TERBARU)
// ===================================================

const WHATSAPP_NUMBER = "628558826428"; // Ganti dengan nomor WhatsApp asli pacar Anda

const storeProducts = [
  // --- STREAMING ---
  {
    id: "netflix",
    name: "Netflix Premium",
    category: "Streaming",
    img: "image/netflix.png",
    color: "p1",
    note: "Garansi Full • Anti On-Hold",
    plans: [
      { name: "Sharing 1P1U - 1 Bulan", price: 45000 },
      { name: "Sharing 1P1U - 2 Bulan", price: 80000 },
      { name: "Sharing 1P1U - 3 Bulan", price: 120000 },
      { name: "Sharing 1P2U - 1 Bulan", price: 25000 },
      { name: "Sharing 1P2U - 2 Bulan", price: 40000 },
      { name: "Sharing 1P2U - 3 Bulan", price: 65000 },
      { name: "Semi Private - 1 Bulan", price: 55000 }
    ]
  },
  {
    id: "viu",
    name: "Viu Premium",
    category: "Streaming",
    img: "image/viu.png",
    color: "p2",
    note: "Legal Tanpa Iklan • Subtitle Indonesia",
    plans: [
      { name: "Private Anti Limit - 1 Bulan", price: 11000 },
      { name: "Private Anti Limit - 2 Bulan", price: 14000 },
      { name: "Private Anti Limit - 3 Bulan", price: 18000 },
      { name: "Private Anti Limit - 4 Bulan", price: 22000 },
      { name: "Private Anti Limit - 6 Bulan", price: 30000 },
      { name: "Private Anti Limit - 1 Tahun", price: 40000 },
      { name: "Private Biasa - 1 Bulan", price: 8000 },
      { name: "Private Biasa - 3 Bulan", price: 13000 },
      { name: "Private Biasa - 6 Bulan", price: 25000 },
      { name: "Private Biasa - 1 Tahun", price: 30000 }
    ]
  },
  {
    id: "vidio",
    name: "Vidio Premier",
    category: "Streaming",
    img: "image/vidio.png",
    color: "p2",
    note: "Nonton Liga & Series Lokal",
    plans: [
      { name: "Sharing Mobile - 30 Hari", price: 20000 },
      { name: "Sharing All Device - 30 Hari", price: 25000 },
      { name: "Private Mobile - 30 Hari", price: 35000 },
      { name: "Private All Device - 30 Hari", price: 45000 }
    ]
  },
  {
    id: "bstation",
    name: "Bstation / Bilibili VIP",
    category: "Streaming",
    img: "image/bstation.png",
    color: "p1",
    note: "Anime & Donghua Terbaru HD",
    plans: [
      { name: "Sharing - 1 Bulan", price: 15000 },
      { name: "Sharing - 3 Bulan", price: 20000 },
      { name: "Private - 1 Bulan", price: 40000 },
      { name: "Private - 3 Bulan", price: 75000 }
    ]
  },
  {
    id: "wetv",
    name: "WeTV VIP",
    category: "Streaming",
    img: "image/wetv.png",
    color: "p2",
    note: "Akses Eksklusif C-Drama & Anime",
    plans: [
      { name: "Sharing - 1 Bulan", price: 15000 },
      { name: "Private - 1 Bulan", price: 40000 }
    ]
  },
  {
    id: "primevidio",
    name: "Prime Video",
    category: "Streaming",
    img: "image/prime.png",
    color: "p2",
    note: "Film hollywood & original series",
    plans: [
      { name: "Sharing - 1 Bulan", price: 15000 },
      { name: "Private - 1 Bulan", price: 30000 }
    ]
  },
  {
    id: "hbomax",
    name: "HBO Max",
    category: "Streaming",
    img: "image/hbomax.png",
    color: "p3",
    note: "Blockbuster movies & series",
    plans: [
      { name: "Sharing Std - 1 Bulan", price: 25000 },
      { name: "Sharing Ult - 1 Bulan", price: 35000 },
      { name: "Private - 1 Bulan", price: 120000 }
    ]
  },
  {
    id: "iqiyi",
    name: "iQIYI",
    category: "Streaming",
    img: "image/iqiyi.png",
    color: "p4",
    note: "Asian drama & anime pilihan",
    plans: [
      { name: "Sharing STD - 1 Bulan", price: 15000 },
      { name: "Sharing PREM - 1 Bulan", price: 20000 },
      { name: "Anti Limit PREM - 1 Bulan", price: 25000 },
      { name: "Private STD - 1 Bulan", price: 35000 },
      { name: "Private PREM - 1 Bulan", price: 40000 }
    ]
  },
  {
    id: "loklok",
    name: "Loklok",
    category: "Streaming",
    img: "image/loklok.png",
    color: "p1",
    note: "Nonton film santai kualitas jernih",
    plans: [
      { name: "Basic Sharing - 1 Bulan", price: 25000 },
      { name: "STD Sharing - 1 Bulan", price: 35000 },
      { name: "Private Basic - 1 Bulan", price: 60000 },
      { name: "Private Standar - 1 Bulan", price: 80000 }
    ]
  },
  {
    id: "vision",
    name: "Vision+",
    category: "Streaming",
    img: "image/visionplus.png",
    color: "p3",
    note: "Live TV & original series lokal",
    plans: [
      { name: "Sharing - 1 Bulan", price: 20000 },
      { name: "Private - 1 Bulan", price: 35000 }
    ]
  },
  {
    id: "rcti",
    name: "RCTI+",
    category: "Streaming",
    img: "image/rcti.png",
    color: "p3",
    note: "Nonton Program TV & Sinetron Pilihan",
    plans: [
      { name: "Sharing - 1 Bulan", price: 20000 },
      { name: "Private - 1 Bulan", price: 35000 }
    ]
  },

  // --- EDUCATION & TOOLS ---
  {
    id: "chatgpt",
    name: "ChatGPT Plus",
    category: "Education",
    img: "image/chatgpt.png",
    color: "p1",
    note: "AI Assistant cerdas untuk produktivitas",
    plans: [
      { name: "Plus Sharing - 1 Bulan", price: 40000 },
      { name: "Go Sharing - 1 Bulan", price: 30000 },
      { name: "Go Private - 1 Bulan", price: 115000}
    ]
  },
  {
    id: "grammarly",
    name: "Grammarly Pro",
    category: "Education",
    img: "image/grammarly.png",
    color: "p2",
    note: "Pengecek tata bahasa & penulisan profesional",
    plans: [
      { name: "Sharing - 1 Bulan", price: 15000 },
      { name: "Sharing - 3 Bulan", price: 25000 },
      { name: "Private - 1 Bulan", price: 25000 },
      { name: "Private - 3 Bulan", price: 35000 }
    ]
  },
  {
    id: "scribd",
    name: "Scribd",
    category: "Education",
    img: "image/scribd.png",
    color: "p3",
    note: "Akses jutaan dokumen & e-book lengkap",
    plans: [
      { name: "Scribd Sharing - 1 Bulan", price: 15000 },
      { name: "Scribd Private - 1 Bulan", price: 25000 }
    ]
  },
  {
    id: "microsoft365",
    name: "Microsoft 365",
    category: "Education",
    img: "image/microsoft.png",
    color: "p4",
    note: "Word, Excel, PPT Resmi + OneDrive (Input Email Pembeli)",
    plans: [
      { name: "Famplan (Invite) - 1 Tahun", price: 15000 }
    ]
  },
  {
    id: "gemini",
    name: "Gemini AI",
    category: "Education",
    img: "image/gemini.png",
    color: "p1",
    note: "Google Advanced AI assistant",
    plans: [
      { name: "Invite - 1 Bulan", price: 15000 },
      { name: "Invite - 3 Bulan", price: 25000 },
      { name: "Invite - 4 Bulan", price: 30000 }
    ]
  },
  {
    id: "wps",
    name: "WPS Office + AI",
    category: "Education",
    img: "image/wpsoffice.png",
    color: "p2",
    note: "Office tools pintar & pengubah PDF",
    plans: [
      { name: "WPS Sharing - 1 Bulan", price: 15000 },
      { name: "WPS Sharing - 1 Tahun", price: 20000 }
    ]
  },
  {
    id: "ilovepdf",
    name: "iLovePDF Premium",
    category: "Education",
    img: "image/ilovepdf.png",
    color: "p1",
    note: "Merge, Split & Convert PDF Tanpa Batas",
    plans: [
      { name: "Sharing - 1 Tahun", price: 25000 }
    ]
  },
  // --- MUSIC & EDITING ---
  {
    id: "youtube",
    name: "YouTube Premium",
    category: "Music & Editing",
    img: "image/youtube.png",
    color: "p1",
    note: "Nonton video & dengar musik bebas iklan",
    plans: [
      { name: "Famplan - 1 Bulan", price: 12000 },
      { name: "Famplan - 2 Bulan", price: 15000 },
      { name: "Mixplan Renew - 3 Bulan", price: 35000 },
      { name: "Mixplan Renew - 5 Bulan", price: 45000 },
      { name: "Indplan No Renew - 3 Bulan", price: 40000 },
      { name: "Indplan No Renew - 6 Bulan", price: 70000 }
    ]
  },
  {
    id: "applemusic",
    name: "Apple Music",
    category: "Music & Editing",
    img: "image/applemusic.png",
    color: "p2",
    note: "Streaming musik kualitas jernih",
    plans: [
      { name: "Famplan - 1 Bulan", price: 25000 },
      { name: "Famplan - 2 Bulan", price: 30000 },
      { name: "Famplan - 3 Bulan", price: 35000 }
    ]
  },
  {
    id: "spotify",
    name: "Spotify Premium",
    category: "Music & Editing",
    img: "image/spotify.png",
    color: "p3",
    note: "Pilihan playlist & musik tanpa batas",
    plans: [
      { name: "Indplan - 1 Bulan", price: 30000 },
      { name: "Indplan - 3 Bulan", price: 60000 }
    ]
  },
  {
    id: "canva",
    name: "Canva Pro",
    category: "Music & Editing",
    img: "image/canva.png",
    color: "p4",
    note: "Desain grafis mudah & lengkap",
    plans: [
      { name: "Member - 1 Bulan", price: 8000 },
      { name: "Member - 3 Bulan", price: 15000 },
      { name: "Member - 6 Bulan", price: 25000 },
      { name: "Member - 12 Bulan", price: 35000 },
      { name: "Edu / Lifetime - 30K (Garansi 6 Bulan)", price: 30000 }
    ]
  },
  {
    id: "oldroll",
    name: "OldRoll Analog Camera",
    category: "Music & Editing",
    img: "image/oldroll.png",
    color: "p3",
    note: "Kamera Aesthetic Vintage",
    plans: [
      { name: "Lifetime", price: 25000 }
    ]
  },
  {
    id: "lightroom",
    name: "Adobe Lightroom Mobile",
    category: "Music & Editing",
    img: "image/lightroom.png",
    color: "p1",
    note: "Preset Pro & Fitur Premium",
    plans: [
      { name: "Sharing - 1 Tahun", price: 25000 }
    ]
  },
  {
    id: "ifakeios",
    name: "iFake iOS",
    category: "Music & Editing",
    img: "image/ifake.png",
    color: "p3",
    note: "Aplikasi Prank / Mockup Notif iOS",
    plans: [
      { name: "Lifetime", price: 25000 }
    ]
  },
  {
    id: "procreate",
    name: "Procreate Pocket iOS",
    category: "Music & Editing",
    img: "image/procreate.png",
    color: "p1",
    note: "Digital Painting & Sketching iOS",
    plans: [
      { name: "Lifetime", price: 25000 }
    ]
  },
  {
    id: "capcut",
    name: "CapCut Pro",
    category: "Music & Editing",
    img: "image/capcut.png",
    color: "p1",
    note: "Editor video pro tanpa watermark",
    plans: [
      { name: "Sharing - 1 Bulan", price: 20000 },
      { name: "Private 7 Hari", price: 20000 },
      { name: "Private - 1 Bulan", price: 45000 }
    ]
  },
  {
    id: "alightmotion",
    name: "Alight Motion",
    category: "Music & Editing",
    img: "image/alightmotion.png",
    color: "p2",
    note: "Aplikasi motion graphics & video editor",
    plans: [
      { name: "Alight Motion Private - 1 Tahun", price: 25000 }
    ]
  },
  {
    id: "dazzcam",
    name: "Dazz Cam",
    category: "Music & Editing",
    img: "image/dazzcam.png",
    color: "p2",
    note: "Kamera Vintage & Efek 8mm",
    plans: [
      { name: "Lifetime", price: 25000 }
    ]
  },
  {
    id: "vsco",
    name: "VSCO Fullpack",
    category: "Music & Editing",
    img: "image/vsco.png",
    color: "p3",
    note: "Filter Estetik & Presets Lengkap",
    plans: [
      { name: "Sharing - 1 Tahun", price: 25000 }
    ]
  },
  {
    id: "picsart",
    name: "Picsart",
    category: "Music & Editing",
    img: "image/picsart.png",
    color: "p3",
    note: "Efek, stiker, & filter premium lengkap",
    plans: [
      { name: "Sharing - 1 Bulan", price: 15000 },
      { name: "Private - 1 Bulan", price: 20000 }
    ]
  },

  // --- SOSMED NEEDS ---
  {
    id: "s-ig-asing",
    name: "Instagram Followers / Likes (Asing)",
    category: "Sosmed",
    img: "image/instagram.png",
    color: "p1",
    note: "Refill Lifetime (Asing)",
    plans: [
      { name: "IG Followers Asing - 100F", price: 10000 },
      { name: "IG Followers Asing - 300F", price: 15000 },
      { name: "IG Followers Asing - 500F", price: 20000 },
      { name: "IG Followers Asing - 700F", price: 25000 },
      { name: "IG Followers Asing - 1000F", price: 40000 },
      { name: "IG Likes Asing - 100L", price: 5000 },
      { name: "IG Likes Asing - 300L", price: 12000 },
      { name: "IG Likes Asing - 500L", price: 20000 },
      { name: "IG Likes Asing - 700L", price: 24000 },
      { name: "IG Likes Asing - 1000L", price: 30000 },
      { name: "Request Jumlah Lain (Custom)", price: 0 }
    ]
  },
  {
    id: "s-ig-indo",
    name: "Instagram Followers / Likes (Indonesia)",
    category: "Sosmed",
    img: "image/instagram.png",
    color: "p1",
    note: "Refill 30 Hari (Indonesia)",
    plans: [
      { name: "IG Followers Indo - 100F", price: 15000 },
      { name: "IG Followers Indo - 300F", price: 20000 },
      { name: "IG Followers Indo - 500F", price: 30000 },
      { name: "IG Followers Indo - 700F", price: 45000 },
      { name: "IG Followers Indo - 1000F", price: 65000 },
      { name: "IG Likes Indo - 100L", price: 8000 },
      { name: "IG Likes Indo - 300L", price: 15000 },
      { name: "IG Likes Indo - 500L", price: 25000 },
      { name: "IG Likes Indo - 700L", price: 30000 },
      { name: "IG Likes Indo - 1000L", price: 35000 },
      { name: "Request Jumlah Lain (Custom)", price: 0 }
    ]
  },
  {
    id: "s-ig-views",
    name: "Instagram Views",
    category: "Sosmed",
    img: "image/instagram.png",
    color: "p1",
    note: "Views & Reels Instagram",
    plans: [
      { name: "Instagram Views - 1000V", price: 15000 },
      { name: "Instagram Views - 2000V", price: 25000 },
      { name: "Instagram Views - 5000V", price: 35000 },
      { name: "Instagram Views - 10000V", price: 60000 },
      { name: "Request Jumlah Lain (Custom)", price: 0 }
    ]
  },
  {
    id: "s-tt-asing",
    name: "TikTok Followers / Likes (Asing)",
    category: "Sosmed",
    img: "image/tiktok.png",
    color: "p4",
    note: "Refill 30 Hari (Asing)",
    plans: [
      { name: "TikTok Followers Asing - 100F", price: 15000 },
      { name: "TikTok Followers Asing - 300F", price: 20000 },
      { name: "TikTok Followers Asing - 500F", price: 27000 },
      { name: "TikTok Followers Asing - 700F", price: 45000 },
      { name: "TikTok Followers Asing - 1000F", price: 65000 },
      { name: "TikTok Likes Asing - 100L", price: 8000 },
      { name: "TikTok Likes Asing - 300L", price: 15000 },
      { name: "TikTok Likes Asing - 500L", price: 25000 },
      { name: "TikTok Likes Asing - 700L", price: 30000 },
      { name: "TikTok Likes Asing - 1000L", price: 35000 },
      { name: "Request Jumlah Lain (Custom)", price: 0 }
    ]
  },
  {
    id: "s-tt-indo",
    name: "TikTok Followers / Likes (Indonesia)",
    category: "Sosmed",
    img: "image/tiktok.png",
    color: "p4",
    note: "Refill 30 Hari (Indonesia)",
    plans: [
      { name: "TikTok Followers Indo - 100F", price: 20000 },
      { name: "TikTok Followers Indo - 300F", price: 50000 },
      { name: "TikTok Followers Indo - 500F", price: 80000 },
      { name: "TikTok Followers Indo - 700F", price: 100000 },
      { name: "TikTok Followers Indo - 1000F", price: 150000 },
      { name: "TikTok Likes Indo - 100L", price: 8000 },
      { name: "TikTok Likes Indo - 300L", price: 15000 },
      { name: "TikTok Likes Indo - 500L", price: 25000 },
      { name: "TikTok Likes Indo - 700L", price: 30000 },
      { name: "TikTok Likes Indo - 1000L", price: 35000 },
      { name: "Request Jumlah Lain (Custom)", price: 0 }
    ]
  },
  {
    id: "s-tt-views",
    name: "TikTok Views",
    category: "Sosmed",
    img: "image/tiktok.png",
    color: "p4",
    note: "Views video TikTok",
    plans: [
      { name: "TikTok Views - 1000V", price: 15000 },
      { name: "TikTok Views - 2000V", price: 25000 },
      { name: "TikTok Views - 5000V", price: 35000 },
      { name: "TikTok Views - 10000V", price: 60000 },
      { name: "Request Jumlah Lain (Custom)", price: 0 }
    ]
  },
  {
    id: "s-yt",
    name: "YouTube Sosmed Needs",
    category: "Sosmed",
    img: "image/youtubeneeds.png",
    color: "p2",
    note: "Subscriber & Like (Refill Lifetime)",
    plans: [
      { name: "YouTube Subscriber - 100S", price: 20000 },
      { name: "YouTube Subscriber - 300S", price: 50000 },
      { name: "YouTube Subscriber - 500S", price: 70000 },
      { name: "YouTube Subscriber - 700S", price: 95000 },
      { name: "YouTube Subscriber - 1000S", price: 130000 },
      { name: "YouTube Like - 100L", price: 10000 },
      { name: "YouTube Like - 300L", price: 15000 },
      { name: "YouTube Like - 500L", price: 22000 },
      { name: "YouTube Like - 700L", price: 28000 },
      { name: "YouTube Like - 1000L", price: 40000 },
      { name: "Request Jumlah Lain (Custom)", price: 0 }
    ]
  },
  {
    id: "s-spotify",
    name: "Spotify Sosmed Needs",
    category: "Sosmed",
    img: "image/spotify.png",
    color: "p3",
    note: "Followers & Play / Album Stream",
    plans: [
      { name: "Spotify Followers - 100F", price: 10000 },
      { name: "Spotify Followers - 300F", price: 15000 },
      { name: "Spotify Followers - 500F", price: 20000 },
      { name: "Spotify Followers - 700F", price: 25000 },
      { name: "Spotify Followers - 1000F", price: 35000 },
      { name: "Spotify Playlist Followers - 100F", price: 10000 },
      { name: "Spotify Playlist Followers - 300F", price: 13000 },
      { name: "Spotify Playlist Followers - 500F", price: 18000 },
      { name: "Spotify Playlist Followers - 700F", price: 23000 },
      { name: "Spotify Playlist Followers - 1000F", price: 30000 },
      { name: "Spotify Play / Album - 100P", price: 5000 },
      { name: "Spotify Play / Album - 500P", price: 15000 },
      { name: "Spotify Play / Album - 1000P", price: 25000 },
      { name: "Spotify Play / Album - 2000P", price: 35000 },
      { name: "Request Jumlah Lain (Custom)", price: 0 }
    ]
  },
  {
    id: "s-telegram",
    name: "Telegram Needs",
    category: "Sosmed",
    img: "image/telegram.png",
    color: "p3",
    note: "CH Member & Post Views / Reaction",
    plans: [
      { name: "Telegram CH Member - 100M", price: 10000 },
      { name: "Telegram CH Member - 300M", price: 20000 },
      { name: "Telegram CH Member - 500M", price: 30000 },
      { name: "Telegram CH Member - 1000M", price: 50000 },
      { name: "Telegram Post Views / Reaction - 100P", price: 5000 },
      { name: "Telegram Post Views / Reaction - 500P", price: 15000 },
      { name: "Telegram Post Views / Reaction - 1000P", price: 25000 },
      { name: "Telegram Post Views / Reaction - 2000P", price: 35000 },
      { name: "Request Jumlah Lain (Custom)", price: 0 }
    ]
  },
  {
    id: "s-shopee",
    name: "Shopee Indonesia Needs",
    category: "Sosmed",
    img: "image/shopee.png", // Pastikan file shopee.png ada di folder image
    color: "p1",
    note: "Followers Toko Shopee Indonesia",
    plans: [
      { name: "Shopee Followers Indo - 100F", price: 15000 },
      { name: "Shopee Followers Indo - 300F", price: 25000 },
      { name: "Shopee Followers Indo - 500F", price: 35000 },
      { name: "Shopee Followers Indo - 1000F", price: 65000 },
      { name: "Request Jumlah Lain (Custom)", price: 0 }
    ]
  },
  {
    id: "s-twitter",
    name: "X / X Needs",
    category: "Sosmed",
    img: "image/X.png",
    color: "p2",
    note: "Retweet & Views X (Twitter)",
    plans: [
      { name: "Twitter Retweet (No Refill) - 100RT", price: 15000 },
      { name: "Twitter Retweet (No Refill) - 300RT", price: 25000 },
      { name: "Twitter Retweet (No Refill) - 500RT", price: 35000 },
      { name: "Twitter Retweet (No Refill) - 1000RT", price: 60000 },
      { name: "Twitter Views - 1000V", price: 15000 },
      { name: "Twitter Views - 2000V", price: 25000 },
      { name: "Twitter Views - 5000V", price: 35000 },
      { name: "Request Jumlah Lain (Custom)", price: 0 }
    ]
  }
];

// 1. Logika Katalog Beranda (index.html)
const catalogEl = document.getElementById("main-catalog");
const searchBox = document.getElementById("search-box");
const emptyState = document.getElementById("empty-state");
const chips = document.querySelectorAll(".chip");

let activeCategory = "all";

function renderHomeCatalog() {
  if (!catalogEl) return;
  
  const keyword = searchBox ? searchBox.value.trim().toLowerCase() : "";
  catalogEl.innerHTML = "";

  const filtered = storeProducts.filter(prod => {
    const matchesKeyword = prod.name.toLowerCase().includes(keyword) || prod.category.toLowerCase().includes(keyword);
    const matchesCategory = activeCategory === "all" || prod.category.toLowerCase() === activeCategory.toLowerCase();
    return matchesKeyword && matchesCategory;
  });

  filtered.forEach(prod => {
    const card = document.createElement("a");
    card.href = `detail.html?id=${prod.id}`;
    card.className = "movie-card";
    card.innerHTML = `
      <div class="product-top">
        <div class="icon-badge ${prod.color}">
          <img src="${prod.img}" alt="${prod.name}" style="width: 32px; height: 32px; object-fit: contain;" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">
          <span style="display:none;">✨</span>
        </div>
        <div>
          <div class="movie-title">${prod.name}</div>
          <span class="category-tag">${prod.category}</span>
        </div>
      </div>
      <span class="btn-watch">Pilih Paket ✨</span>
    `;
    catalogEl.appendChild(card);
  });

  if (emptyState) {
    emptyState.style.display = filtered.length === 0 ? "block" : "none";
  }
}

if (catalogEl) {
  renderHomeCatalog();

  if (searchBox) {
    searchBox.addEventListener("input", renderHomeCatalog);
  }

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.getAttribute("data-cat");
      renderHomeCatalog();
    });
  });
}

// 2. Logika Halaman Detail & Checkout (detail.html)
const urlParams = new URLSearchParams(window.location.search);
const prodId = urlParams.get("id");
const currentProduct = storeProducts.find(p => p.id === prodId);

if (currentProduct) {
  document.getElementById("det-name").textContent = currentProduct.name;
  document.getElementById("det-desc").textContent = currentProduct.note;
  
  const detImgEl = document.getElementById("det-img");
  if (detImgEl && currentProduct.img) {
    detImgEl.src = currentProduct.img;
    detImgEl.alt = currentProduct.name;
  }

const netflixFormGroup = document.getElementById("netflix-form-group");
  const emailFormGroup = document.getElementById("email-form-group");
  const isEmailOnly = ["microsoft365", "gemini"].includes(currentProduct.id);

  if (currentProduct.id === "netflix") {
    if (netflixFormGroup) netflixFormGroup.style.display = "block";
    if (emailFormGroup) emailFormGroup.style.display = "none";
  } else if (isEmailOnly) {
    if (netflixFormGroup) netflixFormGroup.style.display = "none";
    if (emailFormGroup) emailFormGroup.style.display = "block";
  } else {
    if (netflixFormGroup) netflixFormGroup.style.display = "none";
    if (emailFormGroup) emailFormGroup.style.display = "none";
  }
  const sosmedFormGroup = document.getElementById("sosmed-form-group");
  const sosmedTcGroup = document.getElementById("sosmed-tc-group");

  if (currentProduct.category.toLowerCase() === "sosmed") {
    if (sosmedFormGroup) sosmedFormGroup.style.display = "block";
    if (sosmedTcGroup) sosmedTcGroup.style.display = "block";
  } else {
    if (sosmedFormGroup) sosmedFormGroup.style.display = "none";
    if (sosmedTcGroup) sosmedTcGroup.style.display = "none";
  }

  const selectPlanEl = document.getElementById("select-plan");
  currentProduct.plans.forEach((plan, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = `${plan.name} — IDR ${(plan.price / 1000).toFixed(0)}K`;
    selectPlanEl.appendChild(opt);
  });

  document.getElementById("btn-checkout").addEventListener("click", () => {
    const selectedPlanObj = currentProduct.plans[selectPlanEl.value];
    const formattedPrice = `IDR ${(selectedPlanObj.price / 1000).toFixed(0)}K`;
    const qrisCatalogLink = "https://wa.me/p/9834335199951583/628558826428";

    let message = "";
    // Pastikan ID produk mencakup "microsoft365" dan "gemini"
    const isEmailOnly = ["microsoft365", "gemini"].includes(currentProduct.id);

    if (currentProduct.id === "netflix") {
      const waUser = document.getElementById("input-wa").value.trim();
      const deviceUser = document.getElementById("input-device").value.trim();
      const lokasiUser = document.getElementById("input-lokasi").value.trim();

      if (!waUser || !deviceUser || !lokasiUser) {
        alert("Mohon lengkapi data formulirnya terlebih dahulu ya kak! 🌸");
        return;
      }

      message = 
        `${qrisCatalogLink}\n\n` +
        `𖦹 ₊ ⊹ ᩚ haloo, aku mau jajan ini! ᥱ\n\n` +
        `𝭲 ₊ ᵎ ✰ ${currentProduct.name} — 1 Bulan\n` +
        `÷ 𝓔. ♡ ──── paket : ${selectedPlanObj.name}\n` +
        `÷ 𝓔. ♡ ──── total : 1 pcs\n` +
        `÷ 𝓔. ♡ ──── harga : ${formattedPrice} (⚡ Flash Sale)\n\n` +
        `DATA USER\n` +
        `• No WhatsApp : ${waUser}\n` +
        `• Merk Device : ${deviceUser}\n` +
        `• Lokasi Login : ${lokasiUser}\n\n` +
        `𖦹. 𖠗 ≽ total order : ${formattedPrice} ⸝ 𖦹. ✧\n\n` +
        `ᩚ ᥱ bisa bantu untuk prosesnya kak? ♡\n` +
        `𖠗 .. thank you ᥱ ÷ (.*)β\n` +
        `have a sweet day ☁️`;

    } else if (isEmailOnly) {
      // Mengambil nilai dari input email khusus
      const emailInputEl = document.getElementById("input-email-only");
      const emailOnlyVal = emailInputEl ? emailInputEl.value.trim() : "";

      if (!emailOnlyVal) {
        alert("Mohon masukkan email akun terlebih dahulu ya kak! 🌸");
        if (emailInputEl) emailInputEl.focus();
        return;
      }

      message = 
        `${qrisCatalogLink}\n\n` +
        `𖦹 ₊ ⊹ ᩚ haloo, aku mau jajan ini! ᥱ\n\n` +
        `𝭲 ₊ ᵎ ✰ ${currentProduct.name} — 1 Bulan\n` +
        `÷ 𝓔. ♡ ──── paket : ${selectedPlanObj.name}\n` +
        `÷ 𝓔. ♡ ──── total : 1 pcs\n` +
        `÷ 𝓔. ♡ ──── harga : ${formattedPrice} (⚡ Flash Sale)\n\n` +
        `DATA USER\n` +
        `• Email Akun : ${emailOnlyVal}\n\n` +
        `𖦹. 𖠗 ≽ total order : ${formattedPrice} ⸝ 𖦹. ✧\n\n` +
        `ᩚ ᥱ bisa bantu untuk prosesnya kak? ♡\n` +
        `𖠗 .. thank you ᥱ ÷ (.*)β\n` +
        `have a sweet day ☁️`;

    } else if (currentProduct.category.toLowerCase() === "sosmed") {
      const sosmedLink = document.getElementById("input-sosmed-link").value.trim();
      const customRequest = document.getElementById("input-custom-request").value.trim();

      if (!sosmedLink) {
        alert("Mohon isi link atau username akun sosmed kamu terlebih dahulu ya kak! 🌸");
        return;
      }

      message = 
        `${qrisCatalogLink}\n\n` +
        `𖦹 ₊ ⊹ ᩚ haloo, aku mau jajan ini! ᥱ\n\n` +
        `𝭲 ₊ ᵎ ✰ ${currentProduct.name}\n` +
        `÷ 𝓔. ♡ ──── paket : ${selectedPlanObj.name}\n` +
        `÷ 𝓔. ♡ ──── total : 1 pcs\n` +
        `÷ 𝓔. ♡ ──── harga : ${formattedPrice} (⚡ Flash Sale)\n\n` +
        `DATA SOSMED\n` +
        `• Link / Username : ${sosmedLink}\n` +
        `• Request Custom : ${customRequest ? customRequest : "Tidak ada (mengikuti paket pricelist)"}\n\n` +
        `𖦹. 𖠗 ≽ total order : ${formattedPrice} ⸝ 𖦹. ✧\n\n` +
        `ᩚ ᥱ bisa bantu untuk prosesnya kak? ♡\n` +
        `𖠗 .. thank you ᥱ ÷ (.*)β\n` +
        `have a sweet day ☁️`;
    } else {
      message = 
        `${qrisCatalogLink}\n\n` +
        `𖦹 ₊ ⊹ ᩚ haloo, aku mau jajan ini! ᥱ\n\n` +
        `𝭲 ₊ ᵎ ✰ ${currentProduct.name}\n` +
        `÷ 𝓔. ♡ ──── paket : ${selectedPlanObj.name}\n` +
        `÷ 𝓔. ♡ ──── total : 1 pcs\n` +
        `÷ 𝓔. ♡ ──── harga : ${formattedPrice} (⚡ Flash Sale)\n\n` +
        `𖦹. 𖠗 ≽ total order : ${formattedPrice} ⸝ 𖦹. ✧\n\n` +
        `ᩚ ᥱ bisa bantu untuk prosesnya kak? ♡\n` +
        `𖠗 .. thank you ᥱ ÷ (.*)β\n` +
        `have a sweet day ☁️`;
    }

    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
  });
}