const { auth } = require('./firebase');

const doCreateUserWithEmailAndPassword = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
};

module.exports = doCreateUserWithEmailAndPassword;
