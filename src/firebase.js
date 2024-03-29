import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDGdjBMd-7HmQyTiUj_wj58gfJrGjkn8wI',
  authDomain: 'tionchat.firebaseapp.com',
  projectId: 'tionchat',
  storageBucket: 'tionchat.appspot.com',
  messagingSenderId: '170421060264',
  appId: '1:170421060264:web:546ad54ce045db9230389d',
  measurementId: 'G-DJKG7E6BCK',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db,auth, provider };
