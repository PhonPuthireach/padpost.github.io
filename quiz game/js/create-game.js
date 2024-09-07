import { database } from './firebase-config.js';
import { ref, set } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

document.getElementById('create-game-btn').onclick = function() {
    createGameInFirebase();
}

function createGameInFirebase() {
    const gameCode = generateGameCode();
    const dbRef = ref(database, 'games/' + gameCode);

    set(dbRef, {
        code: gameCode,
        players: [],
        questions: []
    }).then(() => {
        document.getElementById('game-code-display').innerText = 'Game Code: ' + gameCode;
    }).catch((error) => {
        console.error('Error creating game:', error);
    });
}

function generateGameCode() {
    return Math.floor(100000 + Math.random() * 900000); // Random 6-digit code
}
