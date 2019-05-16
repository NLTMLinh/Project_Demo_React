import React, {Component} from "react";
import '../../components/Dashboard/Navbar/DataTable/UserTable.css'
import {Link} from 'react-router-dom';
import {Button} from "reactstrap";
import {connect} from "react-redux";
import {LogOut,DeleteUser} from "../../actions/actions";

function mapDispatchToProps(dispatch) {
    return{
        LogOut: isLoggedIn => dispatch(LogOut(isLoggedIn)),
        DeleteUser: id => dispatch(DeleteUser(id)),
    }
}

class Delete extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    handleDeleteClick(){
            this.props.LogOut(false);
            this.props.DeleteUser(this.props.id);
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