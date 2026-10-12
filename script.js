// ==========================================
// 1. FIREBASE SETUP & REALTIME LISTENER
// ==========================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const WHATSAPP_NUMBER = "628558826428"; 

const firebaseConfig = {
    apiKey: "AIzaSyBoDgZVyBykd-sOjyvIl0cdAC0uEeB8HOI",
    authDomain: "deyie-store.firebaseapp.com",
    databaseURL: "https://deyie-store-default-rtdb.firebaseio.com",
    projectId: "deyie-store",
    storageBucket: "deyie-store.firebasestorage.app",
    messagingSenderId: "28562864228",
    appId: "1:28562864228:web:fa797db9f6dd7daece0771"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let storeProducts = [];

// Variabel Elemen Beranda
const catalogEl = document.getElementById("main-catalog");
const searchBox = document.getElementById("search-box");
const emptyState = document.getElementById("empty-state");
const chips = document.querySelectorAll(".chip");
let activeCategory = "all";

// Ambil data dari cache local jika ada (agar langsung tampil instan!)
const cachedProducts = localStorage.getItem("deyie_store_products");
if (cachedProducts) {
    try {
        storeProducts = JSON.parse(cachedProducts);
        
        // Render langsung dari cache
        if (catalogEl) renderHomeCatalog();
        
        const urlParams = new URLSearchParams(window.location.search);
        const prodId = urlParams.get("id");
        if (prodId) initDetailPage(prodId);
    } catch (e) {
        console.error("Gagal membaca cache:", e);
    }
}

// Ambil data produk secara Real-Time dari Firebase (Background update)
onValue(ref(db, 'products'), (snapshot) => {
    const data = snapshot.val();
    if (data) {
        storeProducts = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
        }));
        
        // Simpan data terbaru ke localStorage
        localStorage.setItem("deyie_store_products", JSON.stringify(storeProducts));
        
        if (catalogEl) {
            renderHomeCatalog();
        }

        const urlParams = new URLSearchParams(window.location.search);
        const prodId = urlParams.get("id");
        if (prodId) {
            initDetailPage(prodId);
        }
    }
});


// ==========================================
// 2. HELPER PINTAR UNTUK GAMBAR / LOGO PRODUK
// ==========================================
function getProductImage(prod) {
    if (prod.img) return prod.img;
    if (prod.image) return prod.image;
    
    const id = prod.id ? prod.id.toLowerCase() : "";
    
    // Mapping otomatis untuk kategori sosmed & produk khusus berdasarkan prefix ID
    if (id.startsWith("s-ig")) return "image/instagram.png";
    if (id.startsWith("s-tt")) return "image/tiktok.png";
    if (id.startsWith("s-shopee")) return "image/shopee.png";
    if (id.startsWith("s-spotify")) return "image/spotify.png";
    if (id.startsWith("s-telegram")) return "image/telegram.png";
    if (id.startsWith("s-twitter") || id.startsWith("s-x")) return "image/twitter.png";
    if (id.startsWith("s-yt")) return "image/youtube.png";
    
    // Default fallback ke nama file berdasarkan id produk
    return `image/${prod.id}.png`;
}


// ==========================================
// 3. LOGIKA HALAMAN BERANDA (index.html)
// ==========================================
function renderHomeCatalog() {
    if (!catalogEl) return;

    const keyword = searchBox ? searchBox.value.trim().toLowerCase() : "";
    catalogEl.innerHTML = "";

    const filtered = storeProducts.filter(prod => {
        const matchesKeyword = prod.name.toLowerCase().includes(keyword) || (prod.category && prod.category.toLowerCase().includes(keyword));
        const matchesCategory = activeCategory === "all" || (prod.category && prod.category.toLowerCase() === activeCategory.toLowerCase());
        return matchesKeyword && matchesCategory;
    });

    filtered.forEach(prod => {
        const card = document.createElement("a");
        card.href = `detail.html?id=${prod.id}`;
        card.className = "movie-card";

        const imagePath = getProductImage(prod);

        card.innerHTML = `
          <div class="product-top" style="display: flex; align-items: center; gap: 12px;">
            <div class="icon-badge ${prod.color || ''}" style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">
              <img src="${imagePath}" alt="${prod.name}" style="width: 32px; height: 32px; object-fit: contain;" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">
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


// ==========================================
// 4. LOGIKA HALAMAN DETAIL & CHECKOUT (detail.html)
// ==========================================
const urlParams = new URLSearchParams(window.location.search);
const prodId = urlParams.get("id");

if (prodId && storeProducts.length > 0) {
    initDetailPage(prodId);
}

function initDetailPage(targetId) {
    const currentProduct = storeProducts.find(p => p.id === targetId);
    if (!currentProduct) return;

    // Set Nama & Catatan Produk
    const nameEl = document.getElementById("det-name");
    if (nameEl) nameEl.textContent = currentProduct.name;

    const descEl = document.getElementById("det-desc");
    if (descEl) descEl.textContent = currentProduct.note || "Nikmati layanan premium berkualitas dengan proses cepat dan aman ~";
    
    // Set Gambar Produk dengan fungsi helper cerdas
    const detImgEl = document.getElementById("det-img");
    if (detImgEl) {
        detImgEl.src = getProductImage(currentProduct);
        detImgEl.alt = currentProduct.name;
    }

    // Pengaturan Form Khusus (Netflix, Email Only, Sosmed)
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

    if (currentProduct.category && currentProduct.category.toLowerCase() === "sosmed") {
        if (sosmedFormGroup) sosmedFormGroup.style.display = "block";
        if (sosmedTcGroup) sosmedTcGroup.style.display = "block";
    } else {
        if (sosmedFormGroup) sosmedFormGroup.style.display = "none";
        if (sosmedTcGroup) sosmedTcGroup.style.display = "none";
    }

    // Render Pilihan Paket / Durasi ke Elemen <select id="select-plan">
    const selectPlanEl = document.getElementById("select-plan");
    if (selectPlanEl && currentProduct.plans && Array.isArray(currentProduct.plans)) {
        selectPlanEl.innerHTML = ""; 
        currentProduct.plans.forEach((plan, idx) => {
            const opt = document.createElement("option");
            opt.value = idx;
            opt.textContent = `${plan.name} — IDR ${(plan.price / 1000).toFixed(0)}K`;
            selectPlanEl.appendChild(opt);
        });
    }

    // Tombol Checkout WhatsApp
    const btnCheckout = document.getElementById("btn-checkout");
    if (btnCheckout) {
        const newBtnCheckout = btnCheckout.cloneNode(true);
        btnCheckout.parentNode.replaceChild(newBtnCheckout, btnCheckout);

        newBtnCheckout.addEventListener("click", () => {
            if (!selectPlanEl || !currentProduct.plans || currentProduct.plans.length === 0) {
                alert("Paket belum tersedia!");
                return;
            }

            const selectedPlanObj = currentProduct.plans[selectPlanEl.value];
            const formattedPrice = `IDR ${(selectedPlanObj.price / 1000).toFixed(0)}K`;
            const qrisCatalogLink = "https://wa.me/p/9834335199951583/628558826428";
            let message = "";

            if (currentProduct.id === "netflix") {
                const waUser = document.getElementById("input-wa").value.trim();
                const deviceUser = document.getElementById("input-device").value.trim();
                const lokasiUser = document.getElementById("input-lokasi").value.trim();

                if (!waUser || !deviceUser || !lokasiUser) {
                    alert("Mohon lengkapi data formulirnya terlebih dahulu ya kak! 🌸");
                    return;
                }

                message = `${qrisCatalogLink}\n\n𖦹 ₊ ⊹ ᩚ haloo, aku mau jajan ini! ᥱ\n\n𝭲 ₊ ᵎ ✰ ${currentProduct.name} — 1 Bulan\n÷ 𝓔. ♡ ──── paket : ${selectedPlanObj.name}\n÷ 𝓔. ♡ ──── total : 1 pcs\n÷ 𝓔. ♡ ──── harga : ${formattedPrice} (⚡ Flash Sale)\n\nDATA USER\n• No WhatsApp : ${waUser}\n• Merk Device : ${deviceUser}\n• Lokasi Login : ${lokasiUser}\n\n𖦹. 𖠗 ≽ total order : ${formattedPrice} ⸝ 𖦹. ✧\n\nᩚ ᥱ bisa bantu untuk prosesnya kak? ♡\n𖠗 .. thank you ᥱ ÷ (.*)β\nhave a sweet day ☁️`;

            } else if (isEmailOnly) {
                const emailInputEl = document.getElementById("input-email-only");
                const emailOnlyVal = emailInputEl ? emailInputEl.value.trim() : "";

                if (!emailOnlyVal) {
                    alert("Mohon masukkan email akun terlebih dahulu ya kak! 🌸");
                    if (emailInputEl) emailInputEl.focus();
                    return;
                }

                message = `${qrisCatalogLink}\n\n𖦹 ₊ ⊹ ᩚ haloo, aku mau jajan ini! ᥱ\n\n𝭲 ₊ ᵎ ✰ ${currentProduct.name} — 1 Bulan\n÷ 𝓔. ♡ ──── paket : ${selectedPlanObj.name}\n÷ 𝓔. ♡ ──── total : 1 pcs\n÷ 𝓔. ♡ ──── harga : ${formattedPrice} (⚡ Flash Sale)\n\nDATA USER\n• Email Akun : ${emailOnlyVal}\n\n𖦹. 𖠗 ≽ total order : ${formattedPrice} ⸝ 𖦹. ✧\n\nᩚ ᥱ bisa bantu untuk prosesnya kak? ♡\n𖠗 .. thank you ᥱ ÷ (.*)β\nhave a sweet day ☁️`;

            } else if (currentProduct.category && currentProduct.category.toLowerCase() === "sosmed") {
                const sosmedLink = document.getElementById("input-sosmed-link").value.trim();
                const customRequest = document.getElementById("input-custom-request").value.trim();

                if (!sosmedLink) {
                    alert("Mohon isi link atau username akun sosmed kamu terlebih dahulu ya kak! 🌸");
                    return;
                }

                message = `${qrisCatalogLink}\n\n𖦹 ₊ ⊹ ᩚ haloo, aku mau jajan ini! ᥱ\n\n𝭲 ₊ ᵎ ✰ ${currentProduct.name}\n÷ 𝓔. ♡ ──── paket : ${selectedPlanObj.name}\n÷ 𝓔. ♡ ──── total : 1 pcs\n÷ 𝓔. ♡ ──── harga : ${formattedPrice} (⚡ Flash Sale)\n\nDATA SOSMED\n• Link / Username : ${sosmedLink}\n• Request Custom : ${customRequest ? customRequest : "Tidak ada (mengikuti paket pricelist)"}\n\n𖦹. 𖠗 ≽ total order : ${formattedPrice} ⸝ 𖦹. ✧\n\nᩚ ᥱ bisa bantu untuk prosesnya kak? ♡\n𖠗 .. thank you ᥱ ÷ (.*)β\nhave a sweet day ☁️`;
            } else {
                message = `${qrisCatalogLink}\n\n𖦹 ₊ ⊹ ᩚ haloo, aku mau jajan ini! ᥱ\n\n𝭲 ₊ ᵎ ✰ ${currentProduct.name}\n÷ 𝓔. ♡ ──── paket : ${selectedPlanObj.name}\n÷ 𝓔. ♡ ──── total : 1 pcs\n÷ 𝓔. ♡ ──── harga : ${formattedPrice} (⚡ Flash Sale)\n\n𖦹. 𖠗 ≽ total order : ${formattedPrice} ⸝ 𖦹. ✧\n\nᩚ ᥱ bisa bantu untuk prosesnya kak? ♡\n𖠗 .. thank you ᥱ ÷ (.*)β\nhave a sweet day ☁️`;
            }

            const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(waLink, "_blank");
        });
    }
}