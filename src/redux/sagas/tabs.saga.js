import { put, takeLatest } from "redux-saga/effects"
import axios from "axios"


let currentWorkspaceId = []

//-----------------------------POST TABS SAGA--------------------------------------

function* postTabs(action) {
    let id = {
        id:action.payload.id}
        console.log('this is the id',id);
        console.log('this is the action.payload-->',action.payload);
    try {
        const results = yield axios.post(`/api/tabs`,action.payload)
        yield put({ type: 'FETCH_TABS', payload: id})
    } catch (error) {
        console.log('error in the tabs saga post route', error);
    }
}


//-----------------------------GET TABS SAGA--------------------------------------

function* fetchTabs(action) {

    console.log('this is id in fetchTabs',action.payload.id);

    try {
        const results = yield axios.get(`/api/tabs/${action.payload.id}`)
        console.log('this is action.payload.workSpaceId',action.payload);
        console.log('this is the results of tabs get route--->', results.data);
        yield put({ type: 'SET_TABS', payload: results.data })
        console.log('this is result data in fetch data',results.data);
    } catch (error) {
        console.log('error in the get route in tabs saga', error);
    }

}

//-----------------------------UPDATE TABS SAGA--------------------------------------

function* updateTabs ( action ) {
   

    console.log('this is action payload in saga update tabs function--->',action.payload);
    try {
    const response = yield axios.put('/api/tabs',action.payload)
    yield put({type:'FETCH_NEW_TABS',payload:action.payload.workspace_id})
    } catch (error) {
        console.log('error in update tabs in tabs.saga file--->',error);
    }
} 


function* editTab ( action ) {
    const tabIdToEdit =action.payload
    
    console.log('this is action payload in saga edit tabs function--->',action.payload);
    try {
    const response = yield axios.get(`/api/get/${action.payload}`,)
    const tabToEdit = response.data
    console.log('this is the tabtoedit in edit tab function in saga-->',tabToEdit);
    yield put({type:'SET_EDITED_TABS',payload:tabToEdit})
    } catch (error) {
        console.log('error in edit tabs in tabs.saga file--->',error);
    }
} 

function* deleteTabs (action ) {
console.log('this is the tab id--->',action.payload.id,action.payload.workSpaceId);

    try {
        yield axios.delete(`/api/tabs/${action.payload.id}`)
        yield put ({type:'FETCH_NEW_TABS',payload:action.payload.workSpaceId})
    } catch (error) {
        console.log('their is a error in the delete route in tabs',error);
    }
}

function* FetchNewTabs (action) {

    console.log('this is id in action.payload in fetch new tabs--->',action.payload);

    try {
        const results = yield axios.get(`/api/tabs/${action.payload}`)
        console.log('this is action.payload.workSpaceId',action.payload);
        console.log('this is the results of tabs get route in new fetch--->', results.data);
        yield put({ type: 'SET_TABS', payload: results.data })
        console.log('this is result data in fetch data',results.data);
    } catch (error) {
        console.log('error in the get route in tabs saga', error);
    }
}


// used to listen to all the dispatches on client side tabs.jsx file and run corresponding
// functions
export default function* tabsSaga() {
    yield takeLatest('POST_TABS', postTabs)
    yield takeLatest('FETCH_TABS', fetchTabs)
    yield takeLatest('UPDATE_TABS',updateTabs)
    yield takeLatest('FETCH_TAB_TO_EDIT',editTab)
    yield takeLatest('DELETE_TABS',deleteTabs)
    yield takeLatest('FETCH_NEW_TABS', FetchNewTabs)
}