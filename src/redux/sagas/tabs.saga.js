import {put,takeLatest} from "redux-saga/effects"
import axios from "axios"

function* postTabs (action) {
    try {
        const results = yield axios.post('/api/tabs',action.payload)
        yield put ({type:'FETCH_TABS'})
    } catch (error) {
        console.log('error in the tabs saga post route', error);
    }
}

export default function* tabsSaga () {
    yield takeLatest('POST_TABS', postTabs)
}