import { put, takeLatest } from "redux-saga/effects"
import axios from "axios"

//-----------------------------POST WORKSPACE SAGA--------------------------------------
function* postWorkspace(action) {
    try {
        const results = yield axios.post('/api/workspaces', action.payload)
        yield put({ type: 'FETCH_WORKSPACES' })
    } catch (error) {
        console.log('error in the post route in workspace.saga', error);
    }
}


//-----------------------------FETCH WORKSPACE SAGA--------------------------------------
function* fetchWorkspaces() {

    try {
        const results = yield axios.get('/api/workspaces/:id')
        console.log('this is the results of workspace get route--->', results.data);
        yield put({ type: 'SET_WORKSPACES', payload: results.data })
    } catch (error) {
        console.log('error in the get route in saga workspaces--->', error);
    }
}

//-----------------------------UPDATE WORKSPACESAGA--------------------------------------

function* updateWorkSpace(action) {
    try {
        console.log('this is action payload in workspaces ', action.payload);
        const response = yield axios.put('/api/workspaces/:id', action.payload)
        yield put({ type: 'FETCH_WORKSPACES' })
    } catch (error) {
        console.log('thier is a error in the updateworkplace function in workplace saga--->', error);
    }
}

//-----------------------------DELETE WORKSPACE SAGA--------------------------------------

function* deleteWorkSpace(action) {
    try {
        console.log('this is action.payload id', action.payload);
        yield axios.delete(`/api/workspaces/${action.payload.id}`,)
        yield put({ type: 'FETCH_WORKSPACES' })
    } catch (error) {
        console.log('error in the delete route in workpspace', error);
    }
}

function* editWorkspace (action) {

  try { const response = yield axios.get(`api/workspaces/get/${action.payload}`)
    console.log('this is action payload in edit-->', action.payload);
    const workplaceToEdit = response.data
    yield put({type: 'SET_EDITED_WORKSPACES', payload:workplaceToEdit})
} catch (error) {
    console.log('error in edit workspace in saga-->',error);
}
}

export default function* workplacesSaga() {
    yield takeLatest('ADD_WORKSPACES', postWorkspace)
    yield takeLatest('FETCH_WORKSPACES', fetchWorkspaces)
    yield takeLatest('UPDATE_WORKPLACE', updateWorkSpace)
    yield takeLatest('DELETE_WORKSPACE', deleteWorkSpace)
    yield takeLatest('FETCH_WORKSPACE_TO_EDIT', editWorkspace)
}