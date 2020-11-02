//Creare un array di oggetti
//ogni oggetto descriverà una bici da corsa con le seguenti proprietà
//nome e peso. Stampare a schermo la bici con peso minore.

//creo un array di oggetti dove descivo varie bici
var biciclette = [
    {
        'nome' : 'corsa',
        'peso' : 2,
    },{
        'nome' : 'lenta',
        'peso' : 20,
    },{
        'nome' : 'media',
        'peso' : 13,
    }
];

console.log(biciclette);

//creo un ciclo per leggere tutti gli oggetti
for (var i = 0; i < biciclette.length; i++) {

    var bici_corrente = biciclette[i];
    console.log(bici_corrente);

    //creo un ciclo per leggere ogni elemento dentro ogni oggetto
    for (const biciCorrenteKey in bici_corrente) {
        var min = Math.min( bici_corrente.peso)
        console.log(min);

        console.log(bici_corrente);

        var bici_peso_minore = bici_corrente.nome;
        console.log(bici_peso_minore);

        var risultato = document.getElementById('password').innerHTML = 'la bici con peso minore è ' + bici_peso_minore;
        console.log(risultato);
    }

}