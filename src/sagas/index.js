import { takeLatest,takeEvery } from "redux-saga/effects";
import {CHANGE_SIDEBAR_COLLAPSED} from '../actions/const';
import {toggle_side_bar} from './defaultSagas';

export default function* sagas(){
    yield takeEvery(CHANGE_SIDEBAR_COLLAPSED,toggle_side_bar);
}