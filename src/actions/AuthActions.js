export const SET_TITLE_AUTH = "SET_TITLE_AUTH";

export function setTitleAuth(title) {
  return {
    type: SET_TITLE_AUTH,
    payload: title,
  };
}
