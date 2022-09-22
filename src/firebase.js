// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  databaseURL: process.env.REACT_APP_DB_URL,

  // apiKey: "AIzaSyBfoXqy1-Y3zElT8d4avHp70p-fexM3dIg",
  // authDomain: "react-quiz-5e500.firebaseapp.com",
  // projectId: "react-quiz-5e500",
  // storageBucket: "react-quiz-5e500.appspot.com",
  // messagingSenderId: "1086681217084",
  // appId: "1:1086681217084:web:7bda99d36ec3db94542b39"



};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

