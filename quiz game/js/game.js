import { database } from './firebase-config.js';
import { ref, set, get } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

let timer;

document.getElementById('start-quiz').onclick = function() {
    const playerName = document.getElementById('player-name').value;
    addPlayerToFirebase(playerName);
    startQuiz();
}

function startQuiz() {
    document.getElementById('quiz-section').style.display = 'block';
    selectRandomPlayerAndQuestion();
    startTimer(50); // 50 seconds for each question
}

function startTimer(seconds) {
    timer = setInterval(function() {
        document.getElementById('timer').innerText = --seconds;
        if (seconds <= 0) {
            clearInterval(timer);
            // Handle end of question timer
        }
    }, 1000);
}

function selectRandomPlayerAndQuestion() {
    // Fetch players and questions from Firebase and select randomly
    // For demonstration, use placeholder question
    document.getElementById('question').innerText = 'What is the capital of France?';
}

function addPlayerToFirebase(playerName) {
    // Add player to Firebase under the current game session
    // For demonstration, assume a static game code
    const gameCode = '123456'; // Replace with actual game code logic
    const dbRef = ref(database, 'games/' + gameCode + '/players');

    set(ref(dbRef, playerName), {
        name: playerName
    }).catch((error) => {
        console.error('Error adding player:', error);
    });
}
