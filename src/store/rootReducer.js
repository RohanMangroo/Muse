import { combineReducers } from 'redux';
import { createStore } from 'redux';
import leftSectionReducer from './leftSectionReducer';

const rootReducer = combineReducers({
  leftSection: leftSectionReducer,
});
const store = createStore(rootReducer);

export default store;
