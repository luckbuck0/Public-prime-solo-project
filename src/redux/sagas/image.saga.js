
import {put,takeLatest} from "redux-saga/effects"
import axios from "axios"

function* fetchImages(){

    try{
        const results = yield axios.get('/api/images')
        console.log('this is results--->',results);
        yield put({type:'SET_IMAGES' ,payload: results.data})
    } catch (error) {
        console.log('error in saga get route ----->', error);
    }
}

export default function* imagesSaga(){
    yield takeLatest('FETCH_IMAGES',fetchImages)
}