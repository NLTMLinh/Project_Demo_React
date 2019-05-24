import { combineReducers } from 'redux'
import login_logout from './login_logout'
import userReducer from './users'
export default combineReducers({
   login_logout,userReducer
});
