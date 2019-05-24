import {
    LOG_IN,
    LOG_OUT,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
    FETCH_USERS_LOADING,
    CREATE_USER_ERROR,
    CREATE_USER_LOADING,
    CREATE_USER_SUCCESS,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR,
    DELETE_USER_LOADING, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_LOADING
} from "../constants/ActionTypes";

export function LogIn(isLoggedIn,name){
    return{
        type: LOG_IN,
        isLoggedIn,
        name
    }
}

export function LogOut(isLoggedIn){
    return{
        type: LOG_OUT,
        isLoggedIn
    }
}

export function FetchUsersSuccess(users) {
    return {
        type: FETCH_USERS_SUCCESS,
        users: users
    }
}
export function FetchUsersError(error) {
    return{
        type: FETCH_USERS_ERROR,
        error
    }
}
export function FetchUsersLoading() {
    return{
        type: FETCH_USERS_LOADING
    }
}

export function CreateUsersSuccess(user) {
    return {
        type: CREATE_USER_SUCCESS,
        user: user
    }
}
export function CreateUsersError(error) {
    return{
        type: CREATE_USER_ERROR,
        error
    }
}
export function CreateUsersLoading() {
    return{
        type: CREATE_USER_LOADING
    }
}

export function DeleteUsersSuccess(user) {
    return {
        type: DELETE_USER_SUCCESS,
        user: user
    }
}
export function DeleteUsersError(error) {
    return{
        type: DELETE_USER_ERROR,
        error
    }
}
export function DeleteUsersLoading() {
    return{
        type: DELETE_USER_LOADING
    }
}

export function UpdateUsersSuccess(user) {
    return {
        type: UPDATE_USER_SUCCESS,
        user: user
    }
}
export function UpdateUsersError(error) {
    return{
        type: UPDATE_USER_ERROR,
        error
    }
}
export function UpdateUsersLoading() {
    return{
        type: UPDATE_USER_LOADING
    }
}