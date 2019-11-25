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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    //create user
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

