import React, {Component} from "react";
import '../../components/Dashboard/Navbar/DataTable/UserTable.css'
import {Link} from 'react-router-dom';
import {Button} from "reactstrap";
import {connect} from "react-redux";
import {LogOut} from "../../actions/actions";
import {DELETE_USER} from "../../constants/ActionTypes";
import navigateTo from '../../services/navigation'
function mapDispatchToProps(dispatch) {
    return{
        // LogOut: isLoggedIn => dispatch(LogOut(isLoggedIn)),
        deleteUser: id => dispatch({type: DELETE_USER,id}),
    }
}

class Delete extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    handleDeleteClick(){
        if(window.confirm("Bạn thực sự muốn xóa người này?")) {
            // this.props.LogOut(false);
            this.props.deleteUser(this.props.id);
            navigateTo('/Dashboard')
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
export default connect(null,mapDispatchToProps)(Delete)