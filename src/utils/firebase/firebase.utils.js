import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword ,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCQd2YGsHyBNn1ez31L6l3Mlbz4EyVwb0M",
    authDomain: "crwn-2022-e3efb.firebaseapp.com",
    projectId: "crwn-2022-e3efb",
    storageBucket: "crwn-2022-e3efb.appspot.com",
    messagingSenderId: "825189355719",
    appId: "1:825189355719:web:3f07d620d31370c80baee2",
    measurementId: "G-N7PFQ6784D"
  };


  
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInwithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInwithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const dcoRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(dcoRef, object);
    });

    await batch.commit();
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap =querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch(error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassowrd = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassowrd = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);