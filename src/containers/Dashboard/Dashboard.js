import React, {Component} from 'react';
import MainNavbar from '../../components/Dashboard/Navbar/MainNavbar';
import Sidebar from '../../components/Dashboard/Sidebar';
import TableList from '../../components/Dashboard/Navbar/DataTable/TableList'
import {Container, Row, Col} from 'reactstrap';
import {connect} from "react-redux";
import {FETCH_USERS} from "../../constants/ActionTypes";

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.users
        }
    }
    componentDidMount() {
        const {fetchUsers} = this.props;
        fetchUsers();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(!nextProps.error && nextProps.users !== this.state.data){
           this.setState({data: nextProps.users});
        }
    }
    render() {
        return (
            <div className="dashboard">
                <Container fluid={true} className="dashboard-content p-0 m-0">
                    <Row className="d-flex flex-row">
                        <Col sm={2} className="p-0 m-0">
                            <Sidebar/>
                        </Col>
                        <Col className="d-flex flex-column p-0 m-0">
                            <Col className="main-content p-0 m-0">
                                <MainNavbar/>
                                {this.props.error ? <div style={{color: "red"}}>ERROR: {this.props.error}</div> :
                                    this.props.loading ? (<div  className="ml-3 mt-1 mb-0">Loading...</div>):(<TableList data={this.state.data}/>)}
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }np
}

function mapStateToProps(state) {
    console.log("state",state);
    return {
        loading: state.userReducer.loading,
        error:state.userReducer.error,
        users: state.userReducer.users || []
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: () => dispatch({type:FETCH_USERS})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
