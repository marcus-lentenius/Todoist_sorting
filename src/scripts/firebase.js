import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDAKJry192Lr7mwinoiifW9A75fWs5C8k0",
    authDomain: "todoist-3953b.firebaseapp.com",
    databaseURL: "https://todoist-3953b.firebaseio.com",
    projectId: "todoist-3953b",
    storageBucket: "todoist-3953b.appspot.com",
    messagingSenderId: "509287903283",
    appId: "1:509287903283:web:292127fcf218098f5f3346",
    measurementId: "G-TK8DPNGJ57"
};

export const fireBase = firebase.initializeApp(firebaseConfig);

export const fireStore = firebase.firestore();