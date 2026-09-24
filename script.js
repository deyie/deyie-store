// ===================================================
// Deya Store — Database Pricelist & Auto WhatsApp Format
// ===================================================

const WHATSAPP_NUMBER = "628558826428"; // Ganti nomor WA admin di sini

const products = [
  // --- KATEGORI: STREAMING ---
  { id: "s1", name: "Netflix Premium", plan: "Sharing 1 Profil (1P1U)", duration: "1 Bulan", price: 45000, category: "Streaming", icon: "🎬", color: "p1", best: true, note: "4K Ultra HD, garansi full 30 hari", page: "app" },
  { id: "s2", name: "Netflix Premium", plan: "Sharing 1 Profil (1P1U)", duration: "2 Bulan", price: 80000, category: "Streaming", icon: "🎬", color: "p1", best: false, note: "Hemat untuk 2 bulan", page: "app" },
  { id: "s3", name: "Netflix Premium", plan: "Sharing 1 Profil (1P1U)", duration: "3 Bulan", price: 120000, category: "Streaming", icon: "🎬", color: "p1", best: false, note: "Paket 3 bulan lebih hemat", page: "app" },
  { id: "s4", name: "Netflix Premium", plan: "Sharing 1 Profil (1P2U)", duration: "1 Bulan", price: 25000, category: "Streaming", icon: "🎬", color: "p1", best: false, note: "Ekonomis & stabil", page: "app" },
  { id: "s5", name: "Netflix Premium", plan: "Semi Private", duration: "1 Bulan", price: 50000, category: "Streaming", icon: "🎬", color: "p1", best: false, note: "Lebih sepi pengguna", page: "app" },
  
  { id: "s6", name: "Viu", plan: "Private Anti Limit", duration: "1 Bulan", price: 11000, category: "Streaming", icon: "📺", color: "p2", best: false, note: "Bebas nonton tanpa gangguan", page: "app" },
  { id: "s7", name: "Viu", plan: "Private Biasa", duration: "1 Bulan", price: 8000, category: "Streaming", icon: "📺", color: "p2", best: false, note: "Super murah kualitas prima", page: "app" },
  
  { id: "s8", name: "Vidio", plan: "Sharing Mobile", duration: "1 Bulan", price: 20000, category: "Streaming", icon: "⚽", color: "p3", best: true, note: "Nonton bola & series", page: "app" },
  { id: "s9", name: "Vidio", plan: "Private TV Only", duration: "1 Bulan", price: 15000, category: "Streaming", icon: "⚽", color: "p3", best: false, note: "Khusus Smart TV", page: "app" },
  
  { id: "s10", name: "Bstation / Bilibili", plan: "Sharing", duration: "1 Bulan", price: 15000, category: "Streaming", icon: "🌸", color: "p4", best: false, note: "Anime & show lengkap", page: "app" },
  { id: "s11", name: "WeTV VIP", plan: "Sharing", duration: "1 Bulan", price: 15000, category: "Streaming", icon: "🍿", color: "p5", best: false, note: "Drama asia tanpa iklan", page: "app" },
  { id: "s12", name: "Prime Video", plan: "Sharing", duration: "1 Bulan", price: 15000, category: "Streaming", icon: "📦", color: "p6", best: false, note: "Original series & film", page: "app" },
  { id: "s13", name: "HBO Max", plan: "Sharing Std", duration: "1 Bulan", price: 25000, category: "Streaming", icon: "🎬", color: "p7", best: false, note: "Blockbuster movies", page: "app" },
  { id: "s14", name: "iQIYI VIP", plan: "Sharing Std", duration: "1 Bulan", price: 15000, category: "Streaming", icon: "🏮", color: "p8", best: false, note: "C-Drama & anime", page: "app" },
  { id: "s15", name: "Loklok", plan: "Basic Sharing", duration: "1 Bulan", price: 25000, category: "Streaming", icon: "🍿", color: "p1", best: false, note: "Streaming film santai", page: "app" },
  { id: "s16", name: "Genflix / Vision+ / RCTI+", plan: "Sharing", duration: "1 Bulan", price: 20000, category: "Streaming", icon: "📺", color: "p2", best: false, note: "Lokal & international TV", page: "app" },

  // --- KATEGORI: EDUCATION ---
  { id: "e1", name: "ChatGPT", plan: "Plus Sharing (PRO)", duration: "1 Bulan", price: 40000, category: "Education", icon: "🤖", color: "p3", best: true, note: "Akses GPT-4 & tools canggih", page: "app" },
  { id: "e2", name: "ChatGPT", plan: "Plus Private", duration: "1 Bulan", price: 100000, category: "Education", icon: "🤖", color: "p3", best: false, note: "Full private akun sendiri", page: "app" },
  { id: "e3", name: "Grammarly", plan: "Sharing", duration: "1 Bulan", price: 15000, category: "Education", icon: "📚", color: "p4", best: false, note: "Periksa grammar bahasa Inggris otomatis", page: "app" },
  { id: "e4", name: "Scribd", plan: "Sharing", duration: "1 Bulan", price: 15000, category: "Education", icon: "📖", color: "p5", best: false, note: "Download e-book & dokumen", page: "app" },
  { id: "e5", name: "Gemini AI", plan: "Invite", duration: "1 Bulan", price: 15000, category: "Education", icon: "✨", color: "p6", best: false, note: "Google Advanced AI assistant", page: "app" },
  { id: "e6", name: "Microsoft 365", plan: "Family Plan (Invite)", duration: "1 Bulan", price: 15000, category: "Education", icon: "💻", color: "p7", best: false, note: "Word, Excel, PowerPoint original", page: "app" },
  { id: "e7", name: "WPS + AI / iLovePDF", plan: "Sharing / Tahun", duration: "1 Tahun", price: 20000, category: "Education", icon: "📄", color: "p8", best: false, note: "Office & PDF tools pro", page: "app" },

  // --- KATEGORI: MUSIC & EDITING ---
  { id: "m1", name: "YouTube Premium", plan: "Family Plan", duration: "1 Bulan", price: 12000, category: "Music & Editing", icon: "▶️", color: "p1", best: true, note: "Bebas iklan + YT Music", page: "app" },
  { id: "m2", name: "Spotify Premium", plan: "Individual Plan", duration: "1 Bulan", price: 30000, category: "Music & Editing", icon: "🎧", color: "p2", best: true, note: "Akun aman kualitas audio tinggi", page: "app" },
  { id: "m3", name: "Canva Pro", plan: "Member", duration: "1 Bulan", price: 8000, category: "Music & Editing", icon: "🎨", color: "p3", best: true, note: "Semua template & elemen pro", page: "app" },
  { id: "m4", name: "Canva Pro (EDU)", plan: "Lifetime", duration: "Lifetime", price: 30000, category: "Music & Editing", icon: "🎨", color: "p3", best: false, note: "Garansi 6 bulan resmi", page: "app" },
  { id: "m5", name: "CapCut Pro", plan: "Sharing", duration: "1 Bulan", price: 20000, category: "Music & Editing", icon: "✂️", color: "p4", best: false, note: "Tanpa watermark, efek pro", page: "app" },
  { id: "m6", name: "Alight Motion / Lightroom", plan: "Private / Sharing", duration: "1 Tahun", price: 25000, category: "Music & Editing", icon: "✨", color: "p5", best: false, note: "Editor foto & video estetik", page: "app" },
  { id: "m7", name: "OldRoll / DazzCam / Procreate", plan: "Pocket iOS", duration: "Lifetime", price: 25000, category: "Music & Editing", icon: "📸", color: "p6", best: false, note: "Kamera jadul & desain tablet", page: "app" },
  { id: "m8", name: "Picsart / VSCO", plan: "Sharing", duration: "1 Bulan", price: 15000, category: "Music & Editing", icon: "🌈", color: "p7", best: false, note: "Filter & fitur premium lengkap", page: "app" },

  // --- KATEGORI: SOSMED DEYIE ---
  { id: "z1", name: "YouTube Subscribers", plan: "100 Subscribers", duration: "Instan", price: 20000, category: "YouTube", icon: "▶️", color: "p1", best: false, note: "Refill lifetime tersedia", page: "sosmed" },
  { id: "z2", name: "YouTube Subscribers", plan: "1.000 Subscribers", duration: "Instan", price: 130000, category: "YouTube", icon: "▶️", color: "p1", best: true, note: "Syarat monetisasi aman", page: "sosmed" },
  { id: "z3", name: "Spotify Followers", plan: "100 Followers", duration: "Instan", price: 10000, category: "Instagram", icon: "🎧", color: "p2", best: false, note: "Tambah kredibilitas artis/playlist", page: "sosmed" },
  { id: "z4", name: "Telegram Channel Member", plan: "100 Member", duration: "Instan", price: 10000, category: "Telegram & Shopee", icon: "✈️", color: "p3", best: false, note: "Member aktif channel", page: "sosmed" },
  { id: "z5", name: "Shopee Followers (Indo)", plan: "100 Followers", duration: "Instan", price: 15000, category: "Telegram & Shopee", icon: "🛍️", color: "p4", best: false, note: "Akun Indo real", page: "sosmed" },
  { id: "z6", name: "Instagram Followers (Indo)", plan: "100 Followers", duration: "Instan", price: 15000, category: "Instagram", icon: "📸", color: "p5", best: true, note: "Refill 30 hari", page: "sosmed" },
  { id: "z7", name: "TikTok Followers (Indo)", plan: "100 Followers", duration: "Instan", price: 20000, category: "TikTok", icon: "🎵", color: "p6", best: true, note: "Aman & cepat masuk", page: "sosmed" },
  { id: "z8", name: "TikTok Views", plan: "1.000 Views", duration: "Instan", price: 15000, category: "TikTok", icon: "👁️", color: "p7", best: false, note: "Masuk FYP lebih mudah", page: "sosmed" }
];

const isSosmedPage = window.location.pathname.includes("sosmed.html");
const currentPageProducts = products.filter(p => isSosmedPage ? p.page === "sosmed" : p.page === "app");

const catalogEl = document.getElementById("catalog");
const searchBox = document.getElementById("search-box");
const emptyState = document.getElementById("empty-state");
const chips = document.querySelectorAll(".chip");
const watchlistBtn = document.getElementById("watchlist-btn");
const watchlistCount = document.getElementById("watchlist-count");

let activeCategory = "all";
let showFavoritesOnly = false;

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem("deya-store-favorites") || "[]");
  } catch (e) {
    return [];
  }
}

function saveFavorites(list) {
  try {
    localStorage.setItem("deya-store-favorites", JSON.stringify(list));
  } catch (e) {}
}

function toggleFavorite(id) {
  const favs = getFavorites();
  const idx = favs.indexOf(id);
  if (idx === -1) {
    favs.push(id);
  } else {
    favs.splice(idx, 1);
  }
  saveFavorites(favs);
  updateWatchlistCount();
  renderCatalog();
}

function updateWatchlistCount() {
  if (watchlistCount) {
    watchlistCount.textContent = getFavorites().length;
  }
}

function formatPrice(number) {
  return "IDR " + number.toLocaleString("id-ID") + "K".replace("000K", "K"); // Menyesuaikan format IDR dari gambar
}

// Format harga persis seperti gambar referensi pacar Anda
function formatPriceCustom(number) {
  const formatted = (number / 1000).toFixed(0);
  return `IDR ${formatted}K`;
}

// Fungsi pembuat pesan otomatis ke WhatsApp ala Ciccu/Deya Store
function buildWhatsAppLink(product) {
  // Mendeteksi device pembeli secara otomatis lewat browser
  const ua = navigator.userAgent;
  let deviceName = "Perangkat HP / Laptop";
  if (/android/i.test(ua)) deviceName = "Android Device";
  else if (/iphone|ipad|ipod/i.test(ua)) deviceName = "iPhone";
  else if (/windows/i.test(ua)) deviceName = "Windows PC";
  else if (/mac/i.test(ua)) deviceName = "MacBook / Mac";

  const message = 
    `9 + 6 (⁀❛ ▿ ❛⁀)ʃhaloo, aku mau jajan ini! 🍨\n\n` +
    `୨ ₊ ✩ ${product.name} — ${product.duration}\n` +
    `∔ ᵋ. ♡ ──── paket : ${product.plan.toUpperCase()}\n` +
    `∔ ᵋ. ♡ ──── total : 1 pcs\n` +
    `∔ ᵋ. ♡ ──── harga : ${formatPriceCustom(product.price)}\n\n` +
    `DATA USER\n` +
    `• No Whatsapp : [Isi Nomor WA Kamu Disini ya]\n` +
    `• Merk Device : ${deviceName}\n` +
    `• Lokasi Login : Indonesia\n\n` +
    `〰. 👝 total order : ${formatPriceCustom(product.price)} ,, 🫖 〰. ✧\n\n` +
    `⋈ ₑ bisa bantu untuk prosesnya kak? ♡\n` +
    `๑ .. thank you ᵉ ₊ (.*)β\n` +
    `have a sweet day ☁️`;

  return `https://wa.me/message/WACGK7SNJ3O4A1?src=qr`;
}

function createCard(product, favorites) {
  const isFav = favorites.includes(product.id);
  const card = document.createElement("article");
  card.className = "movie-card";
  card.setAttribute("data-name", product.name.toLowerCase());
  card.setAttribute("data-genre", product.category);

  card.innerHTML = `
    ${product.best ? '<span class="badge-best">TERLARIS</span>' : ""}
    <button class="fav-btn ${isFav ? "is-fav" : ""}" data-id="${product.id}" aria-label="Tandai favorit" type="button">
      ${isFav ? "💗" : "🤍"}
    </button>
    <div class="product-top">
      <div class="icon-badge ${product.color}">${product.icon}</div>
      <div class="product-name-wrap">
        <div class="movie-title">${product.name}</div>
        <span class="category-tag">${product.category}</span>
      </div>
    </div>
    <div class="movie-info">
      <div class="movie-meta">${product.plan} &middot; ${product.duration}</div>
      <p class="movie-blurb">${product.note}</p>
      <div class="price-row">
        <span class="price">${formatPriceCustom(product.price)}</span>
        <span class="price-period">/ ${product.duration.toLowerCase()}</span>
      </div>
      <a class="btn-watch" href="${buildWhatsAppLink(product)}" target="_blank" rel="noopener">
        💬 Pesan via WhatsApp
      </a>
    </div>
  `;

  card.querySelector(".fav-btn").addEventListener("click", () => toggleFavorite(product.id));
  return card;
}

function renderCatalog() {
  if (!catalogEl) return;
  const keyword = searchBox ? searchBox.value.trim().toLowerCase() : "";
  const favorites = getFavorites();

  catalogEl.innerHTML = "";

  const filtered = currentPageProducts.filter((product) => {
    const matchesKeyword = product.name.toLowerCase().includes(keyword) || product.plan.toLowerCase().includes(keyword);
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesFav = !showFavoritesOnly || favorites.includes(product.id);
    return matchesKeyword && matchesCategory && matchesFav;
  });

  filtered.forEach((product) => catalogEl.appendChild(createCard(product, favorites)));

  if (emptyState) {
    emptyState.hidden = filtered.length !== 0;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateWatchlistCount();
  renderCatalog();

  if (searchBox) {
    searchBox.addEventListener("input", renderCatalog);
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.getAttribute("data-genre");
      renderCatalog();
    });
  });

  if (watchlistBtn) {
    watchlistBtn.addEventListener("click", () => {
      showFavoritesOnly = !showFavoritesOnly;
      watchlistBtn.classList.toggle("active", showFavoritesOnly);
      renderCatalog();
    });
  }
});