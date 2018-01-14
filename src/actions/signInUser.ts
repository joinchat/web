import { USER_SIGN_IN_SUCCESS, USER_SIGN_IN_FAIL, FETCH_REQUEST, SIGNIN_PATH} from "../utils/constants/user";
import { configForRequest } from "../utils/types/types";

export function fetchUserSignIn(username: string, password: string) {
    return (dispatch: any) => {
        dispatch(signInRequest());
        let config: configForRequest = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                "username": username,
                "password": password
            }),
        };

        let guid = localStorage.getItem("guid");

        return fetch(`${SIGNIN_PATH}`, config)
            .then((res: any) => {
                if (res.status === 200 ) {
                    res.json().then(function(data: any) {
                        console.log(data);
                    });
                    dispatch(fetchSignUserInSuccess());
                    localStorage.setItem("user_type", "user");
                } else {
                    res.json().then(function(data: any) {
                        console.log(data);
                        localStorage.setItem("user_type", "guest");
                    });
                    dispatch(fetchSignUserInFail());
                }
            }).catch(function(error) {
                console.log(error);
                dispatch(fetchSignUserInFail());
            });
        };
}

function signInRequest() {
    return {
        type: FETCH_REQUEST,
    };
}

function fetchSignUserInSuccess() {
    return {
        type: USER_SIGN_IN_SUCCESS
    };
}

function fetchSignUserInFail() {
    return {
        type: USER_SIGN_IN_FAIL
    };
}