const INITIAL_VALUES = {
    isLogout: false
};

const authReducer = (state = INITIAL_VALUES, action) => {
    switch(action.type) {
        case 'LOGOUT_USER':
            return {...state};
        case 'IS_LOGOUT_CLICKED':
            return {...state, isLogout: action.payload};
        default:
            return state;
    }
};

export default authReducer;
