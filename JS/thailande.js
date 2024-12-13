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
