
// creare una password
var name = prompt('inserisci il tuo nome');
var surName = prompt('insirisci il tuo cognome');
var color = prompt('inserisci il tuo colore preferito');

// sommare le richieste
var pass = name + surName + color;

// il risultato appare in pagina 
document.getElementById('password').innerHTML = pass + 21;