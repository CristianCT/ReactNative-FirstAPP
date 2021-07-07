import firebase from "firebase";
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBM98BihDosdzPrGdU77CNpkp03pw0Bw10",
    authDomain: "react-native-def39.firebaseapp.com",
    projectId: "react-native-def39",
    storageBucket: "react-native-def39.appspot.com",
    messagingSenderId: "863358875688",
    appId: "1:863358875688:web:c8fa69d7dfea19cf459d1d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
    firebase, 
    db,
}