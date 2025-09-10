const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Année automatique dans le footer
const yearSpan = document.querySelector(".year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// ✅ Formulaire avec confirmation
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // évite le rechargement
    if (confirm("Voulez-vous vraiment envoyer ce message ?")) {
      alert("✅ Merci ! Votre message a été envoyé.");
      contactForm.reset();
    } else {
      alert("❌ Envoi annulé.");
    }
  });
}
