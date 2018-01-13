import { SET_USER } from "../utils/constants/user";

export function setUser(user_type: any) {
    return{
        type: SET_USER,
        payload: user_type
    };
}