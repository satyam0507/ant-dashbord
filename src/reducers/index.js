import { combineReducers } from "redux";
import sideBar from './sideBar';
import auth from './auth';

const reducer = combineReducers({
    sideBar:sideBar,
    auth:auth
});

export default reducer;