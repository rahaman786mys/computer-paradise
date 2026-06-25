// ===== Mobile: hide wire & lightning =====
if (window.innerWidth <= 1024) {
  document.documentElement.style.setProperty('--hide-wire', '1');
}

// ===== Firebase =====
const firebaseConfig = {
  apiKey: "AIzaSyBxkwgJJUPZFFfNKistgjIFGIgeEMWAuQY",
  authDomain: "computer-paradise-5235b.firebaseapp.com",
  projectId: "computer-paradise-5235b",
  storageBucket: "computer-paradise-5235b.firebasestorage.app",
  messagingSenderId: "226124743417",
  appId: "1:226124743417:web:80e07aa4a98e66df9b5828"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ===== Laptop Data =====
const laptops = [
  { id: 1, brand: "Dell", name: "Dell Inspiron 15", ram: "8GB", storage: "512GB SSD", processor: "Intel i5 12th Gen", os: "windows", condition: "A", price: 34999, badge: "bestseller", images: [
    "images/IMG-20251122-WA0030.jpg","images/IMG-20251122-WA0031.jpg","images/IMG-20251122-WA0032.jpg","images/IMG20240906214223.jpg","images/IMG20240906214223_01.jpg","images/IMG20240906214228.jpg","images/IMG_20200311_164434.jpg","images/IMG_20200417_233510.jpg","images/IMG-20251122-WA0027.jpg","images/IMG-20251122-WA0029.jpg"
  ] },
  { id: 2, brand: "HP", name: "HP Pavilion 14", ram: "16GB", storage: "512GB SSD", processor: "Intel i7 12th Gen", os: "windows", condition: "A", price: 45999, badge: "new", images: [
    "images/IMG-20251122-WA0030.jpg","images/IMG-20251122-WA0031.jpg","images/IMG-20251122-WA0032.jpg","images/IMG20240906214223.jpg","images/IMG20240906214223_01.jpg","images/IMG20240906214228.jpg","images/IMG_20200311_164434.jpg","images/IMG_20200417_233510.jpg","images/IMG-20251122-WA0027.jpg","images/IMG-20251122-WA0029.jpg"
  ] },
  { id: 3, brand: "Lenovo", name: "Lenovo ThinkPad X1 Carbon", ram: "16GB", storage: "256GB SSD", processor: "Intel i5 11th Gen", os: "windows", condition: "B", price: 28999, badge: "", images: [
    "images/IMG-20251122-WA0030.jpg","images/IMG-20251122-WA0031.jpg","images/IMG-20251122-WA0032.jpg","images/IMG20240906214223.jpg","images/IMG20240906214223_01.jpg","images/IMG20240906214228.jpg","images/IMG_20200311_164434.jpg","images/IMG_20200417_233510.jpg","images/IMG-20251122-WA0027.jpg","images/IMG-20251122-WA0029.jpg"
  ] },
  { id: 4, brand: "ASUS", name: "ASUS VivoBook 15", ram: "8GB", storage: "1TB HDD", processor: "Intel i3 11th Gen", os: "windows", condition: "A", price: 22999, badge: "deal", images: [
    "images/IMG-20251122-WA0030.jpg","images/IMG-20251122-WA0031.jpg","images/IMG-20251122-WA0032.jpg","images/IMG20240906214223.jpg","images/IMG20240906214223_01.jpg","images/IMG20240906214228.jpg","images/IMG_20200311_164434.jpg","images/IMG_20200417_233510.jpg","images/IMG-20251122-WA0027.jpg","images/IMG-20251122-WA0029.jpg"
  ] },
  { id: 5, brand: "Dell", name: "Dell Latitude 14 3420", ram: "8GB", storage: "256GB SSD", processor: "Intel i5 10th Gen", os: "windows", condition: "B", price: 19999, badge: "", images: [
    "images/IMG-20251122-WA0030.jpg","images/IMG-20251122-WA0031.jpg","images/IMG-20251122-WA0032.jpg","images/IMG20240906214223.jpg","images/IMG20240906214223_01.jpg","images/IMG20240906214228.jpg","images/IMG_20200311_164434.jpg","images/IMG_20200417_233510.jpg","images/IMG-20251122-WA0027.jpg","images/IMG-20251122-WA0029.jpg"
  ] },
  { id: 6, brand: "HP", name: "HP ProBook 450 G9", ram: "8GB", storage: "512GB SSD", processor: "AMD Ryzen 5 5500U", os: "windows", condition: "A", price: 31999, badge: "bestseller", images: [
    "images/IMG-20251122-WA0030.jpg","images/IMG-20251122-WA0031.jpg","images/IMG-20251122-WA0032.jpg","images/IMG20240906214223.jpg","images/IMG20240906214223_01.jpg","images/IMG20240906214228.jpg","images/IMG_20200311_164434.jpg","images/IMG_20200417_233510.jpg","images/IMG-20251122-WA0027.jpg","images/IMG-20251122-WA0029.jpg"
  ] },
  { id: 7, brand: "Acer", name: "Acer Aspire 7", ram: "16GB", storage: "512GB SSD", processor: "AMD Ryzen 7 5800H", os: "windows", condition: "A", price: 42999, badge: "new", images: [
    "images/IMG-20251122-WA0030.jpg","images/IMG-20251122-WA0031.jpg","images/IMG-20251122-WA0032.jpg","images/IMG20240906214223.jpg","images/IMG20240906214223_01.jpg","images/IMG20240906214228.jpg","images/IMG_20200311_164434.jpg","images/IMG_20200417_233510.jpg","images/IMG-20251122-WA0027.jpg","images/IMG-20251122-WA0029.jpg"
  ] },
  { id: 8, brand: "Lenovo", name: "Lenovo IdeaPad 3", ram: "4GB", storage: "256GB SSD", processor: "Intel i3 10th Gen", os: "linux", condition: "C", price: 14999, badge: "deal", images: [
    "images/IMG-20251122-WA0030.jpg","images/IMG-20251122-WA0031.jpg","images/IMG-20251122-WA0032.jpg","images/IMG20240906214223.jpg","images/IMG20240906214223_01.jpg","images/IMG20240906214228.jpg","images/IMG_20200311_164434.jpg","images/IMG_20200417_233510.jpg","images/IMG-20251122-WA0027.jpg","images/IMG-20251122-WA0029.jpg"
  ] },
  { id: 9, brand: "ASUS", name: "ASUS ZenBook 14 UX425", ram: "16GB", storage: "512GB SSD", processor: "Intel i7 11th Gen", os: "windows", condition: "A", price: 54999, badge: "", images: [
    "images/IMG-20251122-WA0030.jpg","images/IMG-20251122-WA0031.jpg","images/IMG-20251122-WA0032.jpg","images/IMG20240906214223.jpg","images/IMG20240906214223_01.jpg","images/IMG20240906214228.jpg","images/IMG_20200311_164434.jpg","images/IMG_20200417_233510.jpg","images/IMG-20251122-WA0027.jpg","images/IMG-20251122-WA0029.jpg"
  ] },
  { id: 10, brand: "Dell", name: "Dell XPS 13 9310", ram: "8GB", storage: "256GB SSD", processor: "Intel i5 11th Gen", os: "windows", condition: "B", price: 37999, badge: "bestseller", images: [
    "images/IMG-20251122-WA0030.jpg","images/IMG-20251122-WA0031.jpg","images/IMG-20251122-WA0032.jpg","images/IMG20240906214223.jpg","images/IMG20240906214223_01.jpg","images/IMG20240906214228.jpg","images/IMG_20200311_164434.jpg","images/IMG_20200417_233510.jpg","images/IMG-20251122-WA0027.jpg","images/IMG-20251122-WA0029.jpg"
  ] },
  { id: 11, brand: "HP", name: "HP Envy x360 13", ram: "16GB", storage: "1TB SSD", processor: "Intel i7 12th Gen", os: "windows", condition: "A", price: 58999, badge: "new", images: [
    "images/IMG-20251122-WA0030.jpg","images/IMG-20251122-WA0031.jpg","images/IMG-20251122-WA0032.jpg","images/IMG20240906214223.jpg","images/IMG20240906214223_01.jpg","images/IMG20240906214228.jpg","images/IMG_20200311_164434.jpg","images/IMG_20200417_233510.jpg","images/IMG-20251122-WA0027.jpg","images/IMG-20251122-WA0029.jpg"
  ] },
  { id: 12, brand: "Acer", name: "Acer Swift 3 SF314", ram: "8GB", storage: "512GB SSD", processor: "AMD Ryzen 5 5500U", os: "chromeos", condition: "B", price: 26999, badge: "", images: [
    "images/IMG-20251122-WA0030.jpg","images/IMG-20251122-WA0031.jpg","images/IMG-20251122-WA0032.jpg","images/IMG20240906214223.jpg","images/IMG20240906214223_01.jpg","images/IMG20240906214228.jpg","images/IMG_20200311_164434.jpg","images/IMG_20200417_233510.jpg","images/IMG-20251122-WA0027.jpg","images/IMG-20251122-WA0029.jpg"
  ] },
  { id: 13, brand: "Dell", name: "Dell Inspiron 16 5620", ram: "16GB", storage: "512GB SSD", processor: "Intel i7 12th Gen", os: "windows", condition: "A", price: 49999, badge: "new", images: [
    "images/IMG-20251122-WA0030.jpg","images/IMG-20251122-WA0031.jpg","images/IMG-20251122-WA0032.jpg","images/IMG20240906214223.jpg","images/IMG20240906214223_01.jpg","images/IMG20240906214228.jpg","images/IMG_20200311_164434.jpg","images/IMG_20200417_233510.jpg","images/IMG-20251122-WA0027.jpg","images/IMG-20251122-WA0029.jpg"
  ] },
  { id: 14, brand: "Lenovo", name: "Lenovo ThinkBook 15", ram: "8GB", storage: "256GB SSD", processor: "Intel i5 11th Gen", os: "linux", condition: "B", price: 25999, badge: "", images: [
    "images/IMG-20251122-WA0030.jpg","images/IMG-20251122-WA0031.jpg","images/IMG-20251122-WA0032.jpg","images/IMG20240906214223.jpg","images/IMG20240906214223_01.jpg","images/IMG20240906214228.jpg","images/IMG_20200311_164434.jpg","images/IMG_20200417_233510.jpg","images/IMG-20251122-WA0027.jpg","images/IMG-20251122-WA0029.jpg"
  ] },
  { id: 15, brand: "HP", name: "HP Pavilion Gaming 15", ram: "16GB", storage: "512GB SSD", processor: "AMD Ryzen 5 5600H", os: "windows", condition: "A", price: 38999, badge: "bestseller", images: [
    "images/IMG-20251122-WA0030.jpg","images/IMG-20251122-WA0031.jpg","images/IMG-20251122-WA0032.jpg","images/IMG20240906214223.jpg","images/IMG20240906214223_01.jpg","images/IMG20240906214228.jpg","images/IMG_20200311_164434.jpg","images/IMG_20200417_233510.jpg","images/IMG-20251122-WA0027.jpg","images/IMG-20251122-WA0029.jpg"
  ] },
  { id: 16, brand: "Apple", name: "Apple MacBook Air M1", ram: "8GB", storage: "256GB SSD", processor: "Apple Silicon M1", os: "macos", condition: "A", price: 59999, badge: "bestseller", images: [
    "images/IMG-20251122-WA0030.jpg","images/IMG-20251122-WA0031.jpg","images/IMG-20251122-WA0032.jpg","images/IMG20240906214223.jpg","images/IMG20240906214223_01.jpg","images/IMG20240906214228.jpg","images/IMG_20200311_164434.jpg","images/IMG_20200417_233510.jpg","images/IMG-20251122-WA0027.jpg","images/IMG-20251122-WA0029.jpg"
  ] },
  { id: 17, brand: "Apple", name: "Apple MacBook Pro 14 M2", ram: "16GB", storage: "512GB SSD", processor: "Apple Silicon M2 Pro", os: "macos", condition: "A", price: 89999, badge: "new", images: [
    "images/IMG-20251122-WA0030.jpg","images/IMG-20251122-WA0031.jpg","images/IMG-20251122-WA0032.jpg","images/IMG20240906214223.jpg","images/IMG20240906214223_01.jpg","images/IMG20240906214228.jpg","images/IMG_20200311_164434.jpg","images/IMG_20200417_233510.jpg","images/IMG-20251122-WA0027.jpg","images/IMG-20251122-WA0029.jpg"
  ] },
  { id: 18, brand: "MSI", name: "MSI GF63 Thin", ram: "16GB", storage: "512GB SSD", processor: "Intel i5 12th Gen", os: "windows", condition: "A", price: 45999, badge: "deal", images: [
    "images/IMG-20251122-WA0030.jpg","images/IMG-20251122-WA0031.jpg","images/IMG-20251122-WA0032.jpg","images/IMG20240906214223.jpg","images/IMG20240906214223_01.jpg","images/IMG20240906214228.jpg","images/IMG_20200311_164434.jpg","images/IMG_20200417_233510.jpg","images/IMG-20251122-WA0027.jpg","images/IMG-20251122-WA0029.jpg"
  ] },
  { id: 19, brand: "MSI", name: "MSI Katana 15", ram: "16GB", storage: "1TB SSD", processor: "Intel i7 13th Gen", os: "windows", condition: "A", price: 69999, badge: "new", images: [
    "images/IMG-20251122-WA0030.jpg","images/IMG-20251122-WA0031.jpg","images/IMG-20251122-WA0032.jpg","images/IMG20240906214223.jpg","images/IMG20240906214223_01.jpg","images/IMG20240906214228.jpg","images/IMG_20200311_164434.jpg","images/IMG_20200417_233510.jpg","images/IMG-20251122-WA0027.jpg","images/IMG-20251122-WA0029.jpg"
  ] },
];

const osLabels = { windows: "🪟", macos: "🍎", linux: "🐧", chromeos: "🌐" };
const badgeLabels = { bestseller: "⭐ Best Seller", new: "🔥 New Arrival", deal: "⚡ Deal" };

// Load user images from localStorage (keep demo photos as base)
(function loadImages() {
  try {
    const stored = JSON.parse(localStorage.getItem("cp_laptop_images") || "{}");
    // If stored data has picsum URLs (old demo), clear it to use new local paths
    const hasPicsum = Object.values(stored).some(arr => arr.some(u => u.includes("picsum")));
    if (hasPicsum) { localStorage.removeItem("cp_laptop_images"); return; }
    laptops.forEach(l => {
      if (stored[l.id] && stored[l.id].length > 0) l.images = stored[l.id];
    });
  } catch(e) {}
})();

// ===== Persisted Laptop Data (Firestore) =====
let _laptopsLoaded = false;
const _laptopListeners = [];
let _useFirestore = false;

function onLaptopsReady(cb) {
  if (_laptopsLoaded) cb();
  else _laptopListeners.push(cb);
}

(function loadPersistedLaptops() {
  try {
    _useFirestore = true;
    // Load from Firestore in real-time
    db.collection("laptops").onSnapshot(function(snapshot) {
      try {
        const data = [];
        snapshot.forEach(function(doc) {
          data.push({ id: parseInt(doc.id) || doc.data().id, ...doc.data() });
        });
        laptops.length = 0;
        data.forEach(function(l) { laptops.push(l); });
        _laptopsLoaded = true;
        _laptopListeners.forEach(function(cb) { cb(); });
        _laptopListeners.length = 0;
        // Re-render if page elements exist
        if (document.getElementById("laptopGrid")) renderLaptops(laptops);
        if (document.getElementById("sliderTrack")) renderLaptops(laptops, "sliderTrack");
      } catch(e) { console.error("Firestore snapshot error:", e); }
    }, function(err) {
      console.error("Firestore listener error:", err);
      _useFirestore = false;
      _laptopsLoaded = true;
    });
  } catch(e) {
    console.error("Firestore init error:", e);
    _useFirestore = false;
    _laptopsLoaded = true;
    // Fallback to localStorage
    try {
      const stored = localStorage.getItem("cp_laptops_data");
      if (stored) {
        const data = JSON.parse(stored);
        if (Array.isArray(data)) { laptops.length = 0; data.forEach(function(l) { laptops.push(l); }); }
      }
    } catch(e2) {}
  }
})();

function persistLaptops() {
  if (_useFirestore) {
    try {
      laptops.forEach(function(l) {
        db.collection("laptops").doc(String(l.id)).set(l);
      });
    } catch(e) { console.error("Firestore persist error:", e); }
  }
  // Also save to localStorage as backup
  try { localStorage.setItem("cp_laptops_data", JSON.stringify(laptops)); } catch(e) {}
}

// Deleted laptops archive (for relisting) — Firestore
let deletedLaptops = [];

(function loadDeletedLaptops() {
  try {
    db.collection("deleted_laptops").onSnapshot(function(snapshot) {
      try {
        deletedLaptops.length = 0;
        snapshot.forEach(function(doc) {
          deletedLaptops.push({ id: parseInt(doc.id) || doc.data().id, ...doc.data() });
        });
      } catch(e) {}
    }, function(err) { console.error("Deleted laptops listener error:", err); });
  } catch(e) {}
})();

function persistDeletedLaptops() {
  if (!_useFirestore) return;
  try {
    deletedLaptops.forEach(function(l) {
      db.collection("deleted_laptops").doc(String(l.id)).set(l);
    });
  } catch(e) {}
}
// ===== Orders System =====
let orders = [];
(function loadOrders() {
  try {
    const data = JSON.parse(localStorage.getItem("cp_orders"));
    if (Array.isArray(data)) data.forEach(o => orders.push(o));
  } catch(e) {}
})();
function persistOrders() { localStorage.setItem("cp_orders", JSON.stringify(orders)); }

// ===== Customers =====
function getCustomers() {
  const map = {};
  orders.forEach(o => {
    const phone = o.customer?.phone || o.phone;
    const name = o.customer?.name || o.name || "Unknown";
    if (!phone) return;
    if (!map[phone]) map[phone] = { phone, name, orders: [], total: 0 };
    map[phone].orders.push(o);
    map[phone].total += o.finalTotal || o.total || 0;
  });
  return Object.values(map).sort((a, b) => b.total - a.total);
}

// ===== Wishlist =====
let wishlist = [];
(function loadWishlist() {
  try {
    const data = JSON.parse(localStorage.getItem("cp_wishlist"));
    if (Array.isArray(data)) data.forEach(id => wishlist.push(id));
  } catch(e) {}
})();
function persistWishlist() { localStorage.setItem("cp_wishlist", JSON.stringify(wishlist)); }
function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) wishlist.splice(idx, 1); else wishlist.push(id);
  persistWishlist();
  return wishlist.indexOf(id) > -1;
}

// ===== Compare =====
let compareList = [];
function toggleCompare(id, checked) {
  if (checked) {
    if (compareList.length >= 3) { showToast("⚠️ Max 3 laptops to compare"); return; }
    if (compareList.indexOf(id) === -1) compareList.push(id);
  } else {
    const idx = compareList.indexOf(id);
    if (idx > -1) compareList.splice(idx, 1);
  }
  updateCompareBar();
}
function updateCompareBar() {
  let bar = document.getElementById("compareBar");
  if (!compareList.length) { if (bar) bar.remove(); return; }
  if (!bar) {
    bar = document.createElement("div"); bar.id = "compareBar";
    document.body.appendChild(bar);
  }
  bar.innerHTML = `<span style="font-size:0.8rem;color:rgba(255,255,255,0.7)">📊 ${compareList.length}/3 selected</span>
    <button class="btn btn-primary" style="padding:6px 16px;font-size:0.8rem" onclick="showCompare()">Compare</button>
    <button style="padding:6px 16px;border:1px solid rgba(255,255,255,0.2);border-radius:6px;background:transparent;color:#fff;cursor:pointer;font-size:0.8rem" onclick="clearCompare()">Clear</button>`;
}
function clearCompare() { compareList = []; updateCompareBar(); document.querySelectorAll(".laptop-compare-cb").forEach(cb => cb.checked = false); }
function showCompare() {
  const items = compareList.map(id => laptops.find(l => l.id === id)).filter(Boolean);
  if (items.length < 2) { showToast("⚠️ Select at least 2 laptops"); return; }
  let existing = document.getElementById("compareModal");
  if (existing) existing.remove();
  const m = document.createElement("div"); m.id = "compareModal";
  Object.assign(m.style, { position: "fixed", inset: "0", zIndex: "99999", background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center" });
  const fields = [
    { label: "Brand", key: "brand" },
    { label: "Model", key: "name" },
    { label: "Processor", key: "processor" },
    { label: "Generation", key: "gen" },
    { label: "RAM", key: "ram" },
    { label: "Storage", key: "storage" },
    { label: "Screen", key: "screenSize" },
    { label: "OS", key: "os" },
    { label: "Type", key: "deviceType" },
    { label: "Price", key: "price", fmt: v => "₹" + Number(v).toLocaleString() },
    { label: "MRP", key: "mrp", fmt: v => "₹" + Number(v).toLocaleString() },
    { label: "Condition", key: "condition" },
    { label: "Specs", key: "specialSpec" },
  ];
  const hasImg = items.some(l => l.images && l.images.length > 0);
  let html = `<div style="background:#1a1a1a;border-radius:12px;padding:24px;max-width:900px;width:95%;max-height:90vh;overflow:auto">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
      <span style="font-size:1rem;font-weight:600;color:#fff">📊 Compare Laptops</span>
      <button onclick="this.closest('#compareModal').remove()" style="background:none;border:none;color:#fff;font-size:1.2rem;cursor:pointer">✕</button>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:0.75rem">
      ${hasImg ? `<tr><td style="padding:8px;color:rgba(255,255,255,0.4);border-bottom:1px solid rgba(255,255,255,0.06);font-weight:600">Image</td>${items.map(l => `<td style="padding:8px;text-align:center;border-bottom:1px solid rgba(255,255,255,0.06)">${l.images?.length ? `<img src="${l.images[0]}" style="width:80px;height:80px;object-fit:cover;border-radius:6px">` : '💻'}</td>`).join("")}</tr>` : ''}
      ${fields.map(f => `<tr><td style="padding:6px 8px;color:rgba(255,255,255,0.4);border-bottom:1px solid rgba(255,255,255,0.04);font-weight:600;white-space:nowrap">${f.label}</td>${items.map(l => {
        const val = l[f.key];
        const display = val != null && val !== '' ? (f.fmt ? f.fmt(val) : val) : '-';
        return `<td style="padding:6px 8px;border-bottom:1px solid rgba(255,255,255,0.04);color:#fff">${display}</td>`;
      }).join("")}</tr>`).join("")}
    </table>
  </div>`;
  m.innerHTML = html;
  document.body.appendChild(m);
  m.addEventListener("click", e => { if (e.target === m) m.remove(); });
}

// ===== Repairs =====
let repairs = [];
(function loadRepairs() {
  try {
    const data = JSON.parse(localStorage.getItem("cp_repairs"));
    if (Array.isArray(data)) data.forEach(r => repairs.push(r));
  } catch(e) {}
})();
function persistRepairs() { localStorage.setItem("cp_repairs", JSON.stringify(repairs)); }

// ===== Normalize =====
(function normalizeLaptops() {
  laptops.forEach(l => {
    if (!l.deviceType) l.deviceType = "laptop";
    if (l.featured === undefined) l.featured = false;
    if (!l.priority) l.priority = 0;
    if (!l.mrp) l.mrp = Math.round(l.price * 1.35);
    if (!l.purchasePrice) l.purchasePrice = 0;
    if (!l.units) l.units = 1;
    if (!l.screenSize) l.screenSize = "";
    if (!l.gen) l.gen = "";
    if (!l.specialSpec) l.specialSpec = "";
  });
})();

function saveImages() {
  const data = {};
  laptops.forEach(l => { if (l.images.length) data[l.id] = l.images; });
  localStorage.setItem("cp_laptop_images", JSON.stringify(data));
}

// ===== Cart =====
let cart = {};

function loadCart() {
  try { const d = JSON.parse(localStorage.getItem("cp_cart") || "{}"); cart = d; } catch(e) { cart = {}; }
  updateCartBadge();
}

function saveCart() {
  localStorage.setItem("cp_cart", JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById("cartBadge");
  if (!badge) return;
  const count = Object.values(cart).reduce((s, n) => s + n, 0);
  badge.textContent = count;
  badge.style.display = count ? "flex" : "none";
}

function addToCart(id) {
  if (!cart[id]) cart[id] = 0;
  cart[id]++;
  saveCart();
  renderCart();
  showToast("🛒 Added to cart", "🛒");
  // animate button feedback
  const btn = document.querySelector(`.cart-add-btn[data-id="${id}"]`);
  if (btn) { btn.classList.add("added"); btn.textContent = "✅ Added"; setTimeout(() => { btn.classList.remove("added"); btn.innerHTML = "🛒 Add"; }, 1200); }
}

function removeFromCart(id) {
  delete cart[id];
  saveCart();
  renderCart();
}

function updateCartQuantity(id, delta) {
  const n = (cart[id] || 0) + delta;
  if (n <= 0) removeFromCart(id);
  else { cart[id] = n; saveCart(); renderCart(); }
}

function toggleCart() {
  const sidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("cartOverlay");
  if (!sidebar) return;
  const isOpen = sidebar.classList.contains("open");
  sidebar.classList.toggle("open");
  if (overlay) overlay.classList.toggle("show");
  if (!isOpen) renderCart();
  document.body.style.overflow = isOpen ? "" : "hidden";
}

function closeCart() {
  const sidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("cartOverlay");
  if (sidebar) sidebar.classList.remove("open");
  if (overlay) overlay.classList.remove("show");
  document.body.style.overflow = "";
}

function renderCart() {
  const container = document.getElementById("cartItems");
  const mrpEl = document.getElementById("cartMrp");
  const saveEl = document.getElementById("cartSave");
  const finalEl = document.getElementById("cartFinal");
  const footer = document.getElementById("cartFooter");
  if (!container) return;

  const items = Object.entries(cart).filter(([id, qty]) => qty > 0);
  if (!items.length) {
    container.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><div class="cart-empty-title">Your cart is empty</div><div class="cart-empty-sub">Browse our laptops and add your favorites!</div><a href="buy.html" class="btn btn-primary" onclick="closeCart()">Browse Laptops</a></div>`;
    if (mrpEl) mrpEl.textContent = "₹0";
    if (saveEl) saveEl.textContent = "-₹0";
    if (finalEl) finalEl.textContent = "₹0";
    if (footer) footer.style.display = "none";
    return;
  }
  if (footer) footer.style.display = "block";

  let totalMrp = 0, totalSell = 0;
  container.innerHTML = items.map(([id, qty]) => {
    const lap = laptops.find(l => l.id === parseInt(id));
    if (!lap) return "";
    const mrp = lap.mrp || Math.round(lap.price * 1.35);
    const discPct = Math.round((1 - lap.price / mrp) * 100);
    const subtotalMrp = mrp * qty;
    const subtotalSell = lap.price * qty;
    totalMrp += subtotalMrp;
    totalSell += subtotalSell;
    const imgHtml = lap.images.length ? `<img src="${lap.images[0]}" alt="${lap.name}">` : "💻";
    return `
      <div class="cart-item">
        <div class="cart-item-img">${imgHtml}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${lap.name}</div>
          <div class="cart-item-mrp"><del>₹${subtotalMrp.toLocaleString()}</del> <span class="cart-item-disc">${discPct}% off</span></div>
          <div class="cart-item-price">₹${subtotalSell.toLocaleString()}</div>
          <div class="cart-item-save">You Save ₹${(subtotalMrp - subtotalSell).toLocaleString()}</div>
          <div class="cart-item-qty">
            <button class="cart-qty-btn" onclick="updateCartQuantity(${id}, -1)">−</button>
            <span class="cart-qty-num">${qty}</span>
            <button class="cart-qty-btn" onclick="updateCartQuantity(${id}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${id})" title="Remove">✕</button>
      </div>`;
  }).join("");

  let couponDisc = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === "percent") couponDisc = Math.round(totalSell * appliedCoupon.value / 100);
    else couponDisc = Math.min(appliedCoupon.value, totalSell);
  }
  const final = Math.max(0, totalSell - couponDisc);

  if (mrpEl) mrpEl.textContent = "₹" + totalMrp.toLocaleString();
  if (saveEl) saveEl.textContent = "-₹" + (totalMrp - final).toLocaleString();
  if (finalEl) finalEl.textContent = "₹" + final.toLocaleString();
}

function getCartSubtotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const lap = laptops.find(l => l.id === parseInt(id));
    return sum + (lap ? lap.price * qty : 0);
  }, 0);
}

// ===== Coupon Codes (hardcoded defaults — admin can add more) =====
const BUILTIN_COUPONS = {
  SAVE10: { type: "percent", value: 10, label: "10% Off" },
  SAVE20: { type: "percent", value: 20, label: "20% Off" },
  WELCOME5: { type: "flat", value: 500, label: "₹500 Off", minCart: 5000 },
  PARADISE: { type: "percent", value: 15, label: "15% Off", minCart: 10000 },
  VIP50: { type: "flat", value: 2000, label: "₹2000 Off", minCart: 30000 },
};

let adminCoupons = [];

(function loadAdminCoupons() {
  try {
    const stored = localStorage.getItem("cp_coupons");
    if (stored) { adminCoupons = JSON.parse(stored); return; }
    // Seed default
    adminCoupons = [
      { code: "MYS50", type: "percent", value: 50, label: "50% Off", minCart: 0 },
    ];
    localStorage.setItem("cp_coupons", JSON.stringify(adminCoupons));
  } catch(e) {}
})();

function persistAdminCoupons() {
  localStorage.setItem("cp_coupons", JSON.stringify(adminCoupons));
}

function getAllCoupons() {
  const merged = { ...BUILTIN_COUPONS };
  adminCoupons.forEach(c => { if (c.code) merged[c.code.toUpperCase()] = { type: c.type, value: c.value, label: c.label, minCart: c.minCart || 0 }; });
  return merged;
}

let appliedCoupon = null;

function applyCoupon() {
  const input = document.getElementById("couponInput");
  const msg = document.getElementById("couponMsg");
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (!code) { showToast("⚠️ Enter a coupon code"); return; }

  const allCoupons = getAllCoupons();
  const coupon = allCoupons[code];
  if (!coupon) {
    if (msg) { msg.textContent = "❌ Invalid coupon code"; msg.className = "coupon-msg error"; }
    showToast("❌ Invalid coupon code");
    return;
  }

  const subtotal = getCartSubtotal();
  if (coupon.minCart && subtotal < coupon.minCart) {
    const needed = coupon.minCart - subtotal;
    if (msg) { msg.textContent = `⚠️ Min cart ₹${coupon.minCart.toLocaleString()} needed (add ₹${needed.toLocaleString()})`; msg.className = "coupon-msg error"; }
    showToast(`⚠️ Add ₹${needed.toLocaleString()} more to use ${code}`);
    return;
  }

  appliedCoupon = { code, ...coupon };
  if (msg) { msg.textContent = `✅ ${coupon.label} applied!`; msg.className = "coupon-msg success"; }
  showToast(`✅ Coupon ${code}: ${coupon.label}`);
  renderCart();
}

function removeCoupon() {
  appliedCoupon = null;
  const msg = document.getElementById("couponMsg");
  if (msg) { msg.textContent = ""; msg.className = "coupon-msg"; }
  document.getElementById("couponInput").value = "";
  showToast("🗑 Coupon removed");
  renderCart();
}

function checkoutCart() {
  const items = Object.entries(cart).filter(([id, qty]) => qty > 0);
  if (!items.length) { showToast("🛒 Your cart is empty"); return; }

  let msg = "🛒 *New Order - Computer Paradise*\n\n";
  let totalMrp = 0, totalSell = 0;
  items.forEach(([id, qty]) => {
    const lap = laptops.find(l => l.id === parseInt(id));
    if (!lap) return;
    const mrp = lap.mrp || Math.round(lap.price * 1.35);
    totalMrp += mrp * qty;
    totalSell += lap.price * qty;
    msg += `• ${lap.name} × ${qty}\n`;
    msg += `  MRP: ₹${(mrp * qty).toLocaleString()} → Pay: ₹${(lap.price * qty).toLocaleString()}\n`;
  });
  const savings = totalMrp - totalSell;
  msg += `\n*Total MRP: ₹${totalMrp.toLocaleString()}*`;
  msg += `\nYou Save: -₹${savings.toLocaleString()}`;

  let couponDisc = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === "percent") {
      couponDisc = Math.round(totalSell * appliedCoupon.value / 100);
    } else {
      couponDisc = Math.min(appliedCoupon.value, totalSell);
    }
    msg += `\nCoupon (${appliedCoupon.code}): -₹${couponDisc.toLocaleString()}`;
  }
  const final = Math.max(0, totalSell - couponDisc);
  msg += `\n*Final Total: ₹${final.toLocaleString()}*`;
  msg += `\n\nCustomer: ${currentUser ? currentUser.phone : "Guest"}`;
  msg += `\nTime: ${new Date().toLocaleString()}`;

  if (currentUser) {
    msg += `\nPhone: +91-${currentUser.phone}`;
  }

  // Save order
  const order = {
    id: Date.now(),
    date: new Date().toISOString(),
    items: items.map(([id, qty]) => {
      const lap = laptops.find(l => l.id === parseInt(id));
      return lap ? { id: lap.id, name: lap.brand + " " + lap.name, price: lap.price, mrp: lap.mrp || Math.round(lap.price * 1.35), qty } : null;
    }).filter(Boolean),
    totalMrp, totalSell, savings, coupon: appliedCoupon ? { code: appliedCoupon.code, discount: couponDisc } : null,
    finalTotal: final,
    customer: currentUser ? { phone: currentUser.phone, name: currentUser.name || "" } : { phone: "Guest", name: "Guest" }
  };
  orders.push(order);
  persistOrders();

  window.open("https://wa.me/919916611010?text=" + encodeURIComponent(msg), "_blank");
  showToast("📤 Order sent via WhatsApp!");
}

function clearCart() {
  if (!Object.keys(cart).length) return;
  if (!confirm("Clear your entire cart?")) return;
  cart = {};
  saveCart();
  renderCart();
  showToast("🗑 Cart cleared");
}

// ===== Render Card =====
function laptopCardHTML(l) {
  const hasImg = l.images.length > 0;
  const imgHtml = hasImg
    ? `<img src="${l.images[0]}" alt="${l.name}" onerror="this.outerHTML='<span class=\\'placeholder-icon\\'>💻</span>'">`
    : `<span class="placeholder-icon">💻</span>`;
  const mrp = l.mrp || Math.round(l.price * 1.35);
  const discount = Math.round((1 - l.price / mrp) * 100);
  const deviceIcons = { laptop: "💻", desktop: "🖥️", tablet: "📱", other: "📦" };
  const devIcon = deviceIcons[l.deviceType] || "💻";
  const wishClass = wishlist.indexOf(l.id) > -1 ? "wish-active" : "";
  const condColors = { "A++": "#00e676", "A+": "#69f0ae", "A": "#4fc3f7", "B": "#ffb74d", "C": "#ef5350" };
  const condColor = condColors[l.condition] || "#4fc3f7";
  const lowStock = l.units !== undefined && l.units <= 2;
  const badge = l.badge || "";
  const badgeColors = { bestseller: "#ff6f00", new: "#00c853", deal: "#d50000" };
  const badgeColor = badgeColors[badge] || "#d4af37";

  return `
    <div class="laptop-card" onclick="window.location.href='detail.html?id=${l.id}'">
      <!-- Price tag overlaying image -->
      <div class="lc-price-tag">
        <span class="lc-price-tag-amount">₹${l.price.toLocaleString()}</span>
        ${mrp > l.price ? `<span class="lc-price-tag-mrp">₹${mrp.toLocaleString()}</span>` : ''}
        ${discount >= 10 ? `<span class="lc-price-tag-discount">-${discount}%</span>` : ''}
      </div>

          <!-- Top badges row -->
          <div class="lc-badges">
            ${badge ? `<span class="lc-badge lc-badge-${badge}" style="background:${badgeColor}">${badgeLabels[badge] || badge}</span>` : ''}
      </div>

      <!-- Image -->
      <div class="laptop-img">
        ${imgHtml}
      </div>

      <!-- Condition + OS chips -->
      <div class="lc-chips">
        <span class="lc-chip cond-chip" style="background:${condColor}22;color:${condColor};border-color:${condColor}44">${l.condition || 'A'}</span>
        <span class="lc-chip os-chip"><span class="os-icon">${l.os === 'windows' ? '🪟' : l.os === 'mac' ? '🍎' : '🐧'}</span> ${l.os || 'N/A'}</span>
      </div>

      <!-- Info overlay -->
      <div class="laptop-card-info">
        <div class="laptop-card-brand">${devIcon} ${l.brand} <span class="lc-name-ext">${l.name.replace(l.brand,'').trim()}</span></div>
        <div class="laptop-card-processor">${l.screenSize ? l.screenSize + '" · ' : ''}${l.processor}${l.gen ? ' · ' + l.gen : ''}</div>
        <div class="lc-specs-strip">
          <span class="lc-spec-item" title="RAM">🔲 ${l.ram}</span>
          <span class="lc-spec-item" title="Storage">💾 ${l.storage}</span>
          ${l.units !== undefined ? `<span class="lc-spec-item units-item ${lowStock ? 'low-stock' : ''}" title="Units available">${lowStock ? '⚠️' : '📦'} ${l.units}</span>` : ''}
        </div>
      </div>

      <!-- Actions -->
      <div class="laptop-card-actions">
        <span class="laptop-wish ${wishClass}" onclick="event.stopPropagation();toggleWishlist(${l.id});renderLaptops(laptops,'laptopGrid');if(document.getElementById('sliderTrack'))renderLaptops(laptops,'sliderTrack')">${wishlist.indexOf(l.id) > -1 ? '♥' : '♡'}</span>
        <label class="laptop-compare-label" onclick="event.stopPropagation()">
          <input type="checkbox" class="laptop-compare-cb" data-id="${l.id}" onchange="toggleCompare(${l.id},this.checked)">
          <span>⇄</span>
        </label>
      </div>
    </div>`;
}

function renderLaptops(list, containerId) {
  const grid = document.getElementById(containerId || "laptopGrid");
  if (!grid) return;
  // Sort: featured first, then by priority desc, then by id
  const sorted = [...list].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    if ((b.priority || 0) !== (a.priority || 0)) return (b.priority || 0) - (a.priority || 0);
    return a.id - b.id;
  });
  if (!sorted.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-light);">
      <div style="font-size:3rem;margin-bottom:12px;">🔍</div>
      <p style="font-size:1.1rem;font-weight:600;color:var(--text);">No laptops found</p>
      <p style="font-size:0.9rem;">Try adjusting your search or filters</p>
    </div>`;
    return;
  }
  grid.innerHTML = sorted.map(laptopCardHTML).join("");
}

// ===== Slider =====
let sliderAutoTimer = null;

function initSlider() {
  const track = document.getElementById("sliderTrack");
  if (!track) return;
  renderLaptops(laptops, "sliderTrack");

  const leftBtn = document.getElementById("sliderLeft");
  const rightBtn = document.getElementById("sliderRight");
  if (!leftBtn || !rightBtn) return;

  function slide(dir) {
    const card = track.querySelector(".laptop-card");
    if (!card) return;
    const w = card.offsetWidth + 20;
    track.scrollBy({ left: dir * w, behavior: "smooth" });
  }

  leftBtn.addEventListener("click", () => { slide(-1); resetSliderAuto(); });
  rightBtn.addEventListener("click", () => { slide(1); resetSliderAuto(); });

  // Auto-scroll
  startSliderAuto();
  track.addEventListener("mouseenter", stopSliderAuto);
  track.addEventListener("mouseleave", startSliderAuto);

  // Touch drag
  let isDown = false, startX, scrollLeft;
  track.addEventListener("mousedown", (e) => { isDown = true; startX = e.pageX - track.offsetLeft; scrollLeft = track.scrollLeft; });
  track.addEventListener("mouseleave", () => { isDown = false; });
  track.addEventListener("mouseup", () => { isDown = false; });
  track.addEventListener("mousemove", (e) => { if (!isDown) return; e.preventDefault(); const x = e.pageX - track.offsetLeft; track.scrollLeft = scrollLeft - (x - startX); });
}

function startSliderAuto() {
  stopSliderAuto();
  sliderAutoTimer = setInterval(() => {
    const track = document.getElementById("sliderTrack");
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScroll - 10) { track.scrollTo({ left: 0, behavior: "smooth" }); }
    else { track.scrollBy({ left: 320, behavior: "smooth" }); }
  }, 3000);
}

function stopSliderAuto() { if (sliderAutoTimer) { clearInterval(sliderAutoTimer); sliderAutoTimer = null; } }
function resetSliderAuto() { stopSliderAuto(); setTimeout(startSliderAuto, 5000); }

// ===== Card Boot Hover =====
// ===== Windows Desktop Overlay =====
let _winLaptop = null;
let _winImgIdx = 0;

function openWindowsDesktop(id) {
  _winLaptop = laptops.find(l => l.id === id);
  if (!_winLaptop) return;
  _winImgIdx = 0;

  const overlay = document.getElementById("windowsOverlay");
  const desktop = document.getElementById("windowsDesktop");
  if (!overlay || !desktop) return;

  // Fill data
  document.getElementById("windowsTitle").textContent = _winLaptop.name + " | Computer Paradise";
  document.getElementById("windowsTitle2").textContent = _winLaptop.name + " - Full Details";
  document.getElementById("windowsTaskName").textContent = _winLaptop.name;

  document.getElementById("windowsSpecs").innerHTML = `
    <div class="win-spec" style="--spec-w:35%"><span>💠 Brand</span><span>${_winLaptop.brand}</span></div>
    <div class="win-spec" style="--spec-w:50%"><span>💻 Screen</span><span>${_winLaptop.screenSize || '-'}"</span></div>
    <div class="win-spec" style="--spec-w:75%"><span>⚡ Processor</span><span>${_winLaptop.gen ? _winLaptop.gen + ' ' : ''}${_winLaptop.processor}</span></div>
    <div class="win-spec" style="--spec-w:55%"><span>🧠 RAM</span><span>${_winLaptop.ram}</span></div>
    <div class="win-spec" style="--spec-w:65%"><span>💾 Storage</span><span>${_winLaptop.storage}</span></div>
    <div class="win-spec" style="--spec-w:45%"><span>🖥 OS</span><span>${_winLaptop.os.charAt(0).toUpperCase() + _winLaptop.os.slice(1)}</span></div>
    <div class="win-spec" style="--spec-w:40%"><span>📦 Type</span><span>${(_winLaptop.deviceType || "laptop").charAt(0).toUpperCase() + (_winLaptop.deviceType || "laptop").slice(1)}</span></div>
    <div class="win-spec" style="--spec-w:30%"><span>📦 Units</span><span>${_winLaptop.units || 1}</span></div>
    <div class="win-spec" style="--spec-w:85%"><span>🏷 Condition</span><span>${_winLaptop.condition}</span></div>
    ${_winLaptop.specialSpec ? `<div class="win-spec" style="--spec-w:100%"><span>✨ Special</span><span>${_winLaptop.specialSpec}</span></div>` : ''}
  `;
  // Animate price count-up
  const priceEl = document.getElementById("windowsPrice");
  let startPrice = 0;
  const targetPrice = _winLaptop.price;
  const step = Math.ceil(targetPrice / 40);
  priceEl.textContent = "₹0";
  const priceTimer = setInterval(() => {
    startPrice += step;
    if (startPrice >= targetPrice) {
      startPrice = targetPrice;
      clearInterval(priceTimer);
    }
    priceEl.textContent = "₹" + startPrice.toLocaleString();
  }, 30);
  document.getElementById("windowsWA").href =
    `https://wa.me/919916611010?text=${encodeURIComponent("Hi Computer Paradise, I'm interested in the " + _winLaptop.name + " (₹" + _winLaptop.price.toLocaleString() + "). Is it available?")}`;

  // Update Add to Cart button
  const waActions = document.querySelector(".win-actions");
  if (waActions) {
    let acBtn = waActions.querySelector(".win-add-cart-btn");
    if (!acBtn) {
      acBtn = document.createElement("button");
      acBtn.className = "btn btn-secondary win-add-cart-btn";
      acBtn.innerHTML = "🛒 Add to Cart";
      waActions.appendChild(acBtn);
    }
    acBtn.onclick = () => { addToCart(_winLaptop.id); };
  }

  renderWinPhotos();
  setupUpload();

  overlay.classList.add("show");
  document.body.style.overflow = "hidden";

  desktop.classList.add("active");
}

function closeWindowsDesktop() {
  const overlay = document.getElementById("windowsOverlay");
  if (!overlay) return;
  closeZoom();
  overlay.classList.remove("show");
  document.body.style.overflow = "";
  document.getElementById("windowsDesktop")?.classList.remove("active");
}

function renderWinPhotos() {
  const imgs = (_winLaptop && _winLaptop.images) || [];
  const mainImg = document.getElementById("windowsMainImg");
  const thumbs = document.getElementById("windowsThumbs");
  if (!mainImg) return;

  if (!imgs.length) {
    mainImg.innerHTML = `<div class="win-no-img">💻<br>No photos yet</div>`;
    if (thumbs) thumbs.innerHTML = "";
    return;
  }

  _winImgIdx = Math.max(0, Math.min(_winImgIdx, imgs.length - 1));
  mainImg.innerHTML = `
    <img src="${imgs[_winImgIdx]}" alt="Photo ${_winImgIdx + 1}" onerror="this.outerHTML='<div class=\\'win-no-img\\'>💻<br>Image error</div>'">
    ${imgs.length > 1 ? '<button class="win-nav-btn prev" onclick="event.stopPropagation();closeZoom();winPhoto(-1)">‹</button><button class="win-nav-btn next" onclick="event.stopPropagation();closeZoom();winPhoto(1)">›</button>' : ''}
  `;

  // Click to zoom
  mainImg.classList.remove("zoomed");
  mainImg.onclick = function(e) {
    if (e.target.tagName === 'IMG') {
      this.classList.toggle("zoomed");
    }
  };

  if (thumbs) {
    thumbs.innerHTML = imgs.map((img, i) =>
      `<div class="win-thumb ${i === _winImgIdx ? 'active' : ''}" onclick="closeZoom();_winImgIdx=${i};renderWinPhotos();">
        <img src="${img}" onerror="this.alt='💻'">
      </div>`
    ).join("");
  }
}

function closeZoom() {
  const el = document.getElementById("windowsMainImg");
  if (el) el.classList.remove("zoomed");
}

function winPhoto(dir) {
  const imgs = (_winLaptop && _winLaptop.images) || [];
  _winImgIdx = (_winImgIdx + dir + imgs.length) % imgs.length;
  renderWinPhotos();
}

function setupUpload() {
  const inputs = document.querySelectorAll("#windowsOverlay input[type='file']");
  inputs.forEach(inp => {
    inp.onchange = (e) => {
      Array.from(e.target.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (ev) => {
          if (_winLaptop) {
            // Auto-enhance the image
            enhanceImage(ev.target.result, (enhanced) => {
              _winLaptop.images.push(enhanced);
              saveImages();
              _winImgIdx = _winLaptop.images.length - 1;
              renderWinPhotos();
            });
          }
        };
        reader.readAsDataURL(file);
      });
      e.target.value = "";
    };
  });
}

// Auto image enhancement — removes blur, fixes lighting, sharpens
function enhanceImage(dataUrl, callback) {
  const img = new Image();
  img.onload = function() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;

    // Draw original
    ctx.drawImage(img, 0, 0);

    // Get pixel data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    // 1. Auto levels — stretch histogram per channel
    let minR = 255, maxR = 0, minG = 255, maxG = 0, minB = 255, maxB = 0;
    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i] < minR) minR = pixels[i];
      if (pixels[i] > maxR) maxR = pixels[i];
      if (pixels[i+1] < minG) minG = pixels[i+1];
      if (pixels[i+1] > maxG) maxG = pixels[i+1];
      if (pixels[i+2] < minB) minB = pixels[i+2];
      if (pixels[i+2] > maxB) maxB = pixels[i+2];
    }
    const rangeR = maxR - minR || 1;
    const rangeG = maxG - minG || 1;
    const rangeB = maxB - minB || 1;

    // 2. Apply gentle S-curve contrast + histogram stretch + slight sharpening
    const contrast = 1.12;
    const brightness = 8;
    const sharpen = 0.3;

    // First pass: levels + contrast + brightness
    for (let i = 0; i < pixels.length; i += 4) {
      // Stretch
      let r = (pixels[i] - minR) / rangeR * 255;
      let g = (pixels[i+1] - minG) / rangeG * 255;
      let b = (pixels[i+2] - minB) / rangeB * 255;

      // Contrast (S-curve)
      r = 128 + (r - 128) * contrast;
      g = 128 + (g - 128) * contrast;
      b = 128 + (b - 128) * contrast;

      // Brightness
      r += brightness;
      g += brightness;
      b += brightness;

      pixels[i] = Math.max(0, Math.min(255, r));
      pixels[i+1] = Math.max(0, Math.min(255, g));
      pixels[i+2] = Math.max(0, Math.min(255, b));
    }

    ctx.putImageData(imageData, 0, 0);

    // 3. Unsharp mask (simplified) — second pass with neighboring pixels
    if (canvas.width > 100 && canvas.height > 100) {
      const sharpData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const sp = sharpData.data;
      const w = canvas.width;
      const h = canvas.height;

      for (let y = 1; y < h - 1; y++) {
        for (let x = 1; x < w - 1; x++) {
          const i = (y * w + x) * 4;
          for (let c = 0; c < 3; c++) {
            const idx = i + c;
            // Simple sharpen: original + (original - blurred) * amount
            const blurred = (
              sp[((y-1)*w + x-1)*4 + c] + sp[((y-1)*w + x)*4 + c] + sp[((y-1)*w + x+1)*4 + c] +
              sp[(y*w + x-1)*4 + c] + sp[(y*w + x)*4 + c] + sp[(y*w + x+1)*4 + c] +
              sp[((y+1)*w + x-1)*4 + c] + sp[((y+1)*w + x)*4 + c] + sp[((y+1)*w + x+1)*4 + c]
            ) / 9;
            const sharpVal = sp[idx] + (sp[idx] - blurred) * sharpen;
            sp[idx] = Math.max(0, Math.min(255, sharpVal));
          }
        }
      }
      ctx.putImageData(sharpData, 0, 0);
    }

    callback(canvas.toDataURL("image/jpeg", 0.92));
  };
  img.src = dataUrl;
}

// ===== Filter =====
function filterLaptops() {
  const brand = document.getElementById("filterBrand")?.value;
  const deviceType = document.getElementById("filterDeviceType")?.value;
  const minP = parseInt(document.getElementById("filterMin")?.value) || 0;
  const maxP = parseInt(document.getElementById("filterMax")?.value) || Infinity;
  const sort = document.getElementById("filterSort")?.value || "default";
  const query = (document.getElementById("searchInput")?.value || "").toLowerCase();

  let f = laptops;
  if (brand) f = f.filter(l => l.brand === brand);
  if (deviceType) f = f.filter(l => (l.deviceType || "laptop") === deviceType);
  f = f.filter(l => l.price >= minP && l.price <= maxP);
  if (query) f = f.filter(l => l.name.toLowerCase().includes(query) || l.brand.toLowerCase().includes(query) || l.processor.toLowerCase().includes(query));
  if (sort === "price-asc") f.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") f.sort((a, b) => b.price - a.price);
  else if (sort === "name") f.sort((a, b) => a.name.localeCompare(b.name));
  else {
    // Default: featured + priority first, then by id
    f.sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      if ((b.priority || 0) !== (a.priority || 0)) return (b.priority || 0) - (a.priority || 0);
      return a.id - b.id;
    });
  }

  renderLaptops(f);
  const el = document.getElementById("filterCount");
  if (el) el.textContent = `${f.length} item${f.length !== 1 ? 's' : ''}`;
}

function showSuggestions() {
  const q = (document.getElementById("searchInput")?.value || "").toLowerCase();
  const c = document.getElementById("searchSuggestions");
  if (!c) return;
  if (!q) { c.classList.remove("show"); return; }

  const m = laptops.filter(l => l.name.toLowerCase().includes(q) || l.brand.toLowerCase().includes(q)).slice(0, 5);
  if (!m.length) { c.classList.remove("show"); return; }

  c.innerHTML = m.map(l => `
    <div class="search-suggestion-item" onclick="document.getElementById('searchSuggestions').classList.remove('show');openWindowsDesktop(${l.id})">
      <span class="suggest-icon">💻</span>
      <div class="suggest-info">
        <div class="suggest-name">${l.name}</div>
        <div class="suggest-spec">${l.processor} · ${l.ram}</div>
      </div>
      <span class="suggest-price">₹${l.price.toLocaleString()}</span>
    </div>
  `).join("");
  c.classList.add("show");
}

document.addEventListener("click", (e) => {
  const w = document.querySelector(".search-wrapper");
  const s = document.getElementById("searchSuggestions");
  if (w && s && !w.contains(e.target)) s.classList.remove("show");
});

// ===== Auth =====
let currentUser = null;
const ADMIN_PASSWORD = "Mysore@123";

function loadAuth() {
  try { const d = localStorage.getItem("cp_user"); if (d) currentUser = JSON.parse(d); } catch(e) {}
  updateAuthUI();
}

function saveAuth(phone) {
  currentUser = { phone, role: "user", loginTime: new Date().toISOString() };
  localStorage.setItem("cp_user", JSON.stringify(currentUser));
  // Save customer to Firestore
  if (_useFirestore) {
    try {
      db.collection("customers").doc(phone).set({
        phone: phone,
        loginTime: new Date().toISOString(),
        loginCount: firebase.firestore.FieldValue.increment(1)
      }, { merge: true });
    } catch(e) {}
  }
  updateAuthUI();
}

function logoutUser() { currentUser = null; localStorage.removeItem("cp_user"); updateAuthUI(); showToast("👋 Logged out"); }

function updateAuthUI() {
  const btn = document.getElementById("loginBtn"), ind = document.getElementById("userIndicator"), ph = document.getElementById("userPhone"), av = document.getElementById("userAvatar");
  const adminBtn = document.getElementById("adminPanelBtn");
  if (!btn || !ind) return;
  if (currentUser) {
    btn.style.display = "none"; ind.classList.add("show");
    if (ph) {
      if (currentUser.role === "admin") ph.textContent = "👑 Admin";
      else ph.textContent = currentUser.phone;
    }
    if (av) {
      if (currentUser.role === "admin") av.textContent = "A";
      else av.textContent = currentUser.phone.slice(-2);
    }
    if (adminBtn) adminBtn.style.display = currentUser.role === "admin" ? "flex" : "none";
  } else {
    btn.style.display = "flex"; ind.classList.remove("show");
    if (adminBtn) adminBtn.style.display = "none";
  }
}

// ===== Admin Login (secret — double-click logo) =====
// --- Google Auth Config (fill in your values) ---
const GOOGLE_CLIENT_ID = "";  // TODO: paste your Google Client ID
const ADMIN_EMAILS = [""];    // TODO: add allowed admin emails, e.g. ["you@gmail.com"]

let _adminLoginModal = null;
function openAdminLogin() {
  // If no Google Client ID configured, fall back to password
  if (!GOOGLE_CLIENT_ID || !ADMIN_EMAILS[0]) {
    openAdminPasswordLogin();
    return;
  }
  // Show the admin login modal
  if (!_adminLoginModal) createAdminLoginModal();
  _adminLoginModal.classList.add("show");
}

function closeAdminLoginModal() {
  if (_adminLoginModal) _adminLoginModal.classList.remove("show");
}

function openAdminPasswordLogin() {
  const pwd = prompt("🔐 Admin Login\n\nEnter admin password:");
  if (pwd === null) return;
  if (pwd === ADMIN_PASSWORD) {
    loginAsAdmin("Admin");
  } else {
    showToast("❌ Incorrect password");
  }
}

function loginAsAdmin(name) {
  currentUser = { role: "admin", phone: name, loginTime: new Date().toISOString() };
  localStorage.setItem("cp_user", JSON.stringify(currentUser));
  updateAuthUI();
  showToast("👑 Admin logged in");
  closeAdminLoginModal();
  openAdminPanel();
}

function handleGoogleCredential(response) {
  try {
    const payload = JSON.parse(atob(response.credential.split(".")[1]));
    const email = payload.email;
    if (ADMIN_EMAILS.includes(email)) {
      loginAsAdmin(email);
    } else {
      showToast("❌ Not authorized: " + email);
    }
  } catch (e) {
    showToast("❌ Google auth failed");
  }
}

function createAdminLoginModal() {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay admin-login-overlay";
  overlay.innerHTML = `
    <div class="modal admin-login-modal">
      <button class="modal-close" onclick="closeAdminLoginModal()">✕</button>
      <div class="modal-icon">🔐</div>
      <h2>Admin Login</h2>
      <p>Sign in with your Google account to access the admin panel</p>
      <div id="googleSignInBtn" style="display:flex;justify-content:center;margin:20px 0;"></div>
      <div style="text-align:center;margin:12px 0;color:rgba(255,255,255,0.2);font-size:0.75rem;">or</div>
      <button class="btn btn-outline btn-block" onclick="closeAdminLoginModal();openAdminPasswordLogin();" style="font-size:0.8rem;">🔑 Use Password Instead</button>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeAdminLoginModal(); });
  _adminLoginModal = overlay;

  // Load Google Identity Services
  if (typeof google !== "undefined" && google.accounts) {
    renderGoogleBtn();
  } else {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.onload = renderGoogleBtn;
    document.head.appendChild(script);
  }
}

function renderGoogleBtn() {
  if (typeof google === "undefined" || !google.accounts || !GOOGLE_CLIENT_ID) return;
  const container = document.getElementById("googleSignInBtn");
  if (!container) return;
  container.innerHTML = "";
  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleGoogleCredential,
    auto_select: false
  });
  google.accounts.id.renderButton(container, {
    theme: "outline",
    size: "large",
    width: 280,
    text: "signin_with"
  });
}

// ===== Admin Panel =====
function openAdminPanel() {
  document.getElementById("adminOverlay").classList.add("show");
  document.body.style.overflow = "hidden";
  switchAdminTab("list");
}

function closeAdminPanel() {
  document.getElementById("adminOverlay").classList.remove("show");
  document.body.style.overflow = "";
}

function switchAdminTab(tab) {
  document.querySelectorAll(".admin-tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".admin-tab-content").forEach(c => c.classList.remove("active"));
  if (tab === "list") {
    document.querySelectorAll(".admin-tab")[0].classList.add("active");
    document.getElementById("adminTabList").classList.add("active");
    renderAdminLaptopList();
  } else if (tab === "mylistings") {
    document.querySelectorAll(".admin-tab")[1].classList.add("active");
    document.getElementById("adminTabMyListings").classList.add("active");
    renderAdminMyListings();
  } else if (tab === "deleted") {
    document.querySelectorAll(".admin-tab")[3].classList.add("active");
    document.getElementById("adminTabDeleted").classList.add("active");
    renderAdminDeletedList();
  } else if (tab === "inventory") {
    document.querySelectorAll(".admin-tab")[4].classList.add("active");
    document.getElementById("adminTabInventory").classList.add("active");
    renderAdminInventory();
  } else if (tab === "sales") {
    document.querySelectorAll(".admin-tab")[5].classList.add("active");
    document.getElementById("adminTabSales").classList.add("active");
    renderAdminSales();
  } else if (tab === "customers") {
    document.querySelectorAll(".admin-tab")[6].classList.add("active");
    document.getElementById("adminTabCustomers").classList.add("active");
    renderAdminCustomers();
  } else if (tab === "repairs") {
    document.querySelectorAll(".admin-tab")[7].classList.add("active");
    document.getElementById("adminTabRepairs").classList.add("active");
    renderAdminRepairs();
  } else {
    document.querySelectorAll(".admin-tab")[2].classList.add("active");
    document.getElementById("adminTabAdd").classList.add("active");
    resetAdminForm();
  }
}

function renderAdminInventory(filter) {
  const el = document.getElementById("adminTabInventory");
  if (!el) return;
  const items = laptops.filter(l => l.adminCreated);
  const totalUnits = items.reduce((s, l) => s + (l.units || 1), 0);
  const totalInvestment = items.reduce((s, l) => s + ((l.purchasePrice || 0) * (l.units || 1)), 0);
  const totalRevenue = items.reduce((s, l) => s + (l.price * (l.units || 1)), 0);
  const totalProfit = items.reduce((s, l) => s + ((l.price - (l.purchasePrice || 0)) * (l.units || 1)), 0);

  el.innerHTML = `
    <div class="inv-summary">
      <div class="inv-card" style="--ic:#2196f3;cursor:pointer" onclick="renderAdminInventory('listings')"><span class="inv-num">${items.length}</span><span class="inv-lbl">Listings</span></div>
      <div class="inv-card" style="--ic:#4caf50;cursor:pointer" onclick="renderAdminInventory('units')"><span class="inv-num">${totalUnits}</span><span class="inv-lbl">Total Units</span></div>
      <div class="inv-card" style="--ic:#ff9800"><span class="inv-num">₹${totalInvestment.toLocaleString()}</span><span class="inv-lbl">Total Investment</span></div>
      <div class="inv-card" style="--ic:#2196f3"><span class="inv-num">₹${totalRevenue.toLocaleString()}</span><span class="inv-lbl">Potential Revenue</span></div>
      <div class="inv-card" style="--ic:#4caf50"><span class="inv-num">₹${totalProfit.toLocaleString()}</span><span class="inv-lbl">Potential Profit</span></div>
    </div>
    ${filter === 'units' ? '<div style="font-size:0.7rem;color:#4caf50;margin-bottom:8px">🟢 Showing items with available units <a href="#" onclick="renderAdminInventory()" style="color:rgba(255,255,255,0.4)">Show all</a></div>' : ''}
    <div class="inv-list">${(filter === 'units' ? items.filter(l => (l.units || 1) > 0) : items).map(l => {
      const invest = (l.purchasePrice || 0) * (l.units || 1);
      const rev = l.price * (l.units || 1);
      const profit = (l.price - (l.purchasePrice || 0)) * (l.units || 1);
      const margin = l.price ? Math.round(((l.price - (l.purchasePrice || 0)) / l.price) * 100) : 0;
      const lowStock = (l.units || 1) <= 2;
      return `
        <div class="inv-row"${lowStock ? ' style="border-left:3px solid #ff5252"' : ''}>
          <div class="inv-r-info">
            <div class="inv-r-name">${l.brand} ${l.name}</div>
            <div class="inv-r-spec">${l.processor} · ${l.ram} · ${l.storage}</div>
          </div>
          <div class="inv-r-stats">
            <span class="inv-stat" style="${lowStock ? 'color:#ff5252;font-weight:700' : ''}">Units: ${l.units || 1}</span>
            <span class="inv-stat">Buy: ₹${(l.purchasePrice || 0).toLocaleString()}</span>
            <span class="inv-stat">Sell: ₹${l.price.toLocaleString()}</span>
            <span class="inv-stat">Invest: ₹${invest.toLocaleString()}</span>
            <span class="inv-stat">Rev: ₹${rev.toLocaleString()}</span>
            <span class="inv-stat" style="color:#4caf50;font-weight:600">Profit: ₹${profit.toLocaleString()}</span>
            <span class="inv-stat" style="color:${margin >= 30 ? '#4caf50' : margin >= 15 ? '#ff9800' : '#ff5252'}">Margin: ${margin}%</span>
          </div>
        </div>`;
    }).join('')}</div>`;
}

// ===== Sales Dashboard =====
function renderAdminSales(period) {
  const el = document.getElementById("adminTabSales");
  if (!el) return;
  let header = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
    <span style="font-size:0.7rem;color:rgba(255,255,255,0.4)">${orders.length} order(s)</span>
    <button class="btn btn-primary" onclick="showBillingModal()" style="padding:6px 14px;font-size:0.8rem">🧾 New Bill</button>
  </div>`;
  if (!orders.length) { el.innerHTML = header + '<div class="admin-empty">No sales yet. Orders appear here after checkout or billing.</div>'; return; }
  const now = new Date();
  const todayStr = now.toDateString();
  const weekStart = new Date(now); weekStart.setDate(now.getDate() - now.getDay());
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

  const totals = { today: 0, week: 0, month: 0, all: 0 };
  const counts = { today: 0, week: 0, month: 0, all: orders.length };

  orders.forEach(o => {
    const d = new Date(o.date);
    totals.all += o.finalTotal || o.total || 0;
    if (d >= monthStart) totals.month += o.finalTotal || o.total || 0;
    if (d >= weekStart) { totals.week += o.finalTotal || o.total || 0; counts.week++; }
    if (d.toDateString() === todayStr) { totals.today += o.finalTotal || o.total || 0; counts.today++; }
  });

  // Group by date for chart
  const dateMap = {};
  orders.forEach(o => {
    const key = new Date(o.date).toLocaleDateString();
    dateMap[key] = (dateMap[key] || 0) + (o.finalTotal || o.total || 0);
  });
  const chartDates = Object.keys(dateMap).slice(-14);
  const chartValues = chartDates.map(d => dateMap[d]);
  const maxVal = Math.max(...chartValues, 1);

  const barHtml = chartDates.map((d, i) => {
    const pct = (chartValues[i] / maxVal) * 100;
    return `<div style="display:flex;flex-direction:column;align-items:center;gap:2px;flex:1">
      <div style="font-size:0.55rem;color:rgba(255,255,255,0.3)">₹${(chartValues[i]/1000).toFixed(1)}k</div>
      <div style="width:100%;height:80px;display:flex;align-items:flex-end;justify-content:center">
        <div style="width:70%;background:linear-gradient(to top,#d4af37,#f6e27a);border-radius:3px 3px 0 0;height:${pct}%;transition:height 0.3s"></div>
      </div>
      <div style="font-size:0.5rem;color:rgba(255,255,255,0.2);transform:rotate(-45deg);white-space:nowrap">${d.slice(0,5)}</div>
    </div>`;
  }).join("");

  el.innerHTML = header + `
    <div class="inv-summary">
      <div class="inv-card" style="--ic:#4caf50;cursor:pointer" onclick="renderAdminSales('today')"><span class="inv-num">₹${totals.today.toLocaleString()}</span><span class="inv-lbl">Today (${counts.today})</span></div>
      <div class="inv-card" style="--ic:#2196f3;cursor:pointer" onclick="renderAdminSales('week')"><span class="inv-num">₹${totals.week.toLocaleString()}</span><span class="inv-lbl">This Week (${counts.week})</span></div>
      <div class="inv-card" style="--ic:#ff9800;cursor:pointer" onclick="renderAdminSales('month')"><span class="inv-num">₹${totals.month.toLocaleString()}</span><span class="inv-lbl">This Month</span></div>
      <div class="inv-card" style="--ic:#d4af37"><span class="inv-num">₹${totals.all.toLocaleString()}</span><span class="inv-lbl">All Time (${counts.all})</span></div>
    </div>
    <div style="font-size:0.7rem;color:rgba(255,255,255,0.4);margin-bottom:8px">📈 Sales (last 14 days)</div>
    <div style="display:flex;align-items:flex-end;gap:2px;padding:10px 0;min-height:120px">${barHtml}</div>
    <div style="margin-top:12px;font-size:0.6rem;color:rgba(255,255,255,0.2);text-align:right"><a href="#" onclick="exportSalesCSV();return false" style="color:rgba(255,255,255,0.4)">⬇ Export CSV</a></div>
    <div class="inv-list" style="margin-top:8px">${orders.slice().reverse().slice(0, period === 'today' ? 50 : 20).map(o => {
      const d = new Date(o.date);
      return `<div class="inv-row"><div class="inv-r-info"><div class="inv-r-name">${o.customer?.name || 'Guest'}</div><div class="inv-r-spec">${d.toLocaleDateString()} · ${o.items?.length || 0} items</div></div><div class="inv-r-stats"><span class="inv-stat">₹${(o.finalTotal || o.total || 0).toLocaleString()}</span></div></div>`;
    }).join("")}</div>`;
}

function exportSalesCSV() {
  if (!orders.length) { showToast("No orders to export"); return; }
  let csv = "Order ID,Date,Customer,Phone,Items,Total,Discount,Final\n";
  orders.forEach(o => {
    const items = (o.items || []).map(i => i.name).join("; ");
    csv += `${o.id},${o.date},"${o.customer?.name || 'Guest'}","${o.customer?.phone || ''}","${items}",${o.totalSell || 0},${o.coupon?.discount || 0},${o.finalTotal || 0}\n`;
  });
  downloadCSV(csv, "sales_export.csv");
}

function exportInventoryCSV() {
  const items = laptops.filter(l => l.adminCreated);
  let csv = "ID,Brand,Model,Processor,RAM,Storage,MRP,Selling Price,Purchase Price,Units\n";
  items.forEach(l => csv += `${l.id},${l.brand},${l.name},${l.processor},${l.ram},${l.storage},${l.mrp || ''},${l.price},${l.purchasePrice || 0},${l.units || 1}\n`);
  downloadCSV(csv, "inventory_export.csv");
}

function downloadCSV(csv, name) {
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name;
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(a.href);
}

// ===== Billing (Walk-in + WhatsApp/SMS) =====
function showBillingModal() {
  let existing = document.getElementById("billingModal");
  if (existing) existing.remove();
  const m = document.createElement("div"); m.id = "billingModal";
  Object.assign(m.style, { position: "fixed", inset: "0", zIndex: "99999", background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center" });
  const billItems = laptops.filter(l => (l.units || 1) > 0);
  m.innerHTML = `<div style="background:#1a1a1a;border-radius:12px;padding:24px;max-width:520px;width:90%;max-height:90vh;overflow:auto">
    <div style="font-size:0.9rem;font-weight:600;color:#fff;margin-bottom:12px">🧾 New Bill (Walk-in / Direct Sale)</div>
    <div style="font-size:0.65rem;color:rgba(255,255,255,0.4);margin-bottom:12px">Record a purchase and send invoice via WhatsApp + SMS to the buyer.</div>
    <input id="billCustomer" placeholder="Customer name *" style="width:100%;padding:8px;margin-bottom:8px;border:1px solid rgba(255,255,255,0.1);border-radius:6px;background:rgba(255,255,255,0.05);color:#fff;font-size:0.8rem">
    <input id="billPhone" placeholder="Phone number with country code (e.g. 919876543210) *" oninput="validateBillPhone(this)" style="width:100%;padding:8px;margin-bottom:4px;border:1px solid rgba(255,255,255,0.1);border-radius:6px;background:rgba(255,255,255,0.05);color:#fff;font-size:0.8rem">
    <div style="font-size:0.6rem;color:rgba(255,255,255,0.2);margin-bottom:12px">Phone is required for WhatsApp/SMS. Use format: 919916611010 (without +).</div>
    <div id="billItems"></div>
    <button onclick="addBillItemRow()" style="padding:6px 12px;border:1px solid rgba(255,255,255,0.1);border-radius:6px;background:transparent;color:rgba(255,255,255,0.5);cursor:pointer;font-size:0.75rem;margin-bottom:12px">➕ Add another item</button>
    <div id="billTotal" style="font-size:0.85rem;color:#d4af37;font-weight:700;margin-bottom:12px">Total: ₹0</div>
    <div style="display:flex;gap:8px;justify-content:flex-end">
      <button onclick="this.closest('#billingModal').remove()" style="padding:8px 16px;border:1px solid rgba(255,255,255,0.2);border-radius:6px;background:transparent;color:#fff;cursor:pointer;font-size:0.8rem">Cancel</button>
      <button onclick="generateBill()" style="padding:8px 16px;border:none;border-radius:6px;background:#4caf50;color:#fff;cursor:pointer;font-size:0.8rem">🧾 Generate Bill & Send</button>
    </div>
  </div>`;
  document.body.appendChild(m);
  m.addEventListener("click", e => { if (e.target === m) m.remove(); });
  addBillItemRow();
  updateBillTotal();
}

function validateBillPhone(input) {
  const val = input.value.replace(/[^0-9]/g, "");
  input.value = val;
  const ok = val.length >= 10 && val.length <= 15;
  input.style.borderColor = val.length === 0 ? "rgba(255,255,255,0.1)" : ok ? "rgba(76,175,80,0.5)" : "rgba(255,82,82,0.5)";
}

function billItemOptionsHTML() {
  const billItems = laptops.filter(l => (l.units || 1) > 0);
  return billItems.map(l => `<div class="bill-cs-option" data-value="${l.id}" onclick="selectBillItem(this)" style="padding:8px 12px;cursor:pointer;color:#fff;font-size:0.78rem;border-bottom:1px solid rgba(255,255,255,0.04);transition:background 0.15s" onmouseenter="this.style.background='rgba(255,255,255,0.08)'" onmouseleave="this.style.background='transparent'">${l.brand} ${l.name} — ₹${l.price.toLocaleString()} <span style="color:rgba(255,255,255,0.3);font-size:0.65rem">(${l.units || 1} left)</span></div>`).join("");
}

function addBillItemRow() {
  const container = document.getElementById("billItems");
  if (!container) return;
  const row = document.createElement("div");
  row.className = "bill-item-row";
  row.style.cssText = "display:flex;gap:6px;margin-bottom:6px;align-items:stretch";
  const selId = "bcs_" + Date.now() + "_" + Math.random().toString(36).slice(2,6);
  row.innerHTML = `<div class="bill-custom-select" id="${selId}" style="flex:2;position:relative;cursor:pointer">
      <div class="bill-cs-trigger" onclick="toggleBillDropdown('${selId}')" style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border:1px solid rgba(255,255,255,0.1);border-radius:6px;background:#222;color:rgba(255,255,255,0.3);font-size:0.8rem;height:100%;box-sizing:border-box;user-select:none">
        <span class="bill-cs-text">Select laptop...</span>
        <span style="font-size:0.6rem;color:rgba(255,255,255,0.3)">▼</span>
      </div>
      <div class="bill-cs-dropdown" style="display:none;position:absolute;top:100%;left:0;right:0;z-index:999;background:#1a1a1a;border:1px solid rgba(255,255,255,0.1);border-radius:6px;max-height:200px;overflow-y:auto;margin-top:2px;box-shadow:0 8px 32px rgba(0,0,0,0.5)">
        ${billItemOptionsHTML()}
      </div>
    </div>
    <input type="number" class="bill-item-qty" value="1" min="1" max="99" oninput="updateBillTotal()" style="width:60px;padding:8px;border:1px solid rgba(255,255,255,0.1);border-radius:6px;background:rgba(255,255,255,0.05);color:#fff;font-size:0.8rem;text-align:center">
    <button onclick="this.closest('.bill-item-row').remove();updateBillTotal()" style="padding:8px 10px;border:none;border-radius:6px;background:#ff5252;color:#fff;cursor:pointer;font-size:0.8rem">✕</button>`;
  container.appendChild(row);
}

function toggleBillDropdown(id) {
  // Close all other dropdowns first
  document.querySelectorAll(".bill-cs-dropdown").forEach(d => {
    if (d.closest(".bill-custom-select")?.id !== id) d.style.display = "none";
  });
  const dd = document.querySelector("#" + id + " .bill-cs-dropdown");
  if (dd) dd.style.display = dd.style.display === "none" ? "block" : "none";
}

function selectBillItem(el) {
  const cs = el.closest(".bill-custom-select");
  if (!cs) return;
  const trigger = cs.querySelector(".bill-cs-trigger");
  const text = cs.querySelector(".bill-cs-text");
  const dd = cs.querySelector(".bill-cs-dropdown");
  if (text) text.textContent = el.textContent.replace(/\(.*\)/, "").trim();
  if (text) text.style.color = "#fff";
  cs.dataset.value = el.dataset.value;
  if (dd) dd.style.display = "none";
  updateBillTotal();
}

// Close dropdowns when clicking outside
document.addEventListener("click", function(e) {
  if (!e.target.closest(".bill-custom-select")) {
    document.querySelectorAll(".bill-cs-dropdown").forEach(d => d.style.display = "none");
  }
});

function updateBillTotal() {
  const rows = document.querySelectorAll(".bill-item-row");
  let total = 0;
  rows.forEach(row => {
    const cs = row.querySelector(".bill-custom-select");
    const qty = parseInt(row.querySelector(".bill-item-qty")?.value) || 0;
    const lapId = cs ? parseInt(cs.dataset.value) : 0;
    const lap = laptops.find(l => l.id === lapId);
    if (lap && qty > 0) total += lap.price * qty;
  });
  const el = document.getElementById("billTotal");
  if (el) el.textContent = "Total: ₹" + total.toLocaleString();
}

function generateBill() {
  const customer = document.getElementById("billCustomer")?.value.trim();
  const phone = document.getElementById("billPhone")?.value.trim();
  if (!customer) { showToast("⚠️ Enter customer name"); return; }
  if (!phone) { showToast("⚠️ Enter phone number for WhatsApp/SMS"); return; }

  const rows = document.querySelectorAll(".bill-item-row");
  const selectedItems = [];
  rows.forEach(row => {
    const cs = row.querySelector(".bill-custom-select");
    const qty = parseInt(row.querySelector(".bill-item-qty")?.value) || 0;
    const lapId = cs ? parseInt(cs.dataset.value) : 0;
    const lap = laptops.find(l => l.id === lapId);
    if (lap && qty > 0) selectedItems.push({ lap, qty });
  });
  if (!selectedItems.length) { showToast("⚠️ Add at least one item"); return; }

  // Build message for WhatsApp
  let msg = "🧾 *Invoice - Computer Paradise*\n\n";
  msg += `*Customer:* ${customer}\n`;
  msg += `*Phone:* +${phone}\n\n`;
  msg += `*Items:*\n`;
  let totalMrp = 0, totalSell = 0;
  selectedItems.forEach(({ lap, qty }) => {
    const mrp = lap.mrp || Math.round(lap.price * 1.35);
    totalMrp += mrp * qty;
    totalSell += lap.price * qty;
    msg += `• ${lap.brand} ${lap.name} × ${qty}\n`;
    msg += `  MRP: ₹${(mrp * qty).toLocaleString()}  →  Pay: ₹${(lap.price * qty).toLocaleString()}\n`;
  });
  const savings = totalMrp - totalSell;
  msg += `\n*Total MRP: ₹${totalMrp.toLocaleString()}*\n`;
  msg += `You Save: -₹${savings.toLocaleString()}\n`;
  msg += `*Final Total: ₹${totalSell.toLocaleString()}*\n\n`;
  msg += `📍 *Computer Paradise*\n134, KT Street, Mysore\n📞 +91 99166 11010\n\n`;
  msg += `_Thank you for your purchase!_`;

  // Build SMS message (shorter)
  const smsMsg = `🧾 Computer Paradise - Invoice\nCustomer: ${customer}\nTotal: ₹${totalSell.toLocaleString()}\nThank you for your purchase!`;

  // Save order
  const order = {
    id: Date.now(),
    date: new Date().toISOString(),
    items: selectedItems.map(({ lap, qty }) => ({
      id: lap.id, name: lap.brand + " " + lap.name,
      price: lap.price, mrp: lap.mrp || Math.round(lap.price * 1.35), qty
    })),
    totalMrp, totalSell, savings, coupon: null,
    finalTotal: totalSell,
    customer: { phone, name: customer },
    paymentMethod: "walkin"
  };
  orders.push(order);
  persistOrders();

  // Reduce units
  selectedItems.forEach(({ lap, qty }) => {
    const l = laptops.find(x => x.id === lap.id);
    if (l) l.units = Math.max(0, (l.units || 1) - qty);
  });
  persistLaptops();
  if (document.getElementById("adminTabInventory")) renderAdminInventory();
  if (document.getElementById("laptopGrid")) renderLaptops(laptops);
  if (document.getElementById("sliderTrack")) renderLaptops(laptops, "sliderTrack");

  // Send WhatsApp
  window.open("https://wa.me/" + phone.replace(/[^0-9]/g, "") + "?text=" + encodeURIComponent(msg), "_blank");

  // Send SMS (opens default SMS app on mobile)
  const smsUrl = "sms:" + phone.replace(/[^0-9]/g, "") + "?body=" + encodeURIComponent(smsMsg);
  // Try sms: protocol - works on mobile
  const smsWindow = window.open(smsUrl);
  if (!smsWindow || smsWindow.closed) {
    // Fallback: some browsers block sms: protocol; show a toast
    showToast("📱 SMS app opened. If not, copy the message manually.");
  }

  document.getElementById("billingModal")?.remove();
  renderAdminSales();
  showToast("✅ Bill generated! WhatsApp + SMS sent to " + customer);
}

// ===== Customers =====
function renderAdminCustomers() {
  const el = document.getElementById("adminTabCustomers");
  if (!el) return;
  const list = getCustomers();
  if (!list.length) { el.innerHTML = '<div class="admin-empty">No customers yet.</div>'; return; }
  el.innerHTML = `<div style="font-size:0.7rem;color:rgba(255,255,255,0.4);margin-bottom:8px">👥 ${list.length} customer(s)</div>
    <div class="admin-list">${list.map(c => `
      <div class="admin-list-item" style="cursor:pointer" onclick="showCustomerOrders('${c.phone}')">
        <div class="admin-li-img" style="font-size:1.2rem">👤</div>
        <div class="admin-li-info"><div class="admin-li-name">${c.name}</div><div class="admin-li-spec">${c.phone}</div></div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px;margin-right:8px">
          <span style="font-size:0.85rem;font-weight:700;color:#d4af37">₹${c.total.toLocaleString()}</span>
          <span style="font-size:0.6rem;color:rgba(255,255,255,0.3)">${c.orders.length} order(s)</span>
        </div>
      </div>`).join("")}</div>`;
}

function showCustomerOrders(phone) {
  const list = getCustomers();
  const c = list.find(x => x.phone === phone);
  if (!c) return;
  let html = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
    <span style="font-size:0.9rem;font-weight:600">👤 ${c.name}</span>
    <span style="font-size:0.7rem;color:rgba(255,255,255,0.4)">${c.phone} · Total: ₹${c.total.toLocaleString()}</span>
    <button class="btn btn-outline" onclick="renderAdminCustomers()" style="padding:4px 10px;font-size:0.7rem">← Back</button>
  </div><div class="inv-list">${c.orders.map(o => {
    const d = new Date(o.date);
    return `<div class="inv-row"><div class="inv-r-info"><div class="inv-r-name">Order #${o.id}</div><div class="inv-r-spec">${d.toLocaleDateString()} · ${o.items?.length || 0} items</div></div><div class="inv-r-stats"><span class="inv-stat">₹${(o.finalTotal || o.total || 0).toLocaleString()}</span><button class="admin-li-btn edit" onclick="showInvoice(${o.id})" style="font-size:0.6rem">🧾 Invoice</button></div></div>`;
  }).join("")}</div>`;
  const el = document.getElementById("adminTabCustomers");
  if (el) el.innerHTML = html;
}

// ===== Invoice =====
function showInvoice(id) {
  const o = orders.find(x => x.id === id);
  if (!o) return;
  const d = new Date(o.date);
  let existing = document.getElementById("invoiceModal");
  if (existing) existing.remove();
  const m = document.createElement("div");
  m.id = "invoiceModal";
  Object.assign(m.style, { position: "fixed", inset: "0", zIndex: "99999", background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center" });
  const itemsHtml = (o.items || []).map(i => `<tr><td style="padding:4px 8px;font-size:0.75rem">${i.name} × ${i.qty}</td><td style="padding:4px 8px;text-align:right;font-size:0.75rem">₹${(i.mrp||i.price).toLocaleString()}</td><td style="padding:4px 8px;text-align:right;font-size:0.75rem">₹${(i.price * i.qty).toLocaleString()}</td></tr>`).join("");
  m.innerHTML = `<div style="background:#fff;border-radius:12px;padding:24px;max-width:400px;width:90%;max-height:90vh;overflow:auto">
    <div style="text-align:center;margin-bottom:16px"><div style="font-size:1rem;font-weight:700;color:#000">💻 Computer Paradise</div><div style="font-size:0.65rem;color:#999">134, KT Street, Mysore · +91 99166 11010</div></div>
    <div style="display:flex;justify-content:space-between;font-size:0.7rem;color:#666;margin-bottom:12px"><span>Order #${o.id}</span><span>${d.toLocaleDateString()}</span></div>
    <div style="font-size:0.7rem;color:#666;margin-bottom:12px">Customer: ${o.customer?.name || 'Guest'} · ${o.customer?.phone || ''}</div>
    <table style="width:100%;border-collapse:collapse">${itemsHtml}</table>
    <hr style="border:none;border-top:1px solid #ddd;margin:8px 0"><div style="display:flex;justify-content:space-between;font-size:0.75rem;color:#000"><span>Total MRP</span><span>₹${(o.totalMrp||0).toLocaleString()}</span></div>
    <div style="display:flex;justify-content:space-between;font-size:0.75rem;color:#e53935"><span>You Save</span><span>-₹${(o.savings||0).toLocaleString()}</span></div>
    ${o.coupon ? `<div style="display:flex;justify-content:space-between;font-size:0.75rem;color:#e53935"><span>Coupon (${o.coupon.code})</span><span>-₹${o.coupon.discount}</span></div>` : ''}
    <div style="display:flex;justify-content:space-between;font-size:0.9rem;font-weight:700;color:#000;margin-top:4px"><span>Final Total</span><span>₹${(o.finalTotal||0).toLocaleString()}</span></div>
    <div style="text-align:center;margin-top:16px"><button onclick="window.print()" style="padding:8px 24px;border:none;border-radius:8px;background:#000;color:#fff;cursor:pointer;font-size:0.8rem">🖨 Print</button><button onclick="this.closest('#invoiceModal').remove()" style="margin-left:8px;padding:8px 24px;border:1px solid #ccc;border-radius:8px;background:#fff;color:#000;cursor:pointer;font-size:0.8rem">Close</button></div>
  </div>`;
  document.body.appendChild(m);
  m.addEventListener("click", e => { if (e.target === m) m.remove(); });
}

// ===== Repairs =====
function renderAdminRepairs() {
  const el = document.getElementById("adminTabRepairs");
  if (!el) return;
  let html = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
    <span style="font-size:0.7rem;color:rgba(255,255,255,0.4)">${repairs.length} repair request(s)</span>
    <button class="btn btn-primary" onclick="showAddRepair()" style="padding:6px 14px;font-size:0.8rem">➕ New Repair</button>
  </div>`;
  if (!repairs.length) { html += '<div class="admin-empty">No repair requests yet.</div>'; }
  else {
    const statusColors = { pending: "#ff9800", "in-progress": "#2196f3", completed: "#4caf50", delivered: "#9e9e9e" };
    html += `<div class="inv-list">${repairs.slice().reverse().map(r => {
      const sc = statusColors[r.status] || "#999";
      return `<div class="inv-row"><div class="inv-r-info"><div class="inv-r-name">${r.customer} · ${r.device}</div><div class="inv-r-spec">${r.issue?.slice(0,60)} · ${new Date(r.date).toLocaleDateString()}</div></div><div class="inv-r-stats"><span class="inv-stat" style="color:${sc};font-weight:600">${r.status}</span><button class="admin-li-btn edit" onclick="updateRepairStatus(${r.id})" style="font-size:0.6rem">Update</button></div></div>`;
    }).join("")}</div>`;
  }
  el.innerHTML = html;
}

function showAddRepair() {
  const m = document.createElement("div");
  Object.assign(m.style, { position: "fixed", inset: "0", zIndex: "99999", background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center" });
  m.innerHTML = `<div style="background:#1a1a1a;border-radius:12px;padding:24px;max-width:380px;width:90%">
    <div style="font-size:0.9rem;font-weight:600;color:#fff;margin-bottom:12px">🔧 New Repair Request</div>
    <input id="repCustomer" placeholder="Customer name" style="width:100%;padding:8px;margin-bottom:8px;border:1px solid rgba(255,255,255,0.1);border-radius:6px;background:rgba(255,255,255,0.05);color:#fff;font-size:0.8rem">
    <input id="repPhone" placeholder="Phone" style="width:100%;padding:8px;margin-bottom:8px;border:1px solid rgba(255,255,255,0.1);border-radius:6px;background:rgba(255,255,255,0.05);color:#fff;font-size:0.8rem">
    <input id="repDevice" placeholder="Device (e.g. Dell Inspiron 15)" style="width:100%;padding:8px;margin-bottom:8px;border:1px solid rgba(255,255,255,0.1);border-radius:6px;background:rgba(255,255,255,0.05);color:#fff;font-size:0.8rem">
    <textarea id="repIssue" placeholder="Describe the issue" rows="3" style="width:100%;padding:8px;margin-bottom:12px;border:1px solid rgba(255,255,255,0.1);border-radius:6px;background:rgba(255,255,255,0.05);color:#fff;font-size:0.8rem;resize:vertical"></textarea>
    <div style="display:flex;gap:8px;justify-content:flex-end">
      <button onclick="this.closest('div[style]').remove()" style="padding:8px 16px;border:1px solid rgba(255,255,255,0.2);border-radius:6px;background:transparent;color:#fff;cursor:pointer;font-size:0.8rem">Cancel</button>
      <button onclick="saveRepair(this)" style="padding:8px 16px;border:none;border-radius:6px;background:#4caf50;color:#fff;cursor:pointer;font-size:0.8rem">💾 Save</button>
    </div>
  </div>`;
  document.body.appendChild(m);
}

function saveRepair(btn) {
  const customer = document.getElementById("repCustomer")?.value.trim();
  const phone = document.getElementById("repPhone")?.value.trim();
  const device = document.getElementById("repDevice")?.value.trim();
  const issue = document.getElementById("repIssue")?.value.trim();
  if (!customer || !device) { showToast("⚠️ Customer & Device required"); return; }
  repairs.push({ id: Date.now(), date: new Date().toISOString(), customer, phone, device, issue, status: "pending" });
  persistRepairs();
  btn.closest("div[style]").remove();
  renderAdminRepairs();
  showToast("✅ Repair request added");
}

function updateRepairStatus(id) {
  const r = repairs.find(x => x.id === id);
  if (!r) return;
  const statuses = ["pending", "in-progress", "completed", "delivered"];
  const idx = statuses.indexOf(r.status);
  r.status = statuses[(idx + 1) % statuses.length];
  persistRepairs();
  renderAdminRepairs();
  showToast("🔧 Status: " + r.status);
}

function laptopScanCode(id) { return "CP" + String(id).padStart(6, "0"); }

function showQRCode(id) {
  const code = laptopScanCode(id);
  const url = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, "/") + "detail.html?id=" + id;
  let existing = document.getElementById("qrModal");
  if (existing) existing.remove();
  const m = document.createElement("div");
  m.id = "qrModal";
  Object.assign(m.style, {
    position: "fixed", inset: "0", zIndex: "99999",
    background: "rgba(0,0,0,0.7)", display: "flex",
    alignItems: "center", justifyContent: "center"
  });
  m.innerHTML = `<div style="background:#fff;border-radius:16px;padding:30px;text-align:center;max-width:340px">
    <div style="font-size:1.2rem;font-weight:700;color:#000;margin-bottom:4px">📦 ${code}</div>
    <div style="font-size:0.7rem;color:#999;margin-bottom:12px">Scan with phone camera to open listing</div>
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(url)}" alt="QR Code" style="width:220px;height:220px;border-radius:8px;background:#fff">
    <div style="font-size:0.75rem;color:#999;margin-top:10px;word-break:break-all">${code}</div>
    <button onclick="this.closest('#qrModal').remove()" style="margin-top:16px;padding:8px 24px;border:none;border-radius:8px;background:#000;color:#fff;cursor:pointer;font-size:0.85rem">Close</button>
    <button onclick="window.print()" style="margin-top:16px;margin-left:8px;padding:8px 24px;border:1px solid #ccc;border-radius:8px;background:#fff;color:#000;cursor:pointer;font-size:0.85rem">🖨 Print</button>
  </div>`;
  document.body.appendChild(m);
  m.addEventListener("click", e => { if (e.target === m) m.remove(); });
}

function adminListItemHTML(l, extraActions, itemStyle) {
  const imgHtml = l.images.length ? `<img src="${l.images[0]}" alt="">` : "💻";
  const deviceIcons = { laptop: "💻", desktop: "🖥️", tablet: "📱", other: "📦" };
  const devIcon = deviceIcons[l.deviceType] || "💻";
  const genTag = l.gen ? `${l.gen} · ` : "";
  const screenTag = l.screenSize ? `${l.screenSize}" · ` : "";
  return `
    <div class="admin-list-item"${itemStyle ? ` style="${itemStyle}"` : ''}>
      <div class="admin-li-img">${imgHtml}</div>
      <div class="admin-li-info">
        <div class="admin-li-name">${devIcon} ${l.brand} ${l.name}</div>
        <div class="admin-li-spec">${genTag}${l.processor} · ${l.ram} · ${l.storage}${screenTag ? ` · ${screenTag}` : ''}${l.condition}</div>
        ${l.specialSpec ? `<div class="admin-li-spec" style="color:rgba(255,255,255,0.35)">✨ ${l.specialSpec}</div>` : ''}
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:1px;margin-right:8px;font-size:0.65rem;line-height:1.3">
        <span style="color:rgba(255,255,255,0.3)"><del>₹${(l.mrp || Math.round(l.price*1.35)).toLocaleString()}</del></span>
        <span style="color:#d4af37;font-weight:700;font-size:0.85rem">₹${l.price.toLocaleString()}</span>
        <span style="color:rgba(255,255,255,0.2)">Buy: ₹${(l.purchasePrice || 0).toLocaleString()}</span>
        <span style="color:rgba(255,255,255,0.4)">Units: ${l.units || 1}</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;margin-right:8px">
        <span class="admin-li-badge" onclick="toggleFeatured(${l.id})" style="cursor:pointer;font-size:0.85rem" title="Click to toggle featured">${l.featured ? "⭐" : "☆"}</span>
        <span style="font-size:0.55rem;color:rgba(255,255,255,0.15)">${l.priority || 0}</span>
      </div>
      <div class="admin-li-actions">
        <button class="admin-li-btn" onclick="showQRCode(${l.id})" title="Scan Code" style="background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.5)">📱</button>
        ${extraActions || `<button class="admin-li-btn edit" onclick="editAdminLaptop(${l.id})">✏️</button>
        <button class="admin-li-btn del" onclick="deleteAdminLaptop(${l.id})">🗑</button>`}
      </div>
    </div>`;
}

function renderAdminLaptopList() {
  const el = document.getElementById("adminTabList");
  if (!el) return;
  if (!laptops.length) {
    el.innerHTML = '<div class="admin-empty">No laptops yet. Click "Add New" to create one.</div>';
    return;
  }
  el.innerHTML = '<div class="admin-list">' + laptops.map(l => adminListItemHTML(l)).join("") + '</div>';
}

function toggleFeatured(id) {
  const l = laptops.find(x => x.id === id);
  if (!l) return;
  l.featured = !l.featured;
  persistLaptops();
  if (document.getElementById("adminTabList")) renderAdminLaptopList();
  if (document.getElementById("adminTabMyListings")) renderAdminMyListings(); if (document.getElementById("adminTabInventory")) renderAdminInventory();
  
  if (document.getElementById("laptopGrid")) renderLaptops(laptops);
  if (document.getElementById("sliderTrack")) renderLaptops(laptops, "sliderTrack");
  showToast(l.featured ? "⭐ Featured on" : "☆ Featured off");
}

function renderAdminMyListings() {
  const el = document.getElementById("adminTabMyListings");
  if (!el) return;
  const myListings = laptops.filter(l => l.adminCreated);
  const header = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><span style="font-size:0.85rem;color:rgba(255,255,255,0.5)">' + myListings.length + ' listing(s)</span><button class="btn btn-primary" onclick="switchAdminTab(\'add\')" style="padding:6px 14px;font-size:0.8rem">➕ Add New</button></div>';
  if (!myListings.length) {
    el.innerHTML = header + '<div class="admin-empty">You haven\'t created any listings yet.</div>';
    return;
  }
  el.innerHTML = header + '<div class="admin-list">' + myListings.map(l => adminListItemHTML(l)).join("") + '</div>';
}

function renderAdminDeletedList() {
  const el = document.getElementById("adminTabDeleted");
  if (!el) return;
  const header = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><span style="font-size:0.85rem;color:rgba(255,255,255,0.5)">' + deletedLaptops.length + ' archived</span></div>';
  if (!deletedLaptops.length) {
    el.innerHTML = header + '<div class="admin-empty">No archived listings. Deleted items appear here so you can relist them.</div>';
    return;
  }
  el.innerHTML = header + '<div class="admin-list">' + deletedLaptops.map(l => {
    const actions = `<button class="admin-li-btn edit" onclick="relistLaptop(${l.id})" title="Relist" style="background:rgba(0,200,83,0.2);border-color:rgba(0,200,83,0.4)">↩️ Relist</button>
    <button class="admin-li-btn del" onclick="permaDeleteLaptop(${l.id})" title="Permanently delete">🗑</button>`;
    return adminListItemHTML(l, actions, "opacity:0.6");
  }).join("") + '</div>';
}

function relistLaptop(id) {
  const idx = deletedLaptops.findIndex(l => l.id === id);
  if (idx === -1) return;
  const item = deletedLaptops.splice(idx, 1)[0];
  laptops.push(item);
  if (_useFirestore) {
    db.collection("laptops").doc(String(item.id)).set(item).catch(function(e) { console.error("Firestore set failed:", e); });
    db.collection("deleted_laptops").doc(String(item.id)).delete().catch(function(e) { console.error("Firestore delete failed:", e); });
  }
  try { localStorage.setItem("cp_laptops_data", JSON.stringify(laptops)); } catch(e) {}
  try { localStorage.setItem("cp_deleted_laptops", JSON.stringify(deletedLaptops)); } catch(e) {}
  renderAdminDeletedList();
  renderAdminLaptopList();
  if (document.getElementById("adminTabMyListings")) renderAdminMyListings(); if (document.getElementById("adminTabInventory")) renderAdminInventory();
  
  if (document.getElementById("laptopGrid")) renderLaptops(laptops);
  if (document.getElementById("sliderTrack")) renderLaptops(laptops, "sliderTrack");
  showToast("↩️ Relisted " + item.name);
}

function permaDeleteLaptop(id) {
  if (!confirm("Permanently delete this archived listing? This cannot be undone.")) return;
  const idx = deletedLaptops.findIndex(l => l.id === id);
  if (idx === -1) return;
  deletedLaptops.splice(idx, 1);
  if (_useFirestore) {
    db.collection("deleted_laptops").doc(String(id)).delete().catch(function(e) { console.error("Firestore delete failed:", e); });
  }
  try { localStorage.setItem("cp_deleted_laptops", JSON.stringify(deletedLaptops)); } catch(e) {}
  renderAdminDeletedList();
  showToast("🗑 Permanently deleted");
}

function resetAdminForm() {
  document.getElementById("afId").value = "";
  document.getElementById("afBrand").value = "";
  document.getElementById("afName").value = "";
  document.getElementById("afScreen").value = "";
  document.getElementById("afGen").value = "";
  document.getElementById("afRam").value = "";
  document.getElementById("afStorage").value = "";
  document.getElementById("afProcessor").value = "";
  document.getElementById("afMrp").value = "";
  document.getElementById("afPrice").value = "";
  document.getElementById("afPurchasePrice").value = "";
  document.getElementById("afUnits").value = "1";
  document.getElementById("afOs").value = "windows";
  document.getElementById("afDeviceType").value = "laptop";
  document.getElementById("afCondition").value = "A";
  document.getElementById("afBadge").value = "";
  document.getElementById("afSpecialSpec").value = "";
  document.getElementById("afFeatured").checked = false;
  document.getElementById("afPriority").value = "0";
  document.getElementById("afPhotos").value = "";
  document.getElementById("afPhotoCount").textContent = "";
  const subBtn = document.querySelector("#adminForm .btn-primary");
  if (subBtn) subBtn.textContent = "💾 Save Laptop";
}

function editAdminLaptop(id) {
  const l = laptops.find(x => x.id === id);
  if (!l) return;
  document.getElementById("afId").value = l.id;
  document.getElementById("afBrand").value = l.brand;
  document.getElementById("afName").value = l.name;
  document.getElementById("afScreen").value = l.screenSize || "";
  document.getElementById("afGen").value = l.gen || "";
  document.getElementById("afRam").value = l.ram;
  document.getElementById("afStorage").value = l.storage;
  document.getElementById("afProcessor").value = l.processor;
  document.getElementById("afMrp").value = l.mrp || Math.round(l.price * 1.35);
  document.getElementById("afPrice").value = l.price;
  document.getElementById("afPurchasePrice").value = l.purchasePrice || "";
  document.getElementById("afUnits").value = l.units || 1;
  document.getElementById("afOs").value = l.os;
  document.getElementById("afDeviceType").value = l.deviceType || "laptop";
  document.getElementById("afCondition").value = l.condition;
  document.getElementById("afBadge").value = l.badge || "";
  document.getElementById("afSpecialSpec").value = l.specialSpec || "";
  document.getElementById("afFeatured").checked = l.featured || false;
  document.getElementById("afPriority").value = l.priority || 0;
  document.getElementById("afPhotoCount").textContent = `${l.images.length} current photo(s)`;
  const subBtn = document.querySelector("#adminForm .btn-primary");
  if (subBtn) subBtn.textContent = "✏️ Update Laptop";
  switchAdminTab("add");
}

function saveAdminLaptop(e) {
  e.preventDefault();
  const id = parseInt(document.getElementById("afId").value) || 0;
  const brand = document.getElementById("afBrand").value;
  const name = document.getElementById("afName").value.trim();
  const screenSize = document.getElementById("afScreen").value;
  const gen = document.getElementById("afGen").value;
  const ram = document.getElementById("afRam").value;
  const storage = document.getElementById("afStorage").value;
  const processor = document.getElementById("afProcessor").value;
  const mrp = parseInt(document.getElementById("afMrp").value) || 0;
  const price = parseInt(document.getElementById("afPrice").value) || 0;
  const purchasePrice = parseInt(document.getElementById("afPurchasePrice").value) || 0;
  const units = parseInt(document.getElementById("afUnits").value) || 1;
  const os = document.getElementById("afOs").value;
  const deviceType = document.getElementById("afDeviceType").value;
  const condition = document.getElementById("afCondition").value;
  const badge = document.getElementById("afBadge").value;
  const specialSpec = document.getElementById("afSpecialSpec").value.trim();
  const featured = document.getElementById("afFeatured").checked;
  const priority = parseInt(document.getElementById("afPriority").value) || 0;
  const photoFiles = document.getElementById("afPhotos").files;

  if (!brand || !name || !ram || !storage || !processor || !mrp || !price) { showToast("⚠️ Please fill all required fields"); return; }

  // Read photos as data URLs
  const loadPhotos = () => {
    return new Promise(resolve => {
      if (!photoFiles.length) { resolve([]); return; }
      const readers = [];
      Array.from(photoFiles).forEach(f => {
        const r = new FileReader();
        readers.push(new Promise(res => { r.onload = ev => res(ev.target.result); r.readAsDataURL(f); }));
      });
      Promise.all(readers).then(resolve);
    });
  };

  loadPhotos().then(photos => {
    if (id && laptops.find(x => x.id === id)) {
      // Edit existing
      const l = laptops.find(x => x.id === id);
      l.brand = brand; l.name = name; l.ram = ram; l.storage = storage;
      l.processor = processor; l.mrp = mrp; l.price = price; l.purchasePrice = purchasePrice; l.units = units;
      l.screenSize = screenSize; l.gen = gen; l.specialSpec = specialSpec;
      l.os = os;
      l.deviceType = deviceType; l.condition = condition; l.badge = badge;
      l.featured = featured; l.priority = priority;
      if (photos.length) l.images = photos;
      showToast("✅ Laptop updated");
    } else {
      // Add new
      const maxId = laptops.reduce((m, x) => Math.max(m, x.id), 0);
      laptops.push({
        id: maxId + 1,
        brand, name, ram, storage, processor, os, condition, price, badge: badge || "",
        mrp, purchasePrice, units, screenSize, gen, specialSpec,
        deviceType, featured, priority, adminCreated: true,
        images: photos.length ? photos : []
      });
      showToast("✅ Laptop added");
    }
    persistLaptops();
    resetAdminForm();
    renderAdminLaptopList();
    if (document.getElementById("adminTabMyListings")) renderAdminMyListings(); if (document.getElementById("adminTabInventory")) renderAdminInventory();
    
    // Re-render main grid if on buy page
    if (document.getElementById("laptopGrid")) renderLaptops(laptops);
    if (document.getElementById("sliderTrack")) renderLaptops(laptops, "sliderTrack");
  });
  return false;
}

function showBulkImport() {
  let existing = document.getElementById("bulkImportModal");
  if (existing) existing.remove();
  const m = document.createElement("div"); m.id = "bulkImportModal";
  Object.assign(m.style, { position: "fixed", inset: "0", zIndex: "99999", background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center" });
  m.innerHTML = `<div style="background:#1a1a1a;border-radius:12px;padding:24px;max-width:480px;width:90%;max-height:90vh;overflow:auto">
    <div style="font-size:0.9rem;font-weight:600;color:#fff;margin-bottom:8px">📥 Bulk Import Laptops</div>
    <div style="font-size:0.65rem;color:rgba(255,255,255,0.4);margin-bottom:12px">Upload a CSV file with columns: brand,name,processor,ram,storage,mrp,price,purchasePrice,units,os,deviceType,condition. First row must be headers.</div>
    <input type="file" id="bulkCsvFile" accept=".csv" style="width:100%;padding:8px;margin-bottom:12px;color:#fff;font-size:0.8rem">
    <div style="font-size:0.6rem;color:rgba(255,255,255,0.2);margin-bottom:12px"><a href="#" onclick="downloadBulkSample();return false" style="color:rgba(255,255,255,0.4)">⬇ Download sample CSV</a></div>
    <div style="display:flex;gap:8px;justify-content:flex-end">
      <button onclick="this.closest('#bulkImportModal').remove()" style="padding:8px 16px;border:1px solid rgba(255,255,255,0.2);border-radius:6px;background:transparent;color:#fff;cursor:pointer;font-size:0.8rem">Cancel</button>
      <button onclick="processBulkImport()" style="padding:8px 16px;border:none;border-radius:6px;background:#4caf50;color:#fff;cursor:pointer;font-size:0.8rem">📥 Import</button>
    </div>
  </div>`;
  document.body.appendChild(m);
  m.addEventListener("click", e => { if (e.target === m) m.remove(); });
}

function downloadBulkSample() {
  const csv = "brand,name,processor,ram,storage,mrp,price,purchasePrice,units,os,deviceType,condition\nDell,Inspiron 15,i5,8GB,512GB,60000,45000,38000,1,Windows 11,laptop,A\nHP,Pavilion,Ryzen 7,16GB,1TB,75000,55000,42000,1,Windows 11,laptop,A+\nLenovo,IdeaPad 3,i3,4GB,256GB,35000,25000,20000,1,Windows 11,laptop,B+";
  downloadCSV(csv, "bulk_import_sample.csv");
}

function processBulkImport() {
  const fileInput = document.getElementById("bulkCsvFile");
  if (!fileInput || !fileInput.files.length) { showToast("⚠️ Select a CSV file"); return; }
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    const text = e.target.result;
    const lines = text.split("\n").map(l => l.trim()).filter(l => l);
    if (lines.length < 2) { showToast("⚠️ CSV must have header + at least 1 row"); return; }
    const headers = lines[0].split(",").map(h => h.trim().toLowerCase());
    const required = ["brand","name","processor","ram","storage","price"];
    const missing = required.filter(r => !headers.includes(r));
    if (missing.length) { showToast("⚠️ Missing columns: " + missing.join(", ")); return; }

    let added = 0, errors = 0;
    const maxId = laptops.reduce((m, x) => Math.max(m, x.id), 0);
    const rowMap = { brand:0, name:0, processor:0, ram:0, storage:0, mrp:0, price:0, purchasePrice:0, units:0, os:0, deviceType:0, condition:0 };
    headers.forEach((h, i) => { if (h in rowMap) rowMap[h] = i; });

    for (let i = 1; i < lines.length; i++) {
      const cols = lines[i].split(",").map(c => c.trim());
      const brand = cols[rowMap.brand] || "";
      const name = cols[rowMap.name] || "";
      const processor = cols[rowMap.processor] || "";
      const ram = cols[rowMap.ram] || "";
      const storage = cols[rowMap.storage] || "";
      const mrp = parseInt(cols[rowMap.mrp]) || 0;
      const price = parseInt(cols[rowMap.price]) || 0;
      const purchasePrice = parseInt(cols[rowMap.purchasePrice]) || 0;
      const units = parseInt(cols[rowMap.units]) || 1;
      const os = cols[rowMap.os] || "Windows 11";
      const deviceType = cols[rowMap.deviceType] || "laptop";
      const condition = cols[rowMap.condition] || "A";
      if (!brand || !name || !ram || !storage || !processor || !price) { errors++; continue; }
      laptops.push({
        id: maxId + 1 + added,
        brand, name, processor, ram, storage, mrp, price, purchasePrice, units,
        os, deviceType, condition, badge: "",
        screenSize: "", gen: "", specialSpec: "",
        featured: false, priority: 0, adminCreated: true,
        images: []
      });
      added++;
    }
    persistLaptops();
    const modal = document.getElementById("bulkImportModal");
    if (modal) modal.remove();
    showToast(`✅ Imported ${added} laptop(s)` + (errors ? `, ${errors} skipped` : ""));
    renderAdminLaptopList();
    if (document.getElementById("adminTabMyListings")) renderAdminMyListings();
    if (document.getElementById("adminTabInventory")) renderAdminInventory();
    if (document.getElementById("laptopGrid")) renderLaptops(laptops);
    if (document.getElementById("sliderTrack")) renderLaptops(laptops, "sliderTrack");
  };
  reader.readAsText(file);
}

function deleteAdminLaptop(id) {
  if (!confirm("Move this listing to deleted archive? You can relist it later.")) return;
  const idx = laptops.findIndex(l => l.id === id);
  if (idx === -1) return;
  const deleted = laptops.splice(idx, 1)[0];
  deletedLaptops.push(deleted);
  // Firestore: delete from laptops, add to deleted_laptops
  if (_useFirestore) {
    db.collection("laptops").doc(String(id)).delete().then(function() {
      db.collection("deleted_laptops").doc(String(id)).set(deleted);
    }).catch(function(e) { console.error("Firestore delete failed:", e); });
  }
  try { localStorage.setItem("cp_laptops_data", JSON.stringify(laptops)); } catch(e) {}
  persistDeletedLaptops();
  renderAdminLaptopList();
  if (document.getElementById("adminTabMyListings")) renderAdminMyListings(); if (document.getElementById("adminTabInventory")) renderAdminInventory();
  
  if (document.getElementById("adminTabDeleted")) renderAdminDeletedList();
  if (document.getElementById("laptopGrid")) renderLaptops(laptops);
  if (document.getElementById("sliderTrack")) renderLaptops(laptops, "sliderTrack");
  showToast("🗑 Moved to deleted archive");
}

// ===== Admin Coupon Management =====
function renderAdminCouponList() {
  const el = document.getElementById("adminTabCoupons");
  if (!el) return;
  const list = adminCoupons.map((c, i) => `
    <div class="admin-list-item">
      <div class="admin-li-info" style="flex:1">
        <div class="admin-li-name" style="letter-spacing:1px">${c.code}</div>
        <div class="admin-li-spec">${c.label} · ${c.type === "percent" ? c.value + "%" : "₹" + c.value}${c.minCart ? " · Min ₹" + c.minCart.toLocaleString() : ""}</div>
      </div>
      <div class="admin-li-actions">
        <button class="admin-li-btn edit" onclick="editAdminCoupon(${i})">✏️</button>
        <button class="admin-li-btn del" onclick="deleteAdminCoupon(${i})">🗑</button>
      </div>
    </div>
  `).join("") || '<div class="admin-empty">No custom coupons yet. Add one below.</div>';

  const formHtml = `
    <div style="margin-top:16px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.06)">
      <h4 style="font-size:0.85rem;margin-bottom:10px;color:rgba(255,255,255,0.6)" id="couponFormTitle">➕ Add New Coupon</h4>
      <form id="adminCouponForm" onsubmit="return saveAdminCoupon(event)" style="display:flex;flex-direction:column;gap:10px">
        <input type="hidden" id="acIdx" value="-1">
        <div class="af-row">
          <div class="af-group"><label>Code</label><input type="text" id="acCode" required placeholder="e.g. MYS50" style="text-transform:uppercase;letter-spacing:1px;font-weight:700"></div>
          <div class="af-group"><label>Type</label>
            <select id="acType">
              <option value="percent">Percentage (%)</option>
              <option value="flat">Flat (₹)</option>
            </select>
          </div>
        </div>
        <div class="af-row">
          <div class="af-group"><label>Value</label><input type="number" id="acValue" required placeholder="e.g. 50 for 50% or 500 for ₹500"></div>
          <div class="af-group"><label>Min Cart (₹)</label><input type="number" id="acMinCart" placeholder="0 = no minimum" value="0"></div>
        </div>
        <div class="af-group"><label>Label</label><input type="text" id="acLabel" required placeholder="e.g. 50% Off"></div>
        <div class="af-btns">
          <button type="submit" class="btn btn-primary" id="acSubmitBtn">💾 Save Coupon</button>
          <button type="button" class="btn btn-outline" onclick="resetAdminCouponForm()">↺ Reset</button>
        </div>
      </form>
    </div>
  `;

  el.innerHTML = '<div class="admin-list">' + list + '</div>' + formHtml;
}

function resetAdminCouponForm() {
  document.getElementById("acIdx").value = "-1";
  document.getElementById("acCode").value = "";
  document.getElementById("acType").value = "percent";
  document.getElementById("acValue").value = "";
  document.getElementById("acMinCart").value = "0";
  document.getElementById("acLabel").value = "";
  const btn = document.getElementById("acSubmitBtn");
  if (btn) btn.textContent = "💾 Save Coupon";
  const title = document.getElementById("couponFormTitle");
  if (title) title.textContent = "➕ Add New Coupon";
}

function editAdminCoupon(idx) {
  const c = adminCoupons[idx];
  if (!c) return;
  document.getElementById("acIdx").value = idx;
  document.getElementById("acCode").value = c.code;
  document.getElementById("acType").value = c.type;
  document.getElementById("acValue").value = c.value;
  document.getElementById("acMinCart").value = c.minCart || 0;
  document.getElementById("acLabel").value = c.label;
  const btn = document.getElementById("acSubmitBtn");
  if (btn) btn.textContent = "✏️ Update Coupon";
  const title = document.getElementById("couponFormTitle");
  if (title) title.textContent = "✏️ Edit Coupon";
}

function saveAdminCoupon(e) {
  e.preventDefault();
  const idx = parseInt(document.getElementById("acIdx").value);
  const code = document.getElementById("acCode").value.trim().toUpperCase();
  const type = document.getElementById("acType").value;
  const value = parseInt(document.getElementById("acValue").value) || 0;
  const minCart = parseInt(document.getElementById("acMinCart").value) || 0;
  const label = document.getElementById("acLabel").value.trim();

  if (!code || !value || !label) { showToast("⚠️ Fill all fields"); return false; }

  const coupon = { code, type, value, label, minCart };

  if (idx >= 0 && idx < adminCoupons.length) {
    adminCoupons[idx] = coupon;
    showToast("✅ Coupon updated");
  } else {
    // Check duplicate
    if (adminCoupons.find(c => c.code === code)) {
      showToast("❌ Coupon code already exists");
      return false;
    }
    adminCoupons.push(coupon);
    showToast("✅ Coupon added");
  }

  persistAdminCoupons();
  resetAdminCouponForm();
  renderAdminCouponList();
  return false;
}

function deleteAdminCoupon(idx) {
  if (!confirm("Delete coupon " + adminCoupons[idx]?.code + "?")) return;
  adminCoupons.splice(idx, 1);
  persistAdminCoupons();
  renderAdminCouponList();
  showToast("🗑 Coupon deleted");
}

function openAuthModal() {
  const m = document.getElementById("authOverlay");
  if (!m) return;
  m.classList.add("show"); document.body.style.overflow = "hidden";
  const i = document.getElementById("authPhone"); if (i) { i.value = ""; i.focus(); }
}

function closeAuthModal() { const m = document.getElementById("authOverlay"); if (!m) return; m.classList.remove("show"); document.body.style.overflow = ""; }

function sendOTP() {
  const phone = (document.getElementById("authPhone").value || "").trim();
  if (phone.length < 10) { showToast("⚠️ Enter a valid 10-digit number"); return; }
  saveAuth(phone);
  closeAuthModal();
  showToast("✅ Logged in as +91-" + phone);
  // Notify shop owner via WhatsApp
  var msg = "📱 New Customer Login\nPhone: +91-" + phone + "\nTime: " + new Date().toLocaleString();
  window.open("https://wa.me/919916611010?text=" + encodeURIComponent(msg), "_blank");
}

function verifyOTP() { }
function handleOTPInput(el) { }
function handleOTPBackspace(el, e) { }
function resendOTP() { }
function completeLogin() { closeAuthModal(); }

// ===== Call Request =====
function handleCallRequest(e) {
  e.preventDefault();
  const name = (document.getElementById("callName")?.value || "").trim();
  const phone = (document.getElementById("callPhone")?.value || "").trim();
  if (!name || phone.length < 10) { showToast("⚠️ Enter name & phone"); return; }
  var msg = "📞 Call Request\nName: " + name + "\nPhone: +91-" + phone + "\nTime: " + new Date().toLocaleString();
  window.open("https://wa.me/919916611010?text=" + encodeURIComponent(msg), "_blank");
  showToast("✅ Call request sent!");
  const f = document.getElementById("callForm"); if (f) f.reset();
}

// ===== Sell Form =====
function handleSellForm(e) {
  e.preventDefault();
  const n = document.getElementById("sellerName")?.value?.trim() || "";
  const p = document.getElementById("sellerPhone")?.value?.trim() || "";
  const b = document.getElementById("laptopBrand")?.value?.trim() || "";
  const m = document.getElementById("laptopModel")?.value?.trim() || "";
  const y = document.getElementById("purchaseYear")?.value?.trim() || "";
  const c = document.getElementById("laptopCondition")?.value || "";
  var msg = "Hi Computer Paradise, I want to sell my laptop. Name: " + n + ", Phone: " + p + ", Brand: " + b + ", Model: " + m + ", Year: " + y + ", Condition: " + c;
  window.open("https://wa.me/919916611010?text=" + encodeURIComponent(msg), "_blank");
}

// ===== Mobile Menu =====
function toggleMenu() { document.getElementById("mobileDrawer")?.classList.toggle("open"); document.getElementById("drawerOverlay")?.classList.toggle("show"); }
function closeMenu() { document.getElementById("mobileDrawer")?.classList.remove("open"); document.getElementById("drawerOverlay")?.classList.remove("show"); }

// ===== Toast =====
function showToast(msg, icon) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.querySelector(".toast-icon").textContent = icon || "💬";
  t.querySelector(".toast-text").textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 3500);
}

// ===== Typewriter =====
function typeWriter(el, text, speed) {
  if (!el) return;
  let i = 0; el.innerHTML = "";
  (function type() {
    if (i < text.length) { el.innerHTML = text.slice(0, i + 1) + '<span class="cursor"></span>'; i++; setTimeout(type, speed || 45); }
    else el.innerHTML = text + '<span class="cursor"></span>';
  })();
}

// Typewriter that handles HTML tags
function typeWriterHTML(id, html, speed, loop, pause) {
  var el = document.getElementById(id);
  if (!el) return;
  var chars = [];
  var inTag = false, inEntity = false;
  for (var i = 0; i < html.length; i++) {
    var c = html[i];
    if (c === '<') inTag = true;
    if (c === '&') inEntity = true;
    chars.push(c);
    if (c === '>') inTag = false;
    if (c === ';' && inEntity) inEntity = false;
  }
  var steps = [];
  var buf = "";
  var isSpecial = false;
  for (var i = 0; i < chars.length; i++) {
    var c = chars[i];
    if (c === '<' || c === '&') { isSpecial = true; }
    buf += c;
    if (c === '>' || (c === ';' && isSpecial)) { isSpecial = false; }
    if (!isSpecial) {
      steps.push(buf);
      buf = "";
    }
  }
  if (buf) steps.push(buf);
  pause = pause || 3000;
  speed = speed || 35;

  function run() {
    var idx = 0;
    el.innerHTML = "";
    (function type() {
      if (idx < steps.length) {
        el.innerHTML = steps.slice(0, idx + 1).join("") + '<span class="r-cursor">|</span>';
        idx++;
        setTimeout(type, speed);
      } else {
        el.innerHTML = steps.join("");
        if (loop) {
          setTimeout(function() {
            // Delete character by character
            var delIdx = steps.length;
            (function del() {
              if (delIdx > 0) {
                delIdx--;
                el.innerHTML = steps.slice(0, delIdx).join("") + '<span class="r-cursor">|</span>';
                setTimeout(del, speed * 0.6);
              } else {
                setTimeout(run, 300);
              }
            })();
          }, pause);
        }
      }
    })();
  }
  run();
}

// ===== Counter =====
function animateCounters() {
  var targets = [
    { el: document.getElementById("statNum1"), target: 100, suffix: "+" },
    { el: document.getElementById("statNum2"), target: 5, suffix: "+" },
    { el: document.getElementById("statNum3"), target: 500, suffix: "+" },
    { el: document.getElementById("statNum4"), target: 4.9, suffix: "⭐" }
  ];
  targets.forEach(function(t, idx) {
    if (!t.el) return;
    var current = 0;
    var isDecimal = t.target % 1 !== 0;
    var steps = isDecimal ? 50 : 40;
    var step = t.target / steps;
    var timer = setInterval(function() {
      current += step;
      if (current >= t.target) { current = t.target; clearInterval(timer); }
      t.el.textContent = isDecimal ? current.toFixed(1) : Math.round(current);
    }, 25);
  });

  // Animate SVG rings
  document.querySelectorAll(".stat-pct-ring").forEach(function(ring, i) {
    setTimeout(function() {
      ring.style.transition = "stroke-dashoffset 1.5s cubic-bezier(0.22, 1, 0.36, 1)";
      ring.style.strokeDashoffset = ring.getAttribute("stroke-dashoffset");
    }, 300 + i * 150);
  });
}

// Stats mouse tracking
document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth <= 1024) {
    var wire = document.querySelector(".power-cable-svg");
    if (wire) wire.style.display = "none";
    var canvas = document.getElementById("lightningCanvas");
    if (canvas) canvas.style.display = "none";
    var sparkles = document.querySelectorAll(".sparkle-ring, .glint, .shimmer-scan");
    sparkles.forEach(function(el) { el.style.display = "none"; });
  }
  var statsBar = document.querySelector(".stats-bar");
  var ambient = document.getElementById("statAmbient");
  if (statsBar && ambient) {
    statsBar.addEventListener("mousemove", function(e) {
      var rect = statsBar.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      ambient.style.opacity = "1";
      ambient.style.transform = "translate(" + (x - 250) + "px, " + (y - 250) + "px)";
    });
    statsBar.addEventListener("mouseleave", function() {
      ambient.style.opacity = "0";
    });
  }
});

// ===== Back to Top =====
let _bttTimer = null;
function initBackTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    if (_bttTimer) return;
    _bttTimer = setTimeout(() => { btn.classList.toggle("visible", window.scrollY > 400); _bttTimer = null; }, 50);
  }, { passive: true });
}

// ===== Realistic Lightning VFX =====
function initLightning() {
  if (window.innerWidth <= 1024) return;
  const canvas = document.getElementById("lightningCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, bolts = [];
  const GOLD = "255,215,100";

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    w = canvas.width;
    h = canvas.height;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";
  }
  resize();
  window.addEventListener("resize", resize);

  function steppedLeader(sx, sy, maxH) {
    const pts = [{ x: sx, y: sy }];
    let x = sx, y = sy;
    const steps = 8 + Math.floor(Math.random() * 10);
    for (let i = 0; i < steps; i++) {
      x += (Math.random() - 0.5) * 50;
      y += (maxH - sy) / steps + (Math.random() - 0.5) * 25;
      pts.push({ x, y });
    }
    const branches = [];
    for (let i = 1; i < pts.length - 1; i += 2) {
      if (Math.random() > 0.55) continue;
      const bx = pts[i].x, by = pts[i].y;
      const bpts = [{ x: bx, y: by }];
      const blen = 30 + Math.random() * 80;
      const bAngle = Math.PI / 2 + (Math.random() - 0.5) * 1.6;
      for (let j = 0; j < 3 + Math.floor(Math.random() * 4); j++) {
        const last = bpts[bpts.length - 1];
        bpts.push({
          x: last.x + Math.cos(bAngle + (Math.random() - 0.5) * 0.8) * (blen / 4),
          y: last.y + Math.sin(bAngle + (Math.random() - 0.5) * 0.8) * (blen / 4)
        });
      }
      branches.push(bpts);
    }
    return { main: pts, branches };
  }

  function drawStroke(pts, alpha, lineW, blur, color, isGlow) {
    if (pts.length < 2) return;
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1], curr = pts[i];
      const cpX = (prev.x + curr.x) / 2 + (Math.random() - 0.5) * 2;
      const cpY = (prev.y + curr.y) / 2 + (Math.random() - 0.5) * 2;
      ctx.quadraticCurveTo(cpX, cpY, curr.x, curr.y);
    }
    ctx.shadowColor = isGlow ? `rgba(${GOLD},${alpha * 0.5})` : `rgba(${GOLD},${alpha})`;
    ctx.shadowBlur = blur;
    ctx.strokeStyle = color;
    ctx.lineWidth = lineW;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  }

  function renderBolt(bolt, alpha) {
    if (alpha <= 0) return;
    const a = Math.min(1, alpha);

    // Layer 1: huge outer glow
    drawStroke(bolt.main, a * 0.15, 18, 80, `rgba(${GOLD},${a * 0.08})`, true);
    // Layer 2: medium glow
    drawStroke(bolt.main, a * 0.3, 8, 50, `rgba(${GOLD},${a * 0.15})`, true);
    // Layer 3: inner glow
    drawStroke(bolt.main, a * 0.6, 3, 25, `rgba(${GOLD},${a * 0.4})`, true);
    // Layer 4: bright core
    drawStroke(bolt.main, a, 1.5, 8, `rgba(255,235,180,${a})`, false);

    // branches (subtler)
    bolt.branches.forEach(b => {
      drawStroke(b, a * 0.5, 1.5, 15, `rgba(${GOLD},${a * 0.25})`, true);
      drawStroke(b, a * 0.7, 0.8, 5, `rgba(255,235,180,${a * 0.4})`, false);
    });
  }

  function spawnBolt() {
    const sx = 50 + Math.random() * ((w / (devicePixelRatio || 1)) - 100);
    const sy = -10 - Math.random() * 30;
    const maxH = (h / (devicePixelRatio || 1)) * (0.5 + Math.random() * 0.45);
    const data = steppedLeader(sx, sy, maxH);

    // life stages: flash (0-100ms), flicker (100-400ms), fade (400-1200ms)
    bolts.push({
      data,
      birth: performance.now(),
      flashAlpha: 1,
      flickerPhase: 0,
      done: false
    });
  }

  // spawn bursts (2-4 bolts at once like real storm)
  function spawnBurst() {
    const count = 1 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      setTimeout(() => spawnBolt(), i * (40 + Math.random() * 80));
    }
    // cloud flash
    const flash = document.createElement("div");
    flash.style.cssText = `position:absolute;inset:0;background:radial-gradient(ellipse at ${20+Math.random()*60}% ${5+Math.random()*15}%,rgba(255,220,120,${0.04+Math.random()*0.06}) 0%,transparent 50%);pointer-events:none;z-index:1;opacity:1;transition:opacity 0.6s;`;
    canvas.parentElement.appendChild(flash);
    requestAnimationFrame(() => requestAnimationFrame(() => flash.style.opacity = "0"));
    setTimeout(() => flash.remove(), 800);
  }

  let nextSpawn = 600 + Math.random() * 2000;

  function frame(now) {
    ctx.clearRect(0, 0, w, h);

    // spawn
    if (now > nextSpawn) {
      spawnBurst();
      nextSpawn = now + 800 + Math.random() * 3000;
    }

    // update & draw
    bolts = bolts.filter(b => {
      const age = now - b.birth;
      if (age > 1400) return false;

      let alpha = 1;
      if (age < 80) {
        // initial bright flash with flicker
        alpha = 0.7 + Math.random() * 0.3;
      } else if (age < 120) {
        // brief dim
        alpha = 0.3 + Math.random() * 0.2;
      } else if (age < 160) {
        // second flash
        alpha = 0.6 + Math.random() * 0.3;
      } else if (age < 200) {
        alpha = 0.2 + Math.random() * 0.15;
      } else if (age < 280) {
        // third flicker (weaker)
        alpha = 0.3 + Math.random() * 0.2;
      } else if (age < 350) {
        alpha = 0.1 + Math.random() * 0.1;
      } else {
        // smooth fade
        alpha = Math.max(0, 1 - (age - 350) / 1050);
      }

      renderBolt(b.data, alpha);
      return true;
    });

    // ambient faint golden haze
    const pulse = 0.015 + Math.sin(now / 4000) * 0.01;
    ctx.fillStyle = `rgba(255,215,100,${pulse})`;
    ctx.fillRect(0, 0, w, h);

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

// ===== Laptop Boot + Gallery =====
function initLaptopGallery() {
  const boot = document.getElementById("laptopBoot");
  const gallery = document.getElementById("laptopGallery");
  const browser = document.getElementById("laptopBrowser");
  if (!gallery || !boot) return;

  let cursorInterval = null;

  function hideAll() {
    [boot, gallery, browser].forEach(el => {
      if (el) {
        el.classList.remove("show");
        el.classList.add("hidden");
        el.classList.remove("chrome-open-active");
        // Remove services highlight
        const pages = el.querySelectorAll(".ms-sp");
        pages.forEach(p => p.classList.remove("active-page"));
        // Reset scroll
        const mini = el.querySelector(".minisite");
        if (mini) mini.scrollTop = 0;
      }
    });
    const co = gallery?.querySelector(".chrome-open");
    if (co) co.classList.remove("show");
    const cursor = gallery?.querySelector(".desktop-cursor");
    if (cursor) { cursor.style.opacity = "0"; cursor.style.left = ""; cursor.style.top = ""; }
    if (cursorInterval) { clearInterval(cursorInterval); cursorInterval = null; }
  }

  function animateCursorToIcon(iconEl, callback) {
    const cursor = gallery.querySelector(".desktop-cursor");
    if (!cursor || !iconEl) { if (callback) callback(); return; }

    const galleryRect = gallery.getBoundingClientRect();
    const iconRect = iconEl.getBoundingClientRect();

    // Target: center of the Chrome icon image within the d-icon
    const targetX = iconRect.left - galleryRect.left + iconRect.width / 2;
    const targetY = iconRect.top - galleryRect.top + iconRect.height / 2 - 6;

    // Start: right side of screen
    const startX = galleryRect.width * 0.7;
    const startY = galleryRect.height * 0.3;

    cursor.style.left = startX + "px";
    cursor.style.top = startY + "px";
    cursor.style.opacity = "1";

    const duration = 1800;
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Ease-in-out
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      const x = startX + (targetX - startX) * ease;
      const y = startY + (targetY - startY) * ease;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        // Click animation
        cursor.style.transform = "scale(0.85)";
        setTimeout(() => {
          cursor.style.transform = "scale(1.15)";
          setTimeout(() => {
            cursor.style.transform = "scale(0.9)";
            setTimeout(() => {
              cursor.style.transform = "";
              cursor.style.opacity = "0";
              if (callback) callback();
            }, 150);
          }, 150);
        }, 100);
      }
    }
    requestAnimationFrame(step);
  }

  function runBoot() {
    hideAll();
    boot.classList.remove("hidden");
    const logo = boot.querySelector(".win11-logo");
    const loadText = boot.querySelector(".boot-load-text");
    const ring = boot.querySelector(".boot-ring");
    if (logo) logo.classList.remove("show");
    if (loadText) loadText.classList.remove("show");
    if (ring) ring.classList.remove("show");

    setTimeout(() => { if (logo) logo.classList.add("show"); }, 200);
    setTimeout(() => { if (loadText) loadText.classList.add("show"); if (ring) ring.classList.add("show"); }, 800);
    setTimeout(() => {
      boot.classList.add("hidden");
      gallery.classList.remove("hidden");
      gallery.classList.add("show");
      const co = gallery.querySelector(".chrome-open");
      if (co) co.classList.remove("show");
    }, 2200);
    // Mysore photo 3s, then Chrome click
    setTimeout(() => {
      const chromeIcon = gallery.querySelector('[data-icon="chrome"]');
      animateCursorToIcon(chromeIcon, () => {
        const co = gallery.querySelector(".chrome-open");
        if (co) co.classList.add("show");
        // 2s after click → website opens
        setTimeout(() => {
          gallery.classList.remove("show");
          gallery.classList.add("hidden");
          if (browser) {
            browser.classList.remove("hidden");
            browser.classList.add("show");
          }
          // 3s later → cycle service pages 1s each
          setTimeout(() => {
            const pages = browser?.querySelectorAll(".ms-sp");
            if (pages && pages.length) {
              let idx = 0;
              pages.forEach(p => p.classList.remove("active-page"));
              function showNext() {
                pages.forEach(p => p.classList.remove("active-page"));
                if (idx < pages.length) {
                  pages[idx].classList.add("active-page");
                  idx++;
                  setTimeout(showNext, 1000);
                }
              }
              showNext();
            }
            setTimeout(() => {
              if (browser) {
                browser.classList.remove("show");
                browser.classList.add("hidden");
              }
            }, 5000);
          }, 3000);
        }, 2000);
      });
    }, 5200);
  }

  runBoot();
  setInterval(runBoot, 19500);
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  initLaptopGallery();
  loadAuth();
  initSlider();
  setTimeout(() => {
    typeWriter(document.getElementById("typewriterText"), "Premium refurbished laptops, desktops & accessories — quality tested, certified, and delivered with care across Mysore.", 40);
  }, 650);

  // Badge typewriter
  setTimeout(function() {
    typeWriterHTML("rTypewriter", "Quality <strong>Refurbished</strong> <span class=\"ampersand\">&amp;</span> <strong>Second-Hand</strong> Laptops &amp; Desktops", 35, true, 10000);
  }, 300);

  // Touch pause for brand carousels
  document.querySelectorAll(".brand-grid").forEach(g => {
    function togglePause() {
      const t = g.querySelector(".brand-track");
      if (!t) return;
      const ps = getComputedStyle(t).animationPlayState;
      t.style.animationPlayState = ps === "paused" ? "running" : "paused";
    }
    g.addEventListener("click", togglePause);
    g.addEventListener("touchstart", function(e) {
      // Only toggle on brief tap, not scroll
      this._touchStart = Date.now();
    }, { passive: true });
    g.addEventListener("touchend", function(e) {
      if (Date.now() - (this._touchStart || 0) < 300) togglePause();
    });
  });

  // Buy page grid
  if (document.getElementById("laptopGrid")) {
    renderLaptops(laptops);

    const minS = document.getElementById("filterMinSlider");
    const maxS = document.getElementById("filterMaxSlider");
    const minV = document.getElementById("minVal");
    const maxV = document.getElementById("maxVal");
    const minI = document.getElementById("filterMin");
    const maxI = document.getElementById("filterMax");

    function updatePriceSliders() {
      let min = parseInt(minS?.value) || 0;
      let max = parseInt(maxS?.value) || 100000;
      if (min > max) {
        if (minS) minS.value = max;
        if (maxS) maxS.value = min;
        [min, max] = [max, min];
      }
      if (minV) minV.textContent = min.toLocaleString();
      if (maxV) maxV.textContent = max.toLocaleString();
      if (minI) minI.value = min;
      if (maxI) maxI.value = max;
      filterLaptops();
    }

    minS?.addEventListener("input", updatePriceSliders);
    maxS?.addEventListener("input", updatePriceSliders);
    updatePriceSliders();

    ["filterBrand","filterDeviceType","filterMin","filterMax","filterSort"].forEach(id => {
      document.getElementById(id)?.addEventListener("change", filterLaptops);
    });
    document.getElementById("filterMin")?.addEventListener("input", filterLaptops);
    document.getElementById("filterMax")?.addEventListener("input", filterLaptops);
    document.getElementById("searchInput")?.addEventListener("input", () => { filterLaptops(); showSuggestions(); });
    const fc = document.getElementById("filterCount");
    if (fc) fc.textContent = `${laptops.length} items`;

    // Handle ?search=BrandName from brand chip clicks
    const params = new URLSearchParams(window.location.search);
    const searchQ = params.get("search");
    if (searchQ) {
      const inp = document.getElementById("searchInput");
      if (inp) {
        inp.value = searchQ;
        filterLaptops();
        showSuggestions();
      }
    }
    // Handle ?scan=CP000042 — redirect to detail page
    const scanCode = params.get("scan");
    if (scanCode && scanCode.startsWith("CP")) {
      const id = parseInt(scanCode.replace("CP", ""), 10);
      if (id) {
        window.location.href = "detail.html?id=" + id;
      }
    }
  }

  document.getElementById("sellForm")?.addEventListener("submit", handleSellForm);
  document.getElementById("callForm")?.addEventListener("submit", handleCallRequest);

  // Mobile
  document.querySelector(".nav-hamburger")?.addEventListener("click", toggleMenu);
  document.getElementById("drawerOverlay")?.addEventListener("click", closeMenu);

  // Windows overlay close
  document.getElementById("windowsOverlay")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeWindowsDesktop();
  });
  // Escape key closes zoom first, then overlay
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      // Close admin panel first if open
      const adminOv = document.getElementById("adminOverlay");
      if (adminOv && adminOv.classList.contains("show")) { closeAdminPanel(); return; }
      const zoomed = document.getElementById("windowsMainImg");
      if (zoomed && zoomed.classList.contains("zoomed")) { closeZoom(); }
      else { closeWindowsDesktop(); }
    }
  });
  document.getElementById("authOverlay")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeAuthModal();
  });
  document.getElementById("adminOverlay")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeAdminPanel();
  });

  // Secret admin login: double-click logo (with click delay to allow dblclick)
  const navLogo = document.querySelector(".nav-logo");
  let _logoClickTimer = null;
  if (navLogo) {
    navLogo.addEventListener("click", (e) => {
      e.preventDefault();
      if (_logoClickTimer) {
        clearTimeout(_logoClickTimer);
        _logoClickTimer = null;
        openAdminLogin();
        return;
      }
      _logoClickTimer = setTimeout(() => {
        _logoClickTimer = null;
        window.location.href = navLogo.getAttribute("href");
      }, 300);
    });
  }

  // Auth buttons
  const b = (id, fn) => document.getElementById(id)?.addEventListener("click", fn);
  b("loginBtn", openAuthModal);
  b("logoutBtn", logoutUser);
  b("sendOTPBtn", sendOTP);
  document.getElementById("authPhone")?.addEventListener("keydown", (e) => { if (e.key === "Enter") sendOTP(); });

  // Mobile login links
  document.querySelectorAll('#mobileDrawer a[onclick*="openAuthModal"], #mobileLoginBtn').forEach(el => {
    el.addEventListener("click", function() { openAuthModal(); closeMenu(); });
  });

  // Clock
  function updateClock() { const el = document.getElementById("winClock"); if (el) el.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); }
  updateClock(); setInterval(updateClock, 1000);

  initBackTop();

  // Splash screen
  setTimeout(() => {
    const splash = document.getElementById("splashScreen");
    if (splash) { splash.classList.add("hidden"); setTimeout(() => splash.remove(), 700); }
  }, 2000);

  // Click-to-plug socket animation — fires on EVERY click (capture phase)
  // Reveal
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(el => obs.observe(el));

  // Counter
  const statsBar = document.querySelector(".stats-bar");
  if (statsBar) {
    const co = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { animateCounters(); co.disconnect(); } }, { threshold: 0.3 });
    co.observe(statsBar);
  }

  // Search panel toggle + cascading
  const searchBtn = document.getElementById("searchBtn");
  const searchPanel = document.getElementById("searchPanel");
  const searchClose = document.getElementById("searchClose");
  const searchInput = document.getElementById("navSearchInput");
  const searchCats = document.getElementById("searchCats");
  if (searchBtn && searchPanel) {
    function toggleSearch(e) { searchPanel.classList.toggle("open"); if (searchPanel.classList.contains("open")) setTimeout(() => searchInput?.focus(), 100); }
    searchBtn.addEventListener("click", toggleSearch);
    if (searchClose) searchClose.addEventListener("click", function(e) { searchPanel.classList.remove("open"); });
    document.addEventListener("click", function(e) { if (!searchPanel.contains(e.target) && e.target !== searchBtn) searchPanel.classList.remove("open"); });
    if (searchInput) {
      searchInput.addEventListener("keydown", function(e) { if (e.key === "Escape") { searchPanel.classList.remove("open"); searchInput.blur(); } });
      searchInput.addEventListener("input", function() { doSearchSuggest(this.value); });
      searchInput.addEventListener("focus", function() { if (this.value.trim()) doSearchSuggest(this.value); });
    }
  }

  // Live search suggestions
  var navSugg = document.getElementById("navSuggestions");
  function doSearchSuggest(q) {
    q = q.trim().toLowerCase();
    if (!navSugg) return;
    // Clear old timeout
    if (window._suggTimer) clearTimeout(window._suggTimer);
    if (q.length < 1) { navSugg.classList.remove("show"); navSugg.innerHTML = ""; return; }
    window._suggTimer = setTimeout(function() {
      var results = laptops.filter(function(l) {
        return l.name.toLowerCase().includes(q) || l.brand.toLowerCase().includes(q) || l.processor.toLowerCase().includes(q) || l.ram.toLowerCase().includes(q) || l.storage.toLowerCase().includes(q);
      }).slice(0, 6);
      if (results.length === 0) {
        navSugg.innerHTML = '<div class="ss-empty">No laptops found</div>';
        navSugg.classList.add("show");
        return;
      }
      navSugg.innerHTML = results.map(function(l) {
        return '<div class="ss-item" data-id="' + l.id + '"><span class="ss-name">' + l.brand + ' ' + l.name.replace(l.brand,'').trim() + '</span><span class="ss-spec">' + l.ram + ' · ' + l.storage + '</span><span class="ss-price">₹' + l.price.toLocaleString() + '</span></div>';
      }).join('');
      navSugg.querySelectorAll(".ss-item").forEach(function(el) {
        el.addEventListener("click", function() { window.location.href = "buy.html?search=" + encodeURIComponent(results.find(function(l) { return l.id == this.dataset.id; }, this).name); searchPanel?.classList.remove("open"); });
      });
      navSugg.classList.add("show");
    }, 150);
  }
  // Hide suggestions when clicking outside
  document.addEventListener("click", function(e) { if (navSugg && !e.target.closest(".search-panel-header")) { navSugg.classList.remove("show"); } });

  // Cascading search — just brands
  var S = {
    laptop: { label: "💻 Laptop", chips: ["Dell","HP","Lenovo","Apple","Asus","Acer","MSI","Microsoft"] },
    desktop: { label: "🖥️ Desktop", chips: ["Dell","HP","Lenovo","Apple","Asus","Acer","MSI","Custom Build"] },
    monitor: { label: "🖥️ Monitor", chips: ["Dell","HP","Lenovo","Samsung","LG","Acer","Asus","BenQ"] },
    buyback: { label: "🔄 Buy Back", chips: ["Dell","HP","Lenovo","Apple","Asus","Acer","Microsoft"] },
    service: { label: "🔧 Service", direct: "contact.html" }
  };

  function gCol(name) { return searchCats?.querySelector('[data-col="' + name + '"]'); }
  function clrCol(col) { if (col) { col.querySelectorAll(".sc-chip").forEach(function(c) { c.remove(); }); } }
  function setTitle(col, txt) { var t = col?.querySelector(".sc-title"); if (t) t.textContent = txt || ""; }

  function fillBrands(catKey) {
    for (var i = 1; i <= 4; i++) { var c = gCol("l" + i); clrCol(c); setTitle(c, ""); }
    var cat = S[catKey];
    if (!cat) return;
    if (cat.direct) { window.location.href = cat.direct; return; }
    var col = gCol("l1");
    setTitle(col, "Brand");
    cat.chips.forEach(function(v) {
      var chip = document.createElement("a");
      chip.href = "buy.html?search=" + encodeURIComponent(v);
      chip.className = "sc-chip sc-chip-all";
      chip.textContent = v;
      chip.addEventListener("click", function() { searchPanel?.classList.remove("open"); });
      col.appendChild(chip);
    });
  }

  // Wire up category chips
  document.querySelectorAll('[data-col="cat"] .sc-chip').forEach(function(chip) {
    chip.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelectorAll('[data-col="cat"] .sc-chip').forEach(function(c) { c.classList.remove("active"); });
      this.classList.add("active");
      fillBrands(this.dataset.cat);
    });
  });

  // 3D tilt for refurb badge
  var badge = document.getElementById("refurbBadge");
  if (badge) {
    badge.addEventListener("mousemove", function(e) {
      var rect = badge.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var cx = rect.width / 2;
      var cy = rect.height / 2;
      var dx = (x - cx) / cx;
      var dy = (y - cy) / cy;
      badge.style.transform = "perspective(800px) rotateY(" + (dx * 5) + "deg) rotateX(" + (-dy * 5) + "deg)";
    });
    badge.addEventListener("mouseleave", function() {
      badge.style.transform = "";
    });
  }

  // 3D tilt for callback card
  var cb = document.getElementById("callbackWrap");
  if (cb) {
    var layers = cb.querySelectorAll(".cb-layer");
    var strength = 8;
    cb.addEventListener("mousemove", function(e) {
      var rect = cb.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var cx = rect.width / 2;
      var cy = rect.height / 2;
      var dx = (x - cx) / cx;
      var dy = (y - cy) / cy;
      cb.style.transform = "perspective(1000px) rotateY(" + (dx * strength) + "deg) rotateX(" + (-dy * strength) + "deg)";
      // Parallax layers
      layers.forEach(function(l) {
        var depth = 0;
        if (l.classList.contains("cb-layer-1")) depth = 5;
        else if (l.classList.contains("cb-layer-2")) depth = 12;
        else if (l.classList.contains("cb-layer-3")) depth = 20;
        else depth = 0;
        l.style.transform = "translateX(" + (-dx * depth) + "px) translateY(" + (-dy * depth) + "px)";
      });
    });
    cb.addEventListener("mouseleave", function() {
      cb.style.transform = "";
      layers.forEach(function(l) { l.style.transform = ""; });
    });
  }

  initWhatsAppFloat();
  loadDetailPage();
  initFooterEffects();
});

// ===== Premium Footer Effects =====
function initFooterEffects() {
  // 3D tilt + ambient glow tracking on hover
  document.querySelectorAll(".footer-contact-item").forEach(function(item) {
    var ambient = item.querySelector(".fc-ambient");
    if (!ambient) return;

    item.addEventListener("mousemove", function(e) {
      var rect = item.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var cx = rect.width / 2;
      var cy = rect.height / 2;
      var dx = (x - cx) / cx;
      var dy = (y - cy) / cy;
      var tiltX = -dy * 4;
      var tiltY = dx * 4;
      item.style.transform = "perspective(600px) rotateX(" + tiltX + "deg) rotateY(" + tiltY + "deg) translateX(4px) scale(1.03)";
      ambient.style.opacity = "0.6";
      ambient.style.transform = "translate(" + (x - 60) + "px, " + (y - 60) + "px)";
    });

    item.addEventListener("mouseleave", function() {
      item.style.transform = "";
      ambient.style.opacity = "0";
      ambient.style.transform = "translate(-50%, -50%)";
    });

    // Ripple on click
    item.addEventListener("click", function(e) {
      var rect = item.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var ripple = document.createElement("span");
      ripple.className = "fc-ripple";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.style.width = "10px";
      ripple.style.height = "10px";
      ripple.style.marginLeft = "-5px";
      ripple.style.marginTop = "-5px";
      item.appendChild(ripple);
      setTimeout(function() { ripple.remove(); }, 700);
    });
  });

  // Animated follower count (fake counter-up)
  document.querySelectorAll(".fc-sub").forEach(function(el) {
    var match = el.textContent.match(/([0-9.]+)([KM]?)\s*followers/);
    if (match) {
      var target = parseFloat(match[1]);
      var suffix = match[2];
      var isK = suffix === "K";
      var current = 0;
      var step = Math.ceil(target / 30);
      var timer = setInterval(function() {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = el.textContent.replace(/[0-9.]+[KM]?\s*followers/, (isK ? current.toFixed(1) : current) + (isK ? "K" : "") + " followers");
      }, 40);
    }
  });
}

// ===== RGB Fan Controller =====
var _rgbMode = localStorage.getItem("cp_fan_rgb") || "rainbow";
var _rgbPanelOpen = false;

function applyRGBMode(mode) {
  _rgbMode = mode;
  var rings = document.querySelectorAll(".mod-blades, .mod-ring");
  var btn = document.getElementById("rgbToggle");
  if (mode === "off") {
    rings.forEach(function(el) { el.style.animation = "none"; el.style.opacity = "0"; });
    if (btn) btn.style.opacity = "0.3";
    return;
  }
  if (btn) btn.style.opacity = "1";
  var colors = {
    rainbow: "conic-gradient(#ff1744, #2979ff, #00e676, #ff1744)",
    red:     "#ff1744",
    blue:    "#2979ff",
    green:   "#00e676",
    purple:  "#d500f9",
    cyan:    "#00e5ff",
    warm:    "linear-gradient(135deg, #ff6d00, #ffab00)",
    white:   "#f0f0f0"
  };
  var bg = colors[mode] || colors.rainbow;
  rings.forEach(function(el) {
    el.style.animation = mode === "rainbow" ? "" : "none";
    el.style.opacity = mode === "rainbow" ? "" : "0.8";
    el.style.background = mode === "rainbow" ? "" : bg;
  });
  localStorage.setItem("cp_fan_rgb", mode);
  document.querySelectorAll(".rgb-opt").forEach(function(b) {
    b.classList.toggle("active", b.dataset.mode === mode);
  });
}

function toggleRGBPanel() {
  _rgbPanelOpen = !_rgbPanelOpen;
  document.getElementById("rgbPanel").classList.toggle("open", _rgbPanelOpen);
}

function setRGBMode(mode) {
  applyRGBMode(mode);
  // Close panel after selection
  setTimeout(function() {
    _rgbPanelOpen = false;
    document.getElementById("rgbPanel").classList.remove("open");
  }, 400);
}

// Close panel on outside click
document.addEventListener("click", function(e) {
  var ctrl = document.getElementById("rgbControl");
  if (ctrl && !ctrl.contains(e.target) && _rgbPanelOpen) {
    _rgbPanelOpen = false;
    document.getElementById("rgbPanel").classList.remove("open");
  }
});

// Apply saved mode on load
applyRGBMode(_rgbMode);

// ===== WhatsApp Float Button =====
function initWhatsAppFloat() {
  if (document.getElementById("waFloatBtn")) return;
  const btn = document.createElement("div"); btn.id = "waFloatBtn";
  btn.innerHTML = `<div class="wa-float-btn" onclick="toggleWhatsAppPopup(event)">
    <svg viewBox="0 0 32 32" fill="white" width="28" height="28"><path d="M16.004 3.11c-7.136 0-12.893 5.757-12.893 12.893 0 2.275.604 4.5 1.75 6.439l-1.86 6.787 6.99-1.833a12.85 12.85 0 0 0 6.013 1.5c7.136 0 12.893-5.757 12.893-12.893S23.14 3.11 16.004 3.11zM24.89 16.003c0 4.897-3.99 8.887-8.887 8.887a8.85 8.85 0 0 1-4.52-1.293l-.324-.194-4.15 1.087 1.108-4.043-.211-.336a8.84 8.84 0 0 1-1.357-4.708c0-4.897 3.99-8.887 8.887-8.887s8.887 3.99 8.887 8.887z"/><path d="M20.75 19.033c-.246.692-.714 1.277-1.384 1.646-.67.37-1.46.498-2.36.365-1.428-.212-2.78-.933-3.81-1.964a8.71 8.71 0 0 1-1.955-3.684 3.7 3.7 0 0 1 .486-2.836c.352-.53.84-.873 1.373-1.073s1.043-.232 1.48-.012c.166.085.312.212.425.37l.937 1.37a1.26 1.26 0 0 1-.025 1.432l-.395.537a.36.36 0 0 0-.037.396c.14.255.43.61.802.98.372.372.78.665 1.055.8a.36.36 0 0 0 .4-.05l.583-.48a1.26 1.26 0 0 1 1.36-.158l1.388.72c.17.088.316.218.424.38.188.284.227.68.026 1.2z"/></svg>
  </div>
  <div id="waFloatPopup" class="wa-float-popup">
    <div class="wa-popup-header">💬 Get in Touch</div>
    <div class="wa-popup-number">📞 +91 99166 11010</div>
    <div class="wa-popup-item" onclick="waCall()"><span class="wa-popup-icon">📞</span> Call Computer Paradise</div>
    <div class="wa-popup-item" onclick="waMessage()"><span class="wa-popup-icon">💬</span> Message on WhatsApp</div>
  </div>`;
  document.body.appendChild(btn);
}

function toggleWhatsAppPopup(e) {
  e.stopPropagation();
  const popup = document.getElementById("waFloatPopup");
  if (popup) {
    const isOpen = popup.classList.contains("show");
    popup.classList.toggle("show");
    if (!isOpen) {
      setTimeout(() => document.addEventListener("click", closeWaPopup, { once: true }), 10);
    }
  }
}

function closeWaPopup() {
  const popup = document.getElementById("waFloatPopup");
  if (popup) popup.classList.remove("show");
}

function waCall() {
  closeWaPopup();
  window.location.href = "tel:+919916611010";
}

function waMessage() {
  closeWaPopup();
  window.location.href = "https://wa.me/919916611010?text=" + encodeURIComponent("Hi Computer Paradise! I'm interested in your laptops.");
}

// ===== Detail Page =====
function loadDetailPage() {
  if (!document.getElementById("detailContent")) return;
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  if (!id) { document.getElementById("detailContent").innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px;color:rgba(255,255,255,0.2)">No laptop selected. <a href="buy.html" style="color:var(--accent)">Browse laptops</a></div>'; return; }
  const lap = laptops.find(l => l.id === id);
  if (!lap) { document.getElementById("detailContent").innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px;color:rgba(255,255,255,0.2)">Laptop not found. <a href="buy.html" style="color:var(--accent)">Browse laptops</a></div>'; return; }

  document.title = lap.name + " – Computer Paradise";
  document.getElementById("detailName").textContent = lap.name;
  const mrp = lap.mrp || Math.round(lap.price * 1.35);
  const save = mrp - lap.price;
  document.getElementById("detailPrice").textContent = "₹" + lap.price.toLocaleString();
  document.getElementById("detailMrp").innerHTML = "MRP <del>₹" + mrp.toLocaleString() + "</del>";
  document.getElementById("detailSave").textContent = "You Save ₹" + save.toLocaleString();

  // Specs
  document.getElementById("detailSpecs").innerHTML = [
    ["💠 Brand", lap.brand],
    ["💻 Screen", (lap.screenSize || '-') + '"'],
    ["⚡ Processor", (lap.gen ? lap.gen + ' ' : '') + lap.processor],
    ["🧠 RAM", lap.ram],
    ["💾 Storage", lap.storage],
    ["🖥️ OS", lap.os || '-'],
    ["📦 Type", lap.deviceType || 'Laptop'],
    ["🏷️ Condition", lap.condition || '-'],
  ].map(([ico, val]) => `<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.04);border-radius:8px;padding:10px 14px"><div style="font-size:0.65rem;color:rgba(255,255,255,0.3);margin-bottom:2px">${ico}</div><div style="font-size:0.85rem;color:#fff;font-weight:600">${val}</div></div>`).join("");

  // Badge, condition, special specs
  const badgeEl = document.getElementById("detailBadge");
  if (lap.badge) { badgeEl.style.display = "inline"; badgeEl.textContent = "🏷️ " + lap.badge; }
  document.getElementById("detailCondition").textContent = lap.condition ? "📋 " + lap.condition : "";
  document.getElementById("detailSpec").textContent = lap.specialSpec ? "✨ " + lap.specialSpec : "";

  // WA
  document.getElementById("detailWA").href = "https://wa.me/919916611010?text=" + encodeURIComponent("Hi Computer Paradise, I'm interested in the " + lap.name + " (₹" + lap.price.toLocaleString() + "). Is it available?");

  // Photos
  const mainImg = document.getElementById("detailMainImg");
  const noImg = document.getElementById("detailNoImg");
  const thumbs = document.getElementById("detailThumbs");
  if (lap.images && lap.images.length > 0) {
    let currentPhotoIdx = 0;
    const imgs = lap.images;
    function showPhoto(i) {
      if (i < 0) i = imgs.length - 1;
      if (i >= imgs.length) i = 0;
      currentPhotoIdx = i;
      mainImg.src = imgs[i];
      mainImg.style.display = "block";
      noImg.style.display = "none";
      thumbs.querySelectorAll("img").forEach((x, idx) => x.style.borderColor = idx === i ? "var(--accent)" : "transparent");
    }
    showPhoto(0);
    mainImg.style.cursor = "zoom-in";
    mainImg.onclick = function() { openDetailLightbox(imgs, currentPhotoIdx, showPhoto); };
    // Prev / Next arrows on main photo
    const prevBtn = document.createElement("button");
    prevBtn.innerHTML = "‹";
    prevBtn.style.cssText = "position:absolute;left:8px;top:50%;transform:translateY(-50%);background:rgba(0,0,0,0.5);border:none;color:#fff;font-size:1.5rem;width:36px;height:36px;border-radius:50%;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center";
    prevBtn.onclick = function(e) { e.stopPropagation(); showPhoto(currentPhotoIdx - 1); };
    const nextBtn = document.createElement("button");
    nextBtn.innerHTML = "›";
    nextBtn.style.cssText = "position:absolute;right:8px;top:50%;transform:translateY(-50%);background:rgba(0,0,0,0.5);border:none;color:#fff;font-size:1.5rem;width:36px;height:36px;border-radius:50%;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center";
    nextBtn.onclick = function(e) { e.stopPropagation(); showPhoto(currentPhotoIdx + 1); };
    const photoWrap = document.getElementById("detailMainPhoto");
    photoWrap.style.position = "relative";
    photoWrap.appendChild(prevBtn);
    photoWrap.appendChild(nextBtn);
    // Thumbs
    imgs.forEach((src, i) => {
      const t = document.createElement("img");
      t.src = src;
      t.style.cssText = "width:64px;height:64px;object-fit:cover;border-radius:8px;cursor:pointer;border:2px solid " + (i === 0 ? "var(--accent)" : "transparent") + ";transition:border 0.2s";
      t.onclick = function() { showPhoto(i); };
      thumbs.appendChild(t);
    });
  }

  // Related laptops (same brand first, then similar)
  const related = laptops.filter(l => l.id !== lap.id && (l.brand === lap.brand || l.processor.includes(lap.processor.split(" ")[0]))).slice(0, 10);
  const slider = document.getElementById("relatedSlider");
  if (slider && related.length) {
    slider.innerHTML = related.map(l => {
      const hasImg = l.images && l.images.length > 0;
      const rmrp = l.mrp || Math.round(l.price * 1.35);
      const discount = Math.round((1 - l.price / rmrp) * 100);
      const rdevIcon = { laptop: "💻", desktop: "🖥️", tablet: "📱", other: "📦" }[l.deviceType] || "💻";
      const condColors = { "A++": "#00e676", "A+": "#69f0ae", "A": "#4fc3f7", "B": "#ffb74d", "C": "#ef5350" };
      const condColor = condColors[l.condition] || "#4fc3f7";
      return `<div class="laptop-card" onclick="window.location.href='detail.html?id=${l.id}'" style="min-width:240px;max-width:260px">
        <div class="lc-price-tag" style="top:8px;right:8px">
          <span class="lc-price-tag-amount" style="font-size:1rem">₹${l.price.toLocaleString()}</span>
          ${rmrp > l.price ? `<span class="lc-price-tag-mrp">₹${rmrp.toLocaleString()}</span>` : ''}
          ${discount >= 10 ? `<span class="lc-price-tag-discount" style="font-size:0.5rem">-${discount}%</span>` : ''}
        </div>
        <div class="laptop-img" style="background:linear-gradient(145deg,#181818,#0f0f0f)">
          ${hasImg ? `<img src="${l.images[0]}" alt="${l.name}">` : `<span class="placeholder-icon" style="font-size:2.5rem">💻</span>`}
        </div>
        <div class="lc-chips">
          <span class="lc-chip cond-chip" style="background:${condColor}22;color:${condColor};border-color:${condColor}44">${l.condition || 'A'}</span>
          <span class="lc-chip os-chip">${l.os === 'windows' ? '🪟' : l.os === 'mac' ? '🍎' : '🐧'} ${l.os || ''}</span>
        </div>
        <div class="laptop-card-info" style="padding:50px 12px 8px">
          <div class="laptop-card-brand" style="font-size:0.85rem">${rdevIcon} ${l.brand} <span class="lc-name-ext">${l.name.replace(l.brand,'').trim()}</span></div>
          <div class="laptop-card-processor">${l.processor}${l.gen ? ' · ' + l.gen : ''}</div>
          <div class="lc-specs-strip" style="gap:4px"><span class="lc-spec-item">🔲 ${l.ram}</span><span class="lc-spec-item">💾 ${l.storage}</span></div>
        </div>
      </div>`;
    }).join("");
  }
}

function scrollRelated(dir) {
  const t = document.getElementById("relatedSlider");
  if (!t) return;
  const c = t.querySelector(".laptop-card");
  if (!c) return;
  t.scrollBy({ left: dir * (c.offsetWidth + 16), behavior: "smooth" });
}

function openDetailLightbox(imgs, idx, showPhotoFn) {
  let existing = document.getElementById("detailLightbox");
  if (existing) existing.remove();
  const m = document.createElement("div"); m.id = "detailLightbox";
  Object.assign(m.style, { position: "fixed", inset: "0", zIndex: "99999", background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center" });
  const cur = idx;
  m.innerHTML = `<div style="position:relative;max-width:90vw;max-height:90vh">
    <button onclick="closeDetailLightbox()" style="position:absolute;top:-36px;right:0;background:none;border:none;color:#fff;font-size:1.5rem;cursor:pointer;z-index:2">✕</button>
    <div id="dlZoomWrap" style="overflow:hidden;border-radius:8px;cursor:zoom-in;width:90vw;height:85vh;display:flex;align-items:center;justify-content:center">
      <img id="dlImg" src="${imgs[cur]}" style="max-width:90vw;max-height:85vh;object-fit:contain;transition:transform 0.25s ease;transform-origin:center center">
    </div>
    ${imgs.length > 1 ? `<button onclick="detailLightboxNav(-1)" style="position:absolute;left:-50px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,0.1);border:none;color:#fff;font-size:2rem;width:44px;height:44px;border-radius:50%;cursor:pointer;z-index:2">‹</button>
    <button onclick="detailLightboxNav(1)" style="position:absolute;right:-50px;top:50%;transform:translateY(-50%);background:rgba(255,255,255,0.1);border:none;color:#fff;font-size:2rem;width:44px;height:44px;border-radius:50%;cursor:pointer;z-index:2">›</button>
    <div id="dlCounter" style="position:absolute;bottom:-32px;left:50%;transform:translateX(-50%);color:rgba(255,255,255,0.4);font-size:0.8rem">${cur+1} / ${imgs.length}</div>` : ''}
  </div>`;
  m._imgs = imgs;
  m._idx = cur;
  m._showPhoto = showPhotoFn;
  document.body.appendChild(m);

  // Zoom: click to toggle 2x, scroll to fine-tune
  let zoomLevel = 1;
  const zoomWrap = document.getElementById("dlZoomWrap");
  const dlImg = document.getElementById("dlImg");
  if (zoomWrap && dlImg) {
    zoomWrap.addEventListener("click", function(e) {
      if (e.target.closest("button")) return;
      zoomLevel = zoomLevel === 1 ? 2 : 1;
      dlImg.style.transform = "scale(" + zoomLevel + ")";
      zoomWrap.style.cursor = zoomLevel === 1 ? "zoom-in" : "zoom-out";
    });
    zoomWrap.addEventListener("wheel", function(e) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.25 : 0.25;
      zoomLevel = Math.max(1, Math.min(5, zoomLevel + delta));
      dlImg.style.transform = "scale(" + zoomLevel + ")";
      zoomWrap.style.cursor = zoomLevel === 1 ? "zoom-in" : "zoom-out";
    }, { passive: false });
  }

  m.addEventListener("click", function(e) { if (e.target === m) closeDetailLightbox(); });
  document.addEventListener("keydown", m._keyHandler = function(e) { if (e.key === "Escape") closeDetailLightbox(); if (e.key === "ArrowLeft") detailLightboxNav(-1); if (e.key === "ArrowRight") detailLightboxNav(1); });
}

function closeDetailLightbox() {
  const m = document.getElementById("detailLightbox");
  if (m) { if (m._keyHandler) document.removeEventListener("keydown", m._keyHandler); m.remove(); }
}

function detailLightboxNav(dir) {
  const m = document.getElementById("detailLightbox");
  if (!m) return;
  const imgs = m._imgs;
  let idx = m._idx + dir;
  if (idx < 0) idx = imgs.length - 1;
  if (idx >= imgs.length) idx = 0;
  m._idx = idx;
  const img = document.getElementById("dlImg");
  if (img) {
    img.style.transform = "scale(1)";
    img.style.opacity = "0.3";
    img.onload = function() { img.style.opacity = "1"; img.onload = null; };
    img.src = imgs[idx];
  }
  const zoomWrap = document.getElementById("dlZoomWrap");
  if (zoomWrap) zoomWrap.style.cursor = "zoom-in";
  // Update counter
  const counterEl = document.getElementById("dlCounter");
  if (counterEl) counterEl.textContent = (idx + 1) + " / " + imgs.length;
}

// Global scan handler — redirects QR scans to detail page
(function() {
  const params = new URLSearchParams(window.location.search);
  const scanCode = params.get("scan");
  if (scanCode && scanCode.startsWith("CP")) {
    const id = parseInt(scanCode.replace("CP", ""), 10);
    if (!isNaN(id) && id > 0) {
      window.location.href = "detail.html?id=" + id;
    }
  }
})();
