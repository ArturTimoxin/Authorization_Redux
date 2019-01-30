import { SET_USER_DATA, SET_ERROR, LOGOUT } from "../actions/AuthActions";

const initialState = {
  user: localStorage.getItem("user_data"),
  isAuthorized: localStorage.getItem("user_data") ? true : false,
  error: "",
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, isAuthorized: true, user: action.payload };
    }
    case SET_ERROR: {
      return { ...state, error: action.payload };
    }

    case LOGOUT: {
      return {
        ...state,
        user: {},
        isAuthorized: false,
      };
    }

    default:
      return state;
  }
}
