const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    console.log("HEYYYYY");
 response.send("Hello from Firebase!");
});

exports.ahhh = functions.auth.user().onCreate((user) => {
    console.log("yo");
});
