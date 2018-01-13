import {
    CODE_RECIEVED_SUCCESS, CODE_RECIEVED_FAIL, FETCH_REQUEST, SET_USER
} from "../utils/constants/user";

const initialState = {
    error: "",
    login: false,
    user_type: "guest",
    fetching: false,
    data: "",
    data_user: "",
    succesGetCode: false,
};

export default function userState(state: any = initialState, action: any) {
    switch (action.type) {
        case FETCH_REQUEST:
            return state;

        case SET_USER:
            return {...state, user_type: action.payload};

        case CODE_RECIEVED_SUCCESS:
            return {...state,
                error: '',
                fetching: false,
                user_type: 'User',
                login: true,
                data: action.payload,
                data_user: '',
            };

        case CODE_RECIEVED_FAIL:
            return {...state,
                error: action.payload,
                fetching: false,
                user_type: 'Guest',
                login: false,
                data: action.payload,
                data_user: '',
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