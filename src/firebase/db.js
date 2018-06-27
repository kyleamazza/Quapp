import { db } from './firebase';

const createUserWithEmailAndPassword = (id, email) => {
    db.ref(`users/${id}`).set({
        email
    });
};


export {
    createUserWithEmailAndPassword
};
