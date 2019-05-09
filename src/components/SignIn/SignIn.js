import React, {Component} from "react"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Menu from '../Menu/Menu'
import FormSignIn from '../FormSignIn/FormSignin'
export default class SignIn extends Component{
    constructor(props) {
        super(props);
        this.state ={
            isLoggedIn: localStorage.getItem("isLoggedIn")
        };
        this.authStateChangedHandler = this.authStateChangedHandler.bind(this)
    }
    authStateChangedHandler(value){
        console.log("Auth changed in App")
        this.setState({ isLoggedIn: value })
    }
    render() {
        return(
            <div>
                <Header isLoggedIn={this.state.isLoggedIn} authStateChangedHandler = {this.authStateChangedHandler}/>
                <Menu/>
                <FormSignIn/>
                <Footer isLoggedIn={this.state.isLoggedIn} authStateChangedHandler = {this.authStateChangedHandler}/>
            </div>
        )
    }
}