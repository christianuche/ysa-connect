// const form = document.getElementById("loginForm");
// const message = document.getElementById("login-message");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const email = form.email.value.trim();
//   const password = form.password.value.trim();

//   // Simple validation for now
//     if (!email || !password) {
//       message.textContent = "Please fill out all fields.";
//       message.style.color = "red";
//       return;
//     }

//   if (email === "user@example.com" && password === "123456") {
//     alert("Login successful!");
//     window.location.href = "/src/pages/home.html";
//   } else {
//     alert("Invalid credentials. Try again.");
//   }
// });

// src/js/auth.js

export function handleLogin() {
  const form = document.getElementById("loginForm");
  const message = document.getElementById("login-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    // Simple validation for now
    if (!email || !password) {
      message.textContent = "Please fill out all fields.";
      message.style.color = "red";
      return;
    }

    // Simulate login (replace with Firebase later)
    if (email === "test@ysa.com" && password === "password123") {
      message.textContent = "✅ Login successful! Redirecting...";
      message.style.color = "green";
      setTimeout(() => {
        window.location.href = "../home_page/index.html";
      }, 1200);
    } else {
      message.textContent = "❌ Invalid credentials. Try again.";
      message.style.color = "red";
    }
  });
}

document.addEventListener("DOMContentLoaded", handleLogin);
