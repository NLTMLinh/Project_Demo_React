import React, {Component} from "react"
import Header from '../../containers/Header/Header'
import Footer from '../../containers/Footer/Footer'
import Menu from '../Menu/Menu'
import FormSignIn from '../../containers/FormSignIn/FormSignin'
export default class SignIn extends Component{
    render() {
        return(
            <div>
                <Header/>
                <Menu/>
                <FormSignIn/>
                <Footer/>
            </div>
        )
    }
}