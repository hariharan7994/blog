import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsINDtdJ6XfR9OcRxhTx2MhYU6Gfc1PJA",
  authDomain: "blogproject-9bc1b.firebaseapp.com",
  projectId: "blogproject-9bc1b",
  storageBucket: "blogproject-9bc1b.appspot.com",
  messagingSenderId: "1018189150078",
  appId: "1:1018189150078:web:403d5810477969160a252f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();