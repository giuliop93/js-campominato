//il computer deve generare 16 numeri casuali tra 1 e 100
// i numeri non possono essere duplicati
var bombe = [];
var numerInseriti = [];

while(bombe.length < 16){
    var numeroGenerato = Math.floor(Math.random()) * 100) + 1;
    
    if (bombe.indexOf(numeroGenerato) === -1) {
        bombe.push(numeroGenerato);
    }
}

console.log(bombe);

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
            alert("hai perso!")
        }
    } else {
        alert("Inserisci un numero differente");
    }
}

if (numeriInseriti.length == (100 - 16) {
    alert("hai vinto!");
}
