import {all} from 'redux-saga/effects'
import WatchFetchUsers from './users/fetch'
import WatchCreateUser from './users/create'
import WatchDeleteUser from './users/delete'
import WatchUpdateUser from './users/update'
export default function* rootSaga() {
yield all([
    WatchFetchUsers(),
    WatchCreateUser(),
    WatchDeleteUser(),
    WatchUpdateUser()
])
}