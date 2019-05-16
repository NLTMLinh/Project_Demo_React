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
import {EditUser} from "../../actions/actions";
import {connect} from "react-redux";

class EditButton extends Component{
    constructor(props) {
        super(props);
        this.handleDoneClick = this.handleDoneClick.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangeDisPlayName = this.handleChangeDisPlayName.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeSalary = this.handleChangeSalary.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state= {
            modal: false,
            id: this.props.user.id,
            name: this.props.user.employee_name,
            age: this.props.user.employee_age,
            salary: this.props.user.employee_salary,
            image: this.props.user.profile_image,
        }
    }
    handleDoneClick(){
        this.toggle();
        let user = {
            name: this.state.name,
            age: this.state.age,
            salary: this.state.salary,
            image: this.state.image
        };
        this.props.EditUser(user);
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
    handleChangeSalary(event) {
        this.setState({salary: event.target.value});
    }
    handleChangeImage(event){
        this.setState({image: event.target.value});
    }
    validateForm() {
        return this.state.salary !== '' && ( parseInt(this.state.age) > 0) && this.state.salary >= 0 && (parseInt(this.state.salary));

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
                                        <Label for="salary" sm={5}>Lương</Label>
                                        <Col>
                                            <Input type="text" name="salary" id="salary" placeholder="Lương"
                                                   value={this.state.salary} onChange={this.handleChangeSalary}>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="image" sm={5}>Hình</Label>
                                        <Col>
                                            <Input type="text" name="image" id="image" placeholder="Hình"
                                                   value={this.state.image} onChange={this.handleChangeImage}>
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
        EditUser: user => dispatch(EditUser(user)),
    }

}
export default connect(null,mapDispatchToProps)(EditButton)