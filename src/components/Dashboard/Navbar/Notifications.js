import React from "react";
import {NavItem, NavLink, Badge, DropdownItem, DropdownMenu, DropdownToggle,Dropdown } from "reactstrap";
import './Notification.css'

export default class Notifications extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.toggleNotifications = this.toggleNotifications.bind(this);
    }

    toggleNotifications() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
                <Dropdown isOpen={this.state.visible} toggle={this.toggleNotifications}>
                    <DropdownToggle color="transparent" tag="span"
                                    onClick={this.toggleNotifications}
                                    data-toggle="dropdown"
                                    aria-expanded={this.state.visible}>
                        <i className="far fa-bell fa-2x"/>
                        <Badge pill theme="danger" color="primary">2</Badge>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem>Some Action</DropdownItem>
                        <DropdownItem disabled>Action (disabled)</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Foo Action</DropdownItem>
                        <DropdownItem>Bar Action</DropdownItem>
                        <DropdownItem>Quo Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown >
        );
    }
}
