import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './components/Dashboard/Dashboard'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import LogIn from './components/LogIn/LogIn'
import SignIn from './components/SignIn/SignIn'
const routing = (
    <Router>
            <Route exact path = "/" component={App}/>
            <Route path = "/Login" component = {LogIn}/>
            <Route path = "/Dashboard" component = {Dashboard}/>
            <Route path = "/SignIn" component = {SignIn}/>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));
