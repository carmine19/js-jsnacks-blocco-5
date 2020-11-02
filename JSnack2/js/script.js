//Creare un array di nomi e chiedere all'utente due numeri.
//Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

//creo un array di nomi
var nomi = ['pippo', 'pluto', 'paperino', 'topolino', 'paperone']
console.log(nomi);

var numero_utente_1 = parseInt(prompt('inserisci il primo numero'));
console.log(numero_utente_1);

var numero_utente_2 = parseInt(prompt('inserisci il secondo numero'));
console.log(numero_utente_2);

var nuovi_nomi = nomi.slice(numero_utente_1, numero_utente_2);
console.log(nuovi_nomi);

