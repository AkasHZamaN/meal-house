// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZErkJXHHvIOeSLUxPmdDmXw866gw_mLU",
  authDomain: "meal-house.firebaseapp.com",
  projectId: "meal-house",
  storageBucket: "meal-house.appspot.com",
  messagingSenderId: "55049934476",
  appId: "1:55049934476:web:df47ade8f012d1bdaacda9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;