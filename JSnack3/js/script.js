//A partire da un array di oggetti, creare una copia dell'array
//e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.


//creo l array di oggetti
var studenti = [

    { // questo è il primo oggetto dell'array a posizione 0
        'nome': 'carmine',
        'cognome': 'pepi',
        'eta': 31,
    },

    { // questo è il secondo oggetto dell'array a posizione 1
        'nome': 'rino',
        'cognome': 'pape',
        'eta': 16,
    }
];

//creo una variabile dove inserire la lettera casuale
var lettera_casuale_alfabeto = '';
//creo una variabile con le lettere del alfabeto
var alfabeto = "abcdefghijklmnopqrstuvwxyz";

while (lettera_casuale_alfabeto.length < 1) {
    lettera_casuale_alfabeto += alfabeto[Math.floor(Math.random() * alfabeto.length)];
}
console.log(lettera_casuale_alfabeto);

//creo la copia dell array
var nuovo_array_studenti = new Object(studenti);
console.log(nuovo_array_studenti);

//ciclo gli elementi dell array
for (var i = 0; i < nuovo_array_studenti.length; i++) {
    //questi sono gli elementi nel ciclo dell array
    console.log(nuovo_array_studenti[i]);
    //creo un ciclo for in per leggere ogni oggetto
    for (const studentiKey in nuovo_array_studenti[i]) {
        //aggiungo una nuova chiave di nome positon
        nuovo_array_studenti[i].position = lettera_casuale_alfabeto;
        console.log(nuovo_array_studenti);
    }
}

console.log(nuovo_array_studenti)