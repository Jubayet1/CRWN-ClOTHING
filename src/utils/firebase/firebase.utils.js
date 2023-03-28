import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAr4yd0hJleBXNBisJHb45RX2ZGf35_hhw",
  authDomain: "crwn-clothing-8df0f.firebaseapp.com",
  projectId: "crwn-clothing-8df0f",
  storageBucket: "crwn-clothing-8df0f.appspot.com",
  messagingSenderId: "430347635647",
  appId: "1:430347635647:web:eb163e440a26f1e2136f0a",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
