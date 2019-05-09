import React, {Component} from 'react';
import {Button} from 'reactstrap';
import "./Header.css"
import "../FormLogIn/frmLogin.css"
import {Link} from 'react-router-dom'


export default class LogoutButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        localStorage.removeItem("name");
        localStorage.setItem("isLoggedIn", "false");
        this.props.authStateChangedHandler("false");
        console.log("Auth changed in Logout")
    }

    render() {
        const userName = this.props.userName;
        return (
            <div className="DangNhap d-flex flex-row w-100 align-items-center">
                <Link to="/Dashboard">
                    <span className="font-weight-bold pr-2 pt-5 text-secondary">{userName}</span>
                </Link>
                <Button color="primary" onClick={this.handleClick}>
                    Đăng xuất
                </Button>
            </div>

        )
    }
}