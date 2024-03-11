let userMail = document.getElementById ('emailsearch')
let library = [
    'angelociulla89gmail.com',
    'pincopallino99@htomail.com',
    'cicciopasticcio09@yahoo.com',
    'runnindog-33@live.it',
    'moanapozzi-223@libero.it'
];

let trovato = false;

for(let i = 0; i < library.length; i++){
    if(userMail.value === library[i]){
        trovato = true;
    }

}

if(trovato){
    console.log('si trovato')
}
else {
    console.log('no non trovato')
};






























