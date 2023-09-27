import { createContext, useContext, useState, useEffect } from "react"
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import {getFirestore, addDoc, getDoc, collection, doc, deleteDoc, onSnapshot, updateDoc, serverTimestamp, getDocs} from "firebase/firestore";
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA2XU0xstXCpH8hAkIb7alfEvtthCsu5rM",
    authDomain: "auth-development-9d737.firebaseapp.com",
    projectId: "auth-development-9d737",
    storageBucket: "auth-development-9d737.appspot.com",
    messagingSenderId: "751407391961",
    appId: "1:751407391961:web:a32dd9033a18ef6beb0ac8",
    measurementId: "G-MVTXRZ5L9G"
  };

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();
const postCol = collection(db, "posts");
const firebaseAuthContext = createContext();
const firebaseStoreContext = createContext();

 export function useFirebaseAuth() {
    return useContext(firebaseAuthContext);
} 

export function useFirebaseStore() {
    return useContext(firebaseStoreContext);
} 
// Authentication
export function FirebaseAuthProvider({children}) {
    const [user, setUser] = useState(null);

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function signOut() {
        return signOut(auth);
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
        })
      return () => {
        unsubscribe()
      }
    }, [])
    const value = {
        user,
        login,
        signup,
        signOut
    }
  return (
    <firebaseAuthContext.Provider value={value}>
        {children}
    </firebaseAuthContext.Provider>
  )
}

//  Database
export function FirebaseStoreProvider({children}) {
    const [posts, setPosts] = useState();
    const [progressBar, setProgressBar] = useState(0);
    const [downloadUrl, setDownloadUrl] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const unsubscribe = onSnapshot(postCol, (snapshot) => {
            const blogPosts = [];
            snapshot.docs.forEach(doc => {
                blogPosts.push({...doc.data(), id: doc.id})
            })
            setPosts(blogPosts);
        })
      return () => {
        unsubscribe();
      }
    }, [])
    
    function getSinglePost(postId) {
        const docRef = doc(db,"posts", postId);
        return getDoc(docRef);
    }
     
    function addNewPost(title, body, image) {
        return addDoc(postCol, {
            title,
            body,
            image,
            createdAt: serverTimestamp()
        })
    } 
    function uploadImage(name, file) {
        const storageRef = ref(storage, `post-images/${name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed", (snapshot) => {
           const progress = Math.round(snapshot.bytesTransferred/snapshot.totalBytes * 100);
           setProgressBar(progress);
        }, (error) => {
            setError(error)
            console.log(error);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setDownloadUrl(url);
                console.log(url);
            })
        })
        setDownloadUrl("");
        setError("");
        return [downloadUrl, progressBar, error];
    }
    function updatePost(postId, update) {
        const docRef = doc(db, "posts", postId);

        return updateDoc(docRef, {
            ...update
        })
    }
    function deletePost(postId) {
        const docRef = doc(db, "posts", postId);

        return deleteDoc(docRef);
    }
    const value = {
        posts,
        addNewPost,
        updatePost,
        deletePost,
        uploadImage,
        getSinglePost
    }
    return (
        <firebaseStoreContext.Provider value={value}>
            {children}
        </firebaseStoreContext.Provider>
    )
}
