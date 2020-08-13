import React, { useEffect, useState } from 'react';
import ContactsTable from '../components/ContactsTable';
import { useHistory } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { fb } from '../firebase/index';

const Home = () => {
    const history = useHistory();
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fb.contactsRef().on('value', (snap) => {
            const dbContacts = snap.val();
            if (dbContacts) {
                const ctacts = Object.keys(dbContacts).map((id) => {
                    return {
                        id,
                        ...dbContacts[id],
                    };
                });

                setContacts(ctacts);
            }
        });

        return () => {
            fb.contactsRef().off('value');
        };
    }, []);
    return (
        <div>
            <div className="d-flex justify-content-end mt-4">
                <button
                    className="btn btn-success"
                    onClick={() => {
                        history.push('/add-contact');
                    }}
                >
                    Add new Record
                </button>
            </div>
            <h1 className="mt-2 mb-4">My Contacts</h1>
            <ContactsTable contacts={contacts} />
        </div>
    );
};

export default Home;
