import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCDWKfEtRpmsTmBtHuoi1YIkz8jMty7Ogg",
  authDomain: "e-ride-stage-4-dd2c9.firebaseapp.com",
  projectId: "e-ride-stage-4-dd2c9",
  storageBucket: "e-ride-stage-4-dd2c9.appspot.com",
  messagingSenderId: "333671106899",
  appId: "1:333671106899:web:5b165a3b95edfeaff079a6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
