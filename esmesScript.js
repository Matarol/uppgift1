fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
    
    // Hämtar knappen för att växla tema
    const toggleBtn = document.getElementById("toggle-theme-btn");

    // Safety check (prevents errors on pages without the button)
    if (toggleBtn) {
      // Load saved theme (runs once on page load)
      const savedTheme = localStorage.getItem("theme") || "light";
      document.documentElement.setAttribute("data-theme", savedTheme);

      // Set initial button text
      toggleBtn.textContent =
        savedTheme === "dark" ? "☀️ Ljust Läge" : "🌙 Mörkt Läge";

      // Toggle on click
      toggleBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const current =
          document.documentElement.getAttribute("data-theme") || "light";
        const next = current === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);

        toggleBtn.textContent =
          next === "dark" ? "☀️ Ljust Läge" : "🌙 Mörkt Läge";
      })
    };
  })
  .catch((error) => console.error("Error loading header:", error));
