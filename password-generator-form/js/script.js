// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito23

// Quando l'utente clicca sul bottone dobbiamo leggere i valori delle input
const generateButton = document.querySelector('#generate-button');
generateButton.addEventListener('click', function () {
    
    // const userNameInput = document.querySelector('#user-name');
    const userName = document.querySelector('#user-name').value;
    const lastName = document.querySelector('#user-lastname').value;
    const userColor = document.querySelector('#user-color').value;
    
    // concatenare le 3 informazioni e concatenare anche il 23
    const password = userName + lastName + userColor + '23';

    // stamparlo nel div con id user-message
    const userMessageDiv = document.querySelector('.user-message');
    userMessageDiv.innerHTML = 'La tua password è: ' + password;
    userMessageDiv.classList.add('active');
});

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', function() {
    document.querySelector('#user-name').value = '';
    document.querySelector('#user-lastname').value = '';
    document.querySelector('#user-color').value = '';

    const userMessageDiv = document.querySelector('.user-message');
    userMessageDiv.innerHTML = '';
    userMessageDiv.classList.remove('active');
});