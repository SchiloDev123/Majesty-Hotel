// services.js - Script pour la page Services

document.addEventListener("DOMContentLoaded", () => {
  // Menu hamburger (mobile)
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // Année automatique dans le footer (si tu ajoutes un footer)
  const yearSpan = document.querySelector(".year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // ✅ Réservation avec confirmation
  const chambres = document.querySelectorAll(".chambre");
  chambres.forEach((chambre) => {
    chambre.addEventListener("click", () => {
      const titre = chambre.querySelector("h3").textContent;
      if (confirm("Voulez-vous vraiment réserver : " + titre + " ?")) {
        alert("✅ Réservation confirmée pour : " + titre);
      } else {
        alert("❌ Réservation annulée.");
      }
    });
  });
});
