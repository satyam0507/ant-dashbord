import { call, put} from 'redux-saga/effects';
import api from '../api';
import {USER_AUTHENTICATED} from '../actions/const';

export function* toggle_side_bar(action){
    yield put({type:'hahaha',payload:'hehehee'});
}
export function* authenticate_user(action){
    try{
        let resObj = yield call(api.auth);
        yield put({type:USER_AUTHENTICATED,payload:resObj.auth});
    } catch(err){
        console.log(err);
        yield put({type:USER_AUTHENTICATED,payload:{
            isAuthenticated:true,
            isAuthCallBack:true
        }});
    }
    
}

export function* user_loged_out(action){
    yield put({type:'TOGGEL_AUTH',payload:false});
}
