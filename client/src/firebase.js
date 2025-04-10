// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-2afba.firebaseapp.com",
  projectId: "realestate-2afba",
  storageBucket: "realestate-2afba.appspot.com",
  messagingSenderId: "651378551911",
  appId: "1:651378551911:web:5565c61934bffe53ec78c2",
  measurementId: "G-5EEFSZRPBB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);