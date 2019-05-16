import {FetchEmployeesSuccess,FetchEmployeesError} from "../actions/actions";
import {apiURL} from "../constants/ActionTypes"

export default function CreateEmployee(employee) {
    const options = {
        method: "POST",
        body: JSON.stringify(employee),
        headers: {
            "Content-type" : "application/json"
        }
    };
    return dispatch => {
            fetch(apiURL,options)
                .then(res => {
                    if(res.ok)
                        return res.json();
                    else {
                        return Promise.reject({status: res.status, statusText: res.statusText});
                    }
                })
                .then(res => {
                    dispatch(FetchEmployeesSuccess(res))
                })
                .catch(err => dispatch(FetchEmployeesError(err.status + err.statusText)))
    }
}