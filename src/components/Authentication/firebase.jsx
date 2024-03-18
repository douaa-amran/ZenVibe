// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword as signIn } from "firebase/auth";

const firebaseConfig = {
  apiKey:'AIzaSyCGpsuBuSF4LGpX5hXL426FV5gRkT7ZbAQ',
  authDomain: "zen-vibe.firebaseapp.com",
  projectId: "zen-vibe",
  storageBucket: "zen-vibe.appspot.com",
  messagingSenderId: "44788644392",
  appId: "1:44788644392:web:e49fafedad3d57c1b4531d",
  measurementId: "G-JN022YBYZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth =getAuth()

// Function to handle sign-in
export function signInWithEmailAndPassword(email, password) {
  signIn(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // You may want to return the user or handle the signed-in user data here
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage);
      // Handle errors here
    });
}

export default signInWithEmailAndPassword;