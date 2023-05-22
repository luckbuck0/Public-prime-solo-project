import {put,takeLatest} from "redux-saga/effects"
import axios from "axios"

function*  postWorkspace (action){
    try{
        const results = yield axios.post('/api/workspaces',action.payload)
        yield put({type:'SET_WORKSPACES'})
    } catch (error) {
        console.log('error in the post route in workspace.saga', error);
    }
}


export default function* workplacesSaga(){
    yield takeLatest('ADD_WORKSPACES',postWorkspace)
    yield takeLatest('FETCH_WORKSPACES')
}