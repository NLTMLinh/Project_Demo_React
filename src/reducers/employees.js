import {FETCH_EMPLOYEES_ERROR, FETCH_EMPLOYEES_SUCCESS,FETCH_EMPLOYEES_LOADING} from "../constants/ActionTypes";

const init = {
    loading: false,
    employees: [],
    error: null,
};

export default function EmployeesReducer(state = init, action) {
    switch (action.type) {
        case FETCH_EMPLOYEES_LOADING:
            return {
                ...state,
                loading: true
            };
        case FETCH_EMPLOYEES_SUCCESS:
            return {
                ...state,
                loading: false,
                employees: action.employees
            };
        case FETCH_EMPLOYEES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
           return state;
    }
}
