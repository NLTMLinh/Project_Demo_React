import React, {Component} from 'react';
import {Container, Row, Nav, NavItem,} from 'reactstrap';
import './Menu.css'
export default class Menu extends Component{
    render() {
        return(
            <div className="menu">
            <Container container-fluid = "true">
                <Row>
                    <Nav>
                        <NavItem className="nav-item">
                            Trang Chủ
                        </NavItem>
                        <NavItem className="nav-item">
                            <i className="fas fa-angle-right"/>
                        </NavItem>
                        <NavItem className="nav-item">
                            Tin Tức
                        </NavItem>
                    </Nav>
                </Row>
            </Container>
            </div>
        )
    }
}