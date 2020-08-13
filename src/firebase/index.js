import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.database();
    }

    createUser = async (email, password) => {
        await this.auth.createUserWithEmailAndPassword(email, password);
    };

    signIn = async (email, password) => {
        await this.auth.signInWithEmailAndPassword(email, password);
    };

    signOut = async () => {
        await this.auth.signOut();
    };

    addContact = async (contact) => {
        await this.db.ref('contacts').push({
            ...contact,
        });
    };

    updateContact = async (id, contact) => {
        await this.db
            .ref('contacts')
            .child(id)
            .update({
                ...contact,
            });
    };

    deleteContact = async (id) => {
        await this.db.ref('contacts').child(id).remove();
    };
    contactsRef = () => {
        return this.db.ref('contacts');
    };

    getUser = (id) => {
        return new Promise((resolve, reject) => {
            this.db.ref(`contacts/${id}`).once('value', (snap) => {
                resolve(snap.val());
            });
        });
    };

    getCurrentUser() {
        return this.auth.currentUser;
    }
}

export const fb = new Firebase();
