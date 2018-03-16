import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  // Here goes the stores
});
export const appStore = createStore(reducer);
