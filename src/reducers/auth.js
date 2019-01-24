import { SET_TITLE_AUTH } from "../actions/PageActions";

const initialState = {
  titleAuth: "Authorization",
  btnAuth: "Log in",
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TITLE_AUTH:
      return { ...state, titleAuth: action.payload };
    default:
      return state;
  }
}
