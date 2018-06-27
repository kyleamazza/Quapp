const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// TESTING FUNCTIONS LOCALLY:
// ### Testing HTTPS functions
// https://firebase.google.com/docs/functions/local-emulator
// -> This will just send you a link to a local server that will run your function for you.
// ### Testing other functions
// https://firebase.googleblog.com/2017/09/testing-functions-locally-with-cloud.html
// -> Use the function shell
//      ** Make sure you're in the firebase folder when your in your terminal!!!!
//          --> /Quapp/src/firebase
//      Run the command: "firebase experimental:functions:shell"

exports.helloWorld = functions.https.onRequest((request, response) => {
    console.log("HEYYYYY");
 response.send("Hello from Firebase!");
});

exports.ahhh = functions.auth.user().onCreate((user) => {
    console.log("yo");
});
