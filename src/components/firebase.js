import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7u8ucu2yi_u1TSWbo9r-13UMrJ88ZXfk",
    authDomain: "modellismo-d9256.firebaseapp.com",
    projectId: "modellismo-d9256",
    storageBucket: "modellismo-d9256.appspot.com",
    messagingSenderId: "1007314655154",
    appId: "1:1007314655154:web:ec54218b4fe975bfe236ab"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export { db }