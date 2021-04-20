// Il computer deve generare 16 numeri casuali tra 1 e 100.
(function () {
    function generateRandomNumbers(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    }

    var minNumber = 1;
    var maxNumber = 100;
    var aiNumbersLength = 16;
    var aiNumbers = [];
    var userNumbers = [];

    //la seguente funzione chiede all'utente di inserire un numero, tramite prompt, x volte, dove x è la differenza tra il valore "maxNumber" e "aiNumbersLength".
    // controllare che il numero inserito sia un numero valido e che noon sia ancora stato usato. Deve anche controllare che il numero non esista all'interno dell'array "aiNumbers"

    function askUserNumbers() {
        var userlengthMax = maxNumber - aiNumber - aiNumbersLength;

        //finchè la length dei numeri inseriti è minore della length massima di numeri che l'utente può inserire,
        // continuo a chiedere all'utente di inserire un numero tramite prompt
        while (userNumbers.length <= userLengthMax && !gameOver) {
            var userInput = prompt("inserisci un numero tra " + aiNumber + " e " + maxNumber + ".("));

            //se il valore inserito è valido, ritorna TRUE
            // se il valore NON è valido e l'utente deve inserirlo, ritorna FALSE
            // se il valore non è valido perchè è una mina, ritorna "game over"

            var inputIsValid = checkUserInput(userInput)

            if (!inputIsValid || inputIsValid !== "game over") {
                alert("numero inserito non valido");
            } else if (inputIsValid === "game over") {
                gameOver = true;

                alert("hai perso dopo aver inserito" + userNumbers.lenght + "numeri.")
            } else {
                userNumbers.push(parseInt(userInput));
            }

            if (userNumbers.length === userLengthMax) {
                gameOver = true
                alert("hai vinto!")
            }
        }

        //la seguente funzione deve controllare se:
        - il valore è un numero Reale, non è minore di minNumber, non è maggiore di maxNUmber e non sia già stato usato dall'utente

        function checkUserInput(inputValue) {
            var result = true
            var numberToCheck = parseint(inputValue)

            if (isNaN(numberToCheck)) {
                return false;
            }

            if (numberToCheck < minNumber || numberToCheck > maxNumber) {
                return false;
            }

            if (userNumbers.indexOf(numberToCheck) > -1) {
                return false;
            }

            return result
        }

        for (var i = 0; i < userlengthMax; i++) {
            if (numeroIsDoppio) {
                i--
                alert("numero non valido")
            } else {
                push
            }
        }
    }

    //la seguente funziona crea i numeri iniziali del computer e si assicura che i numeri non siano doppi

    function createAiNumbers() {
        do {
            var numeroRandom = generateRandomNumbers(minNumber, maxNumber);

            if (aiNumbers.indexOf(numeroRandom) === -1) {
                aiNumbers.push(numeroRandom);
            }
        } while (aiNumbers.length < aiNumbersLength)
        console.log(aiNumbers);
    }
    createAiNumbers()
})()
// I numeri non possono essere duplicati.

// In seguito deve chiedere all’utente (100 - 16) volte di inserire
// un numero alla volta, sempre compreso tra 1 e 100.

// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, 
// altrimenti si continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato” 
// o raggiunge il numero massimo possibile di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha inserito un numero consentito.