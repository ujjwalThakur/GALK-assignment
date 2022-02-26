import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0Ikw0fCFvxjVbY0NqXrZ9N9b-LEVQ7vU",
    authDomain: "todo-app-4bdab.firebaseapp.com",
    projectId: "todo-app-4bdab",
    storageBucket: "todo-app-4bdab.appspot.com",
    messagingSenderId: "337196548455",
    appId: "1:337196548455:web:647447d9edad6f468aafc2",
    measurementId: "G-PF862C3FSH"
};
  
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

