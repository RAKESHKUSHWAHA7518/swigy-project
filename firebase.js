// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5wZ1UV25GTrgeVdxBT8PcND4whhK5Ji4",
  authDomain: "food-app-ef4e8.firebaseapp.com",
  projectId: "food-app-ef4e8",
  storageBucket: "food-app-ef4e8.appspot.com",
  messagingSenderId: "49754174386",
  appId: "1:49754174386:web:fb3d51aded307ae73caaab",
  measurementId: "G-LB63QVH98N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);