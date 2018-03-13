import {USER_AUTHENTICATED} from './const';
export function changeCollapse(value) {
    return {
        type: USER_AUTHENTICATED,
        payload: value
    }
}