import React, { useContext } from 'react';
import AuthForm from '../components/AuthForm';
import { fb } from '../firebase/index';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
    const history = useHistory();
    const handleSubmit = async (email, password) => {
        try {
            await fb.createUser(email, password);
            history.push('/');
        } catch (err) {
            alert('There was an error creating your account');
        }
    };
    return <AuthForm handleSubmit={handleSubmit} title="Sign Up" />;
};

export default SignUp;
