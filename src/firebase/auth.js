import { auth } from './firebase';

export const doCreateUserWithEmailAndPassword = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
};
