import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNlrnumwY5Xcp5-35Q_izJWsnFaCDsM-A",
  authDomain: "getting-started-with-fir-535f7.firebaseapp.com",
  projectId: "getting-started-with-fir-535f7",
  storageBucket: "getting-started-with-fir-535f7.appspot.com",
  messagingSenderId: "894239554628",
  appId: "1:894239554628:web:e9df71ef458673b3d39011",
  measurementId: "G-B75PM73S93",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// db collection references
const booksCollection = collection(db, "books");

// get real time collection of data in databases
onSnapshot(booksCollection, () => {});

export { app, db, booksCollection };
