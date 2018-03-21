import { combineReducers, createStore } from "redux";
import { appReducer } from "./app.reducer";

const reducer = combineReducers({ appReducer });

export const appStore = createStore(reducer);
