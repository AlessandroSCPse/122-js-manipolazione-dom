// Ciao Visitatore!
// ****Imposta il nome di colore rosso in vari modi:
// Solo con HTML+CSS
// Scrivendo su element.style
// Aggiungendo la classe con JS

// Selezionare l'elemento tramite id
const element = document.querySelector('#greeting');
console.log(element);

// aggiungo lo stile in linea all'elemento
// element.style.color = 'red';

// Aggiungo la classe red all'elemento
element.classList.add('red');
