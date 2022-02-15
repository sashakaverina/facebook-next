import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDMxME-qPN61_P6mTr-YZZ-4Ao8Fh6Ut2s",
  authDomain: "facebook-nextjs-2e6f9.firebaseapp.com",
  projectId: "facebook-nextjs-2e6f9",
  storageBucket: "facebook-nextjs-2e6f9.appspot.com",
  messagingSenderId: "988028264886",
  appId: "1:988028264886:web:9bb17d5984de611446e117"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app(); 
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
