import { combineReducers } from 'redux';
import { createStore } from 'redux';
import currentPageReducer from './currentPageReducer';

const rootReducer = combineReducers({
  currentPage: currentPageReducer,
});
const store = createStore(rootReducer);

export default store;
