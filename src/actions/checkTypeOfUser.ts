import { USER_TYPE_GUEST, USER_TYPE_USER, USER_SIGN_UP_FAIL, USER_SIGN_UP_SUCCESS } from "../utils/constants/user";

export function getTypeOfUser() {
    return (dispatch: any) => {
        let user_type = localStorage.getItem("user_type");
        return ( user_type === "guest" || user_type === null || user_type === undefined )  ? dispatch(userTypeisGuest()) : dispatch(userTypeisUser());
    };
};

function userTypeisGuest() {
    return {
        type: USER_SIGN_UP_FAIL
    };
}

function userTypeisUser() {
    return {
        type: USER_SIGN_UP_SUCCESS
    };
}