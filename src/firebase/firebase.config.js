// ✅ Firebase Configuration
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDX4qRGe2Jr-IJvSvuUuuqFof_32W-_69E",
  authDomain: "greennest-1efb9.firebaseapp.com",
  projectId: "greennest-1efb9",
  storageBucket: "greennest-1efb9.appspot.com", // ✅ অবশ্যই .appspot.com হবে
  messagingSenderId: "363488112689",
  appId: "1:363488112689:web:5545dfa39efda694972510",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Auth instance
export const auth = getAuth(app);
export default app;
