import {
    CODE_RECIEVED_SUCCESS, CODE_RECIEVED_FAIL, FETCH_REQUEST, SET_USER,
    CODE_VERIFY_SUCCESS, CODE_VERIFY_FAIL, USER_SIGN_UP_SUCCESS,
    USER_SIGN_UP_FAIL, USER_SIGN_IN_SUCCESS, USER_SIGN_IN_FAIL
} from "../utils/constants/user";

const initialState = {
    error: "",
    login: false,
    user_type: "guest",
    fetching: false,
    data: "",
    data_user: "",
    succesVerifyCode: false,
    type_of_input: "phone",
};

export default function userState(state: any = initialState, action: any) {
    switch (action.type) {
        case FETCH_REQUEST:
            return state;

        // case SET_USER:
        //     return {...state, user_type: action.payload};

        case CODE_RECIEVED_SUCCESS:
            return {...state,
                error: "",
                fetching: false,
                user_type: "guest",
                succesGetCode: true,
                type_of_input: "code"
            };

        case CODE_RECIEVED_FAIL:
            return {...state,
                error: "This phone is already used",
                fetching: false,
                user_type: "guest",
                succesGetCode: false,
            };

        case CODE_VERIFY_SUCCESS:
            return {...state,
                error: "",
                succesVerifyCode: true,
                type_of_input: "userName"
            };

        case CODE_VERIFY_FAIL:
            return {...state,
                error: "This code do not exist",
                succesVerifyCode: false,
            };

        case USER_SIGN_UP_SUCCESS:
            return {...state,
                login: true,
                user_type: "user",
        };

        case USER_SIGN_UP_FAIL:
            return {...state,
                login: false,
                user_type: "guest",
        };

        case USER_SIGN_IN_SUCCESS:
            return {...state,
                login: true,
                user_type: "user",
        };

        case USER_SIGN_IN_FAIL:
            return {...state,
                login: false,
                user_type: "guest",
        };
        
        // case LOGING_OUT:
        //     return Object.assign( {}, state, {
        //         error: '',
        //         fetching: false,
        //         user_type: 'Guest',
        //         login: false,
        //         data: action.payload,
        //         data_user: '',
        //     });

        // case LOGING_IN_TRUE:
        //     return Object.assign( {}, state, {
        //         error: '',
        //         fetching: false,
        //         user_type: 'User',
        //         login: true,
        //         data: action.payload,
        //         data_user: '',
        //     });

        // case USER_ROLE_SUCCESS:
        //     return Object.assign( {}, state, {
        //         data_user: action.payload,
        //     });

        // case USER_ROLE_ERROR:
        //     return Object.assign( {}, state, {
        //         data_user: action.payload,
        //     });

        default:
            return state;
    }
}