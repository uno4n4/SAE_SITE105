const toggleNavButton = document.getElementById("toggle-nav");
const sideNav = document.querySelector(".side-nav");

toggleNavButton.addEventListener("click", () => {
    sideNav.classList.toggle("open");
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