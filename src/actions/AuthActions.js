import API from "../services/api";
import { history } from "../store/configureStore";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../constants/constants";

export function getAuthorizedUserData(id) {
  return dispatch =>
    API("GET", `user/${id}`)
      .then(res => {
        res.json().then(res => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.user,
          });
        });
      })
      .catch(error => {
        console.log(error.message);
      });
}

export function login(authData) {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
    });
    API("POST", "token/", authData)
      .then(res => {
        switch (res.status) {
          case 401: {
            dispatch({ type: LOGIN_ERROR, payload: "Invalid login or password" });
            break;
          }
          default: {
            res.json().then(res => {
              localStorage.setItem("user_hash", res.token.hash);
              localStorage.setItem("user_id", res.user.id);
              dispatch({
                type: LOGIN_SUCCESS,
                payload: res.user,
              });
              history.push("/");
            });
          }
        }
      })
      .catch(error => {
        console.log(error.message);
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
