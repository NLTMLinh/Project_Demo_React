import React from 'react';
import AppPage from './AppPage';
import Dashboard from './containers/Dashboard/Dashboard'
import {Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'
import LogIn from './components/LogIn/LogIn'
import SignIn from './components/SignIn/SignIn'
import history from './services/history'
import {connect} from 'react-redux'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: this.props.isLoggedIn
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.isLoggedIn !== this.state.isLoggedIn) {
            this.setState({isLoggedIn: nextProps.isLoggedIn});
        }
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <Route exact path="/" render={() => <AppPage/>}/>
                        <Route path="/Login" render={() => <LogIn/>}/>
                        <Route path="/SignIn" render={() => <SignIn/>}/>
                    </Switch>
                    <Route path="/Dashboard"
                           render={() => this.state.isLoggedIn ? (<Dashboard/>) : (<Redirect to="/"/>)}/>
                </div>
            </Router>
        )
    }

}

function mapStateToProp(state) {
    return {
        isLoggedIn: state.login_logout.isLoggedIn
    }
}

export default connect(mapStateToProp)(App)