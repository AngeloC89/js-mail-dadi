//Creo delle variabili per ottenere dall'utente delle scelte

let userChoice = document.getElementById('userchoice');
let userNumber = document.getElementById('numberchoice');
console.log(userchoice, userNumber);

//inserisco la funzione random che genera numeri a caso.
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//identifico il bottone dentro una variabile tramite la sua classe
let elButton = document.querySelector('.btn-primary');


//dico al bottone quello che deve fare non appena lo clikkiamo
elButton.addEventListener('click', function () {
    let pcnumber = getRndInteger(1, 6);
    console.log(pcnumber);
    let sum = parseInt(userNumber.value) + pcnumber;
    console.log(sum);
    let userChoiceV = userChoice.value;


    if ((sum % 2 === 0 && userChoiceV === 'even') || (sum % 2 !== 0 && userChoiceV === 'odd')) {
        console.log('Hai vinto!');
    } else {
        console.log('Hai perso!');
    }});




























