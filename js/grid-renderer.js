const gridMap = {
  gpu: "gpu-grid",
  cpu: "cpu-grid",
  ram: "ram-grid",
  mobo: "mobo-grid",
  m2: "m2-grid",
  air: "air-grid",
  aio: "aio-grid",
  con: "con-grid",
  ctrl: "ctrl-grid",
  low: "low-grid",
  mid: "mid-grid",
  high: "high-grid",
  x: "x-grid",
};

// ===============================
// RENDER PRODUCTS
// ===============================
function renderProducts(type) {
  const grid = document.getElementById(gridMap[type]);
  if (!grid) return;

  grid.innerHTML = "";

  const filtered = products.filter(p => p.type === type);

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <a href="product.html?product=${product.key}" class="product-link">
        <img src="${product.image}" alt="${product.name}">
        
        <h3>${product.name}</h3>

        <p class="desc">${product.desc}</p>

        <p class="price">${product.price}</p>

        <button class="view-btn">View Product</button>
      </a>
    `;

    grid.appendChild(card);
  });
}

// ===============================
// INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("gpu");
  renderProducts("cpu");
  renderProducts("ram");
  renderProducts("mobo");
  renderProducts("m2");
  renderProducts("air");
  renderProducts("aio");
  renderProducts("con");
  renderProducts("ctrl");
  renderProducts("low");
  renderProducts("mid");
  renderProducts("high");
  renderProducts("x");
});