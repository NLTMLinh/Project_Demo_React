import {FetchEmployeesError,FetchEmployeesSuccess} from "../actions/actions";
import {apiURL} from "../constants/ActionTypes"

export default function UpdateEmployee(id, employee) {
    const options = {
        method: "PATCH",
        body: JSON.stringify(employee)
    };
    return dispatch => {
        fetch(apiURL + '/' + id,options)
            .then(res => {
                if(res.ok)
                    return res.json();
                else
                    return Promise.reject({status: res.status, statusText: res.statusText});
            })
            .then(res => dispatch(FetchEmployeesSuccess(res)))
            .catch(err => dispatch(FetchEmployeesError(err.status + ":" + err.statusText)))
    }


}