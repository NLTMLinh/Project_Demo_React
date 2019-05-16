import React, {Component} from "react"
import Header from '../../containers/Header/Header'
import Footer from '../../containers/Footer/Footer'
import Menu from '../Menu/Menu'
import FormLogIn from '../../containers/FormLogIn/FormLogin'
export default class LogIn extends Component{
    render() {
        return(
            <div>
                <Header />
                <Menu/>
                <FormLogIn/>
                <Footer/>
            </div>
        )
    }
}