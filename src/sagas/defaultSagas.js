import { call, put} from 'redux-saga/effects';
import api from '../api';
import {USER_AUTHENTICATED} from '../actions/const';

export function* toggle_side_bar(action){
    yield put({type:'hahaha',payload:'hehehee'});
}
export function* authenticate_user(action){
    try{
        let resObj = yield call(api.auth);
        // yield put({type:USER_AUTHENTICATED,payload:resObj.auth});
        yield put({type:USER_AUTHENTICATED,payload:true});
    } catch(err){
        console.log(err);
    }
    
}
