import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Col, Button, Container, Row, Card} from 'reactstrap';
import './frmSignin.css'
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {LogIn} from "../../actions/actions";
import {CREATE_USER, FETCH_USERS} from "../../constants/ActionTypes";
import navigateTo from "../../services/navigation";

class FormSignIn extends Component {
    constructor(props) {
        super(props);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangeDisplayName = this.handleChangeDisplayName.bind(this);
        this.handleChangePassWord = this.handleChangePassWord.bind(this);
        this.handleChangePassWordAgain = this.handleChangePassWordAgain.bind(this);
        this.handleChangAge = this.handleChangAge.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleSignInClick = this.handleSignInClick.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleCheckPassword = this.handleCheckPassword.bind(this);
        this.handleCheckRePassword = this.handleCheckRePassword.bind(this);
        this.handleCheckUserName = this.handleCheckUserName.bind(this);
        this.handleCheckDisplayName = this.handleCheckDisplayName.bind(this);
        this.state = {
            userName: '',
            displayName: '',
            passWord: '',
            passWordAgain: '',
            age: '',
            phone: '',
            users:  this.props.users
        }
    }

    componentDidMount() {
        document.getElementById("re-passWord").addEventListener("blur", this.handleCheckRePassword);
        document.getElementById("displayName").addEventListener("blur", this.handleCheckDisplayName);
        document.getElementById("userName").addEventListener("blur", this.handleCheckUserName);
        document.getElementById("password").addEventListener("blur", this.handleCheckPassword);
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if(!nextProps.error && nextProps.users !== this.state.users){
            this.setState({users: nextProps.users});
        }
    }
    handleCheckRePassword() {
        if ( this.state.passWord !== this.state.passWordAgain) {
            document.getElementById('re-pW').style.display = 'block';
            // document.getElementById('re-passWord').focus();
        } else {
            document.getElementById('re-pW').style.display = 'none';
        }
    }

    handleCheckUserName() {
        let check = false;
        // let Users = this.state.users;
        if (this.state.users !== null) {
            this.state.users.map(user => {
                if (user.name === this.state.userName) {
                    check = true;
                }
            });
        }

        if (this.state.userName === "" || this.state.userName === null) {
            document.getElementById('name-not-empty').style.display = 'block';
            // document.getElementById('userName').focus();
            document.getElementById('name-exist').style.display = 'none';
        } else if (check) {
            document.getElementById('name-not-empty').style.display = 'none';
            // document.getElementById('userName').focus();
            document.getElementById('name-exist').style.display = 'block';
        } else {
            document.getElementById('name-not-empty').style.display = 'none';
            document.getElementById('name-exist').style.display = 'none';
        }
    }

    handleCheckDisplayName() {
        if (this.state.displayName === "" || this.state.displayName === null) {
            document.getElementById('displayName-not-empty').style.display = 'block';
            // document.getElementById('displayName').focus();
        } else {
            document.getElementById('displayName-not-empty').style.display = 'none';
        }
    }

    handleCheckPassword(){
        if (this.state.passWord === "" || this.state.passWord === null) {
            document.getElementById('password-not-empty').style.display = 'block';
            // document.getElementById('password').focus();
        } else {
            document.getElementById('password-not-empty').style.display = 'none';
        }
    }

    handleChangeUserName(event) {
        this.setState({userName: event.target.value});
    }

    handleChangeDisplayName(event) {
        this.setState({displayName: event.target.value});
    }

    handleChangePassWord(event) {
        this.setState({passWord: event.target.value});
    }

    handleChangePassWordAgain(event) {
        this.setState({passWordAgain: event.target.value});
    }

    handleChangAge(event) {

        this.setState({age: event.target.value});
    }

    handleChangePhone(event) {
        this.setState({phone: event.target.value});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.users !== this.state.users) {
            this.state.users = {...nextProps.users};
        }
    }

    handleSignInClick() {
        // let User = {
        //     name: this.state.userName,
        //     passWord: this.state.passWord,
        //     displayName: this.state.displayName,
        //     age: this.state.age,
        //     phone: this.state.phone,
        // };
        // this.props.LogIn(true, this.state.userName);
        // this.props.createUser(User);
        // navigateTo('/');

    }

    validateForm() {
        return this.state.userName !== '' && this.state.phone !== '' && (parseInt(this.state.age) > 0) && this.state.phone.length >= 0 && (parseInt(this.state.phone));
    }
    render() {
        return (
            <div className="SignIn mt-3">
                <Container>
                    <Card>
                        <Row className="d-flex justify-content-center ">
                            <Form className="mt-2 w-50">
                                <FormGroup className="text-center text-secondary">
                                    <h3 className="font-weight-bold mb-5">Đăng ký</h3>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="userName" sm={4}>Tên đăng nhập</Label>
                                    <Col sm={8}>
                                        <Input type="text" name="userName" id="userName" placeholder="Tên đăng nhập"
                                               value={this.state.userName} onChange={this.handleChangeUserName}/>
                                    </Col>
                                    <Col sm={{offset: 4}}>
                                        <Col>
                                            <span id="name-not-empty">Tên đăng nhập không được trống</span>
                                        </Col>
                                        <Col>
                                            <span id="name-exist">Tên đăng nhập đã tồn tại</span>
                                        </Col>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="displayName" sm={4}>Tên hiển thị</Label>
                                    <Col sm={8}>
                                        <Input type="text" name="displayName" id="displayName" placeholder="Tên hiển thị"
                                               value={this.state.displayName} onChange={this.handleChangeDisplayName}/>
                                    </Col>
                                    <Col sm={{offset: 4}} >
                                        <span id="displayName-not-empty">Tên hiển thị không được trống</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="password" sm={4}>Mật khẩu</Label>
                                    <Col sm={8}>
                                        <Input type="password" name="password" id="password" placeholder="Mật khẩu"
                                               value={this.state.passWord} onChange={this.handleChangePassWord}/>
                                    </Col>
                                    <Col sm={{offset: 4}} >
                                        <span id="password-not-empty">Mật khẩu không được trống</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="re-passWord" sm={4}>Nhập lại mật khẩu</Label>
                                    <Col sm={8}>
                                        <Input type="password" name="re-passWord" id="re-passWord"
                                               placeholder="Nhập lại mật khẩu" value={this.state.passWordAgain}
                                               onChange={this.handleChangePassWordAgain}/>
                                    </Col>
                                    <Col sm={{offset: 4}}>
                                        <span id="re-pW">Mật khẩu nhập lại sai</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="age" sm={4}>Tuổi</Label>
                                    <Col sm={8}>
                                        <Input type="number" name="age" id="age" placeholder="Tuổi"
                                               value={this.state.age}
                                               onChange={this.handleChangAge}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="phone" sm={4}>Số điện thoại</Label>
                                    <Col sm={8}>
                                        <Input type="text" name="phone" id="phone" placeholder="Số điện thoại"
                                               value={this.state.phone}
                                               onChange={this.handleChangePhone}/>
                                    </Col>
                                </FormGroup>
                                <Col className="text-center mb-3">
                                    <Link to="/">
                                        <Button color="primary" onClick={this.handleSignInClick}
                                                disabled={!this.validateForm()}
                                        >Đăng kí</Button>
                                    </Link>
                                </Col>
                            </Form>
                        </Row>
                    </Card>
                </Container>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        LogIn: (isLoggedIn, name) => dispatch(LogIn(isLoggedIn, name)),
        createUser: (user) => dispatch({type: CREATE_USER, user}),
    }
}

function mapStateToProps(state) {
    return {
        users: state.userReducer.users || []
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(FormSignIn)