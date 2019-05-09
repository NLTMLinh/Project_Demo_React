import React, {Component} from 'react';
import {Container, FormGroup, Label, Row, Button, Col, Input, Form, Card} from 'reactstrap';
import "./frmLogin.css"
import "../../assets/style/res.css"
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';

export default class FromLogin extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangePassWord = this.handleChangePassWord.bind(this);
        this.handleCheckPassword = this.handleCheckPassword.bind(this);
        this.handleCheckUserName = this.handleCheckUserName.bind(this);
        this.state = {
            userName: '',
            passWord: '',
            isLoggedIn: this.props.isLoggedIn,
            Users: JSON.parse(localStorage.getItem("users" || "[]"))
        }
    }

    componentDidMount() {
        document.getElementById("userName").addEventListener("blur", this.handleCheckUserName);
        document.getElementById("password").addEventListener("blur", this.handleCheckPassword);
    }

    handleCheckPassword() {
        let check = false;

        if (this.state.Users !== null) {
            this.state.Users.map(user => {
                if (user.passWord === this.state.passWord) {
                    check = true;
                }
            });
            if (this.state.passWord === "" || this.state.passWord === null || !check) {
                document.getElementById('check-passWord').style.display = 'block';
                document.getElementById('password').focus();
            } else {
                document.getElementById('check-passWord').style.display = 'none';
            }
        }
    }

    handleCheckUserName() {
        let check = false;

        if (this.state.Users !== null) {
            this.state.Users.map(user => {
                if (user.name === this.state.userName) {
                    check = true;
                }
            });

            if (this.state.userName === "" || this.state.userName === null || !check) {
                document.getElementById('check-userName').style.display = 'block';
                document.getElementById('userName').focus();
            } else {
                document.getElementById('check-userName').style.display = 'none';
            }
        }
    }

    handleLoginClick() {
        let check = false;
        let displayName = "";

        if (this.state.Users !== null) {
            this.state.Users.map(user => {
                if (user.name === this.state.userName && user.passWord === this.state.passWord) {
                    check = true;
                    displayName = user.displayName;
                }
            });
        }
        console.log("check", check);
        if (check) {
            this.setState({isLoggedIn: true});
            localStorage.setItem("name", displayName);
            localStorage.setItem("isLoggedIn", "true");
        } else {
            alert("Tên đăng nhập hoặc mật khẩu sai, mời bạn đăng nhập lại");
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.isLoggedIn !== this.state.isLoggedIn) {
            this.setState({isLoggedIn: nextProps.isLoggedIn})
            this.setState({displayName: localStorage.getItem('name')});
        }
    }

    handleChangeUserName(event) {
        console.log("event", event);
        console.log("target", event.target);
        this.setState({userName: event.target.value});
    }

    handleChangePassWord(event) {
        this.setState({passWord: event.target.value});
    }

    render() {
        return (
            <div className="ml-auto mt-3 px-5">

                <Container>
                    <Card>
                        <Row className=" d-flex justify-content-center ">

                            <Form className="mt-2 w-50">
                                <FormGroup className="text-center text-secondary">
                                    <h3 className="font-weight-bold mb-5">Đăng nhập</h3>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="userName" sm={3}>Tên đăng nhập</Label>
                                    <Col sm={8}>
                                        <Input className="text-secondary" type="text" name="userName" id="userName"
                                               placeholder="Tên đăng nhập"
                                               value={this.state.userName} onChange={this.handleChangeUserName}/>
                                    </Col>
                                    <Col sm={{offset: 3}}>
                                        <span id="check-userName">Tên đăng nhập không đúng</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="password" sm={3}>Mật khẩu</Label>
                                    <Col sm={8}>
                                        <Input className="text-secondary" type="password" name="password" id="password"
                                               placeholder="Mật khẩu"
                                               value={this.state.passWord} onChange={this.handleChangePassWord}/>
                                    </Col>
                                    <Col sm={{offset: 3}}>
                                        <span id="check-passWord">Mật khẩu không đúng</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col className="text-right" sm={11}>
                                        <a href="#" className="text-secondary">Quên mật khẩu?</a>
                                    </Col>

                                </FormGroup>
                                <FormGroup row>
                                    <Col className=" text-center">
                                        <Link to="/">
                                            <Button color="primary" onClick={this.handleLoginClick}
                                                    check={this.state.check}>
                                                Đăng nhập
                                            </Button>
                                        </Link>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col className=" text-center d-flex flex-column mt-5">
                                        <span className="text-secondary">Tạo tài khoản mới</span>
                                        <Link to="/SignIn">
                                            <Button outline color="primary" className='mt-3 font-weight-bold'>Đăng
                                                ký</Button>
                                        </Link>
                                    </Col>
                                </FormGroup>
                            </Form>

                        </Row>
                    </Card>
                </Container>
            </div>

        )
    }
}
