import {
  SET_USER_DATA,
  SET_ERROR,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../actions/AuthActions";

const initialState = {
  user: {},
  error: "",
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, user: action.payload };
    }
    case SET_ERROR: {
      return { ...state, error: action.payload };
    }
    case LOGIN_REQUEST:
      // TODO
      return {};

    case LOGIN_SUCCESS:
      // TODO
      return {};

    case LOGIN_FAIL:
      // TODO
      return {};

    case LOGOUT_SUCCESS:
      // TODO
      return {};
    default:
      return state;
  }
}
