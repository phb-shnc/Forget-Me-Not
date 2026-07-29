// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqtEyjVXDgx6yypjWI48viKlBjODoAd5U",
  authDomain: "forgetmenot-ba8b8.firebaseapp.com",
  projectId: "forgetmenot-ba8b8",
  storageBucket: "forgetmenot-ba8b8.firebasestorage.app",
  messagingSenderId: "676724596551",
  appId: "1:676724596551:web:91451c762a75070f653662",
  measurementId: "G-8C63J5R3PZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// format email to username bypass
export function formatUsernameToEmail(username: string) {
    const cleanName = username.trim().replace(/\s+/g, '').toLowerCase();
    if (!cleanName) return '';
    return `${cleanName}@forgetmenot.local`;
}