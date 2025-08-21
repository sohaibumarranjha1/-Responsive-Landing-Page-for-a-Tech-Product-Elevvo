// ==== Theme toggle (persist in localStorage) ====
const root = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const savedTheme = localStorage.getItem("cloudsync-theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  themeIcon.textContent = savedTheme === "dark" ? "🌙" : "☀️";
} else {
  root.setAttribute("data-theme", "dark"); // default Elevvo style
  themeIcon.textContent = "🌙";
}

toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("cloudsync-theme", next);
  themeIcon.textContent = next === "dark" ? "🌙" : "☀️";
});

// ==== Mobile drawer ====
const burger = document.getElementById("burger");
const drawer = document.getElementById("mobileDrawer");

burger.addEventListener("click", () => {
  const open = drawer.classList.toggle("open");
  drawer.hidden = !open;
  burger.setAttribute("aria-expanded", open ? "true" : "false");
});

// Close drawer when a link is clicked
drawer.querySelectorAll(".drawer-link").forEach(link => {
  link.addEventListener("click", () => {
    drawer.classList.remove("open");
    drawer.hidden = true;
    burger.setAttribute("aria-expanded", "false");
  });
});
