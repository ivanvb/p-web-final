import React, { useState } from 'react';

const ContactForm = ({ firstname, lastname, email, phone, handleSubmit }) => {
    const [lFirstname, setFirstname] = useState(firstname);
    const [lLastname, setLastname] = useState(lastname);
    const [lEmail, setEmail] = useState(email);
    const [lPhone, setPhone] = useState(phone);

    return (
        <div style={{ border: '2px solid #337AB7' }}>
            <h1
                className="h4 text-left py-3 px-2 text-white mb-2"
                style={{ background: '#337AB7' }}
            >
                Contact Form
            </h1>
            <div className="px-2 pb-2">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(lFirstname, lLastname, lEmail, lPhone);
                    }}
                >
                    <div className="form-group">
                        <label htmlFor="firstname">Firstname</label>
                        <input
                            className="form-control"
                            id="firstname"
                            placeholder="Firstname"
                            onChange={(e) => {
                                setFirstname(e.target.value);
                            }}
                            value={lFirstname}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Lastname</label>
                        <input
                            className="form-control"
                            id="lastname"
                            placeholder="Lastname"
                            onChange={(e) => {
                                setLastname(e.target.value);
                            }}
                            value={lLastname}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            name="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            value={lEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Phone number</label>
                        <input
                            className="form-control"
                            id="password"
                            placeholder="Enter phone number"
                            name="password"
                            onChange={(e) => {
                                setPhone(e.target.value);
                            }}
                            value={phone}
                        />
                    </div>

                    <button className="btn btn-warning mb-4">Cancel</button>
                    <button className="btn btn-primary mb-4 mx-2">Submit</button>
                    <button className="btn btn-danger mb-4">Delete</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
