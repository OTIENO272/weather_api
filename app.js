// =====================================================
//  Weather App — app.js
//  Original weather logic + theme toggle
// =====================================================

const API_KEY = "YOUR_API_KEY"; // 🔑 Replace with your OpenWeather API key

// ── Date display ──────────────────────────────────
function displayDate() {
  const now = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  document.getElementById("date").textContent = now.toLocaleDateString("en-US", options);
}

displayDate();

// ── Fetch weather ─────────────────────────────────
async function getWeather() {
  const city = document.getElementById("searchBarInput").value.trim();
  if (!city) return;

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`City not found (${response.status})`);
    }

    const data = await response.json();
    updateUI(data);
  } catch (error) {
    showError(error.message);
  }
}

// ── Update UI with weather data ───────────────────
function updateUI(data) {
  const { name, main, weather } = data;

  document.getElementById("city").textContent = name;
  document.getElementById("temp").textContent = `${Math.round(main.temp)}°C`;
  document.getElementById("tempMax").textContent = `${Math.round(main.temp_max)}°C`;
  document.getElementById("tempMin").textContent = `${Math.round(main.temp_min)}°C`;
  document.getElementById("description").textContent = weather[0].description;

  // Weather icon from OpenWeather
  const iconCode = weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  document.getElementById("tempImg").innerHTML = `<img src="${iconUrl}" alt="${weather[0].description}">`;
}

// ── Error display ─────────────────────────────────
function showError(message) {
  document.getElementById("city").textContent = "City not found";
  document.getElementById("temp").textContent = "--°C";
  document.getElementById("tempMax").textContent = "--";
  document.getElementById("tempMin").textContent = "--";
  document.getElementById("description").textContent = message;
  document.getElementById("tempImg").innerHTML = "❓";
}

// ── Search on Enter key ───────────────────────────
document.getElementById("searchBarInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") getWeather();
});

// =====================================================
//  Theme Toggle
// =====================================================

const THEME_KEY = "weatherAppTheme";

function toggleTheme() {
  const html = document.documentElement;
  const btn = document.getElementById("themeToggleBtn");
  const icon = document.getElementById("themeIcon");

  const isDark = html.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem(THEME_KEY, newTheme);

  // Swap icon: moon for light mode (click to go dark), sun for dark mode (click to go light)
  icon.className = newTheme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  btn.setAttribute("aria-label", newTheme === "dark" ? "Switch to light mode" : "Switch to dark mode");

  // Spin animation
  btn.classList.remove("spinning");
  void btn.offsetWidth; // reflow to restart animation
  btn.classList.add("spinning");
}

// ── Restore saved theme on load ───────────────────
(function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}

  // Fall back to OS preference if no saved choice
  if (!saved && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    saved = "dark";
  }

  if (saved === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    const icon = document.getElementById("themeIcon");
    const btn  = document.getElementById("themeToggleBtn");
    if (icon) icon.className = "fa-solid fa-sun";
    if (btn)  btn.setAttribute("aria-label", "Switch to light mode");
  }
})();
