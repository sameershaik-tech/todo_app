// For Firebase JS SDK v7.20.0 and later, measurementId is optional



import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';




const firebaseApp = firebase.initializeApp({

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
        apiKey: "AIzaSyBFLm0YHiSLKp-GEN0zXFOJYfSsg_rT2pA",
        authDomain: "todo-app-cp-848cc.firebaseapp.com",
        projectId: "todo-app-cp-848cc",
        storageBucket: "todo-app-cp-848cc.appspot.com",
        messagingSenderId: "200316388927",
        appId: "1:200316388927:web:dee0cf24eb6da2d89b9a8a",
        measurementId: "G-RJNXTYGN0L"







});


const db = firebaseApp.firestore();


export default db;