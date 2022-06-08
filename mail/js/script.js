// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// elenco mail
const mailList = ['ciao@gmail.com', 'come@gmail.com', 'stai@gmail.com']

const userInput = prompt('scrivi la tua mail');

let userMail = false;

// stampo in console l'array
for(let i = 0; i < mailList.length; i++) {

    const mail = mailList[i];
    
    if(userInput === mail) {
        userMail = true;
    }

}

if(userMail) {
    alert('Benvenuto!')
} else {
    alert('mail non corretta')
}