import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBMqiBhh2GP661O0LvF3R8P2SQ-vFdvDRw",
  authDomain: "online-game-9d4bf.firebaseapp.com",
  databaseURL: "https://online-game-9d4bf-default-rtdb.firebaseio.com",
  projectId: "online-game-9d4bf",
  storageBucket: "online-game-9d4bf.appspot.com",
  messagingSenderId: "757460372786",
  appId: "1:757460372786:web:9db6f3cb60209809705b2b",
  measurementId: "G-PT9PBZF2S3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
