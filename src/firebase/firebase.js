import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

const functions = require('firebase-functions');
console.log(__dirname);

console.log(process.env);

// We can also create a development project by creating a second 
// firebase app, and use those credentials to create a devConfig object.
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth, functions }; 