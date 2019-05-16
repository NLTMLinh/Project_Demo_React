import {LOG_IN,LOG_OUT,SIGN_IN,DELETE_USER,EDIT_USER,FETCH_EMPLOYEES_ERROR,FETCH_EMPLOYEES_SUCCESS,FETCH_EMPLOYEES_LOADING} from "../constants/ActionTypes";

export function LogIn(isLoggedIn,name){
    return{
        type: LOG_IN,
        isLoggedIn,
        name
    }
};

export function LogOut(isLoggedIn){
    return{
        type: LOG_OUT,
        isLoggedIn
    }
};

export function SignIn(user) {
    return{
        type: SIGN_IN,
        user
    }

}
export function DeleteUser(id) {
    return{
        type: DELETE_USER,
        id
    }
}
export function EditUser(user) {
    return{
        type: EDIT_USER,
        user
    }
}
export function FetchEmployeesSuccess(employees) {
    return {
        type: FETCH_EMPLOYEES_SUCCESS,
        employees
    }
}
export function FetchEmployeesError(error) {
    return{
        type: FETCH_EMPLOYEES_ERROR,
        error
    }

}
export function FetchEmployeesLoading() {
    return{
        type: FETCH_EMPLOYEES_LOADING
    }

}