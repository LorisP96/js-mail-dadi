// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// giocatori
const userPc = Math.floor(Math.random() * 6) + 1;

const userPlayer = Math.floor(Math.random() * 6) + 1;

// stabiliamo chi vince
if(userPlayer < userPc) {
    alert(`il pc ha vinto (PC:${userPc}, Tu:${userPlayer})`);
} else if (userPlayer > userPc) {
    alert(`complimenti, hai vinto (PC:${userPc}, Tu:${userPlayer})`);
} else {
    alert(`pareggio (PC:${userPc}, Tu:${userPlayer}`);
}

