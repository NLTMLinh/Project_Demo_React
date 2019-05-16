import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './containers/Dashboard/Dashboard'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import LogIn from './components/LogIn/LogIn'
import SignIn from './components/SignIn/SignIn'
import { createStore,applyMiddleware,compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import fetchEmployees from './reducers/fetchEmployees'
import createSagaMiddleAware from 'redux-saga'

const middleaware = createSagaMiddleAware();
const store = createStore(rootReducer,applyMiddleware(middleaware));

middleaware.run(fetchEmployees);

const routing = (
    <Provider store={store}>
    <Router>
            <Route exact path = "/" component={App}/>
            <Route path = "/Login" component = {LogIn}/>
            <Route path = "/Dashboard" component = {Dashboard}/>
            <Route path = "/SignIn" component = {SignIn}/>
    </Router>
    </Provider>
)
ReactDOM.render(routing, document.getElementById('root'));
