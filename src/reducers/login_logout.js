import {LOG_IN, LOG_OUT} from '../constants/ActionTypes'
const init= {
    isLoggedIn: null,
    name: ""
};

const login_logout = (state = init, action) => {
    let nextState = {...state};
    switch (action.type) {
        case LOG_IN:
           nextState.isLoggedIn = action.isLoggedIn;
           nextState.name = action.name;
           return nextState;
        case LOG_OUT:
            nextState.isLoggedIn = action.isLoggedIn;
            nextState.name = "";
           return nextState;
        default:
            return nextState;
    }
};

export default login_logout
