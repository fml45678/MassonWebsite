import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCTGgj_OeJ3rqOt3ju2kBnoMX3jkerAcm0",
  authDomain: "masson-new-website.firebaseapp.com",
  projectId: "masson-new-website",
  storageBucket: "masson-new-website.appspot.com",
  messagingSenderId: "57678709750",
  appId: "1:57678709750:web:26a5240eb5c621c6b0fdd7",
  measurementId: "G-60CSXPN2MC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
