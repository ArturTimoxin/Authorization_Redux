import { SET_TITLE_REG } from "../actions/PageActions";

const initialState = {
  titleReg: "Registration",
  btnReg: "Register",
};

export function regReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TITLE_REG:
      return { ...state, titleReg: action.payload };
    default:
      return state;
  }
}
