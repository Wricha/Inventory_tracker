// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMlM6CXsGInVGnUwxJEm1XhDaGNoSD2qs",
  authDomain: "inventory-management-63334.firebaseapp.com",
  projectId: "inventory-management-63334",
  storageBucket: "inventory-management-63334.appspot.com",
  messagingSenderId: "804083777500",
  appId: "1:804083777500:web:7955e6699f373d94501919",
  measurementId: "G-5448P48QMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore=getFirestore(app);

export {firestore}