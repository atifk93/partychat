import ReactNative from "react-native";
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBC561BzZ0J_gMP89bDiJxUtXOXp-24ESc",
    authDomain: "partychat-67c9d.firebaseapp.com",
    databaseURL: "https://partychat-67c9d.firebaseio.com",
    projectId: "partychat-67c9d",
    storageBucket: "partychat-67c9d.appspot.com",
    messagingSenderId: "608346416500"
    };

firebase.initializeApp(firebaseConfig);
export default firebase;
