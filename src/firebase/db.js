const { db } = require('./firebase');

const createUserWithEmailAndPassword = (id, email) => {
    db.ref(`users/${id}`).set({
        email
    });
};

module.exports = createUserWithEmailAndPassword;
