// require('dotenv').config();

import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyBZGvffD3djQ7QJ3hkC5yWK3dSSA0rLnt0",
//   authDomain: "ecomcrisp.firebaseapp.com",
//   projectId: "ecomcrisp",
//   storageBucket: "ecomcrisp.appspot.com",
//   messagingSenderId: "278273851374",
//   appId: "1:278273851374:web:1d2d99004cbc4add4d98ff",
//   measurementId: "G-C1DH8QBS0Q"
// };

//  export const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);