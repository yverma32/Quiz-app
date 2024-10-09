import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

console.log('Firebase SDK loaded');

const firebaseConfig = {
  apiKey: "AIzaSyBmixbyjRdqtM09spZpoOSI9srdEc9Jwpw",
  authDomain: "quiz-app-9c8a7.firebaseapp.com",
  projectId: "quiz-app-9c8a7",
  storageBucket: "quiz-app-9c8a7.appspot.com",
  messagingSenderId: "883333277901",
  appId: "1:883333277901:web:37fd439151dfdcbf1d6184",
  measurementId: "G-TN4LTD5MC3",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

console.log('analytics', analytics);

document?.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log('register', email, password);
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert('Registered successfully!');
            window.location.href = 'login.html';
        })
        .catch((error) => {
            alert(error.message);
        });
});

document?.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('inside login');
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log('login', email, password);
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert('Logged in successfully!');
            window.location.href = 'quiz.html';
        })
        .catch((error) => {
            alert(error.message);
        });
});


document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('quizTitle').value;
    const questions = document.getElementById('quizQuestions').value.split('\n');
    alert(`Quiz "${title}" created with ${questions.length} questions!`);
    window.location.href = 'quiz.html';
});

function startQuiz(quizName) {
    alert(`Starting ${quizName}`);
    // Here you can implement the logic to show quiz questions
}
