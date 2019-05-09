import React from "react";
import {Container, Row, Col, Card, CardHeader, CardBody} from "reactstrap";
import UserTable from './UserTable'
import "./TableList.css"

export default class TableComponent extends React.Component {
    render() {
        return (
            <Container className="table-list ml-3 mt-5 mr-5">
                <Row>
                    <UserTable users={this.props.data}/>
                </Row>
            </Container>
        )
    }
}


