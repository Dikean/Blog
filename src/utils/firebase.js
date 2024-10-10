// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-d07ff.firebaseapp.com",
  projectId: "blog-d07ff",
  storageBucket: "blog-d07ff.appspot.com",
  messagingSenderId: "925922338783",
  appId: "1:925922338783:web:8feb9d5658b4a730a2866a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

