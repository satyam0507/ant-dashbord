import {CHANGE_SIDEBAR_COLLAPSED} from './const';
export function changeCollapse(value) {
    return {
        type: CHANGE_SIDEBAR_COLLAPSED,
        payload: value
    }
}