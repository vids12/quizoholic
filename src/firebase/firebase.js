import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCmfKEiPZYL3BEqSuUNcRtACV6qQXggOF4",
    authDomain: "quizoholic-787ab.firebaseapp.com",
    projectId: "quizoholic-787ab",
    storageBucket: "quizoholic-787ab.appspot.com",
    messagingSenderId: "850184593834",
    appId: "1:850184593834:web:4712897da47ae8309c8bd3"
};

firebase.initializeApp(firebaseConfig);


export default firebase;

