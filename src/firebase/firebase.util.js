import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCS556Xf8gpX5tMDoHmD1Ip99PsMAITgDE",
  authDomain: "mcrae-bbq.firebaseapp.com",
  databaseURL: "https://mcrae-bbq.firebaseio.com",
  projectId: "mcrae-bbq",
  storageBucket: "mcrae-bbq.appspot.com",
  messagingSenderId: "182047657729",
  appId: "1:182047657729:web:dc9d304c9235f5b874d500",
  measurementId: "G-2FLPNNF36L"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

