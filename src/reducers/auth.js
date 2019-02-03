import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../constants/constants";

const initialState = {
  user: {},
  isAuthorized: localStorage.getItem("user_hash") ? true : false,
  error: "",
  loading: false,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, loading: true };
    }
    case LOGIN_SUCCESS: {
      return { ...state, isAuthorized: true, user: action.payload, loading: false };
    }
    case LOGIN_ERROR: {
      return { ...state, error: action.payload, loading: false };
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
