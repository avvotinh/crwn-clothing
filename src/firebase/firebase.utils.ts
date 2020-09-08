import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDVgLVfIwAFOrGjyDrD-f2ulXznxgqhw4o",
  authDomain: "crown-db-6394a.firebaseapp.com",
  databaseURL: "https://crown-db-6394a.firebaseio.com",
  projectId: "crown-db-6394a",
  storageBucket: "crown-db-6394a.appspot.com",
  messagingSenderId: "539928834318",
  appId: "1:539928834318:web:5ba97f16d80cb2f1dca75f",
  measurementId: "G-NF78KP99EJ",
};

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData?: any
) => {
  if (!userAuth) return;

  const useRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await useRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await useRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  return useRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
