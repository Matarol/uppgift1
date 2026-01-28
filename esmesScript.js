const toggleBtn = document.getElementById("toggle-theme-btn");

toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light") {
        toggleBtn.textContent = "☀️ Ljust Läge";
    } else {
        toggleBtn.textContent = "🌙 Mörkt Läge";
    }
    document.documentElement.setAttribute("data-theme", current === "dark" ? "light" : "dark");
});