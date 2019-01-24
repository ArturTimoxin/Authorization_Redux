export const SET_TITLE_AUTH = "SET_TITLE_AUTH";
export const SET_TITLE_REG = "SET_TITLE_REG";

export function setTitleAuth(title) {
  return {
    type: SET_TITLE_AUTH,
    payload: title,
  };
}

export function setTitleReg(title) {
  return {
    type: SET_TITLE_REG,
    payload: title,
  };
}
