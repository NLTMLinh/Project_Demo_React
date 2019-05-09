import React, {Component} from 'react';
import {Button} from 'reactstrap';
import "./Header.css"
import "../FormLogIn/frmLogin.css"
import {Link} from 'react-router-dom'


export default class LoginButton extends Component {
    render() {
        return (
            <Link to="/Login">
                <Button color="primary">
                    Đăng nhập
                </Button>
            </Link>
        )
    }
}