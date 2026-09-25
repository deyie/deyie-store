// ===================================================
// DEYA STORE — DATABASE LENGKAP & FORMAT AUTO-CHAT WA
// ===================================================

const WHATSAPP_NUMBER = "628558826428"; // Ganti dengan nomor WhatsApp asli pacar Anda

const storeProducts = [
  // --- APLIKASI PREMIUM & STREAMING ---
  {
    id: "netflix",
    name: "Netflix Premium",
    category: "Streaming",
    icon: "🎬",
    color: "p1",
    note: "4K Ultra HD & Garansi Resmi",
    plans: [
      { name: "Sharing 1P1U - 1 Bulan", price: 45000 },
      { name: "Sharing 1P1U - 2 Bulan", price: 80000 },
      { name: "Sharing 1P1U - 3 Bulan", price: 120000 },
      { name: "Sharing 1P2U - 1 Bulan", price: 25000 },
      { name: "Sharing 1P2U - 2 Bulan", price: 40000 },
      { name: "Sharing 1P2U - 3 Bulan", price: 65000 },
      { name: "Semi Private - 1 Bulan", price: 50000 }
    ]
  },
  {
    id: "viu",
    name: "Viu",
    category: "Streaming",
    icon: "📺",
    color: "p2",
    note: "Nonton drama asia & dorama bebas iklan",
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
    name: "Vidio",
    category: "Streaming",
    icon: "⚽",
    color: "p3",
    note: "Streaming olahraga & series lokal",
    plans: [
      { name: "Sharing Mobile - 1 Bulan", price: 20000 },
      { name: "Sharing All Device - 1 Bulan", price: 25000 },
      { name: "Private Mobile - 1 Bulan", price: 35000 },
      { name: "Private All Device - 1 Bulan", price: 45000 },
      { name: "TV Only - 1 Bulan", price: 15000 }
    ]
  },
  {
    id: "bstation",
    name: "Bstation / Bilibili",
    category: "Streaming",
    icon: "🌸",
    color: "p4",
    note: "Gudangnya anime & video seru",
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
    icon: "🍿",
    color: "p1",
    note: "C-Drama & serial eksklusif",
    plans: [
      { name: "Sharing - 1 Bulan", price: 15000 },
      { name: "Private - 1 Bulan", price: 40000 }
    ]
  },
  {
    id: "primevidio",
    name: "Prime Video",
    category: "Streaming",
    icon: "📦",
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
    icon: "🎬",
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
    icon: "🏮",
    color: "p4",
    note: "Asian drama & anime pilihan",
    plans: [
      { name: "Sharing Std - 1 Bulan", price: 15000 },
      { name: "Sharing Prem - 1 Bulan", price: 20000 },
      { name: "Anti Limit Prem - 1 Bulan", price: 25000 },
      { name: "Private Std - 1 Bulan", price: 35000 },
      { name: "Private Prem - 1 Bulan", price: 40000 }
    ]
  },
  {
    id: "loklok",
    name: "Loklok",
    category: "Streaming",
    icon: "🍿",
    color: "p1",
    note: "Nonton film santai kualitas jernih",
    plans: [
      { name: "Basic Sharing - 1 Bulan", price: 25000 },
      { name: "Std Sharing - 1 Bulan", price: 35000 },
      { name: "Private Basic - 1 Bulan", price: 60000 },
      { name: "Private Standar - 1 Bulan", price: 80000 }
    ]
  },
  {
    id: "golala",
    name: "G-Olala",
    category: "Streaming",
    icon: "🌟",
    color: "p2",
    note: "Hiburan seru tanpa batas",
    plans: [
      { name: "Sharing - 1 Bulan", price: 20000 },
      { name: "Private - 1 Bulan", price: 35000 }
    ]
  },
  {
    id: "vision",
    name: "Vision+",
    category: "Streaming",
    icon: "📺",
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
    icon: "📱",
    color: "p4",
    note: "Streaming acara TV nasional",
    plans: [
      { name: "Sharing - 1 Bulan", price: 20000 },
      { name: "Private - 1 Bulan", price: 35000 }
    ]
  },

  // --- EDUCATION & TOOLS ---
  {
    id: "chatgpt",
    name: "ChatGPT & Grammarly",
    category: "Education",
    icon: "🤖",
    color: "p1",
    note: "AI assistant & pengecek grammar pro",
    plans: [
      { name: "ChatGPT Plus Sharing - 1 Bulan", price: 40000 },
      { name: "ChatGPT Plus Private - 1 Bulan", price: 100000 },
      { name: "ChatGPT Go Sharing - 1 Bulan", price: 20000 },
      { name: "ChatGPT Go Private - 1 Bulan", price: 50000 },
      { name: "Grammarly Sharing - 1 Bulan", price: 15000 },
      { name: "Grammarly Sharing - 3 Bulan", price: 25000 },
      { name: "Grammarly Private - 1 Bulan", price: 25000 },
      { name: "Grammarly Private - 3 Bulan", price: 35000 }
    ]
  },
  {
    id: "scribd",
    name: "Scribd & Microsoft 365",
    category: "Education",
    icon: "📚",
    color: "p2",
    note: "Download dokumen & office original",
    plans: [
      { name: "Scribd Sharing - 1 Bulan", price: 15000 },
      { name: "Scribd Private - 1 Bulan", price: 25000 },
      { name: "Microsoft 365 Famplan (Invite) - 1 Bulan", price: 15000 }
    ]
  },
  {
    id: "gemini",
    name: "Gemini AI",
    category: "Education",
    icon: "✨",
    color: "p3",
    note: "Google Advanced AI assistant",
    plans: [
      { name: "Invite - 1 Bulan", price: 15000 },
      { name: "Invite - 3 Bulan", price: 25000 },
      { name: "Invite - 4 Bulan", price: 30000 }
    ]
  },
  {
    id: "wps",
    name: "WPS + AI & iLovePDF",
    category: "Education",
    icon: "📄",
    color: "p4",
    note: "Office tools pintar & pengubah PDF",
    plans: [
      { name: "WPS Sharing - 1 Bulan", price: 15000 },
      { name: "WPS Sharing - 1 Tahun", price: 20000 },
      { name: "iLovePDF Sharing - 1 Tahun", price: 25000 }
    ]
  },

  // --- MUSIC & EDITING ---
  {
    id: "youtube",
    name: "YouTube & Apple Music",
    category: "Music & Editing",
    icon: "▶️",
    color: "p1",
    note: "Bebas iklan & streaming musik jernih",
    plans: [
      { name: "YouTube Famplan - 1 Bulan", price: 12000 },
      { name: "YouTube Famplan - 2 Bulan", price: 15000 },
      { name: "YouTube Mixplan Renew - 3 Bulan", price: 35000 },
      { name: "YouTube Mixplan Renew - 5 Bulan", price: 45000 },
      { name: "YouTube Indplan No Renew - 3 Bulan", price: 40000 },
      { name: "YouTube Indplan No Renew - 6 Bulan", price: 70000 },
      { name: "Apple Music Famplan - 1 Bulan", price: 25000 },
      { name: "Apple Music Famplan - 2 Bulan", price: 30000 },
      { name: "Apple Music Famplan - 3 Bulan", price: 35000 }
    ]
  },
  {
    id: "spotify",
    name: "Spotify Premium",
    category: "Music & Editing",
    icon: "🎧",
    color: "p2",
    note: "Pilihan playlist & musik tanpa batas",
    plans: [
      { name: "Indplan - 1 Bulan", price: 30000 },
      { name: "Indplan - 2 Bulan", price: 40000 },
      { name: "Indplan - 3 Bulan", price: 60000 }
    ]
  },
  {
    id: "canva",
    name: "Canva Pro",
    category: "Music & Editing",
    icon: "🎨",
    color: "p3",
    note: "Desain grafis mudah & lengkap",
    plans: [
      { name: "Member - 1 Bulan", price: 8000 },
      { name: "Member - 3 Bulan", price: 15000 },
      { name: "Member - 6 Bulan", price: 25000 },
      { name: "Member - 12 Bulan", price: 35000 },
      { name: "EDU Lifetime (Garansi 6 Bulan)", price: 30000 }
    ]
  },
  {
    id: "capcut",
    name: "CapCut & Alight Motion",
    category: "Music & Editing",
    icon: "✂️",
    color: "p4",
    note: "Editor video pro tanpa watermark",
    plans: [
      { name: "CapCut Sharing - 1 Bulan", price: 20000 },
      { name: "CapCut Private - 7 Hari", price: 20000 },
      { name: "CapCut Private - 1 Bulan", price: 45000 },
      { name: "Alight Motion Private - 1 Tahun", price: 25000 }
    ]
  },
  {
    id: "editorapp",
    name: "Lightroom, OldRoll, Procreate, dll",
    category: "Music & Editing",
    icon: "📸",
    color: "p1",
    note: "Kamera estetik & editor foto pilihan",
    plans: [
      { name: "OldRoll - Lifetime", price: 25000 },
      { name: "Lightroom Sharing - 1 Tahun", price: 25000 },
      { name: "iFakeIOS - Lifetime", price: 25000 },
      { name: "Procreate Pocket iOS - Lifetime", price: 25000 },
      { name: "DazzCam - Lifetime", price: 25000 },
      { name: "VSCO Sharing - 1 Tahun", price: 25000 }
    ]
  },
  {
    id: "picsart",
    name: "Picsart",
    category: "Music & Editing",
    icon: "🌈",
    color: "p2",
    note: "Efek, stiker, & filter premium lengkap",
    plans: [
      { name: "Sharing - 1 Bulan", price: 15000 },
      { name: "Sharing - 3 Bulan", price: 20000 },
      { name: "Private - 1 Bulan", price: 20000 },
      { name: "Private - 3 Bulan", price: 30000 }
    ]
  },

  // --- SOSMED NEEDS ---
  {
    id: "s-tiktok",
    name: "TikTok Needs",
    category: "Sosmed",
    icon: "🎵",
    color: "p3",
    note: "Followers, Likes & Views TikTok aktif",
    plans: [
      { name: "TikTok Followers (Casing) - 100F", price: 15000 },
      { name: "TikTok Followers (Casing) - 300F", price: 20000 },
      { name: "TikTok Followers (Casing) - 500F", price: 27000 },
      { name: "TikTok Followers (Casing) - 1000F", price: 65000 },
      { name: "TikTok Followers (Indo) - 100F", price: 20000 },
      { name: "TikTok Followers (Indo) - 300F", price: 50000 },
      { name: "TikTok Followers (Indo) - 500F", price: 80000 },
      { name: "TikTok Followers (Indo) - 1000F", price: 150000 },
      { name: "TikTok Views - 1000V", price: 15000 }
    ]
  },
  {
    id: "s-instagram",
    name: "Instagram Needs",
    category: "Sosmed",
    icon: "📸",
    color: "p4",
    note: "Tambah followers, likes & views IG",
    plans: [
      { name: "Instagram Followers (Casing) - 100F", price: 10000 },
      { name: "Instagram Followers (Casing) - 1000F", price: 40000 },
      { name: "Instagram Followers (Indo) - 100F", price: 15000 },
      { name: "Instagram Followers (Indo) - 1000F", price: 65000 },
      { name: "Instagram Views - 1000V", price: 15000 }
    ]
  },
  {
    id: "s-youtube",
    name: "YouTube Sosmed Needs",
    category: "Sosmed",
    icon: "▶️",
    color: "p1",
    note: "Subscriber & Likes YouTube aman",
    plans: [
      { name: "YouTube Subscriber - 100S", price: 20000 },
      { name: "YouTube Subscriber - 1000S", price: 130000 },
      { name: "YouTube Likes - 100L", price: 10000 },
      { name: "YouTube Likes - 1000L", price: 40000 }
    ]
  },
  {
    id: "s-spotify",
    name: "Spotify Sosmed Needs",
    category: "Sosmed",
    icon: "🎧",
    color: "p2",
    note: "Followers artis & playlist Spotify",
    plans: [
      { name: "Spotify Followers - 100F", price: 10000 },
      { name: "Spotify Followers - 1000F", price: 35000 },
      { name: "Playlist Followers - 100F", price: 10000 },
      { name: "Play/Album - 100P", price: 5000 }
    ]
  },
  {
    id: "s-telegram",
    name: "Telegram Needs",
    category: "Sosmed",
    icon: "✈️",
    color: "p3",
    note: "Channel member & post reaction",
    plans: [
      { name: "Channel Member - 100M", price: 10000 },
      { name: "Channel Member - 1000M", price: 50000 },
      { name: "Post Views / Reaction - 100P", price: 5000 }
    ]
  },
  {
    id: "s-shopee",
    name: "Shopee Followers",
    category: "Sosmed",
    icon: "🛍️",
    color: "p4",
    note: "Followers toko Shopee Indonesia",
    plans: [
      { name: "Shopee Followers - 100F", price: 15000 },
      { name: "Shopee Followers - 1000F", price: 65000 }
    ]
  },
  {
    id: "s-x",
    name: "X (Twitter) Needs",
    category: "Sosmed",
    icon: "✖️",
    color: "p1",
    note: "Retweet & Views postingan X",
    plans: [
      { name: "Retweet - 100RT", price: 15000 },
      { name: "Retweet - 1000RT", price: 60000 },
      { name: "Views - 1000V", price: 15000 },
      { name: "Views - 10000V", price: 60000 }
    ]
  }
];

// 1. Logika untuk Halaman Beranda (index.html) dengan Fitur Search & Filter
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
        <div class="icon-badge ${prod.color}">${prod.icon}</div>
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

// 2. Logika untuk Halaman Detail & Checkout (detail.html)
const urlParams = new URLSearchParams(window.location.search);
const prodId = urlParams.get("id");
const currentProduct = storeProducts.find(p => p.id === prodId);

if (currentProduct) {
  document.getElementById("det-name").textContent = currentProduct.name;
  document.getElementById("det-desc").textContent = currentProduct.note;

  const selectPlanEl = document.getElementById("select-plan");
  currentProduct.plans.forEach((plan, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = `${plan.name} — IDR ${(plan.price / 1000).toFixed(0)}K`;
    selectPlanEl.appendChild(opt);
  });

  // Tombol Pesan Sekarang & Auto-Chat WhatsApp (Dilengkapi link qris.html untuk preview gambar di WA)
  document.getElementById("btn-checkout").addEventListener("click", () => {
    const selectedPlanObj = currentProduct.plans[selectPlanEl.value];
    const waUser = document.getElementById("input-wa").value.trim();
    const deviceUser = document.getElementById("input-device").value.trim();
    const lokasiUser = document.getElementById("input-lokasi").value.trim();

    if (!waUser || !deviceUser || !lokasiUser) {
      alert("Mohon lengkapi semua data formulirnya terlebih dahulu ya kak! 🌸");
      return;
    }

    const formattedPrice = `IDR ${(selectedPlanObj.price / 1000).toFixed(0)}K`;

    // GANTI DENGAN LINK GITHUB PAGES / Qris.html ANDA (Contoh format URL)
    const qrisPageUrl = "https://deyie.github.io/deyie-store/";

    // Format pesan dengan link web di baris pertama agar muncul pratinjau QRIS di WhatsApp
    const message = 
      `${qrisPageUrl}\n\n` +
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

    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
  });
}