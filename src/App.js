import React from 'react';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';
import Login from './pages/Login';

import Home from './pages/Home';

const App = () => {
    return (
        <div className="container">
            <Router>
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/add-contact" exact component={AddContact} />
                <Route path="/edit-contact/:id" exact component={EditContact} />
                <Route path="/" component={Home} exact />
            </Router>
        </div>
    );
};

export default App;
