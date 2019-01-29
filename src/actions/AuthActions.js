import API from "../services/api";

export const SET_USER_DATA = "SET_USER_DATA";
export const SET_ERROR = "SET_ERROR";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export function setUserData(user) {
  return {
    type: SET_USER_DATA,
    payload: user,
  };
}

export function setError(message) {
  return {
    type: SET_ERROR,
    payload: message,
  };
}

export function login(authData) {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
    });

    API("POST", "token/", authData)
      .then(
        res => {
          localStorage.setItem("user_hash", res.token.hash);
          localStorage.setItem("user_data", JSON.stringify(res.user));
          dispatch(setUserData(res.user));
          dispatch(setError(""));
        },
        rej => {
          console.log(rej.message);
          dispatch(setError("Don't connect with server"));
        },
      )
      .catch(error => {
        console.log(error.message);
        dispatch(setError("Invalid email or password"));
      });
  };
}

export function logout() {
  return dispatch => {
    localStorage.clear();
    dispatch(setUserData({}));
  };
}

// export function login(payload) {
//   // TODO
//   return {
//     type: LOGIN_REQUEST,
//   };
// }

// export function logout() {
//   return {
//     type: LOGOUT_SUCCESS,
//   };
// }
