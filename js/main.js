import { database } from './firebase-config.js';

document.getElementById('join-game').onclick = function() {
    window.location.href = 'enter-game-code.html';
}

document.getElementById('create-game').onclick = function() {
    window.location.href = 'create-game.html';
}
