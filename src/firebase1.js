
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDbE5OAzigEyiqKCsxjpG6-hkCTFsNz8Kw",
  authDomain: "netflix-cdf32.firebaseapp.com",
  projectId: "netflix-cdf32",
  storageBucket: "netflix-cdf32.appspot.com",
  messagingSenderId: "756667814584",
  appId: "1:756667814584:web:c5bae26939682535b6da4d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
