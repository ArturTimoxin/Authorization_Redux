import { SET_USER_DATA, SET_ERROR } from "../actions/AuthActions";

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
    default:
      return state;
  }
}
