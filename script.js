const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

function updateCopyrightYear() {
  // 1. On récupère l'élément HTML qui affichera l'année.
  const yearElement = document.querySelector(".year");

  // 2. On vérifie si l'élément existe. C'est une bonne pratique pour éviter les erreurs.
  if (yearElement) {
    // 3. On crée un nouvel objet Date pour obtenir la date actuelle.
    const currentYear = new Date().getFullYear();

    // 4. On met à jour le contenu de l'élément avec l'année en cours.
    yearElement.textContent = currentYear;
  }
}
updateCopyrightYear();
