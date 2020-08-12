import React from 'react';
import ContactForm from '../components/ContactForm';

const EditContact = () => {
    const contact = {
        firstname: 'dznfn',
        lastname: 'dznlf',
        email: 'test@xample.com',
        phone: '1234',
    };

    return (
        <div className="mt-4">
            <ContactForm {...contact} />
        </div>
    );
};

export default EditContact;
