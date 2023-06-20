// // import firebase from "firebase/app";
// import { initializeApp } from 'firebase/app';

// import "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyC6avd2Qd7uJpdJYbLzhyKefZtXmgs1CO4",
//     authDomain: "my-nozama-clone.firebaseapp.com",
//     projectId: "my-nozama-clone",
//     storageBucket: "my-nozama-clone.appspot.com",
//     messagingSenderId: "20316386582",
//     appId: "1:20316386582:web:f496bf6cd0fe74981a0c37"
//   };



//   const firebaseApp =initializeApp(firebaseConfig)

//   const auth = firebaseApp.auth();

//   export {auth}





//   import firebase from 'firebase/app';
import * as firebase from 'firebase/app';

// import 'firebase/auth';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Your Firebase config here

  apiKey: "AIzaSyC6avd2Qd7uJpdJYbLzhyKefZtXmgs1CO4",
  authDomain: "my-nozama-clone.firebaseapp.com",
  projectId: "my-nozama-clone",
  storageBucket: "my-nozama-clone.appspot.com",
  messagingSenderId: "20316386582",
  appId: "1:20316386582:web:f496bf6cd0fe74981a0c37"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export {auth}