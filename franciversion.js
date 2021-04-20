//il computer deve generare 16 numeri casuali tra 1 e 100
// i numeri non possono essere duplicati
function mioIndexOf(array, element) {
    for(var i = 0; i < array.length; i++) {
        if(element == array(i)) {
            return i;
        }
    }
    return -1;
}


var bombe = [];
var numerInseriti = [];

var NUMERO_MASSIMO = 100;
var NUMERO_BOMBE = 1;

var difficoltà = -1;
var difficoltàValida = false;
while(!difficoltàValida){
    difficoltà = parseInt(prompt("Scegli la difficoltà"));
    switch (difficoltà) {

    }
}

while (difficoltà < 0 || difficoltà > 2) {
    difficoltà = parseInt(prompt("Scegli la difficoltà"));

    switch (difficoltà) {
        case 0:
            break;
        case 1:
            numeroMassimo
        case 2:
            numeroMassimo = 50;
            break;
        default:
            alert("Inserisci un valore valido")
            break;
    }
}

while (bombe.length < 16) {
    var numeroGenerato = Math.floor(Math.random()) * 100) + 1;

    if (bombe.indexOf(numeroGenerato) === -1) {
        bombe.push(numeroGenerato);
    }
}

console.log("bombe generate", bombe);

var bombaTrovata = false;

while (numeriInseriti.length < (100 - 16) && !bombaTrovata) {
    //chiedo all'utente un numero
    //controllo se l'utente ha già inserito il numero
    //se sì: messaggio di errore
    //se no: controllo se è una bomba > se sì' bombaTrovata = true, se no continua
    var numeroUtente = parseInt(prompt("Inserisci un numero"));

    if (numeriInseriti.indexOf(numeroUtente) === -1) {
        numeriInseriti.push(numeroUtente);
        if (bombe.indexOf(numeroUtente) !== -1) {
            bombaTrovata = true;
            alert("hai perso! Il tuo punteggio è: ' + numeriInseriti.length + '!")
        } else {
            numeriInseriti.push(numeroUtente);
        }
    } else {
        alert("Inserisci un numero differente");
    }
}

if (bombaTrovata) {
    alert("hai perso! Il tuo punteggio è: ' + numeriInseriti.length + '!")
} else {
    alert("hai vinto! Il tuo punteggio è: ' + numeriInseriti.length + '!")
}

if (numeriInseriti.length == (100 - 16) {
    alert("hai vinto!");
}
