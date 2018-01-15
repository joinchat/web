import { USER_SIGN_UP_FAIL } from "../utils/constants/user";

export function logOutUser() {
    return (dispatch: any) => {
        localStorage.setItem("user_type", "guest");
        return dispatch(userTypeisGuest());
    };
};

function userTypeisGuest() {
    return {
        type: USER_SIGN_UP_FAIL
    };
}