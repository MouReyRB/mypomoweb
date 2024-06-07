// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwPuXPlLVSlLQnBVYKQUebet6d3p8WMGM",
  authDomain: "pomodoro-cb190.firebaseapp.com",
  projectId: "pomodoro-cb190",
  storageBucket: "pomodoro-cb190.appspot.com",
  messagingSenderId: "1073738552343",
  appId: "1:1073738552343:web:72a1710d097427d73e7852",
  measurementId: "G-TXSXJQP25G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };