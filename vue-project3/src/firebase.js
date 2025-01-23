import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyDzIFM46vZyg9XIc4bykMsxxORHqCACG9g",
    authDomain: "testfirestore-41bd2.firebaseapp.com",
    projectId: "testfirestore-41bd2",
    storageBucket: "testfirestore-41bd2.firebasestorage.app",
    messagingSenderId: "138568806063",
    appId: "1:138568806063:web:4b383dd54caad3a9486e5a",
    measurementId: "G-86LE7SW414"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'Recordatorios')