import React, { useEffect } from 'react';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';
import Login from './pages/Login';
import { fb } from './firebase/index';

import Home from './pages/Home';

const App = () => {
    useEffect(() => {
        if (window.localStorage.getItem('logged')) {
            fb.signOut().then(() => {
                window.localStorage.clear();
                window.location.href = '/login';
            });
        }
    }, []);
    return (
        <div className="container">
            <Router>
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/add-contact" exact component={AddContact} />
                <Route path="/update/:id" exact component={EditContact} />
                <Route path="/" component={Home} exact />
            </Router>
        </div>
    );
};

export default App;
