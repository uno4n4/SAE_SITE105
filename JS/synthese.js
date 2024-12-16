// Boutons de zoom et niveau de zoom initial
const zoomInBtn = document.getElementById('zoomIn');
const zoomOutBtn = document.getElementById('zoomOut');
let zoomLevel = 1;

// Augmenter le zoom en cliquant sur le bouton "Zoom +"
zoomInBtn.addEventListener('click', () => {
  if (zoomLevel < 2) { // Limite supérieure du zoom à 2
    zoomLevel += 0.1;
    document.body.style.transform = `scale(${zoomLevel})`;
    document.body.style.transformOrigin = '0 0'; // Définit l'origine de la transformation pour éviter un déplacement imprévu
  }
});

// Réduire le zoom en cliquant sur le bouton "Zoom -"
zoomOutBtn.addEventListener('click', () => {
  if (zoomLevel > 1) { // Limite inférieure du zoom à 1
    zoomLevel -= 0.1;
    document.body.style.transform = `scale(${zoomLevel})`;
    document.body.style.transformOrigin = '0 0';
  }
});

// Basculer entre le mode clair et le mode sombre
const toggleDarkModeBtn = document.getElementById('toggleDarkMode');
toggleDarkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode'); // Ajoute ou retire la classe 'dark-mode' au body
});

// Bouton pour ouvrir ou fermer la navigation latérale
const toggleNavButton = document.getElementById("toggle-nav");
const sideNav = document.querySelector(".side-nav");
toggleNavButton.addEventListener("click", () => {
  sideNav.classList.toggle("open"); // Ajoute ou retire la classe 'open' pour afficher/masquer le menu
});

const reviewsContainer = document.querySelector('.reviews-container');
const reviews = Array.from(document.querySelectorAll('.review'));

let currentIndex = 0;

function scrollReviews() {
    currentIndex++;
    if (currentIndex >= reviews.length) {
        currentIndex = 0; // Revenir au premier avis
    }
    reviewsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Défilement automatique toutes les 5 secondes
setInterval(scrollReviews, 5000);

