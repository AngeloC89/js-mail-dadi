




//inserisco la funzione random che genera numeri a caso.
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//identifico il bottone dentro una variabile tramite la sua classe
let elButton = document.querySelector('.btn-primary');




// <img src="./dadi/1.svg" alt="1" class="img-fluid ">



//dico al bottone quello che deve fare non appena lo clikkiamo
elButton.addEventListener('click', function () {
    let pcnumber = getRndInteger(1, 6);
    console.log(pcnumber);
    let userNumber = getRndInteger(1, 6);
    console.log(userNumber);
    let sum = userNumber + pcnumber;
    console.log(sum);
    let win = document.getElementById('win');
    let userDice = document.getElementById('human');
    let pcDice = document.getElementById('computer');
    if(pcnumber === userNumber){
        win.innerHTML = ' Pareggio';
        pcDice.innerHTML = `
        <img src="./dadi/${pcnumber}.svg" alt="${pcnumber}" class="img-fluid ">
        `
        userDice.innerHTML = `
        <img src="./dadi/${userNumber}.svg" alt="${userNumber}" class="img-fluid ">
        `
    }
    else if( pcnumber < userNumber){
        win.innerHTML = ' Hai vinto!!!';
        pcDice.innerHTML = `
        <img src="./dadi/${pcnumber}.svg" alt="${pcnumber}" class="img-fluid ">
        `
        userDice.innerHTML = `
        <img src="./dadi/${userNumber}.svg" alt="${userNumber}" class="img-fluid ">
        `

    } else {
        win.innerHTML = ' Hai perso!!!';
        pcDice.innerHTML = `
        <img src="./dadi/${pcnumber}.svg" alt="${pcnumber}" class="img-fluid ">
        `
        userDice.innerHTML = `
        <img src="./dadi/${userNumber}.svg" alt="${userNumber}" class="img-fluid ">
        `

    }
    



    document.getElementById('resultpc').innerHTML = pcnumber;

    document.getElementById('resultuser').innerHTML = userNumber;

});






























