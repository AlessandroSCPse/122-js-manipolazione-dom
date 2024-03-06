// Il software deve chiedere all’utente il suo nome 
// e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>”, il colore del 
// nome deve essere azzurro o rosa a seconda del sesso inserito

// Chiediamo all'utente nome e sesso
const userName = prompt('Dimmi il tuo nome');
const userGender = prompt("Dimmi se sei 'maschio' o 'femmina'");

// Se l'utente scrive 'maschio' la classe sarà lightblue altrimenti pink
let cssClass;
if(userGender === 'maschio') {
    cssClass = 'lightblue';
} else {
    cssClass = 'pink';
}
console.log(cssClass);

// Seleziono l'elemento con id saluto e appendo il nome dell'utente con la
// classe giusta (quindi andrà dentro uno span)
const pageTitle = document.querySelector('#saluto');
// pageTitle.innerHTML += '<span class="' + cssClass + '">' + userName + '</span>';
pageTitle.innerHTML += `<span class="${cssClass}">${userName}</span>`;
console.log(pageTitle);