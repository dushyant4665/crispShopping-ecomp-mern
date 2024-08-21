// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBZGvffD3djQ7QJ3hkC5yWK3dSSA0rLnt0",
  authDomain: "ecomcrisp.firebaseapp.com",
  projectId: "ecomcrisp",
  storageBucket: "ecomcrisp.appspot.com",
  messagingSenderId: "278273851374",
  appId: "1:278273851374:web:1d2d99004cbc4add4d98ff",
  measurementId: "G-C1DH8QBS0Q"
};

 export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);