import { CODE_VERIFY_SUCCESS, CODE_VERIFY_FAIL, FETCH_REQUEST, AUTORIZATION_VERIFICATION_PATH} from "../utils/constants/user";
import { configForRequest } from "../utils/types/types";

export function fetchvVerifyCode(phone: string, code: string) {
    return (dispatch: any) => {
        dispatch(verifyRequest());
        let config: configForRequest = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                "phone": phone,
                "code": code
            }),
        };

        return fetch(AUTORIZATION_VERIFICATION_PATH, config)
            .then((res: any) => {
                if (res.status === 200 ) {
                    res.json().then(function(data: any) {
                        console.log(data["guid"]);
                        localStorage.setItem("guid", data["guid"]);
                    });
                    dispatch(fetchVerifyCodeSuccess());
                } else {
                    res.json().then(function(data: any) {
                        console.log(data);
                    });
                    dispatch(fetchVerifyCodeFail());
                }
            }).catch(function(error) {
                dispatch(fetchVerifyCodeFail());
            });
    };
}

function verifyRequest() {
    return {
        type: FETCH_REQUEST,
    };
}

function fetchVerifyCodeSuccess() {
    return {
        type: CODE_VERIFY_SUCCESS
    };
}

function fetchVerifyCodeFail() {
    return {
        type: CODE_VERIFY_FAIL
    };
}