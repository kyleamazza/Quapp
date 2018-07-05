import { auth } from './firebase';

export const doCreateUserWithEmailAndPassword = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
};

export const doSignInUserWithEmailAndPassword = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
};

export const doSignOut = () => {
    return auth.signOut();
};
