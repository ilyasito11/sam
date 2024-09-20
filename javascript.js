let currentIndex = 0;
const images = document.querySelectorAll('.zoombox-container img');
const totalImages = images.length;

function showNextImage() {
    // Réinitialise l'image actuelle
    images[currentIndex].classList.remove('active');

    // Passe à l'image suivante
    currentIndex = (currentIndex + 1) % totalImages; // Boucle les images
    images[currentIndex].classList.add('active');
}

function startSlideshow() {
    images[currentIndex].classList.add('active'); // Affiche la première image

    // Change d'image toutes les 4 secondes
    setInterval(() => {
        showNextImage();
    }, 4000);
}

window.onload = startSlideshow; // Démarre le diaporama lorsque la page est chargée
