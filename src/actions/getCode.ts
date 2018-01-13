import { CODE_RECIEVED_SUCCESS, CODE_RECIEVED_FAIL, FETCH_REQUEST, AUTORIZATION_GET_CODE_PATH } from "../utils/constants/user";
import { configForRequest } from "../utils/types/types";
// import { GetVerificationCode } from "./request";

export function fetchGetCode(phone: string) {
    return (dispatch: any) => {
        dispatch(codeRequest());
        let config: configForRequest = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Accept-Language": "en",
            },
            method: "GET"
        };

        return fetch(`${AUTORIZATION_GET_CODE_PATH}` + `${phone}`, config)
            .then((res: any) => {
            if (res.status === 200 ) {
                dispatch(fetchGetCodeSuccess());
            } else {
                dispatch(fetchGetCodeFail());
            }
        }).catch(function(error) {
            console.log(error);
        });
    };
}

function codeRequest() {
    return {
        type: FETCH_REQUEST,
    };
}

function fetchGetCodeSuccess() {
    return {
        type: CODE_RECIEVED_SUCCESS
    };
}

function fetchGetCodeFail() {
    return {
        type: CODE_RECIEVED_FAIL
    };
}