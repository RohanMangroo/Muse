import { combineReducers } from 'redux';
import { createStore } from 'redux';
import leftSectionReducer from './leftSectionReducer';
import currentPageReducer from './currentPageReducer';

const rootReducer = combineReducers({
  leftSection: leftSectionReducer,
  currentPage: currentPageReducer,
});
const store = createStore(rootReducer);

export default store;
