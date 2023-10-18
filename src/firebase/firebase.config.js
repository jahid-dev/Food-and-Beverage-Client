// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB2oWMqejWM4XySq0lwtmOxfe8idbzBMkc",
  authDomain: "food-and-beverage-client.firebaseapp.com",
  projectId: "food-and-beverage-client",
  storageBucket: "food-and-beverage-client.appspot.com",
  messagingSenderId: "272672890885",
  appId: "1:272672890885:web:775762b7cf40fdaf3bfc6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;