import React, {Component} from 'react';
import "./Style/Sidebar.css"
import {Container, Row, Navbar, NavLink, Nav, NavItem, Collapse, NavbarToggler, NavbarBrand} from "reactstrap";

export default class Sidebar extends Component {
    render() {
        return (
            <Container className="Sidebar" fluid={true}>
                <Row>
                    <Nav className="ml-auto" navbar vertical>
                        <NavItem>
                            <NavLink href="#" active={true}>
                                <i className="fas fa-tachometer-alt"/>
                                Dashboard
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                <i className="fas fa-user"/>
                                Quản lý tài khoản
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                <i className="fas fa-info-circle"/>
                                Thông tin khác</NavLink>
                        </NavItem>
                    </Nav>
                </Row>
            </Container>
        )
    }
}