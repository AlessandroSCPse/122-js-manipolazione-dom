// Al click di un pulsante, deve apparire un alert con un numero random

// Seleziono il bottone che deve generare il numero random
const numberButton = document.querySelector('#number-btn');

// Mettiamo il bottone in ascolto dell'evento click
numberButton.addEventListener('click', function() {
    // Nella funzione del click: 
    // - creare un numero random
    // - stampare il numero nell'alert
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    alert(randomNumber);
});
