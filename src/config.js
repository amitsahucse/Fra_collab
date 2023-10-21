
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB93MOFFvKz71Qo_2Wg8ARE6mpYY1AUOjc",
  authDomain: "fracollab.firebaseapp.com",
  projectId: "fracollab",
  storageBucket: "fracollab.appspot.com",
  messagingSenderId: "155010863422",
  appId: "1:155010863422:web:2f110497d1e831ea169c6f",
  measurementId: "G-P1E3ZFV1ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};