const nomeUtente = prompt('Inserisci il tuo nome');

const cognomeUtente = prompt('Inserisci il tuo cognome');

const colorePreferito = prompt('Inserisci il tuo colore preferito');

let annoCorrente = 23;

const newPass = nomeUtente + cognomeUtente + colorePreferito + annoCorrente;

document.getElementById('newPass').innerHTML = newPass;