import {USER_AUTHENTICATED} from '../actions/const';
const _default = {
    "isAuthenticated": false,
    "isAuthCallBack":false
};
const sideBar = (state = _default, action) => {
    switch (action.type) {
        case USER_AUTHENTICATED:
            state = { ...state, 
                isAuthenticated: action.payload.isAuthenticated,isAuthCallBack:action.payload.isAuthCallBack
            }
            break;
        default:
    }
    return state;
};

export default sideBar;