import { AUTORIZATION_GET_CODE_PATH, CODE_RECIEVED_SUCCESS, CODE_RECIEVED_FAIL } from "../utils/constants/user";
import { configForRequest } from "../utils/types/types";

export const GetVerificationCode = (phone: string) => {
    let config: configForRequest = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "en",
        },
        method: "GET"
    };

    fetch(`${AUTORIZATION_GET_CODE_PATH}` + `${phone}`, config)
            .then(function(res) {
                if (res.status === 200) {
                    return true;
                }
                return false;
            })
            .catch(function(error) {
                console.log(error);
            });
};