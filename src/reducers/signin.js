import {SIGN_IN,DELETE_USER,EDIT_USER} from "../constants/ActionTypes";

// const init = {
//     users: []
// };
//
// const signin = (state = init, action) =>{
//     let nextState = {...state};
//     switch (action.type) {
//         case SIGN_IN:
//             nextState.users.push(action.user);
//             return nextState;
//         case DELETE_USER:
//             console.log("next state", nextState.users);
//             console.log("id action",action.id);
//             console.log("filter",nextState.users.filter((user) => user.id !== action.id));
//             nextState = nextState.users.filter((user) => user.id !== action.id);
//             return nextState;
//         case EDIT_USER:
//             return nextState.users.map((user) => {
//                 if (user.id === action.user.id) {
//                     return {
//                         ...user,
//                         name: action.user.name,
//                         displayName: action.user.displayName,
//                         age: action.user.age,
//                         phone: action.user.phone
//                     }
//
//                 } else{
//                     return user;
//                 }
//
//             });
//         default:
//             return state;
//     }
// };
const signin = (state = [], action) => {
    switch (action.type) {
        case SIGN_IN:
            return state.concat([action.user]);
        case DELETE_USER:
            return state.filter((user) => user.id !== action.id);
        case EDIT_USER:
            return state.map((user) => user.id === action.user.id ? action.user : user );
        default:
            return state;
    }
}
export default signin;