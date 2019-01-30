import API from "../services/api";
import { history } from "../store/configureStore";
export const SET_USER_DATA = "SET_USER_DATA";
export const SET_ERROR = "SET_ERROR";
export const LOGOUT = "LOGOUT";

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
    API("POST", "token/", authData)
      .then(
        res => {
          localStorage.setItem("user_hash", res.token.hash);
          localStorage.setItem("user_data", JSON.stringify(res.user));
          dispatch(setUserData(res.user));
          dispatch(setError(""));
          history.push("/");
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
    dispatch({
      type: LOGOUT,
    });
  };
}
