import { SET_USER, FETCH_REQUEST, FETCH_SUCCESS } from "../utils/constants/user";

export function setUser(user_type: any) {

    return (dispatch: any) => {
        dispatch({
            type: FETCH_REQUEST
        });

        setTimeout(() => {
            dispatch({
                type: FETCH_SUCCESS
            });
        }, 3000);
    };
}