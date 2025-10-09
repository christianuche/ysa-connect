// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC3l0ho1ihT4c3O37f65_MiK3AJutKvRto",
//   authDomain: "ysa-connect-75d74.firebaseapp.com",
//   projectId: "ysa-connect-75d74",
//   storageBucket: "ysa-connect-75d74.firebasestorage.app",
//   messagingSenderId: "768852202005",
//   appId: "1:768852202005:web:c339564be3e5a0e2dd741c",
//   measurementId: "G-HZJEM41DGR"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAnalytics(app);

// src/js/firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3l0ho1ihT4c3O37f65_MiK3AJutKvRto",
  authDomain: "ysa-connect-75d74.firebaseapp.com",
  projectId: "ysa-connect-75d74",
  storageBucket: "ysa-connect-75d74.firebasestorage.app",
  messagingSenderId: "768852202005",
  appId: "1:768852202005:web:c339564be3e5a0e2dd741c",
  measurementId: "G-HZJEM41DGR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
