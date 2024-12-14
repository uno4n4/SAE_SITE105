// Récupère le bouton
const backToTopButton = document.getElementById("backToTop");

// Affiche ou cache le bouton en fonction de la position de la page
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";  // Affiche le bouton après 200px de défilement
    } else {
        backToTopButton.style.display = "none";  // Cache le bouton si on est tout en haut
    }
};

// Lorsque l'utilisateur clique sur le bouton, on remonte tout en haut
backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"  // Défilement doux vers le haut
    });
});

// Sélection des éléments
const toggleNavButton = document.getElementById('toggle-nav');
const sideNav = document.querySelector('.side-nav');

// Fonction pour ouvrir/fermer le menu
toggleNavButton.addEventListener('click', () => {
    sideNav.classList.toggle('open'); // Ajoute/enlève la classe "open"
});

const zoomInBtn = document.getElementById('zoomIn');
const zoomOutBtn = document.getElementById('zoomOut');
let zoomLevel = 1;

zoomInBtn.addEventListener('click', () => {
  if (zoomLevel < 2) { 
    zoomLevel += 0.1;
    document.body.style.transform = `scale(${zoomLevel})`;
    document.body.style.transformOrigin = '0 0';
  }
});

zoomOutBtn.addEventListener('click', () => {
  if (zoomLevel > 1) { 
    zoomLevel -= 0.1;
    document.body.style.transform = `scale(${zoomLevel})`;
    document.body.style.transformOrigin = '0 0';
  }
});


const toggleDarkModeBtn = document.getElementById('toggleDarkMode');
toggleDarkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


const stickers = document.querySelectorAll('.sticker');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    stickers.forEach((sticker) => {
      sticker.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    });
});


document.getElementById("learnMore").addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
});


document.getElementById("reserve").addEventListener("click", () => {
    alert("Réservation en cours... Merci !");
});

const quizOptions = document.querySelectorAll(".quiz-option");
const feedback = document.getElementById("quiz-feedback");


quizOptions.forEach(option => {
  option.addEventListener("click", () => {
    if (option.getAttribute("data-answer") === "true") {
      feedback.textContent = "Bonne réponse !";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Mauvaise réponse. Essayez encore.";
      feedback.style.color = "red";
    }
  });
});
