import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import {LogOut} from '../../actions/actions'
import navigateTo from '../../services/navigation'

function mapDispatchToProps(dispatch){
    return{
        LogOut: isLoggedIn => dispatch(LogOut(isLoggedIn))
    }
}

class LogoutButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.LogOut(false);
        // navigateTo('/');
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

export default connect(null,mapDispatchToProps)(LogoutButton)