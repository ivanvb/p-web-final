import React from 'react';
import AuthForm from '../components/AuthForm';
import { fb } from '../firebase/index';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const handleSubmit = async (email, password) => {
        try {
            await fb.signIn(email, password);
            history.push('/');
        } catch (err) {
            alert('There was an error signing in');
        }
    };
    return <AuthForm handleSubmit={handleSubmit} title="Sign In" />;
};

export default Login;
