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

const toggleNavButton = document.getElementById("toggle-nav");
const sideNav = document.querySelector(".side-nav");
const markers = document.querySelectorAll('.marker');
const countryInfo = document.getElementById('country-info');
const countryImage = document.getElementById('country-image');
const countryLink = document.getElementById('country-link');

toggleNavButton.addEventListener("click", () => {
  sideNav.classList.toggle("open");
});



const countries = {
  jordanie: {
    image: './IMAGES/jordanie.png',
    link: 'jordanie.html',
  },
  japon: {
    image: './IMAGES/japon.png',
    link: 'japon.html',
  },
  thailande: {
    image: './IMAGES/thailande.png',
    link: 'thailande.html',
  },
};


markers.forEach((marker) => {
  marker.addEventListener('click', (event) => {
    const country = marker.getAttribute('data-country');


    countryImage.src = countries[country].image;
    countryLink.href = countries[country].link;

    countryInfo.style.display = 'block';


    const markerRect = marker.getBoundingClientRect();
    countryInfo.style.top = `${markerRect.top + window.scrollY + 20}px`;
    countryInfo.style.left = `${markerRect.left + window.scrollX + 20}px`;
  });
});


document.addEventListener('click', (event) => {
  if (!event.target.classList.contains('marker') && !countryInfo.contains(event.target)) {
    countryInfo.style.display = 'none';
  }
});
