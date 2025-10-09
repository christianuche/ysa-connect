// export function handleLogin() {
//   const form = document.getElementById("loginForm");
//   const message = document.getElementById("login-message");

//   form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const email = form.email.value.trim();
//     const password = form.password.value.trim();

//     // Simple validation for now
//     if (!email || !password) {
//       message.textContent = "Please fill out all fields.";
//       message.style.color = "red";
//       return;
//     }

//     // Simulate login (replace with Firebase later)
//     if (email === "test@ysa.com" && password === "password123") {
//       message.textContent = "✅ Login successful! Redirecting...";
//       message.style.color = "green";
//       setTimeout(() => {
//         window.location.href = "../home_page/index.html";
//       }, 1200);
//     } else {
//       message.textContent = "❌ Invalid credentials. Try again.";
//       message.style.color = "red";
//     }
//   });
// }

// document.addEventListener("DOMContentLoaded", handleLogin);

// src/js/auth.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC3l0ho1ihT4c3O37f65_MiK3AJutKvRto",
  authDomain: "ysa-connect-75d74.firebaseapp.com",
  projectId: "ysa-connect-75d74",
  storageBucket: "ysa-connect-75d74.firebasestorage.app",
  messagingSenderId: "768852202005",
  appId: "1:768852202005:web:c339564be3e5a0e2dd741c",
  measurementId: "G-HZJEM41DGR",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Setup Google Auth Provider
const provider = new GoogleAuthProvider();

// ------------------------------------------
// LOGIN WITH EMAIL AND PASSWORD
// ------------------------------------------
const loginForm = document.getElementById("loginForm");
const messageDiv = document.getElementById("login-message");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      messageDiv.textContent = `Welcome back, ${user.email}! 🎉`;
      messageDiv.style.color = "green";

      // Redirect after login
      setTimeout(() => {
        window.location.href = "/home_page/index.html";
      }, 1500);
    } catch (error) {
      console.error(error);
      messageDiv.textContent = error.message;
      messageDiv.style.color = "red";
    }
  });
}

// ------------------------------------------
// GOOGLE SIGN-IN
// ------------------------------------------
const authContainer = document.getElementById("auth-container");

if (authContainer) {
  const googleButton = document.createElement("button");
  googleButton.textContent = "Sign in with Google";
  googleButton.classList.add("google-btn");
  authContainer.appendChild(googleButton);

  googleButton.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      messageDiv.textContent = `Welcome, ${user.displayName}! 🎉`;
      messageDiv.style.color = "green";

      // Redirect after login
      setTimeout(() => {
        window.location.href = "/home_page/index.html";
      }, 1500);
    } catch (error) {
      console.error(error);
      messageDiv.textContent = error.message;
      messageDiv.style.color = "red";
    }
  });
}