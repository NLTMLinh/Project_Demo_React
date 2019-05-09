import React, {Component} from 'react';
import {Container, Row, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Collapse, NavLink} from 'reactstrap';
import logo from '../../assets/resources/logo.png';
import "./Header.css"
import "../FormLogIn/frmLogin.css"
import {Link} from 'react-router-dom'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        // this.handleLoginClick = this.handleLoginClick.bind(this);
        // this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.authStateChangedHandler = this.authStateChangedHandler.bind(this);
        this.state = {
            isOpen: false,
            isLoggedIn: this.props.isLoggedIn,
            displayName: localStorage.getItem('name'),
        };

    }

    authStateChangedHandler(value) {
        this.setState({
            isLoggedIn: value,
            displayName: localStorage.getItem('name')
        });
        this.props.authStateChangedHandler(value);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("Header", nextProps);
        if (nextProps.isLoggedIn !== this.state.isLoggedIn) {
            this.setState({
                isLoggedIn: nextProps.isLoggedIn,
                displayName: localStorage.getItem('name'),
            });
        }
    }

    // handleLoginClick() {
    //     this.setState({isLoggedIn: true, userName: this.state.name});
    //     localStorage.setItem("name", this.state.name);
    //     localStorage.setItem("isLoggedIn", "true");
    //     console.log(this.state.name);
    //     this.props.authStateChangedHandler("true");
    //     console.log("Auth changed in FormLogIn login");
    //     this.toggle();
    // }

    // handleLogoutClick() {
    //     this.setState({isLoggedIn: false, userName: '', name: ''});
    //     localStorage.removeItem("name");
    //     localStorage.setItem("isLoggedIn", "false");
    //     this.props.authStateChangedHandler("false");
    // }

    // componentDidMount() {
    //     window.addEventListener('click', this.handleClickOutside, true);
    // }
    //
    // componentWillUnmount() {
    //     window.removeEventListener('click', this.handleClickOutside, true);
    // }
    //
    // handleClickOutside = event => {
    //     const domNode = ReactDOM.findDOMNode(this);
    //     if (!domNode || !domNode.contains(event.target)) {
    //         this.setState({isOpen: false})
    //      }
    // }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        let button;
        if (this.state.isLoggedIn || this.state.displayName !== "") {
            if (this.state.displayName !== null) {
                button = <LogoutButton userName={"Xin chào," + this.state.displayName} authStateChangedHandler={this.authStateChangedHandler}/>

            } else {
                button = <LoginButton/>
            }
        } else {
            button = <LoginButton/>;
        }
        return (
            <div className="header sticky-top">
                <Container container-fluid="true">
                    <Row className="p-0 d-flex flex-row">
                        <Navbar color="white" light expand="lg" className="header-content d-flex pr-0">
                            <NavbarToggler onClick={this.toggle}/>
                            <NavbarBrand href="/" className="d-flex flex-row flex-wrap">
                                <img src={logo} alt="logo" className="App-logo"/>
                                <div className="navbar-toggler ml-auto mr-0">
                                    <Link to="/LogIn">
                                        {button}
                                    </Link>
                                </div>
                            </NavbarBrand>

                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav pills navbar>
                                    <NavItem onClick={this.toggle}>
                                        <NavLink href="#">Ngân Hàng Gần Đây</NavLink>
                                    </NavItem>
                                    <NavItem onClick={this.toggle}>
                                        <NavLink href="#">Hỗ Trợ</NavLink>
                                    </NavItem>
                                    <NavItem onClick={this.toggle}>
                                        <NavLink href="#">Tin Tức</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>

                        </Navbar>
                        <div className="btnLogin ml-auto pt-3 pr-2">
                            {button}
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

