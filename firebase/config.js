// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnM-IpKxDLBrbtjfCmOiwkFop6mFuf66M",
  authDomain: "geometric-edge-407905.firebaseapp.com",
  projectId: "geometric-edge-407905",
  storageBucket: "geometric-edge-407905.appspot.com",
  messagingSenderId: "586024758534",
  appId: "1:586024758534:web:4205a1217df39284330287",
  measurementId: "G-SLER5CC6FY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage=getStorage(app);
export default storage