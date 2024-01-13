// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhYeNECLWlBl1QL7dbw_tslmzHsthcfXI",
    authDomain: "test-14de9.firebaseapp.com",
    projectId: "test-14de9",
    storageBucket: "test-14de9.appspot.com",
    messagingSenderId: "1065385713926",
    appId: "1:1065385713926:web:b53879f9753ab00e62fe87",
    measurementId: "G-KY89DGED9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);