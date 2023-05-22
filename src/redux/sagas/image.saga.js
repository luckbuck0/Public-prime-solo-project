
import {put,takeLatest} from "redux-saga/effects"
import axios from "axios"

// saga function used to run a get route that will go to the server and 
// eventually the database to retrieve the image of the user.
function* fetchImages(){

    try{
        const results = yield axios.get('/api/images')
        console.log('this is results--->',results);
        yield put({type:'SET_IMAGES' ,payload: results.data})
    } catch (error) {
        console.log('error in saga get route ----->', error);
    }
}

// exporting all the routes we need to use for the images 
export default function* imagesSaga(){
    yield takeLatest('FETCH_IMAGES',fetchImages)
}