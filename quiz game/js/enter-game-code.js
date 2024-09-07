import { database } from './firebase-config.js';
import { ref, get } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

document.getElementById('play-game').onclick = function() {
    const gameCode = document.getElementById('game-code').value;
    verifyGameCode(gameCode);
}

function verifyGameCode(code) {
    const dbRef = ref(database, 'games/' + code);
    get(dbRef).then((snapshot) => {
        if (snapshot.exists()) {
            window.location.href = 'game.html';
        } else {
            alert('Invalid game code');
        }
    }).catch((error) => {
        console.error('Error verifying game code:', error);
    });
}
