import { combineReducers } from 'redux';
import { createStore } from 'redux';
import currentPageReducer from './currentPageReducer';
import modelReducer from './modelReducer';

const rootReducer = combineReducers({
  currentPage: currentPageReducer,
  model: modelReducer,
});
const store = createStore(rootReducer);

export default store;
