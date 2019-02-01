import { SET_USER_DATA, SET_ERROR, LOGOUT, TOGGLE_LOADING } from "../actions/AuthActions";

const initialState = {
  user: localStorage.getItem("user_data") ? JSON.parse(localStorage.getItem("user_data")) : {},
  isAuthorized: localStorage.getItem("user_data") ? true : false,
  error: "",
  loading: false,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, isAuthorized: true, user: action.payload, loading: false };
    }
    case SET_ERROR: {
      return { ...state, error: action.payload };
    }
    case TOGGLE_LOADING: {
      return { ...state, loading: !state.loading };
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
