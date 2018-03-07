const _default = {
    collapsed: false
};
const sideBar = (state = _default, action) => {
    switch (action.type) {
        case 'CHANGE_SIDEBAR_COLLAPSED':
            state = { ...state,
                collapsed: action.payload
            }
            break;
    }
    return state;
};

export default sideBar;