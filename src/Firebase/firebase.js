import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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