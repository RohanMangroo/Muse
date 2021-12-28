import { combineReducers } from 'redux';
import { createStore } from 'redux';
import currentPageReducer from './currentPageReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  currentPage: currentPageReducer,
  modal: modalReducer,
});
const store = createStore(rootReducer);

export default store;
