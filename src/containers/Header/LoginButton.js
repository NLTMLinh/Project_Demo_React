import React, {Component} from 'react';
import {Button} from 'reactstrap';
import "./Header.css"
import "../FormLogIn/frmLogin.css"
import {Link} from 'react-router-dom'
import navigateTo from '../../services/navigation'

export default class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        // navigateTo('/Login');
    }
    render() {
        return (
            <Link to="/Login">
                <Button color="primary" onClick={this.handleClick}>
                    Đăng nhập
                </Button>
            </Link>
        )
    }
}