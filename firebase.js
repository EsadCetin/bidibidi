import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB38hWSUnIv20_ftAb-94c_rW2bvKXRL68",
	authDomain: "bidibidi-d8621.firebaseapp.com",
	projectId: "bidibidi-d8621",
	storageBucket: "bidibidi-d8621.appspot.com",
	messagingSenderId: "858092684744",
	appId: "1:858092684744:web:e15001e9442df801652cfd",
	measurementId: "G-LM3C342T32",
};
let app;

if (firebase.apps.length === 0) {
	const firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
