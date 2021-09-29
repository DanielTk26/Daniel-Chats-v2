import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDpGthbWfCUTMgGZL6FzvUs-LX5f6D1Y4U",
  authDomain: "daniel-chats-auth.firebaseapp.com",
  projectId: "daniel-chats-auth",
  storageBucket: "daniel-chats-auth.appspot.com",
  messagingSenderId: "649273787724",
  appId: "1:649273787724:web:4da4c38658be5252f5bbe9"
}).auth();
