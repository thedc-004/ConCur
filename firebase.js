import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
require("dotenv").config();

const firebaseConfig = process.env.FIREBASE_OPTIONS;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
