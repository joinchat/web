// import { LOGING_OUT, LOGING_IN_TRUE, USER_ROLE_SUCCESS, USER_ROLE_ERROR } from '../constants/user';
// import { toExistAccessToken, getUserRole, refreshToken } from './request';

// export function checkUserStateInFirstInDidMount() {
//     return (dispatch) => {
//         if (toExistAccessToken()) {
//             dispatch(userLoginIn());
//             getUserRole(toExistAccessToken()).then(([response, json]) => {
//                 if (response.status == 200 && json['success']) {
//                     dispatch(getUserRoleSuccess(json['data']));
//                     refreshToken();
//                 } else {
//                     dispatch(getUserRoleError(json['data']));
//                 }
//             });
//         } else {
//             dispatch(loginOut());
//         }
//     };
// };

// function userLoginIn() {
//     return {
//         type: LOGING_IN_TRUE,
//     };
// }

// function loginOut() {
//     return {
//         type: LOGING_OUT,
//     };
// }

// function getUserRoleSuccess(data) {
//     return {
//         type: USER_ROLE_SUCCESS,
//         payload: data,
//     };
// }

// function getUserRoleError(data) {
//     return {
//         type: USER_ROLE_ERROR,
//         payload: data,
//     };
// }