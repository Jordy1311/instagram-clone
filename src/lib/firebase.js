import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here i want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
 apiKey: 'AIzaSyAu751mPUzRXGmnlbc0bIlx86nTTaS672E',
 authDomain: 'instagram-yt-dbf4f.firebaseapp.com',
 projectId: 'instagram-yt-dbf4f',
 storageBucket: 'instagram-yt-dbf4f.appspot.com',
 messagingSenderId: '538441614427',
 appId: '1:538441614427:web:b38a075714108b66742b7e'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where i want to call the seed file - only once!
// seedDatabase(firebase);

export { firebase, FieldValue };