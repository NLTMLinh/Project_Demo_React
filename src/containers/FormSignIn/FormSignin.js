import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Col, Button, Container, Row,Card} from 'reactstrap';
import './frmSignin.css'
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {LogIn} from "../../actions/actions";
import {SignIn} from "../../actions/actions";

class FormSignIn extends Component {
    constructor(props) {
        super(props);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangeDisplayName = this.handleChangeDisplayName.bind(this);
        this.handleChangePassWord = this.handleChangePassWord.bind(this);
        this.handleChangePassWordAgain = this.handleChangePassWordAgain.bind(this);
        this.handleChangAge = this.handleChangAge.bind(this);
        this.handleChangeSalary = this.handleChangeSalary.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.handleSignInClick = this.handleSignInClick.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleCheckPassword = this.handleCheckPassword.bind(this);
        this.handleCheckUserName = this.handleCheckUserName.bind(this);
        this.handleCheckDisplayName = this.handleCheckDisplayName.bind(this);
        this.state = {
            userName: '',
            displayName: '',
            passWord: '',
            passWordAgain: '',
            age: '',
            salary: '',
            image: '',
            users: this.props.users
        }
    }

    componentDidMount() {
        document.getElementById("userName").addEventListener("blur", this.handleCheckUserName);
    }

    handleCheckPassword() {
        if (this.state.passWord !== this.state.passWordAgain) {
            document.getElementById('re-pW').style.display = 'block';
            document.getElementById('re-passWord').focus();
        } else {
            document.getElementById('re-pW').style.display = 'none';
        }
    }
    handleCheckUserName(){
        let check = false;
        if (localStorage) {
            let Users = this.state.users;
            if (Users !== null) {
                Users.map(user => {
                    if (user.name === this.state.userName) {
                        check = true;
                    }
                });
            }
        }

        if(this.state.userName === "" || this.state.userName === null){
            document.getElementById('name-not-empty').style.display = 'block';
            document.getElementById('userName').focus();
            document.getElementById('name-exist').style.display = 'none';
        }
        else if(check){
            document.getElementById('name-not-empty').style.display = 'none';
            document.getElementById('userName').focus();
            document.getElementById('name-exist').style.display = 'block';
        }
        else{
            document.getElementById('name-not-empty').style.display = 'none';
            document.getElementById('name-exist').style.display = 'none';
        }
    }
    handleCheckDisplayName() {
        if (this.state.displayName === "" || this.state.displayName === null) {
            document.getElementById('displayName-not-empty').style.display = 'block';
            document.getElementById('displayName').focus();
        } else {
            document.getElementById('displayName-not-empty').style.display = 'none';
        }
    }
    handleChangeUserName(event) {
        this.setState({userName: event.target.value});
    }
    handleChangeDisplayName(event){
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

    handleChangeSalary(event) {
        this.setState({phone: event.target.value});
    }
    handleChangeImage(event){
        this.setState({image: event.target.value});
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.users !== this.state.users){
            this.state.users = {...nextProps.users};
        }
    }

    handleSignInClick() {
            let Users = this.state.users;
            let id = 0;
            if (Users.length === 0) {
                id = 1;
            } else {
                id = Users[Users.length - 1].id + 1;
            }
            let User = {
                id: id,
                name: this.state.userName,
                age: this.state.age,
                salary: this.state.salary,
                image: this.state.image
            };
            this.props.LogIn(true,this.state.userName);
    }

    validateForm() {
        return this.state.userName !== '' &&this.state.phone !== '' && (parseInt(this.state.age) > 0) && this.state.phone.length >= 0 && (parseInt(this.state.phone));
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
                                <Col >
                                    <span id="name-not-empty">Tên đăng nhập không được trống</span>
                                </Col>
                                <Col>
                                    <span id="name-exist">Tên đăng nhập đã tồn tại</span>
                                </Col>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="age" sm={4}>Tuổi</Label>
                                <Col sm={8}>
                                    <Input type="number" name="age" id="age" placeholder="Tuổi" value={this.state.age}
                                           onChange={this.handleChangAge}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="salary" sm={4}>Lương</Label>
                                <Col sm={8}>
                                    <Input type="text" name="salary" id="salary" placeholder="Lương"
                                           value={this.state.salary} onChange={this.handleChangeSalary}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="image" sm={4}>Hình</Label>
                                <Col sm={8}>
                                    <Input type="text" name="image" id="image" placeholder="Hình"
                                           value={this.state.salary} onChange={this.handleChangeImage}/>
                                </Col>
                            </FormGroup>
                            <Col className="text-center mb-3">
                                <Link to="/">
                                    <Button color="primary" onClick={this.handleSignInClick} disabled={!this.validateForm()}
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
function mapDispatchToProps(dispatch){
    return{
        LogIn: (isLoggedIn,name) => dispatch(LogIn(isLoggedIn,name)),
        SignIn: user => dispatch(SignIn(user)),
    }
}
function mapStateToProps(state) {
    return{
        users: state.signin || []
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(FormSignIn)