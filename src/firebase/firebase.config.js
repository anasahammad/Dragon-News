// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// console.log(import.meta.env.VITE_SOME_KEY)

const firebaseConfig = {
  apiKey: "AIzaSyBKaq0g3xLmAOkvGxp4uuakEhFnqUDyaw8",
  authDomain: "dragon-news-5c773.firebaseapp.com",
  projectId: "dragon-news-5c773",
  storageBucket: "dragon-news-5c773.appspot.com",
  messagingSenderId: "349893597731",
  appId: "1:349893597731:web:7c2ed074d251ce396c6f96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;