import React from 'react';
import ContactsTable from '../components/ContactsTable';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    const contacts = [
        {
            firstname: 'test',
            lastname: 'user',
            email: 'test@example.com',
        },
        {
            firstname: 'test',
            lastname: 'user',
            email: 'test@example.com',
        },
        {
            firstname: 'test',
            lastname: 'user',
            email: 'test@example.com',
        },
        {
            firstname: 'test',
            lastname: 'user',
            email: 'test@example.com',
        },
        {
            firstname: 'test',
            lastname: 'user',
            email: 'test@example.com',
        },
        {
            firstname: 'test',
            lastname: 'user',
            email: 'test@example.com',
        },
    ];
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
