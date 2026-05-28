const params = new URLSearchParams(window.location.search);
const productKey = params.get("product");

const product = productDatabase?.[productKey];

// ===============================
// SAFE FAIL
// ===============================
if (!product) {
  document.body.innerHTML = `
    <div style="color:white;text-align:center;padding:50px">
      <h1>Product Not Found</h1>
    </div>
  `;
  throw new Error("Invalid product key: " + productKey);
}

// ===============================
// DOM CACHE
// ===============================
const el = {
  img: document.getElementById("product-image"),
  info: document.getElementById("product-info"),
  features: document.getElementById("feature-grid"),
  specs: document.getElementById("spec-table"),
  canvas: document.getElementById("performanceChart")
};

// ===============================
// STATE
// ===============================
let chartInstance = null;
let currentResolution = "1080p";

// ===============================
// HELPERS
// ===============================
function getPerformanceData(p, resolution) {
  if (!p.performance) return [];

  if (p.performance.tiers) {
    return p.performance.tiers[resolution] || p.performance.tiers["1080p"];
  }

  return p.performance.data || [];
}

function createGradient(ctx) {
  const g = ctx.createLinearGradient(0, 0, 0, 400);
  g.addColorStop(0, "#d4af37");
  g.addColorStop(1, "#7a5c00");
  return g;
}

// ===============================
// RENDER IMAGE + INFO
// ===============================
if (el.img) {
  el.img.innerHTML = `
    <img src="${product.img}" style="width:100%;max-width:500px;">
  `;
}

if (el.info) {
  el.info.innerHTML = `
    <h1>${product.name}</h1>
    <p class="price">${product.price}</p>
    <p>${product.desc}</p>
    <button class="buy-btn">Add to Cart</button>
  `;
}

// ===============================
// FEATURES
// ===============================
if (el.features) {
  el.features.innerHTML = "";

  (product.features || []).forEach(f => {
    const div = document.createElement("div");
    div.className = "feature";
    div.textContent = f;
    el.features.appendChild(div);
  });
}

// ===============================
// SPECS TABLE
// ===============================
if (el.specs) {
  el.specs.innerHTML = "";

  if (product.specs) {
    el.specs.innerHTML = Object.entries(product.specs)
      .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`)
      .join("");
  }
}

// ===============================
// CHART BUILDER
// ===============================
function buildChart(p) {
  if (!el.canvas || !p.performance || !window.Chart) return;

  const ctx = el.canvas.getContext("2d");

  if (chartInstance) {
    chartInstance.destroy();
  }

  const labelMap = {
    gpu: "FPS Performance",
    cpu: "Compute Score",
    ram: "Memory Efficiency",
    ssd: "Storage Performance",
    mobo: "Platform Capability"
  };

  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: p.performance.labels,
      datasets: [{
        label: labelMap[p.performance.type] || "Performance",
        data: getPerformanceData(p, currentResolution),
        backgroundColor: createGradient(ctx),
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: "#fff" }
        }
      },
      scales: {
        x: {
          ticks: { color: "#ccc" },
          grid: { color: "rgba(255,255,255,0.05)" }
        },
        y: {
          ticks: { color: "#ccc" },
          grid: { color: "rgba(255,255,255,0.05)" }
        }
      }
    }
  });
}

// ===============================
// RESOLUTION TOGGLE SYSTEM (SAFE BIND)
// ===============================
function initResolutionToggle() {
  const resButtons = document.querySelectorAll(".res-btn");

  if (!resButtons.length) return;

  resButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const res = btn.dataset.res;
      currentResolution = res;

      resButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      if (chartInstance) {
        chartInstance.data.datasets[0].data =
          getPerformanceData(product, currentResolution);

        chartInstance.update();
      }
    });
  });
}

// ===============================
// INIT (SAFE)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  buildChart(product);
  initResolutionToggle();
});