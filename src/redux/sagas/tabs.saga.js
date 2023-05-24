import { put, takeLatest } from "redux-saga/effects"
import axios from "axios"

// function used to post new tabs it is connected to the tabs saga
// in the export default below
function* postTabs(action) {
    try {
        const results = yield axios.post('/api/tabs', action.payload)
        yield put({ type: 'FETCH_TABS' })
    } catch (error) {
        console.log('error in the tabs saga post route', error);
    }
}

// function used to post get the tabs from database it is connected to the tabs saga
// on export default
function* fetchTabs(action) {

    try {
        const results = yield axios.get(`/api/tabs/${action.payload.id}`)
        console.log('this is action.payload.workSpaceId',action.payload);
        console.log('this is the results of tabs get route--->', results.data);
        yield put({ type: 'SET_TABS', payload: results.data })
    } catch (error) {
        console.log('error in the get route in tabs saga', error);
    }

}

// used to listen to all the dispatches on client side tabs.jsx file and run corresponding
// functions
export default function* tabsSaga() {
    yield takeLatest('POST_TABS', postTabs)
    yield takeLatest('FETCH_TABS', fetchTabs)
}