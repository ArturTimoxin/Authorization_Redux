import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/root-reducer";
import { ping } from "./enhancers/ping"; // <-- подключаем наш enhancer
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk, ping));
