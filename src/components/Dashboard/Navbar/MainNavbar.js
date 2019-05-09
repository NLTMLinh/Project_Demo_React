import React from "react";
import { Container, Navbar } from "reactstrap";
import logo from '../../../assets/resources/Dashboard-logo.png'

import NavbarSearch from "./NavbarSearch";
import Notifications from "./Notifications"
import "./MainNavbar.css"
import {Col, NavbarBrand, NavbarToggler} from "reactstrap";
import Button from "reactstrap/es/Button";
export default class MainNavbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };
        this.toggleNavbar = this.toggleNavbar.bind(this)
    }
    toggleNavbar(){
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <div className="main-navbar sticky-top">
                <Container className="p-0" fluid={true}>
                    <Navbar type="light" className=" flex-md-nowrap p-0 pr-5 mr-5">
                        <Notifications />
                        <NavbarSearch />
                    </Navbar>
                </Container>
            </div>
        );
    }
};
