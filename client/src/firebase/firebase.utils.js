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

export const addCollectionAndDocuments = async (collectionKey,objectToAdd)=>{
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectToAdd.forEach( obj=>{
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef,obj)
  })
  return await batch.commit();
}

export const convertCollectionSnapshotToMap = (collections)=>{
  const transformedCollection = collections.docs.map( doc =>{
    const {items,title} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      items,
      title
    }
  })
  return transformedCollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()]=collection;
    return accumulator;
  },{})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentUser = () => {
  return new Promise((resolve,reject)=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      unsubscribe();
      resolve(userAuth);
    },reject)
  })
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;