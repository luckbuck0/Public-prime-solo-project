import {put,takeLatest} from "redux-saga/effects"
import axios from "axios"

function*  postWorkspace (action){
    try{
        const results = yield axios.post('/api/workspaces',action.payload)
        yield put({type:'FETCH_WORKSPACES'})
    } catch (error) {
        console.log('error in the post route in workspace.saga', error);
    }
}

function* fetchWorkspaces() {

    try{
        const results = yield axios.get('/api/workspaces')
        console.log('this is the results of workspace get route--->',results.rows);
        yield put ({type:'SET_WORKSPACES',payload:results.data})
    } catch (error) {
        console.log('error in the get route in saga workspaces--->', error);
    }
}

export default function* workplacesSaga(){
    yield takeLatest('ADD_WORKSPACES',postWorkspace)
    yield takeLatest('FETCH_WORKSPACES', fetchWorkspaces)
}