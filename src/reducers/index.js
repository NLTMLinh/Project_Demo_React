import { combineReducers } from 'redux'
import login_logout from './login_logout'
import signin from './signin'
import EmployeesReducer from './employees'
import fetchEmployees from './fetchEmployees'
export default combineReducers({
   login_logout,signin,fetchEmployees,EmployeesReducer
})