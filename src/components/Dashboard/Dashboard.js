import React, {Component} from 'react';
import MainNavbar from './Navbar/MainNavbar';
import Sidebar from './Sidebar';
import TableList from './Navbar/DataTable/TableList'
import {Container, Row, Col, Card, Button} from 'reactstrap';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: JSON.parse(localStorage.getItem("users") || "[]")
        }
        // this.handleChangeData = this.handleChangeData.bind(this);
    }
    //
    // componentDidMount() {
    //         window.addEventListener("click",this.handleChangeData,false);
    // }
    //
    // handleChangeData() {
    //     this.setState({data:JSON.parse(localStorage.getItem("users") || "[]")})
    // }

    render() {
        return (
            <div className="dashboard">
                <Container fluid={true} className="dashboard-content p-0 m-0">
                    <Row className="d-flex flex-row">
                        <Col sm={3} className="p-0 m-0">
                            <Sidebar/>
                        </Col>
                        <Col className="d-flex flex-column p-0 m-0">
                            <Col className="main-content p-0 m-0">
                                <MainNavbar/>
                                <TableList data={this.state.data}/>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


