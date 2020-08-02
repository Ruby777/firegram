import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyArauCUX5VF4N6pdXHXyBfk3V9alXK6bXI",
    authDomain: "firegram-9105f.firebaseapp.com",
    databaseURL: "https://firegram-9105f.firebaseio.com",
    projectId: "firegram-9105f",
    storageBucket: "firegram-9105f.appspot.com",
    messagingSenderId: "387254664265",
    appId: "1:387254664265:web:0e3e20359b9652fef85398"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();


  export { projectStorage, projectFirestore}