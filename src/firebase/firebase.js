const firebase = require('firebase/app');
const auth = require('firebase/auth');
const firestore = require('firebase/firestore');

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

exports.firebase = firebase;
exports.auth = auth;
exports.db = firestore;
