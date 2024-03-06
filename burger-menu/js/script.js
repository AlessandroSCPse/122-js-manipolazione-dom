// Seleziono l'elemento #menu-toggle e al click di menu toggle aggiungo la classe
// active ad .hamburger-menu
const burgerToggle = document.querySelector('#menu-toggle');
burgerToggle.addEventListener('click', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.classList.add('active');
});

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.classList.remove('active');
});

