// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  uid: "048a6205-1112-4668-8ea6-9a88432bebd4",
  apiKey: "AIzaSyB86gK2HjN6rSjJwFssq7FrMFxbseu588g",
  authDomain: "pierogarnia-e6cbb.firebaseapp.com",
  databaseURL: "https://pierogarnia-e6cbb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pierogarnia-e6cbb",
  storageBucket: "pierogarnia-e6cbb.appspot.com",
  messagingSenderId: "657924120281",
  appId: "1:657924120281:web:8be7681be3ca1b097fe8c8"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getDatabase();
 export const DB_URL = "https://pierogarnia-e6cbb-default-rtdb.europe-west1.firebasedatabase.app"
