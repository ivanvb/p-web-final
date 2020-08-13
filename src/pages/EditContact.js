import React, { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { fb } from '../firebase/index';
import { useParams, useHistory } from 'react-router-dom';

const EditContact = () => {
    const { id } = useParams();
    const [contact, setContact] = useState(null);
    const history = useHistory();

    useEffect(() => {
        fb.getUser(id).then((result) => setContact(result));
    }, []);

    const handleUpdate = (firstname, lastname, email, phone) => {
        fb.updateContact(id, { firstname, lastname, email, phone }).then(() => {
            history.push('/');
        });
    };

    return (
        <div className="mt-4">
            {contact !== null && <ContactForm {...contact} handleSubmit={handleUpdate} />}
        </div>
    );
};

export default EditContact;
