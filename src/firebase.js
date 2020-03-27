import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAjgi3fBrXL6rS5vf58Q7A2_gzkcjqESGY",
    authDomain: "bt3103-fea3b.firebaseapp.com",
    databaseURL: "https://bt3103-fea3b.firebaseio.com",
    projectId: "bt3103-fea3b",
    storageBucket: "bt3103-fea3b.appspot.com",
    messagingSenderId: "36964959310",
    appId: "1:36964959310:web:80abb97e563b5fb0a02f1f",
    measurementId: "G-28SXZVJFNF"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;