import React, {Component} from 'react';
import MainNavbar from '../../components/Dashboard/Navbar/MainNavbar';
import Sidebar from '../../components/Dashboard/Sidebar';
import TableList from '../../components/Dashboard/Navbar/DataTable/TableList'
import {Container, Row, Col} from 'reactstrap';
import {connect} from "react-redux";
import {FetchEmployeesLoading} from "../../actions/actions";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.employees
        }
    }
    componentWillMount() {
        const {fetchEmployees} =  this.props;
        fetchEmployees();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(!nextProps.error && nextProps.employees !== this.state.data){
           this.setState({data: nextProps.employees});
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
    }
}

function mapStateToProps(state) {
    return {
        loading: state.EmployeesReducer.loading,
        error:state.EmployeesReducer.error,
        employees: state.EmployeesReducer.employees || []
    }
}
function mapDispatchToProps(dispatch) {
    console.log("dispatch");
    return {
        fetchEmployees: () => dispatch(FetchEmployeesLoading())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
