// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA1jVy0p9SINqeClEOVweWumWzzriMusvI',
  authDomain: 'saigeware-cf.firebaseapp.com',
  projectId: 'saigeware-cf',
  storageBucket: 'saigeware-cf.appspot.com',
  messagingSenderId: '1000654778156',
  appId: '1:1000654778156:web:77bb2085ed5cd9d1e20689',
  measurementId: 'G-9Q9KH570MR',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// console.log(app);
// export const analytics = getAnalytics(app);
