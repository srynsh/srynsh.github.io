const body = document.body;
const colorToggle = document.getElementById("colorToggle");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const navAnchors = document.querySelectorAll("[data-nav-link]");
const yearEl = document.getElementById("year");

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const storedTheme = localStorage.getItem("suryaansh-theme");
const initialTheme = storedTheme || (prefersDark.matches ? "dark" : "light");
body.dataset.theme = initialTheme;

const setTheme = (theme) => {
  body.dataset.theme = theme;
  localStorage.setItem("suryaansh-theme", theme);
};

colorToggle?.addEventListener("click", () => {
  const next = body.dataset.theme === "dark" ? "light" : "dark";
  setTheme(next);
});

navToggle?.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  navLinks.classList.toggle("open");
});

navAnchors.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    navToggle.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

const buildStars = () => {
  const field = document.querySelector(".starfield");
  if (!field) return;
  const starCount = 80;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < starCount; i += 1) {
    const star = document.createElement("span");
    star.className = "star";
    const delay = Math.random() * 6;
    const duration = 4 + Math.random() * 6;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${delay}s`;
    star.style.setProperty("--duration", `${duration}s`);
    fragment.appendChild(star);
  }

  field.appendChild(fragment);
};

buildStars();

yearEl && (yearEl.textContent = new Date().getFullYear());
