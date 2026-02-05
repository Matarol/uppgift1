// Hämtar header.html och infogar det i elementet med id "header"
fetch("header.html")
// När svaret är mottaget, konvertera det till text
  .then((response) => response.text())
  // När texten är mottagen, infoga den i elementet med id "header". Efter att headern har laddats exekveras resten av koden.
  .then((data) => {
    document.getElementById("header").innerHTML = data;
    
    // Hämtar knappen för att växla tema
    const toggleBtn = document.getElementById("toggle-theme-btn");

    // Om knappen finns, lägg till event listener för att växla tema
    if (toggleBtn) {
      // Ladda det sparade temat från localStorage eller använd "light" som standard
      const savedTheme = localStorage.getItem("theme") || "light";
      document.documentElement.setAttribute("data-theme", savedTheme);

      // Uppdatera knappens text baserat på det aktuella temat
      toggleBtn.textContent =
        savedTheme === "dark" ? "☀️ Ljust Läge" : "🌙 Mörkt Läge";

      // Lägg till event listener för att växla mellan mörkt och ljust läge
      toggleBtn.addEventListener("click", (e) => {
        e.preventDefault();

        // Hämta det aktuella temat och bestäm nästa tema
        const current = document.documentElement.getAttribute("data-theme") || "light";
        // Om current är "dark", sätt next till "light", annars sätt next till "dark" - säkrar att det motsatta temat alltid väljs
        const next = current === "dark" ? "light" : "dark";

        // Uppdatera data-theme attributet på documentElement och spara det nya temat i localStorage
        // Att spara det nya temat i localStorage gör att användarens val av tema bevaras även efter att sidan laddats om
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);

        // Uppdatera knappens text baserat på det nya temat
        toggleBtn.textContent =
          next === "dark" ? "☀️ Ljust Läge" : "🌙 Mörkt Läge";
      })
    };
  })
  // Hantera eventuella fel som kan uppstå under hämtningen av header.html
  .catch((error) => console.error("Error loading header:", error));
