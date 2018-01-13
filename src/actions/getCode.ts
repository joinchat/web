import { CODE_RECIEVED_SUCCESS, CODE_RECIEVED_FAIL, FETCH_REQUEST } from "../utils/constants/user";
import { configForRequest } from "../utils/types/types";
import { GetVerificationCode } from "./request";

export function fetchGetCode(phone: string) {
    return (dispatch: any) => {
        dispatch(codeRequest());
        return GetVerificationCode(phone).then((res: any) => {
            if (res.status === 200 ) {
                dispatch(fetchGetCodeSuccess());
            } else {
                dispatch(fetchGetCodeFail());
            }
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