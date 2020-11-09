import {CLEAR_ASYNC_STORAGE, SAVE_SESSION_ID} from "../../shared/Storage";

// export const logoutUser = (navigation) => {
//     return async (dispatch) => {
//
//         SAVE_SESSION_ID('');
//         navigation.navigate('SignIn');
//
//         dispatch({ type: 'LOGOUT_USER', payload: null });
//     };
// };

export const logoutUser = (data) => {
    CLEAR_ASYNC_STORAGE();

    return {
        type: 'IS_LOGOUT_CLICKED',
        payload: data
    };
};