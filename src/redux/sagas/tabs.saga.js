import { put, takeLatest } from "redux-saga/effects"
import axios from "axios"


//-----------------------------POST TABS SAGA--------------------------------------

function* postTabs(action) {
    try {
        const results = yield axios.post('/api/tabs', action.payload)
        yield put({ type: 'FETCH_TABS' })
    } catch (error) {
        console.log('error in the tabs saga post route', error);
    }
}


//-----------------------------GET TABS SAGA--------------------------------------

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

//-----------------------------UPDATE TABS SAGA--------------------------------------

function* updateTabs ( action ) {
    
    console.log('this is action payload in saga update tabs function--->',action.payload);
    try {
    const response = yield axios.put('/api/tabs',action.payload)
    yield put({type:'FETCH_TABS'})
    } catch (error) {
        console.log('error in update tabs in tabs.saga file--->',error);
    }
} 


// used to listen to all the dispatches on client side tabs.jsx file and run corresponding
// functions
export default function* tabsSaga() {
    yield takeLatest('POST_TABS', postTabs)
    yield takeLatest('FETCH_TABS', fetchTabs)
    yield takeLatest('UPDATE_TABS',updateTabs)
}