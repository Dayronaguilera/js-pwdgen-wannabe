
// creare una password
var fName = prompt('inserisci il tuo nome');
var surName = prompt('insirisci il tuo cognome');
var color = prompt('inserisci il tuo colore preferito');

// sommare le richieste
var pass = fName + surName + color;

// il risultato appare in pagina 
document.getElementById('password').innerHTML = pass + 21;