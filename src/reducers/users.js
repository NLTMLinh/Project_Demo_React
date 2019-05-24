import {
    CREATE_USER_ERROR,
    CREATE_USER_LOADING, CREATE_USER_SUCCESS, DELETE_USER_ERROR, DELETE_USER_LOADING, DELETE_USER_SUCCESS,
    FETCH_USERS_ERROR,
    FETCH_USERS_LOADING,
    FETCH_USERS_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_LOADING, UPDATE_USER_SUCCESS
} from "../constants/ActionTypes";

const init = {
    loading: false,
    users: [],
    error: null,
};

export default function UsersReducer(state = init, action) {
    switch (action.type) {
        case FETCH_USERS_LOADING:
        case CREATE_USER_LOADING:
        case DELETE_USER_LOADING:
        case UPDATE_USER_LOADING:
            return {
                ...state,
                loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.users
            };
        case CREATE_USER_SUCCESS:
            return{
              ...state,
              loading: false,
              users: state.users.concat([action.user]),
            };
        case DELETE_USER_SUCCESS:
            return{
                 ...state,
                loading: false,
                users: state.users.filter(user => user._id !== action.user._id)
            };
        case UPDATE_USER_SUCCESS:
            return {
                 ...state,
                loading: false,
                users: state.users.map(user => user._id === action.user._id ? {...action.user} : {...user})
            };
        case FETCH_USERS_ERROR:
        case CREATE_USER_ERROR:
        case DELETE_USER_ERROR:
        case UPDATE_USER_ERROR:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.error
            };
        default:
           return state;
    }
}
