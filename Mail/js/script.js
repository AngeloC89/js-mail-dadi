let userMail = document.getElementById('emailsearch')
let library = ['angelociulla89gmail.com','pincopallino99@htomail.com','cicciopasticcio09@yahoo.com','runnindog-33@live.it','moanapozzi-223@libero.it'];

let found = false;
let button = document.querySelector('.btn-dark')

button.addEventListener('click', function () {


    for (let i = 0; i < library.length; i++) {
        

        if (userMail.value === library[i]) {
            found = true;
        }

    }

    if (found) {
        console.log('Email found!');
       
        document.getElementById('result').innerHTML = 'Email found!';
    } else {
        console.log('Email not found.');
    
        document.getElementById('result').innerHTML = 'Email not found.';
    }
});






























