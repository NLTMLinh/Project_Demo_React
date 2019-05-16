import {FetchEmployeesError, FetchEmployeesSuccess,FetchEmployeesLoading} from "../actions/actions";
import {put,takeLatest,call} from 'redux-saga/effects'

import {apiURL} from "../constants/ActionTypes"

async function fetchAsync() {
    const res = await fetch(apiURL);
    if (res.ok)
        return await res.json();
    throw new Error(res.statusText);
}

function* fetchEmployee() {
    try {
        const employees = yield call(fetchAsync);
        yield put(FetchEmployeesSuccess(employees))
    } catch (e) {
        yield put(FetchEmployeesError(e.message));
    }
}
export default function* FetchEmployee() {
    yield takeLatest(FetchEmployeesLoading,fetchEmployee);
}