
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyA5z4fI7V3FaCaIBNN9VWvUDv57vCATf7k",
authDomain: "fir-be1ec.firebaseapp.com",
projectId: "fir-be1ec",
storageBucket: "fir-be1ec.appspot.com",
messagingSenderId: "544848396337",
appId: "1:544848396337:web:bb00063e922ce904fd9510",
measurementId: "G-4YVRLN5ZY9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
