export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const SET_USER  = "SET_USER";

// export const USER_ROLE_ERROR = 'USER_ROLE_ERROR';
// export const USER_ROLE_SUCCESS = 'USER_ROLE_SUCCESS';

export const CODE_RECIEVED_SUCCESS = "CODE_RECIEVED_SUCCESS";
export const CODE_RECIEVED_FAIL = "CODE_RECIEVED_FAIL";



// authorization/get-code?phone=37258147073
const TEST_URL = "http://api.demo.join.chat/v1";
const PRODUCTION_URL = "https://api.internal.join.chat/v1";

export const AUTORIZATION_GET_CODE_PATH = `${TEST_URL}/authorization/get-code?phone=`;
export const AUTORIZATION_VERIFICATION_PATH = `${TEST_URL}/authorization/verification`;
export const SIGNUP_PATH = `${TEST_URL}/authorization/sign-up/`;



// export const REGISTER_PATH = 'http://carsaleclub.xyz:5000/v1/clients/client/register';
// export const REFRESH_PATH = 'http://carsaleclub.xyz:5000/v1/auth/refresh_token';
// export const USER_TYPE_PATH = 'http://carsaleclub.xyz:5000/v1/auth/actor';


// http://carsaleclub.xyz:5000
// export const REQUEST_PATH = 'http://local-cs.ru:5000/v1/auth/token';
// export const REGISTER_PATH = 'http://local-cs.ru:5000/v1/clients/client/register';
// export const LOGING_OUT = 'LOGING_OUT';
// export const LOGING_IN_TRUE = 'LOGING_IN_TRUE';