import React, {Component} from "react";
import './UserTable.css'
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import {Button, Form, FormGroup, Label,Table, Input, Modal, Container, Row, Col, ModalFooter,ModalBody,ModalHeader} from "reactstrap";
class Delete extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    handleDeleteClick(){
        if (localStorage) {
            let Users = this.props.users;
            Users.map(user => {
                if (this.props.id === user.id) {
                    let i = Users.indexOf(user);
                    Users.splice(i, 1);

                }
                if (localStorage.getItem("name") === user.name) {
                    localStorage.removeItem("name");
                }
            });
            localStorage.setItem("users", JSON.stringify(Users));
        }
    }
    render() {
        return (
            <Link to="/Dashboard">
            <Button className="btn-danger" onClick={this.handleDeleteClick}>Delete</Button>
            </Link>
        )
    }

}

class Edit extends Component{
    constructor(props) {
        super(props);
        this.handleDoneClick = this.handleDoneClick.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangeDisPlayName = this.handleChangeDisPlayName.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state= {
            modal: false,
            name: this.props.user.name,
            displayName: this.props.user.displayName,
            age: this.props.user.age,
            phone: this.props.user.phone
        }
    }
    handleDoneClick(){
        this.toggle();
        if (localStorage) {
            let Users = this.props.users;
            Users.map(user => {
                if (this.props.id === user.id) {
                    let i = Users.indexOf(user);
                    Users.splice(i, 1);
                    user.name = this.state.name;
                    user.displayName = this.state.displayName;
                    user.age = this.state.age;
                    user.phone = this.state.phone;
                    Users.splice(i,0,user);
                    localStorage.setItem("name",user.displayName);
                }
            });
            localStorage.setItem("users", JSON.stringify(Users));
        }
    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleChangeUserName(event) {
        this.setState({name: event.target.value});
    }
    handleChangeDisPlayName(event){
        this.setState({displayName: event.target.value});
    }
    handleChangeAge(event) {
        this.setState({age: event.target.value});
    }
    handleChangePhone(event) {
        this.setState({phone: event.target.value});
    }
    validateForm() {
        return this.state.displayName !== '' && this.state.phone !== '' && ( parseInt(this.state.age) > 0) && this.state.phone.length >= 10 && (parseInt(this.state.phone));

    }
    render() {
        return (
            <div>
                <Button className="btn-warning" onClick={this.toggle} id="btnEdit">Edit</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="edit">
                    <ModalHeader toggle={this.toggle}>Chỉnh sửa thông tin người dùng</ModalHeader>
                    <ModalBody>
                    <Container>
                        <Row>
                            <Form >
                                <FormGroup row>
                                    <Label for="name" sm={5}>Tên đăng nhập</Label>
                                    <Col >
                                        <Input type="text" name="name" id="name" placeholder="Tên đăng nhập"
                                               value={this.state.name} readonly="readonly" onChange={this.handleChangeUserName} >
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="displayName" sm={5}>Tên hiển thị</Label>
                                    <Col>
                                        <Input type="text" name="displayName" id="displayName" placeholder="Tên hiển thị"
                                               value={this.state.displayName} onChange={this.handleChangeDisPlayName}>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="age" sm={5}>Tuổi</Label>
                                    <Col >
                                        <Input type="number" name="age" id="age" placeholder="Tuổi"
                                               value={this.state.age} onChange={this.handleChangeAge}>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="phone" sm={5}>Số điện thoại</Label>
                                    <Col>
                                        <Input type="text" name="phone" id="phone" placeholder="Số điện thoại"
                                               value={this.state.phone} onChange={this.handleChangePhone}>
                                        </Input>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Row>
                    </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Link to="/Dashboard">
                        <Button color="info" onClick={this.handleDoneClick}
                                disabled={!this.validateForm()}>
                            Xong
                        </Button>
                        </Link>
                    </ModalFooter>
                </Modal>
            </div>

        )
    }
}

export default class UserTable extends Component {
    render() {
        return (
            <Table className="ml-2 mr-2" hover={true}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên đăng nhập</th>
                    <th>Tên hiển thị</th>
                    <th>Tuổi</th>
                    <th>Số điện thoại</th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {this.props.users.length > 0 ? (
                    this.props.users.map(user => (
                        <tr key={user.id}>
                            <th scope="row">{this.props.users.indexOf(user) + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.displayName}</td>
                            <td>{user.age}</td>
                            <td>{user.phone}</td>
                            <td className="d-flex justify-content-around">
                                <Edit id={user.id} users={this.props.users} user={user}/>
                                <Delete id={user.id} users={this.props.users}/>
                            </td>
                        </tr>
                    ))) : (
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )}
                </tbody>
            </Table>
        )
    }
}