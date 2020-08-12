import React, { useState } from 'react';

const AuthForm = ({ title = 'Sign In', handleSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div
            style={{ width: '500px', border: '1px solid #00000055' }}
            className="mx-auto rounded p-4 mt-5"
        >
            <h1 className="text-center">{title}</h1>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(email, password);
                }}
            >
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        name="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>

                <button className="btn btn-primary mb-4 btn-block">Submit</button>
            </form>
        </div>
    );
};

export default AuthForm;
