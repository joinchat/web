import { USER_SIGN_UP_SUCCESS, USER_SIGN_UP_FAIL, FETCH_REQUEST, SIGNUP_PATH} from "../utils/constants/user";
import { configForRequest } from "../utils/types/types";

export function fetchUserSignUp(username: string, password: string) {
    return (dispatch: any) => {
        dispatch(signUpRequest());
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

        return fetch(`${SIGNUP_PATH}` + `${guid}`, config)
            .then((res: any) => {
                if (res.status === 200 ) {
                    res.json().then(function(data: any) {
                        console.log(data);
                    });
                    localStorage.setItem("user_type", "user");
                dispatch(fetchSignUserUpSuccess());
                } else {
                    res.json().then(function(data: any) {
                        console.log(data);
                    });
                    localStorage.setItem("user_type", "guest");
                    dispatch(fetchSignUserUpFail());
                }
            }).catch(function(error) {
                console.log(error);
                dispatch(fetchSignUserUpFail());
            });
        };
}

function signUpRequest() {
    return {
        type: FETCH_REQUEST,
    };
}

function fetchSignUserUpSuccess() {
    return {
        type: USER_SIGN_UP_SUCCESS
    };
}

function fetchSignUserUpFail() {
    return {
        type: USER_SIGN_UP_FAIL
    };
}