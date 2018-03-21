import { appReducer } from "./app.reducer";
import createSagaMiddleware from "redux-saga";
import { combineReducers, createStore, applyMiddleware } from "redux";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({ appReducer });

export const appStore = createStore(reducer, applyMiddleware(sagaMiddleware));
