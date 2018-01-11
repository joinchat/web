import { AUTORIZATION_GET_CODE_PATH, AUTORIZATION_VERIFICATION_PATH } from "../constants/user";

// const TIMEGAP = 30000;
// let sessionEndTimer = null;
// let refreshErrorTimer = null;

// const setGuestToken = (data) => {
//     localStorage.setItem('firstVisit_token', data['data']['access_token']);
// };

// const returnGuestToken = () => {
//     return localStorage.getItem('firstVisit_token');
// };

// const returnRefreshToken = () => {
//     return localStorage.getItem('refresh_token');
// };

// const returnAccessToken = () => {
//     return localStorage.getItem('access_token');
// };


// const checkTokenExpiration = () => {
//     return localStorage.getItem('expires_in');
// };

// const deleteUsersToken = () =>{
//     localStorage.removeItem('access_token');
//     localStorage.removeItem('refresh_token');
//     localStorage.removeItem('expires_in');
// };

// const startRefreshTimeout = () => {
//     resetRefreshTimeout();
//     refreshErrorTimer = setTimeout(forceReload, TIMEGAP);
// };

// // если что-то пошло не так под капотом
// const forceReload = () => {
//     window.location.reload();
// };

// const resetRefreshTimeout = () => {
//     clearTimeout(refreshErrorTimer);
// };

// 1. Получаю значение expiration
// 2. Перевожу это значение в нужные секунды минус 30 секунд для запаса
// 3. Запускаю таймаут спустя который вызовется функция refreshAuthToken

// const refreshWhenExpired = () => {
//     let expirationTime = checkTokenExpiration();
//     expirationTime = expirationTime * 1000;
//     console.log(`START TIMER ${expirationTime}`);

//     if (!expirationTime) {
//         return false;
//     }

//     sessionEndTimer = setTimeout(refreshAuthToken, expirationTime);
// };


// 1. Запускаю функцию получения нового токена
// 2. Запускаю функцию
// 3. Запускаю функцию чистки таймера когда он протух
// 4. Запускаю функцию получения нового токена

// const refreshAuthToken = () => {
//     getNewUserToken();
//     startRefreshTimeout(); // запустить таймер
//     stopRefreshingWhenExpired();
//     refreshWhenExpired();
// };

// const makeFirstVisit = () => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         method: 'POST',
//         body: JSON.stringify({
//             'grant_type': 'password',
//             'client_id': 'web',
//         }),
//     };

//     fetch(REQUEST_PATH, config)
//         .then(function(res) {
//             if (res.status != 200) {
//                 res.json().then(function(data) {
//                     console.log('ERROR first visit');
//                     console.log(data);
//                 });
//             }
//             res.json()
//                 .then(function(data) {
//                     console.log('First visit done');
//                     return setGuestToken(data);
//                 });
//         })
//         .catch(function(err) {
//             console.log('Fetch Error :-S', err);
//             return false;
//         });
// };

// export const fetchLogingIn = (identity, password) => {
//     deleteUsersToken();
//     let token = returnGuestToken();
//     const CONFIG = {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`,
//         },
//         method: 'POST',
//         body: JSON.stringify({
//             'grant_type': 'password',
//             'client_id': 'web',
//             'username': identity,
//             'password': password,
//             // "username": 'user@carsale.club',
//             // "password": 'password'
//         }),
//     };

//     return fetch(REQUEST_PATH, CONFIG)
//         .then( (response) => Promise.all([response, response.json()]));
// };

// export const registerNewUser = (identity, password, name) => {
//     let token = returnGuestToken();
//     const config = {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`,
//             'x-fake': `visitor`,
//         },
//         method: 'POST',
//         body: JSON.stringify({
//             type: 'email',
//             identity: identity,
//             password: password,
//             name: name,
//         }),
//     };

//     fetch(REGISTER_PATH, config)
//         .then(function(res) {
//             if (res.status != 200) {
//                 res.json().then(function(data) {
//                     console.log('ERROR register');
//                     console.log(data);
//                 });
//             }

//             res.json().then(function(data) {
//                 console.log(data);
//             });
//         })
//         .catch(function(err) {
//             console.log('Fetch Error :-S', err);
//             return false;
//         });
// };

// export const getNewUserToken = () => {
//     let accessToken = returnAccessToken();
//     let refreshToken = returnRefreshToken();

//     let config = {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${accessToken}`,
//         },
//         method: 'POST',
//         body: JSON.stringify({
//             'grant_type': 'refresh_token',
//             'client_id': 'web',
//             'refresh_token': refreshToken,
//         }),
//     };

//     fetch(REFRESH_PATH, config)
//         .then(function(res) {
//             if (res.status != 200) {
//                 res.json().then(function(data) {
//                     console.log('ERROR');
//                     console.log(accessToken);
//                     console.log(refreshToken);
//                     console.log(data);
//                 });
//             } else {
//                 res.json().then(function(data) {
//                     console.log('SUCCES REFRESH');
//                     return setUserToken(data['data']);
//                 });
//             }
//         })
//         .catch(function(err) {
//             console.log('Fetch Error: ', err);
//             return false;
//         });
// };

// export const getUserRole = (token) => {
//     const CONFIG = {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`,
//         },
//         method: 'GET',
//     };
//     return fetch(USER_TYPE_PATH, CONFIG)
//         .then( (response) => Promise.all([response, response.json()]));
// };

// export const toMakeFirstVisit = () => {
//     if (returnGuestToken() == 'undefined')
//     {
//         return makeFirstVisit();
//     } else {
//         console.log("U have token");
//     }
// };

// export const stopRefreshingWhenExpired = () => {
//     clearInterval(sessionEndTimer);
// };

// export const refreshToken = () => {
//     refreshWhenExpired();
// };

// export const loginUserOut = () => {
//     deleteUsersToken();
// };

// export const setUserToken = (data) => {
//     localStorage.setItem('access_token', data['access_token']);
//     localStorage.setItem('expires_in', data['expires_in']);
//     localStorage.setItem('refresh_token', data['refresh_token']);
// };

// export const toExistAccessToken = () => {
//     return returnAccessToken();
// };




export const testTryToGetCode = (phone: string) => {
    let config = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "en",
        },
        method: "GET"
    };

    fetch(`${AUTORIZATION_GET_CODE_PATH}`+ `${phone}`, config)
        .then(function(res) {
            if (res.status !== 200) {
                res.json().then(function(data) {
                    console.log(data);
                    // console.log(accessToken);
                    // console.log(refreshToken);
                    // console.log(data);
                });
            } else {
                res.json().then(function(data) {
                    console.log(data);
                    // return setUserToken(data['data']);
            });
        }
    })
    .catch(function(err) {
        console.log("Fetch Error: ", err);
        return false;
    });
};



export const testTryToLogIn = (phone: string, code: string) => {
    let config = {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            "phone": phone,
            "code": code
        }),
    };

    fetch(AUTORIZATION_VERIFICATION_PATH, config)
        .then(function(res) {
            if (res.status !== 200) {
                res.json().then(function(data) {
                    console.log(data);
                    // console.log(accessToken);
                    // console.log(refreshToken);
                    // console.log(data);
                });
            } else {
                console.log(res.status)
                res.json().then(function(data) {
                    console.log(data);
                    // return setUserToken(data['data']);
            });
        }
    })
    .catch(function(err) {
        console.log("Fetch Error: ", err);
        return false;
    });
};