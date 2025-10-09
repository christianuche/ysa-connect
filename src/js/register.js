// src/js/register.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Registration
const registerForm = document.getElementById("registerForm");
const messageDiv = document.getElementById("register-message");

if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = registerForm.name.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;

    try {
      // Create user in Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update display name
      await updateProfile(user, { displayName: name });

      messageDiv.textContent = `Welcome, ${user.displayName}! 🎉 Your account has been created.`;
      messageDiv.style.color = "green";

      // Redirect after success
      setTimeout(() => {
        window.location.href = "/login_page/index.html";
      }, 2000);
    } catch (error) {
      console.error(error);
      messageDiv.textContent = error.message;
      messageDiv.style.color = "red";
    }
  });
}
