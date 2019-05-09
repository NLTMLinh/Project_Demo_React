import React from "react";
import {
    Form,
    InputGroup,
} from "reactstrap";
import Input from "reactstrap/es/Input";
import './NavbarSearch.css'

export default () => (
    <Form className="navbar-search d-none d-md-flex d-lg-flex">
        <InputGroup className="ml-0 no-border">
            <Input placeholder="Search..." type="text" className="form-control"/>
        </InputGroup>
    </Form>
);
