import {Link} from "react-router-dom";
import React,{Component} from "react";
import {
    Button,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row
} from "reactstrap";
import {UPDATE_USER} from "../../constants/ActionTypes";
import {LogIn} from "../../actions/actions";
import {connect} from "react-redux";
import navigateTo from '../../services/navigation'
class EditButton extends Component{
    constructor(props) {
        super(props);
        this.handleDoneClick = this.handleDoneClick.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangeDisPlayName = this.handleChangeDisPlayName.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangePassWord = this.handleChangePassWord.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state= {
            modal: false,
            id: this.props.user._id,
            name: this.props.user.name,
            age: this.props.user.age,
            displayName: this.props.user.displayName,
            phone: this.props.user.phone,
            passWord: this.props.user.passWord
        }
    }
    handleDoneClick(){
        this.toggle();
        let user = {
            name: this.state.name,
            passWord: this.state.passWord,
            age: this.state.age,
            displayName: this.state.displayName,
            phone: this.state.phone
        };
        this.props.editUser(this.state.id,user);
        this.props.login(this.state.displayName);
        navigateTo('/Dashboard')
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

    handleChangePhone(event){
        this.setState({phone: event.target.value});
    }
    handleChangePassWord(event){
        this.setState({passWord: event.target.value});
    }
    validateForm() {
        return this.state.displayName !== ''  &&  this.state.passWord !== '' && ( parseInt(this.state.age) > 0) && this.state.phone >= 0 && (parseInt(this.state.phone));
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
                                        <Label for="age" sm={5}>Tuổi</Label>
                                        <Col >
                                            <Input type="number" name="age" id="age" placeholder="Tuổi"
                                                   value={this.state.age} onChange={this.handleChangeAge}>
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
                                        <Label for="password" sm={5}>Mật khẩu</Label>
                                        <Col>
                                            <Input type="text" name="password" id="password" placeholder="Mật khẩu"
                                                   value={this.state.passWord} onChange={this.handleChangePassWord}/>
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
function mapDispatchToProps(dispatch) {
    return{
        editUser: (id,user) => dispatch({type: UPDATE_USER,id,user}),
        login: (name) => dispatch(LogIn(true,name))
    }
}
export default connect(null,mapDispatchToProps)(EditButton)