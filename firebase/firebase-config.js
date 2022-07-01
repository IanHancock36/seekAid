import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyDrdmp5qdMBeS_VE8J5s0DvrdQPDpp6POc',
  authDomain: 'seek-to-do-more-f543b.firebaseapp.com',
  projectId: 'seek-to-do-more-f543b',
  storageBucket: 'seek-to-do-more-f543b.appspot.com',
  messagingSenderId: '103358106731',
  appId: '1:103358106731:web:6c57cb976b23671404f52e',
};

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app)
