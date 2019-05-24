import {LOG_IN, LOG_OUT} from '../constants/ActionTypes'
const init= {
    isLoggedIn: false,
    name: ""
};

const login_logout = (state = init, action) => {
    switch (action.type) {
        case LOG_IN:
          return{
              ...state,
              isLoggedIn: action.isLoggedIn,
              name: action.name
          };
        case LOG_OUT:
            return{
                ...state,
                isLoggedIn: action.isLoggedIn,
                name: ""
            };
        default:
            return state;
    }
};

export default login_logout
