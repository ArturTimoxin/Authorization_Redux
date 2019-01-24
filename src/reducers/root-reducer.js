import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { regReducer } from "./reg";

export const rootReducer = combineReducers({
  auth: authReducer,
  reg: regReducer,
});
