// =========================
// HERO SLIDESHOW
// =========================

const slides = [
  "Images/slideshow/slide1.png",
  "Images/slideshow/slide2.png",
  "Images/slideshow/slide3.png",
  "Images/slideshow/slide4.png",
  "Images/slideshow/slide5.png"
];

const heroBg = document.querySelector(".hero-slideshow");

let current = 0;

function initSlideshow() {
  if (!heroBg) return;

  heroBg.style.backgroundImage = `url('${slides[current]}')`;
  heroBg.style.opacity = 1;

  setInterval(() => {
    current = (current + 1) % slides.length;

    heroBg.style.opacity = 0;

    setTimeout(() => {
      heroBg.style.backgroundImage = `url('${slides[current]}')`;
      heroBg.style.opacity = 1;
    }, 500);
  }, 4000);
}

// =========================
// SMOOTH SCROLL BUTTON
// =========================

function initScrollButton() {
  const btn = document.getElementById("exploreBtn");
  const target = document.getElementById("products");

  if (!btn || !target) return;

  btn.addEventListener("click", () => {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

// =========================
// PAGE FADE (SAFE)
// =========================

function initPageFade() {
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (!href || href.startsWith("#")) return;

      e.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 400);
    });
  });
}

// =========================
// INIT ALL
// =========================

document.addEventListener("DOMContentLoaded", () => {
  initSlideshow();
  initScrollButton();
  initPageFade();
});