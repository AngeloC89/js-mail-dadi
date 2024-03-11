//Creo delle variabili per ottenere dall'utente delle scelte

let userChoice = document.getElementById('userchoice');


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
    let userNumber = getRndInteger(1, 6);
    console.log(userNumber);
    let sum = userNumber + pcnumber;
    console.log(sum);
    let userChoiceV = userChoice.value;
    result = '';

    if (userChoiceV === '') {
        // Mostra un messaggio all'utente
        document.getElementById('result').innerHTML = 'Effettua una scelta tra pari e dispari.';
        return; // Esce dalla funzione
      }

    if ((sum % 2 === 0 && userChoiceV === 'even') || (sum % 2 !== 0 && userChoiceV === 'odd')) {
        result = sum + ' Hai vinto';
        console.log('Hai vinto!');
    } else {
        result = sum + ' Hai perso';
        console.log('Hai perso!');
    }
  
          document.getElementById('result').innerHTML = result;
  
    });

  




























