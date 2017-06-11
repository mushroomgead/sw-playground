import firebase from 'firebase';

export default function firebaseConfig() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCfTPtH-zad2qyBLY4raPP7IAjoMGdhRTI",
    authDomain: "vat-rates.firebaseapp.com",
    databaseURL: "https://vat-rates.firebaseio.com",
    projectId: "vat-rates",
    storageBucket: "vat-rates.appspot.com",
    messagingSenderId: "588870659559"
  };
  firebase.initializeApp(config);
  return firebase;
}
