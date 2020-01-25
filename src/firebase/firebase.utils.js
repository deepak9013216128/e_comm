import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDTAn-6DVSNxvb39bT7wo9mFUcamwu3J2E",
    authDomain: "e-comm-db-28049.firebaseapp.com",
    databaseURL: "https://e-comm-db-28049.firebaseio.com",
    projectId: "e-comm-db-28049",
    storageBucket: "e-comm-db-28049.appspot.com",
    messagingSenderId: "503581262531",
    appId: "1:503581262531:web:8ef0821928e7169ee39876",
    measurementId: "G-ZYQLKSGJXW"
  };

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    }catch(error){
      console.log('Error for Creating User',error)
    }

  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;