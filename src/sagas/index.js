import { takeLatest,takeEvery } from "redux-saga/effects";
import {CHANGE_SIDEBAR_COLLAPSED} from '../actions/const';
import {AUTHENTICATE_USER} from '../actions/const';
import {toggle_side_bar,authenticate_user,user_loged_out} from './defaultSagas';

export default function* sagas(){
    yield takeEvery(CHANGE_SIDEBAR_COLLAPSED,toggle_side_bar);
    yield takeLatest(AUTHENTICATE_USER,authenticate_user);
    yield takeLatest('USER_LOGED_OUT',user_loged_out);
}