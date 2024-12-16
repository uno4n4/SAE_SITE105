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

// Liste des marqueurs de pays et conteneurs d'information
const markers = document.querySelectorAll('.marker');
const countryInfo = document.getElementById('country-info');
const countryImage = document.getElementById('country-image');
const countryLink = document.getElementById('country-link');

// Données des pays (images et liens)
const countries = {
  jordanie: {
    image: './IMAGES/jordanie.png',
    link: './HTML/jordanie.html',
  },
  japon: {
    image: './IMAGES/japon.png',
    link: './HTML/montfuji.html',
  },
  thailande: {
    image: './IMAGES/thailande.png',
    link: './HTML/kohphiphi.html',
  },
};

// Gestionnaire d'événements pour les marqueurs de pays
markers.forEach((marker) => {
  marker.addEventListener('click', (event) => {
    const country = marker.getAttribute('data-country'); // Récupère le pays à partir de l'attribut 'data-country'

    // Met à jour l'image, le lien, et affiche les informations sur le pays
    countryImage.src = countries[country].image;
    countryLink.href = countries[country].link;
    countryInfo.style.display = 'block'; // Rend visible la boîte d'information

    // Positionne la boîte d'information près du marqueur
    const markerRect = marker.getBoundingClientRect();
    countryInfo.style.top = `${markerRect.top + window.scrollY + 20}px`;
    countryInfo.style.left = `${markerRect.left + window.scrollX + 20}px`;
  });
});

// Masque les informations sur le pays si l'utilisateur clique ailleurs
document.addEventListener('click', (event) => {
  if (!event.target.classList.contains('marker') && !countryInfo.contains(event.target)) {
    countryInfo.style.display = 'none'; // Cache la boîte d'information
  }
});
