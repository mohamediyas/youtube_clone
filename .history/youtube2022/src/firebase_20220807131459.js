import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKyxgVX45yZzJ0nDZnsIVZfZWtu-qHhiw",
  authDomain: "video-9a3ed.firebaseapp.com",
  projectId: "video-9a3ed",
  storageBucket: "video-9a3ed.appspot.com",
  messagingSenderId: "438639639970",
  appId: "1:438639639970:web:0c2160e1b0f63f8bfb06fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
