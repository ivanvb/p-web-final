import React from 'react';
import ContactForm from '../components/ContactForm';
import { fb } from '../firebase/index';
import { useHistory } from 'react-router-dom';

const AddContact = () => {
    const history = useHistory();
    const handleSubmit = async (firstname, lastname, email, phone) => {
        try {
            await fb.addContact({ firstname, lastname, email, phone });
            alert('success!');
            history.push('/');
        } catch (err) {
            alert('error!');
        }
    };
    return (
        <div className="mt-4">
            <ContactForm handleSubmit={handleSubmit} />
        </div>
    );
};

export default AddContact;
