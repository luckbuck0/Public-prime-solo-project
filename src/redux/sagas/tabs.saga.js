import { put, takeLatest } from "redux-saga/effects"
import axios from "axios"


let currentWorkspaceId = []

//-----------------------------POST TABS SAGA--------------------------------------

function* postTabs(action) {
    let id = {
        id:action.payload.id}
    try {
        const results = yield axios.post(`/api/tabs/${action.payload.id}`,action.payload)
        yield put({ type: 'FETCH_TABS', payload: id})
    } catch (error) {
        console.log('error in the tabs saga post route', error);
    }
}


//-----------------------------GET TABS SAGA--------------------------------------

function* fetchTabs(action) {

    console.log('this is id in fetchTabs',action.payload.id);

    try {
        const results = yield axios.get(`/api/get/${action.payload.id}`)
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
    yield put({type:'FETCH_TABS',payload:action.payload.workspace_id})
    } catch (error) {
        console.log('error in update tabs in tabs.saga file--->',error);
    }
} 


function* editTab ( action ) {
    const tabIdToEdit =action.payload

    console.log('this is action payload in saga edit tabs function--->',action.payload);
    try {
    const response = yield axios.get(`/api/tabs/${tabIdToEdit}`,)
    const tabToEdit = response.data
    console.log('this is the tabtoedit in edit tab function in saga-->',tabToEdit);
    yield put({type:'SET_EDITED_TABS',payload:tabToEdit})
    } catch (error) {
        console.log('error in edit tabs in tabs.saga file--->',error);
    }
} 


// used to listen to all the dispatches on client side tabs.jsx file and run corresponding
// functions
export default function* tabsSaga() {
    yield takeLatest('POST_TABS', postTabs)
    yield takeLatest('FETCH_TABS', fetchTabs)
    yield takeLatest('UPDATE_TABS',updateTabs)
    yield takeLatest('FETCH_TAB_TO_EDIT',editTab)
}