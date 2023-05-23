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

function* fetchTabs () {

    try {
        const results =yield axios.get('/api/tabs')
        console.log('this is the results of tabs get route--->', results.data);
        yield put ({type:'SET_TABS',payload:results.data})
    }   catch (error) {
        console.log('error in the get route in tabs saga',error);
    }
    
}

export default function* tabsSaga () {
    yield takeLatest('POST_TABS', postTabs)
    yield takeLatest('FETCH_TABS', fetchTabs)
}