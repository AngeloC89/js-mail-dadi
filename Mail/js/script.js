



let button = document.querySelector('.btn-dark')


button.addEventListener('click', function () {
    let userMail = document.getElementById('emailsearch');
    let result = '';
    let found = false;
    let library = ['',
        'angelociulla89@gmail.com',
        'pincopallino99@hotmail.com',
        'cicciopasticcio09@yahoo.com',
        'runnindog-33@live.it',
        'moanapozzi-223@libero.it'];

    for (let i = 0; i < library.length; i++) {
        if (userMail.value.toLowerCase() === library[i].toLowerCase()) {
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






























